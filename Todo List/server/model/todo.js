const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
    }
})

const todo = mongoose.model('todos', TodoSchema)
module.exports = todo