const mongoose = require('mongoose')
const Room = require('../models/roomModel')
const Hotel = require('../models/propertyModel')
const customError = require('../utils/error')

const getRooms = async (req, res, next) => {
    try {
        const rooms = await Room
            .find({})
            .sort({ createdAt: -1 })
        res.status(200).json(rooms)
    } catch(error) {
        next(error)
    }
}

const getRoom = async (req, res, next) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        throw customError(404, 'No such room')
    }

    try {
        const room = await Room.findOne({ _id: id })
        if (!room) {
            throw customError(404, 'No such room')
        }
        res.status(200).json(room)
    } catch(error) {
        next(error)
    }
}

// Admin restricted
const createRoom = async (req, res, next) => {
    try {
        // create room
        const room = await Room.create(req.body)

        // update hotel
        const { hotel_id } = req.params
        await Hotel.findOneAndUpdate(
            { hotel_id },
            { $push: { rooms: room.id }}
        )
        res.status(201).json(room)
    } catch(error) {
        next(error)
    }
}

// Admin restricted
const updateRoom = async (req, res, next) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw customError(404, 'No such room')
    }

    try {
        const updatedRoom = await Room.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { new: true }
        )
        if (!updatedRoom) {
            throw customError(404, 'No such room')
        }

        // update hotel
        const { hotel_id } = req.params
        await Hotel.findOneAndUpdate(
            { hotel_id },
            { $set: { rooms: id}}
        )
        res.status(200).json(updatedRoom)
    } catch(error) {
        next(error)
    }
}

// Admin restricted
const deleteRoom = async (req, res, next) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw customError(404, 'No such room')
    }

    try {
        const room = await Room.findOneAndDelete(
            { _id: id },
            { returnDocument: "after" }
        )

        // update hotel
        const { hotel_id } = req.params
        await Hotel.findOneAndUpdate(
        { hotel_id },
        { $pull: { rooms: id }}
        )

        res.status(200).json(room)
    } catch(error) {
        next(error)
    }
}

module.exports = { getRooms, getRoom, createRoom, updateRoom, deleteRoom }


