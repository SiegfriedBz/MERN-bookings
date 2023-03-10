const express = require('express')
const router = express.Router()
const {
    getHotels,
    getHotel,
    createHotel,
    updateHotel,
    deleteHotel
} = require('../controllers/hotelController')

router.get('/', getHotels)
router.get('/:id', getHotel)
router.post('/', createHotel)
router.patch('/:id', updateHotel)
router.delete('/:id', deleteHotel)

module.exports = router
