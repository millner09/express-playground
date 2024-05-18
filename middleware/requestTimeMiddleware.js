export const requestTimeMiddleware = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}