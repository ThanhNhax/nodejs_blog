const newsRouter = require("./news");
const siteRouter = require("./site");
const repostRouter = require("./repost");
const courseRouter = require("./courses");
const meRouter = require("./me");
function route(app) {
    app.use("/courses", courseRouter);
    app.use("/repost", repostRouter);
    app.use("/me", meRouter);
    app.use("/news", newsRouter);
    app.use("/", siteRouter);
}

module.exports = route;
