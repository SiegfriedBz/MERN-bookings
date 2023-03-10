const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.loginUser = async function(email, password) {
    // validation
    if (!email || !password) {
        throw Error('all fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('email must be valid')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('password must be valid')
    }

    // check if email exist
    const exist = await this.findOne({ email })
    if (exist) {
        throw Error('email already exists')
    }

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    // create user
    const user = await this.create({ email, password: hash })

    return user
}

module.exports = mongoose.model('User', userSchema)
