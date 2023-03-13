const express = require('express')
const router = express.Router()
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController')
const {
    requireUserAuthorization,
    requireAdminAuthorization
} = require('../utils/middleware/checkAccessTokenCookie')

router.get('/', requireAdminAuthorization, getUsers) // Admin restricted
router.get('/:id', requireUserAuthorization, getUser) // 'self' restricted
router.post('/', requireAdminAuthorization, createUser) // Admin restricted
router.patch('/:id', requireUserAuthorization, updateUser) // 'self' restricted
router.delete('/:id', requireUserAuthorization, deleteUser) // 'self' restricted

module.exports = router
