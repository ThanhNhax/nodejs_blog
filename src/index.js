const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { create } = require("express-handlebars");

const app = express();
const port = 3000;
const hbs = create({
  /**
   * config
   *
   */
  extname: ".hbs",
});

// cau hinh static
app.use(express.static(path.join(__dirname, "public")));
// HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});