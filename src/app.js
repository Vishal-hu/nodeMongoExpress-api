const express = require('express');
const app = express();
require("./db/conn");
const Student = require("./models/students");

const port = process.env.PORT || 3000;
const validator = require('validator');

app.get("/", (req, res) => {
    res.send("Listening to my Friend");
})

// create a new student
app.use(express.json())

app.post("/students", (req, res) => {
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })

    // console.log(req.body);
    // res.send("hello");
})

app.listen(port, () => {
    console.log(`${port} listening`);
})