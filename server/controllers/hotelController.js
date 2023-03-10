const mongoose = require('mongoose')
const Hotel = require('../models/hotelModel')

const getHotels = async (req, res) => {
    try {
        const hotels = await Hotel
            .find({})
            .sort({ createdAt: -1 })
        res.status(200).json(hotels)
    } catch(error) {
        res.status(400).json({error: error.message})
    }

}

const getHotel = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such hotel'})
    }

    try {
        const hotel = await Hotel.findOne({ _id: id })
        if (!hotel) {
            return res.status(404).json({error: 'No such hotel'})
        }
        res.status(200).json(hotel)
    } catch(error) {
        res.status(400).json({error: error.message})
    }

}

const createHotel = async (req, res) => {
    try {
        const hotel = await Hotel.create(req.body)
        res.status(201).json(hotel)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

const updateHotel = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such hotel'})
    }

    try {
        const updatedHotel = await Hotel.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { new: true }
        )
        if(!updatedHotel) {
            return res.status(404).json({error: 'No such hotel'})
        }

        res.status(200).json(updatedHotel)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

const deleteHotel = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such hotel'})
    }

    try {
        const hotel = await Hotel.findOneAndDelete(
            { _id: id },
            { returnDocument: 'after' }
        )
        if(!hotel) {
            return res.status(404).json({error: 'No such hotel'})
        }
        res.status(200).json(hotel)
    } catch(error) {
        res.status(400).json({error: error.message})
    }

}

module.exports = { getHotels, getHotel, createHotel, updateHotel, deleteHotel }
