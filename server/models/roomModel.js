const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    hotel_id: {
        type: Number,
        required: true
    },
    user_id: {
        type: Number,
        required: false
    },
    number: {
        type: Number,
        required: true
    },
    booked: {
        type: Boolean,
        default: false,
        required: true
    }
})

module.exports = mongoose.model('Room', roomSchema)
