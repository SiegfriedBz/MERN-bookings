const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const customError = require('../utils/error')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true }
)

userSchema.statics.registerUser = async function(name, email, password) {
    // input validation
    if (!name || !email || !password) {
        throw customError(400, 'all fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw customError(400, 'please enter a valid email')
    }
    if (!validator.isStrongPassword(password)) {
        throw customError(400, 'please enter a stronger password')
    }

    // check if name || email exists
    const nameExist = await this.findOne({ name })
    const emailExist = await this.findOne({ email })
    if (nameExist || emailExist) {
        const attr = nameExist ? 'name' : 'email'
        throw customError(400, `${attr} already exists`)
    }

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    // create user
    const user = await this.create({ name, email, password: hash })

    return user
}

userSchema.statics.loginUser = async function(name, password) {
    // check if user name exists
    const user = await this.findOne( { name })
    if (!user) {
        throw customError(404, 'no such user')
    }
    // check pswd
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
        throw customError(400, 'wrong password or username')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)
