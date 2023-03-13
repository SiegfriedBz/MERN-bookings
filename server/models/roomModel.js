const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    maxPeople: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    roomNumbers: [
        {   number: Number,
            bookedDates: [{ type: [Date] }]
        }
    ]
})

module.exports = mongoose.model('Room', roomSchema)
