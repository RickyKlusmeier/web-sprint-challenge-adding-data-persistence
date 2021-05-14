// build your `/api/projects` router here
const router = require("express").Router()

const {logger, checkProjectPayload} = require('./middleware')
const Projects = require('./model')


router.get('/', logger, (req, res, next) => {
    Projects.getAll(req.query)
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => next(err))
})

router.post('/', logger, checkProjectPayload, (req, res, next) => {
    Projects.addProject(req.body)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(next)
})
 
 module.exports = router 