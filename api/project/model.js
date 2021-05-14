// build your `Project` model here
const db = require('../../data/dbConfig')

function getAll() {
    return db('projects')
}

function getById(id) {
    return db('projects')
    .where('project_id', id).first()
}

function addProject(project) {
    return db('projects')
    .insert(project)
    .then(id => {
        return getById(id[0])
    })
}

module.exports = {
    getAll,
    getById,
    addProject
}