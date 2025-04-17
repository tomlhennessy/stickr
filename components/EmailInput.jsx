"use client";

import { useState } from "react"

export default function EmailInput() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    async function handleAddSubscriber() {
        try {
            setMessage("You're subscribed!")
            setEmail("")

        } catch (err) {
            setMessage("Error: " + err.message)
        }
    }

    return (
        <div className='sign-up'>
            <input value={email} onChange={(e) => {
                setEmail(e.target.value)
            }} placeholder='Email address...' />
            <button onClick={handleAddSubscriber} className='button-card'>Sign Up</button>
            {message && (<p>{message}</p>)}
        </div>
    )
}
