const newsRouter = require('./news');
const siteRouter = require('./site');
const repostRouter = require('./repost');
function route(app) {
    app.use('/repost', repostRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
