const mongoose = require('mongoose')
const User = require('../models/userModel')

const getUsers = async (req, res) => {
    try {
        const users = await User
            .find({})
            .sort({ createdAt: -1 })
        res.status(200).json(users)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

const getUser = async (req, res) => {
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
        res.status(400).json({ error: error.message })
    }
}

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId,isValid(id)) {
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
        res.status(400).json({ error: error.message })
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('No such user')
    }

    try {
        const user = await User.findOneAndDelete(
            { _id: id},
            { returnDocument: "after" }
        )
        if (!user) {
            return res.status(404).json('No such user')
        }
        res.status(200).json(user)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }
