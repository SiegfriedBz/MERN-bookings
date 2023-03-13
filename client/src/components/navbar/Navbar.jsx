import './navbar.css'

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className='navbar-container'>
                <span className="logo">MangooBooking</span>
                <div className="navbar-items">
                    <button className="navbar-btn">Register</button>
                    <button className="navbar-btn">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
