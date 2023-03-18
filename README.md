# MERN-bookings

[screen-recording (5).webm](https://user-images.githubusercontent.com/99029880/226138054-4763a4cc-cebb-4d76-b862-cbd61562c70c.webm)

- Client
    + React

- Server
    + Express
    + bcrypt
    + validator
    + JWT
    + cookie-parser
    + Mongoose schema, model, statics methods

- DB
    + MongoDB

----

Authentication
- authRoutes => cookie(JWT, { httpOnly })
    + register -> body: name, email, password
    + login -> body: name, password

Authorization - middleware
- userRoutes
    + getUsers // Admin restricted
    + getUser // 'self' restricted    -> params: id
    + createUser // Admin restricted  -> body: name, email, password, isAdmin
    + updateUser // 'self' restricted -> params: id ; body: name, email, password
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
