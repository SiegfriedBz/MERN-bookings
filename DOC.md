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
