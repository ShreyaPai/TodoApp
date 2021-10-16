const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        required: true,
    }
});

module.exports = mongoose.model('CompltedToDo', todoSchema);