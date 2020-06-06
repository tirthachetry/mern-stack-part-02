const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    todo: {
        type: String
    },
    status: {
        type: String
    },
    category: {
        type: String
    }
});

module.exports = mongoose.model('Todo', Todo);