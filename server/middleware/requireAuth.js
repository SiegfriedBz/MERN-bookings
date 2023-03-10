const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({error: 'Authorization required'})
    }

    try {
        // extract token from headers
        const [_, token] = authorization.split(', ')
        // check token
        const { _id } = await jwt.verify(token, process.env.JWT_SECRET)
        // create user_id key on req object
        const user_id = await User.findOne({ _id }).select({ _id })

        req.user_id = user_id._id

        next()

    } catch(error) {
        res.status(400).json({error: ''})
    }
}

module.exports = requireAuth
