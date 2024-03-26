import ContactSvg from '../assets/Contact.svg'
import { useState } from 'react'
import { Button } from '../components/Button'

export function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }


    return <div>
        <div className='text-orange font-bold mb-10 mt-10 text-3xl'>Contact<span className='text-white'>.</span></div>
        <div className='bg-contrast rounded-lg p-4 lg:flex lg:flex-reverse lg:justify-around'>
            <form className='flex flex-col gap-2 mb-8 lg:w-96'>
                <label>Name</label>
                <input placeholder='Enter your name' className='text-background font-medium pl-1 rounded' type='text' value={name} onChange={handleNameChange} />
                <label>Email</label>
                <input placeholder='Enter your email' className='text-background font-medium pl-1 rounded' type='text' value={email} onChange={handleEmailChange} />
                <label>Message</label>
                <textarea placeholder='Enter your message' className='text-background font-medium pl-1 rounded h-24 text-left' type='text' value={message} onChange={handleMessageChange} />
                <Button classNames='w-20 mt-5'>Send</Button>
            </form>
            <img className='w-96' src={ContactSvg} alt='Contact Photo' />
        </div>

    </div>
}