const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { create } = require("express-handlebars");
const route = require("./routes");
const db = require("./config/db");
const methodOverride = require("method-override");

//Connect  to DB

db.connect();

const app = express();
const port = 3000;
const hbs = create({
    /**
     * config
     *
     */
    helpers: {
        index: (a, b) => a + b,
    },
    extname: ".hbs",
});

// cau hinh static
app.use(express.static(path.join(__dirname, "public")));
// HTTP logger
// app.use(morgan("combined"));

//Template engine
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// thêm middleware để xử lý phần truyền from . POST lên server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
