const requestTime = function (req, res, next) {
    console.log(req);
    next();
}

module.exports = requestTime;