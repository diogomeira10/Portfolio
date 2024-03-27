import ContactSvg from '../assets/Contact.svg'
import { useState } from 'react'
import { Button } from '../components/Button'

export function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const [success, setSuccess] = useState(null)




    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSendMessage = async () => {
        try {
            const response = await fetch('/api/messages/createMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            })

            const data = await response.json()

            if (!response.ok) {
                setError(data.error)
                setEmptyFields(data.emptyFields)
                console.log('All fields must be filled', data)
            } else {
                setError(null)
                setSuccess(true)
                setEmptyFields([])
                setName('')
                setEmail('')
                setMessage('')
                console.log('Message sent successfully:', data);
            }

        } catch (error) {
            console.error('Error sending message:', error);
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        handleSendMessage()
    }


    return <div id='contact'>
        <div className='text-orange font-bold mb-10 mt-10 text-3xl'>Contact<span className='text-white'>.</span></div>
        <div className='bg-contrast rounded-lg p-4 lg:flex lg:flex-reverse lg:justify-around md:flex md:justify-around'>
            <form onSubmit={handleFormSubmit} className='flex flex-col gap-2 mb-8 lg:w-96'>
                <label>Name</label>
                <input placeholder='Enter your name' className={`text-background font-medium pl-1 rounded ${emptyFields.includes('name') ? 'error' : ''}`} type='text' value={name} onChange={handleNameChange} />
                <label>Email</label>
                <input type='email' placeholder='Enter your email' className={`text-background font-medium pl-1 rounded ${emptyFields.includes('email') ? 'error' : ''}`} value={email} onChange={handleEmailChange} />
                <label>Message</label>
                <textarea placeholder='Enter your message' className={`text-background font-medium pl-1 rounded h-24 text-left ${emptyFields.includes('message') ? 'error' : ''}`} type='text' value={message} onChange={handleMessageChange} />
                <div className='flex justify-between md:gap-2'>
                    <Button type='submit' classNames='w-20 mt-5'>Send</Button>
                    {error ? <div className='mt-5 error rounded p-2'>{error}</div> : success ? <div className='mt-5 border text-green-500 border-green-500 rounded p-2'>Message sent successfully</div> : null}
                </div>
            </form>
            <div className='flex justify-center'>
                <img className='w-96' src={ContactSvg} alt='Contact' />
            </div>
        </div>

    </div>
}