const express = require('express')
// WILL NEED ROUTERS LATER

const server = express()

server.use(express.json())

//SET UP ROUTERS WITH USE METHOD

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
