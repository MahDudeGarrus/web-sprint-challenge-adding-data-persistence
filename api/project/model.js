//PROJECT MODEL!!

const db = require('../../data/dbConfig.js')

function getAll(){
    return db('projects')
    .select('projects.*')
}

function create(project){
    return db('projects')
    .insert(project)
    .then(([project_id]) => {
        return db('projects').where('project_id', project_id).first()
    })
}

module.exports = {
    getAll,
    create
}