const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const router = require("./routes");
const usePassport = require("./config/passport"); 
const bcrypt = require("bcryptjs");

const app = express();
const PORT = 3000;

app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");
app.use(
  session({
    secret: "ThisIsMySecret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

usePassport(app); 
app.use(router);

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
