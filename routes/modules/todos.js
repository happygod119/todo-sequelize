const express = require("express");
const router = express.Router();

const db = require("../../models");
const User = db.User;
const Todo = db.Todo;

router.get("/:id/edit", (req, res) => {
  const id = req.params.id;
  return Todo.findByPk(id)
    .then((todo) => res.render("detail", { todo: todo.toJSON() }))
    .catch((error) => console.log(error));
});

module.exports = router;
