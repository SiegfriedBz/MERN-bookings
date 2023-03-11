const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRouter = require('./routes/authRouter')
const userRouter = require('./routes/userRouter')
const hotelRouter = require('./routes/hotelRouter')
const roomRouter = require('./routes/roomRouter')
const { PORT, MONGO_URI } = require('./utils/config')

// app
const app = express()

// middleware
app.use(express.json()) // required for req.body
app.use(cors())
app.use((req, res, next) => {
    console.log('---')
    console.log(req.path, req.method)
    next()
})

// middleware/routes
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/hotels', hotelRouter)
app.use('/api/rooms', roomRouter)

// middleware/error handler
app.use((err, req, res, next) => {
    const errStatus = err.status || 500
    const errMsg = err.message || 'Something went wrong'
    return res.status(errStatus).json({
        success: false,
        message: errMsg,
        stack: err.stack
    })
})

// connect to db
const connect = async () => {
    console.log('connecting to db...')
    try {
        await mongoose.connect(MONGO_URI)
        app.listen(PORT, () => {
            console.log(`server connected to db & listening to PORT ${PORT}`)
        })
    } catch(error){
        console.log(error)
    }
}
connect()
