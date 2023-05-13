const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-updater");
const mongooseDelete = require("mongoose-delete");
const Course = new Schema(
    {
        name: { type: String, require: true },
        description: { type: String },
        image: { type: String },
        videoId: { type: String },
        level: { type: String, require: true },
        slug: { type: String, slug: "name", unique: true }, // unique : tạo ra cái slug này độc nhất
    },
    {
        timestamps: true,
    }
);

//Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: "all", deletedAt: true });

module.exports = mongoose.model("Course", Course);
