// TASK MODEL!!

const db = require('../../data/dbConfig.js')

function getAll(){
    return db('tasks')
    .select('tasks.*')
}

function create(task){
    return db('tasks')
    .insert(task)
    .then(([task_id]) => {
        return db('tasks').where('task_id', task_id).first()
    })
}

module.exports = {
    getAll,
    create
}
