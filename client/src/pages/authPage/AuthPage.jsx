import { useState } from 'react'
import { useLocation } from 'react-router-dom'

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

    const isLoginPage = path === '/login'

    return (
        <div className="auth-page">
            <div className="container">
                <div>
                    <h3>Register</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name='name'
                            value={user.name}
                            onChange={handleChange}
                            placeholder='Your name...'
                        />
                        <input
                            hidden={isLoginPage}
                            type="email"
                            name='email'
                            value={user.email}
                            onChange={handleChange}
                            placeholder='Your email...'
                        />
                        <input
                            type="password"
                            name='password'
                            value={user.password}
                            onChange={handleChange}
                            placeholder='Your password...'
                        />
                        <button className='auth-btn'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AuthPage
