const jwt = require('jsonwebtoken')
const customError = require('../error')

// authentication
const requireAuthentication = (req, res, next) => {
    const token = req.cookies.access_token

    try {
        // check if token
        if (!token) {
            throw customError(401, 'Please log in')
        }
        // check if token is valid
        const { _id, isAdmin } = jwt.verify(token, process.env.JWT_SECRET)
        if (!_id) {
            throw customError(403, 'Authentication failed')
        }
        // authenticated user (token && valid token)
        req.isAdmin = isAdmin
        next()
    } catch(error) {
        next(error)
    }
}

// authorization for user
const requireUserAuthorization = (req, res, next) => {
    requireAuthentication(req, res, (err) => {
        if (err) {
            return next(err)
        }
        // check if authenticated user has same id as params
        const { id } = req.params
        if (req.userInfo._id === id) {
            next()
        } else {
            next(customError(403, 'You are not authorized'))
        }
    })
}

// authorization for Admin
const requireAdminAuthorization = (req, res, next) => {
    requireAuthentication(req, res,  (err) => {
        if (err) {
            return next(err)
        }
        // check if authenticated user === Admin
        if (req.isAdmin) {
            next()
        } else {
            next(customError(403, 'Only admin is authorized'))
        }
    })
}

module.exports = {
    requireAuthentication,
    requireUserAuthorization,
    requireAdminAuthorization
}
