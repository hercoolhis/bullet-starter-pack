const logger = require("./logger");

module.exports = (err, req, res, next) => {
    logger.error(err.message);
    res.status(err.statusCode || 500). send(err.message);
}