// build your `/api/tasks` router here
const router = require("express").Router()
const {logger, checkTaskPayload} = require('./middleware')
const Tasks = require('./model')

router.get('/', logger, (req, res, next) => {
    Tasks.getAll(req.query)
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => next(err))
})

router.post('/', logger, checkTaskPayload, (req, res, next) => {
    Tasks.addTask(req.body)
    .then(task => {
        res.status(200).json(task)
    })
    .catch(next)
})

module.exports = router 