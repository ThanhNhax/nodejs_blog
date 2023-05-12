module.exports = {
    mutipleMongooseToPbject: function (mongoose) {
        return mongoose.map((mongoose) => mongoose.toObject());
    },
    mongooseToPbject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
