import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className='navbar-container'>
                <span className="logo">
                    <Link to='/'>MangooBooking</Link>
                </span>
                <div>
                    <Link to='/register' className="navbar-link">Register</Link>
                    <Link to='/login' className="navbar-link">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
