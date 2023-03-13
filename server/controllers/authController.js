const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createAccessToken = (_id, isAdmin) => {
    return jwt.sign({ _id, isAdmin }, process.env.JWT_SECRET, { expiresIn: '3d' })
}

const register = async (req, res, next)  => {
    const { name, email, password } = req.body

    try {
        // validate & create user w/ hashed pswd
        const user = await User.registerUser(name, email, password)
        const userDetails = { name: user.name, email: user.email, isAdmin: user.isAdmin }
        // create JWT
        const token = createAccessToken(user._id, user.isAdmin)
        // send cookie w/token + user details
        res
            .cookie('access_token', token, { httpOnly: true })
            .status(201).json({ userDetails })
    } catch(error){
        next(error)
    }
}

const login = async (req, res, next) => {
    const { name, password } = req.body

    try {
        // validate name & check pswd
        const user = await User.loginUser(name, password)
        const userDetails = { name: user.name, email: user.email, isAdmin: user.isAdmin }
        // create JWT
        const token = createAccessToken(user._id, user.isAdmin)
        // send cookie w/token + user details
        res
            .cookie('access_token', token, { httpOnly: true })
            .status(200).json({ userDetails })
    } catch(error) {
        next(error)
    }
}

module.exports = { register, login }
