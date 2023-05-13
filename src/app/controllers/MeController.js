const Course = require("../models/Course");
const {
    mongooseToPbject,
    mutipleMongooseToPbject,
} = require("../../util/mongoose");

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deleteCount]) => {
                res.render("./me/storedCourses", {
                    deleteCount,
                    courses: mutipleMongooseToPbject(courses),
                });
            })
            .catch(next);
    }
    // [GET] /me/stored/trash
    storedTrash(req, res, next) {
        Course.findDeleted()
            .then((courses) =>
                res.render("./me/storedTrash", {
                    courses: mutipleMongooseToPbject(courses),
                })
            )
            .catch(next);
    }
}

module.exports = new MeController();
