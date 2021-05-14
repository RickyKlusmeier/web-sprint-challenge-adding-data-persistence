// build your `Resource` model here
const db = require('../../data/dbConfig')


function getAll() {
    return db('resources')
}

function getById(id) {
    return db('resources')
      .where('resource_id', id)
      .first();
  }

function addResource(resource) {
    return db('resources')
    .insert(resource)
    .then(id => {
        return getById(id[0])
    })
}

module.exports = {
    getAll,
    getById,
    addResource
} 