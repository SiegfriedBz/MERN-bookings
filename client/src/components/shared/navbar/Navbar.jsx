import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className='navbar-container'>
            <div className='navbar-wrapper'>
                <span className="logo">
                    <Link to='/'>MangooBooking</Link>
                </span>
                <div>
                    <Link to='/register' className="link">Register</Link>
                    <Link to='/login' className="link">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
