const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todo = require('./model/todo');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/test")
app.post('/add', (req, res) => {
    const task = req.body.task;
    todo.create({
        task: task
    }).then(result => res.json(result))
        .catch(error => res.json(error))
})
app.get('/get', (req, res) => {
    todo.find()
        .then(result => res.json(result))
        .catch(error => res.json(error))
})
app.listen(3001, () => {
    console.log('listening on port 3001');
})