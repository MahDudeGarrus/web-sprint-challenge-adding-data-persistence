// PROJECT ROUTER!!
const express = require('express')

const Project = require('./model.js')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.getAll()
        res.json(projects)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const projects = await Project.create(req.body)
        res.json(projects)
    } catch (error) {
        next (error)
    }
})

module.exports = router