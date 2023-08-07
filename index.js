import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var tasks = [];
var works = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs", {task_to_do: tasks});
});

app.get("/work", (req, res) => {
    res.render("work.ejs", {work_to_do: works});
});

app.post("/submit", (req, res) => {
    var task = req.body.task;
    tasks.push(task);
    res.render("index.ejs", {task_to_do: tasks});
});

app.post("/submit_work", (req, res) => {
    var work = req.body.work;
    works.push(work);
    res.render("work.ejs", {work_to_do: works})
});

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`)
});