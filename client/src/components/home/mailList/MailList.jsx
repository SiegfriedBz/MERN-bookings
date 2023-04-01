import { useState } from 'react'

const MailList = ({ onUserMailListSubscribe }) => {

    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        await onUserMailListSubscribe(email)
        setEmail('')
    }

    return(
        <div className="mailList-container">
            <h1>Save time, Save money!</h1>
            <span>Sign up and we ll send the best deals to you</span>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    placeholder='Your email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className='button--hover-border-white'>Subscribe</button>
            </form>
        </div>
    )
}

export default MailList
