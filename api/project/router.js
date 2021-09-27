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
        const newProject = await Project.create(req.body)
        if (newProject.project_completed === 1 || newProject.project_completed === true){
            newProject.project_completed = true
        } else {
            newProject.project_completed = false
        }
        res.json(newProject)
    } catch (error) {
        next (error)
    }
})

module.exports = router