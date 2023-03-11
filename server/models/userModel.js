const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

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

userSchema.statics.registerUser = async function(name, email, password, isAdmin=false) {
    // validation
    if (!name || !email || !password) {
        throw Error('all fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('please enter a valid email')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('please enter a stronger password')
    }

    // check if name || email exist
    const nameExist = await this.findOne({ name })
    const emailExist = await this.findOne({ email })
    if (nameExist || emailExist) {
        const attr = nameExist ? 'name' : 'email'
        throw Error(`${attr} already exists`)
    }

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    // create user
    const user = await this.create({ name, email, password: hash, isAdmin })

    return user
}

module.exports = mongoose.model('User', userSchema)
