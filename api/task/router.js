// TASKS ROUTER!!

const express = require('express')

const Task = require('./model.js')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.getAll()
        res.json(tasks)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (err, req, res, next) => {
    try{
        const newTask = await Task.create(req.body)
        if (newTask.task_completed === 1 || newTask.task_completed === true){
            newTask.task_completed = true
        } else {
            newTask.task_completed = false
        }
        res.json(newTask)
    } catch (error) {
        next (error)
    }
})

module.exports = router
