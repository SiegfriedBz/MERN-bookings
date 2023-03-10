const express = require('express')
const router = express.Router()
const {
    getRooms,
    getRoom,
    createRoom,
    updateRoom,
    deleteRoom
} = require('../controllers/roomController')

router.get('/', getRooms)
router.get('/:id', getRoom)
router.post('/', createRoom)
router.patch('/:id', updateRoom)
router.delete('/:id', deleteRoom)

module.exports = router
