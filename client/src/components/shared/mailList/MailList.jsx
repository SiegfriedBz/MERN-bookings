import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'

const MailList = ({ onUserMailListSubscribe }) => {

    const [email, setEmail] = useState('')

    const location = useLocation()
    const path = location.pathname
    const isAuthPage =  path === '/register' || path === '/login'

    const handleSubmit = async (e) => {
        e.preventDefault()
        await onUserMailListSubscribe(email)
        setEmail('')
    }

    const mailListContainerClass = clsx('mailList-container', {
       'normal-margin': !isAuthPage,
        'small-margin': isAuthPage
    })

    return(
        <div className={mailListContainerClass}>
            <h1>Save time, Save money!</h1>
            <span>Sign up and we ll send the best deals to you</span>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    placeholder='Your email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className='subscribe-btn'>Subscribe</button>
            </form>
        </div>
    )
}

export default MailList
