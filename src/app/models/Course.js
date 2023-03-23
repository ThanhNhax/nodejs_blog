const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    id: ObjectId,
    name: { type: String, max: 255, default: 'haha', minLength: 1 },
    description: { type: String, max: 600 },
    image: { type: String, max: 600 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
