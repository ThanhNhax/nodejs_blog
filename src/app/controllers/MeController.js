const Course = require("../models/Course");
const {
    mongooseToPbject,
    mutipleMongooseToPbject,
} = require("../../util/mongoose");

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render("./me/storedCourses", {
                    courses: mutipleMongooseToPbject(courses),
                })
            )
            .catch(next);
    }
}

module.exports = new MeController();
