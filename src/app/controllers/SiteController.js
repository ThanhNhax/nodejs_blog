const { mutipleMongooseToPbject } = require('../../util/mongoose');
const Course = require('../models/Course');

class SiteController {
    index(req, res, next) {
        // nhận database bằn promise
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToPbject(courses),
                });
            })
            .catch(next);
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
