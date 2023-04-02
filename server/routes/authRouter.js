const express = require('express')
const router = express.Router()
const { register, login
    // , authPage
} = require('../controllers/authController')

router.post('/register', register)        // req.body: name, email, pswd
router.post('/login', login)              // req.body: name, pswd
// router.get('/authPage', authPage) // req.headers.authorization: Bearer token

module.exports = router
