const express = require('express')
const router = express.Router()
const {
    getRooms,
    getRoom,
    createRoom,
    updateRoom,
    deleteRoom
} = require('../controllers/roomController')
const {
    requireAdminAuthorization
} = require('../utils/middleware/checkAccessTokenCookie')

router.get('/', getRooms)
router.get('/:id', getRoom)
router.post('/:hotel_id', requireAdminAuthorization, createRoom) // Admin restricted
router.patch('/:id/:hotel_id', requireAdminAuthorization, updateRoom) // Admin restricted
router.delete('/:id/:hotel_id', requireAdminAuthorization, deleteRoom) // Admin restricted

module.exports = router
