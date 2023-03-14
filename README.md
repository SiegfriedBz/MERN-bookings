# MERN-bookings

[screen-recording (2).webm](https://user-images.githubusercontent.com/99029880/225148813-a6d84fa0-5d37-4996-b513-68b132f5a4ab.webm)

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
