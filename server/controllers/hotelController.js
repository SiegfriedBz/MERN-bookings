const mongoose = require('mongoose')
const Hotel = require('../models/hotelModel')
const customError = require('../utils/error')

const getHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel
            .find({})
            .sort({ createdAt: -1 })
        res.status(200).json(hotels)
    } catch(error) {
        next(error)
    }
}

const getHotel = async (req, res, next) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return next(customError(404, 'No such hotel'))
    }

    try {
        const hotel = await Hotel.findOne({ _id: id })
        if (!hotel) {
            return next(customError(404, 'No such hotel'))
        }
        res.status(200).json(hotel)
    } catch(error) {
        next(error)
    }
}

const createHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.create(req.body)
        res.status(201).json(hotel)
    } catch(error) {
        next(error)
    }
}

const updateHotel = async (req, res, next) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return next(customError(404, 'No such hotel'))
    }

    try {
        const updatedHotel = await Hotel.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { new: true }
        )
        if(!updatedHotel) {
            return next(customError(404, 'No such hotel'))
        }

        res.status(200).json(updatedHotel)
    } catch(error) {
        next(error)
    }
}

const deleteHotel = async (req, res, next) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(customError(404, 'No such hotel'))
    }

    try {
        const hotel = await Hotel.findOneAndDelete(
            { _id: id },
            { returnDocument: 'after' }
        )
        if(!hotel) {
            return next(customError(404, 'No such hotel'))
        }
        res.status(200).json(hotel)
    } catch(error) {
        next(error)
    }
}

module.exports = { getHotels, getHotel, createHotel, updateHotel, deleteHotel }
