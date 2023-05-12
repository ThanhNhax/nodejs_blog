class RepostController {
    index(req, res) {
        res.render('repost');
    }
}

module.exports = new RepostController();
