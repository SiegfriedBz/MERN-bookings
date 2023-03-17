import { useState } from 'react'
import './mailList.css'

const MailList = ({ onUserMailListSubscribe }) => {

    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        await onUserMailListSubscribe(email)
        setEmail('')
    }

    return(
        <div className='mailList-container'>
            <h1>Save time, Save money!</h1>
            <span>Sign up and we ll send the best deals to you</span>
            <form
                onSubmit={handleSubmit}
                className="mailList-form"
            >
                <input
                    type="email"
                    className="mailList-input"
                    value={email}
                    placeholder='Your email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="mailList-btn">Subscribe</button>
            </form>
        </div>
    )
}

export default MailList
