const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: '3d' })
}

const login = async (req, res, next)  => {
    const { email, password } = req.body
    console.log('req.body', req.body)

    try {
        // validate + create user w/ hashed pswd
        const user = await User.loginUser(email, password)
        // create JWT
        const token = createToken(user._id)
        // send resp
        res.status(201).json({ email, token })
    } catch(error){
        next(error)
    }
}

module.exports = { login }
