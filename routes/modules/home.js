const express = require("express");
const router = express.Router();

const db = require("../../models");
const Todo = db.Todo;
const User = db.User;

router.get("/", (req, res) => {
  User.findByPk(req.user.id).then((user) => {
    if (!user) return console.log("user not found");

    return Todo.findAll({
      raw: true,
      nest: true,
      where: { UserId: req.user.id },
    })
      .then((todos) => {
        return res.render("index", { todos: todos });
      })
      .catch((error) => console.error(error));
  });
});

module.exports = router;
