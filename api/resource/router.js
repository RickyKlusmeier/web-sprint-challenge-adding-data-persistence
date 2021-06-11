// build your `/api/resources` router here
const router = require("express").Router()
const {logger, checkResourcePayload} = require('./middleware')
const Resources = require('./model')


router.get('/', logger, (req, res, next) => {
    Resources.getAll(req.query)
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => next())
})


router.post('/', logger, checkResourcePayload, (req, res, next) => {
    Resources.addResource(req.body)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})


module.exports = router