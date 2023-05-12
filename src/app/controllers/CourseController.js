const Course = require("../models/Course");
const { mongooseToPbject } = require("../../util/mongoose");

class CourseController {
    //[GET]  courses/:slug
    show(req, res, next) {
        Course.findOne({
            slug: req.params.slug,
        })
            .then((course) => {
                res.render("courses/show", {
                    course: mongooseToPbject(course),
                });
            })
            .catch(next);
    }
    // [Get] /courses/id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => {
                res.render("courses/edit", {
                    course: mongooseToPbject(course),
                });
            })
            .catch(next);
    }
    //[GET]  courses/:create
    create(req, res, next) {
        res.render("courses/create");
    } //[GET]  courses/:create
    store(req, res, next) {
        // xử lý dữ liệu tại đây
        // res.json(req.body);
        const fromData = req.body;
        fromData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;

        const course = new Course(fromData);
        res.send(course);
        course.save();
        //     .then(() => res.redirect('/'))
        //     .catch((err) => {});
    }
    // [PUT] /course/id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(res.redirect("/me/stored/courses"))
            .catch(next);
    } // [DELETE] /course/id
    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(res.redirect("/me/stored/courses"))
            .catch(next);
    }
}

module.exports = new CourseController();
