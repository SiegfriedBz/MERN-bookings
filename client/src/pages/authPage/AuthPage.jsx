import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './authPage.css'

const initUser = {
    name: '',
    email: '',
    password: ''
}

const AuthPage = ({ onUserAuth }) => {
    const location = useLocation()
    const [user, setUser] = useState(initUser)

    const path = location.pathname

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser(prev => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await onUserAuth(user)
        setUser(initUser)
        // redirect to '/'
    }

    const registerContent = (
        <div className="auth--card-container">
            <h3 className='auth--title'>Register</h3>
            <form onSubmit={handleSubmit}
                className="auth--form">
                <input
                    type="text"
                    name='name'
                    value={user.name}
                    onChange={handleChange}
                    placeholder='Your name...'
                    className="auth"/>
                <input
                    type="email"
                    name='email'
                    value={user.email}
                    onChange={handleChange}
                    placeholder='Your email...'
                    className="auth"/>
                <input
                    type="password"
                    name='password'
                    value={user.password}
                    onChange={handleChange}
                    placeholder='Your password...'
                    className="auth"/>
                <button className='auth--btn'>Submit</button>
            </form>
        </div>
    )

    const loginContent = (
        <div className="auth--card-container">
            <h3 className='auth--title'>Login</h3>
            <form onSubmit={handleSubmit}
                  className="auth--form">
                <input
                    type="text"
                    name='name'
                    value={user.name}
                    onChange={handleChange}
                    placeholder='Your name...'
                    className="auth"/>
                <input
                    type="password"
                    name='password'
                    value={user.password}
                    onChange={handleChange}
                    placeholder='Your password...'
                    className="auth"/>
                <button className='auth--btn'>Submit</button>
            </form>
        </div>
    )

    return path === '/register' ? registerContent : loginContent

}

export default AuthPage
