const mongoose = require('mongoose')
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const customError = require('../utils/error')

// Admin restricted
const getUsers = async (req, res, next) => {
    try {
        const users = await User
            .find({})
            .sort({ createdAt: -1 })
        res.status(200).json(users)
    } catch(error) {
        next(error)
    }
}

// 'self' restricted
const getUser = async (req, res, next) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw customError(404, 'No such user')
    }

    try {
        const user = await User.findOne({ _id: id })
        if (!user) {
            throw customError(404, 'No such user')
        }
        res.status(200).json(user)
    } catch(error) {
        next(error)
    }
}

// Admin restricted
// @note: authController#register does not accept isAdmin prop
const createUser = async (req, res, next) => {
    const { name, email, password, isAdmin } = req.body

    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    } catch(error) {
        next(error)
    }
}

// 'self' restricted
const updateUser = async (req, res, next) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw customError(404, 'No such user')
    }

    try {
        // update password
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }

        const updatedUser = await User.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { new: true }
        )
        if (!updatedUser) {
            throw customError(404, 'No such user')
        }
        res.status(200).json(updatedUser)
    } catch(error) {
        next(error)
    }
}

// 'self' restricted
const deleteUser = async (req, res, next) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw customError(404, 'No such user')
    }

    try {
        const user = await User.findOneAndDelete(
            { _id: id },
            { returnDocument: "after" }
        )
        if (!user) {
            throw customError(404, 'No such user')
        }
        res.status(200).json(user)
    } catch(error) {
        next(error)
    }
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }
