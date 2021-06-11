const Projects = require('./model')

function logger(req, res, next) {
    console.log(`
        ${req.method} request to ${res.baseUrl} endpoint
        req.body ${JSON.stringify(req.body)}
        req.params.id ${req.params.id}
    `)
    next()
}

function checkProjectPayload(req, res, next) {
    const {project_name} = req.body
    if(!project_name) {
        res.status(400).json({
            message: `projects must have names`
        })
    } else {next()}
}

module.exports = {
    logger,
    checkProjectPayload
} 