const mongoose = require('mongoose');

const video = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'The title field is required!'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'The description field is required!'],
        trim: true
    },
    link: {
        type: String,
        required: [true, 'The link field is required!'],
        trim: true
    },
    tags: {
        type: Array,
        required: [true, 'The tags field is required!'],
        trim: true
    },
    classname: {
        type: String,
        required: [true, 'The class field is required!'],
        trim: true
    },
    subject: {
        type: String,
        required: [true, 'The subject field is required!'],
        trim: true
    },
    lessonname: {
        type: String,
        required: [true, 'The lessonname field is required!'],
        trim: true
    },
    id: {
        type: String,
        required: [true, 'The id field is required!'],
        trim: true
    }
}, { minimize: false });

module.exports = Video = mongoose.model('video', video);