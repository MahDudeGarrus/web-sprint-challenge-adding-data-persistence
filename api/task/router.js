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

router.post('/', async (req, res, next) => {
    try{
        const tasks = await Task.create(req.body)
        res.json(tasks)
    } catch (error) {
        next (error)
    }
})

module.exports = router
