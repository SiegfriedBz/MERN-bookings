const express = require('express')
const router = express.Router()
const { register, login
    // , authenticate
} = require('../controllers/authController')

router.post('/register', register)        // req.body: name, email, pswd
router.post('/login', login)              // req.body: name, pswd
// router.get('/authenticate', authenticate) // req.headers.authorization: Bearer token

module.exports = router
