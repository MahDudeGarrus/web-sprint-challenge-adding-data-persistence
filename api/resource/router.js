// RESOURCES ROUTER!!

const express = require('express')

const Resource = require('./model.js')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.getAll()
        res.json(resources)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const resources = await Resource.create(req.body)
        res.json(resources)
    } catch (error) {
        next (error)
    }
})

module.exports = router