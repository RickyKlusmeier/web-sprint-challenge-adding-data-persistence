// build your `Task` model here
const db = require('../../data/dbConfig')


function getAll() {
    return db('tasks as t')
    .select(
        't.task_id', 
        't.task_description', 
        't.task_notes', 
        't.task_completed', 
        'p.project_name', 
        'p.project_description'
    )
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
}

function getById(id) {
    return db('tasks')
      .where('task_id', id)
      .first();
  }

function addTask(task) {
    return db('tasks')
    .insert(task)
    .then(id => {
        return getById(id[0])
    })
}

module.exports = {
    getAll,
    getById,
    addTask
} 
