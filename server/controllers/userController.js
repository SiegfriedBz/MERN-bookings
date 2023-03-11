const mongoose = require('mongoose')
const User = require('../models/userModel')

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

const getUser = async (req, res, next) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('No such user')
    }

    try {
        const user = await User.findOne({ _id: id })
        if (!user) {
            return res.status(404).json('No such user')
        }
        res.status(200).json(user)
    } catch(error) {
        next(error)
    }
}

const createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    } catch(error) {
        next(error)
    }
}

const updateUser = async (req, res, next) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('No such user')
    }

    try {
        const updatedUser = await User.findOneAndUpdate(
            { _id: id },
            { ... req.body },
            { new: true }
        )
        if (!updatedUser) {
            return res.status(404).json('No such user')
        }
        res.status(200).json(updatedUser)
    } catch(error) {
        next(error)
    }
}

const deleteUser = async (req, res, next) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('No such user')
    }

    try {
        const user = await User.findOneAndDelete(
            { _id: id },
            { returnDocument: "after" }
        )
        if (!user) {
            return res.status(404).json('No such user')
        }
        res.status(200).json(user)
    } catch(error) {
        next(error)
    }
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }
