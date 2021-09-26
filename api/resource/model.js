// RESOURCE MODEL!!
const db = require('../../data/dbConfig.js')

function getAll(){
    return db('resources')
    .select('resources.*')
}

function create(resource){
    return db('resources')
    .insert(resource)
    .then(([resource_id]) => {
        return db('resources').where('resource_id', resource_id).first()
    })
}

module.exports = {
    getAll,
    create
}