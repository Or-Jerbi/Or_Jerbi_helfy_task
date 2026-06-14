const express = require("express");
const router = express.Router();
const validateTasks = require("../middleware/validateTasks");

let tasks = []

router.get("/", (req, res) => {
  res.status(200).json(tasks);
});

router.post("/", validateTasks, (req, res) => {
    const { title, description, priority } = req.body;
    const newTask = {
      id: tasks.length,
      title,
      description,
      completed: false,
      createdAt: new Date(),
      priority
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

router.put("/:id", validateTasks,(req, res) => {
    const id  = req.params.id;
    const task = tasks.find((t) => t.id == id);

    if (!task) {
        return res.status(404).json({ msg: "task not found" });
    }
    const { title, description, completed, priority } = req.body;

    task.title = title;
    task.description = description;
    task.completed = completed;
    task.priority = priority;

    // const { title, description, completed, priority } = req.body;
    // if (title) 
    //     {task.title = title;}
    // if (description) 
    //     {task.description = description;}
    // if (typeof completed === "boolean") 
    //     {task.completed = completed;}
    // if (priority) 
    //     {task.priority = priority;}

    res.status(200).json(task);
});

router.delete("/:id", (req, res) => {
    const id  = req.params.id;
    const taskIndex = tasks.findIndex((t) => t.id == id);

    if (taskIndex === -1) {
        return res.status(404).json({ msg: "task not found" });
    }

    const deletedTask = tasks.splice(taskIndex, 1);
    res.status(200).json(deletedTask[0]);
});

router.patch("/:id/toggle", (req, res) => {
    const id  = req.params.id;
    const task = tasks.find((t) => t.id == id);

    if (!task) {
        return res.status(404).json({ msg: "task not found" });
    }

    task.completed = !task.completed;
    res.status(200).json(task);
});

module.exports = router;