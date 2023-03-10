const mongoose = require('mongoose')
const Room = require('../models/roomModel')

const getRooms = async (req, res) => {
    try {
        const rooms = await Room
            .find({})
            .sort({ createdAt: -1})
        res.status(200).json(rooms)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

const getRoom = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('No such room')
    }

    try {
        const room = await Room.findOne({ _id: id })
        if (!room) {
            return res.status(404).json('No such room')
        }
        res.status(200).json(room)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

const createRoom = async (req, res) => {
    try {
        const room = await Room.create(req.body)
        res.status(201).json(room)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

const updateRoom = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('No such room')
    }

    try {
        const updatedRoom = await Room.findOneAndUpdate(
            { _id: id},
            {...req.body },
            {new: true}
        )
        if (!updatedRoom) {
            return res.status(404).json('No such room')
        }
        res.status(200).json(updatedRoom)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteRoom = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('No such room')
    }

    try {
        const room = await Room.findOneAndDelete(
            { _id: id },
            { returnDocument: "after" }
        )
        res.status(200).json(room)
    } catch(error) {
        res.status(400).json({ error: eerror.message })
    }
}

module.exports = { getRooms, getRoom, createRoom, updateRoom, deleteRoom }


