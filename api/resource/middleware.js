const Resources = require('./model')

function logger(req, res, next) {
    console.log(`
        ${req.method} request to ${res.baseUrl} endpoint
        req.body ${JSON.stringify(req.body)}
        req.params.id ${req.params.id}
    `)
    next()
}

function checkResourcePayload(req, res, next) {
    const {resource_name} = req.body
    if(!resource_name) {
        res.status(400).json({
            message: `resources must have names`
        })
    } else {next()}
}

module.exports = {
    logger,
    checkResourcePayload
} 