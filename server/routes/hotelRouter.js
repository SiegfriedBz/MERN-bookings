const express = require('express')
const router = express.Router()
const {
    getHotels,
    getHotelsCountByCity,
    getHotel,
    createHotel,
    updateHotel,
    deleteHotel
} = require('../controllers/hotelController')
const {
    requireAdminAuthorization
} = require('../utils/middleware/checkAccessTokenCookie')

router.get('/', getHotels)
router.get('/countByCity', getHotelsCountByCity)
router.get('/:id', getHotel)
router.post('/', requireAdminAuthorization, createHotel) // Admin restricted
router.patch('/:id', requireAdminAuthorization, updateHotel) // Admin restricted
router.delete('/:id', requireAdminAuthorization, deleteHotel) // Admin restricted

module.exports = router
