# MERN-bookings

[screen-recording (1).webm](https://user-images.githubusercontent.com/99029880/224847207-a2d36632-548c-4134-9c1c-da48cba0a2e7.webm)

- Client
    + React
    + Context API
    + Custom Hooks

- Server
    + Express
    + bcrypt
    + validator
    + jsonwebtoken
    + cookie-parser
    + Mongoose schema, model, statics methods

- DB
    + MongoDB

----

Authentication
- authRoutes => cookie(JWT, { httpOnly })
    + register -> props: name, email, password
    + login -> props: name, password

Authorization - middleware
- userRoutes
    + getUsers // Admin restricted
    + getUser // 'self' restricted    -> params: id
    + createUser // Admin restricted  -> props: name, email, password, isAdmin
    + updateUser // 'self' restricted -> params: id ; props: name, email, password
    + deleteUser // 'self' restricted -> params: id
- hotelRoutes
    + getHotels
    + getHotel
    + createHotel // Admin restricted
    + updateHotel // Admin restricted
    + deleteHotel // Admin restricted
- roomRoutes
    + getRooms
    + getRoom
    + createRoom // Admin restricted
    + updateRoom // Admin restricted
    + deleteRoom // Admin restricted
