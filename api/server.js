const express = require('express')

//ROUTERS IMPORTED
const ProjectRouter = require('./project/router.js')
const ResourceRouter = require('./resource/router.js')
const TaskRouter = require('./task/router.js')

const server = express()

server.use(express.json())

//SET UP ROUTERS WITH USE METHOD
server.use('/api/projects', ProjectRouter)
server.use('/api/resources', ResourceRouter)
server.use('/api/tasks', TaskRouter)

//CATCH ALL
server.use("*", (req, res, next) => {
    next({ status: 404, message: 'not found'})
})

server.use((err, req, res, next) => { // eslint disable line
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server
