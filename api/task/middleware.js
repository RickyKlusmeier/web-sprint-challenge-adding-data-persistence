const Tasks = require('./model')

function logger(req, res, next) {
    console.log(`
        ${req.method} request to ${res.baseUrl} endpoint
        req.body ${JSON.stringify(req.body)}
        req.params.id ${req.params.id}
    `)
    next()
}

function checkTaskPayload(req, res, next) {
    const {task_description} = req.body
    if(!task_description) {
        res.status(400).json({
            message: `tasks must have descriptions`
        })
    } else {next()}
}

module.exports = {
    logger,
    checkTaskPayload
} 