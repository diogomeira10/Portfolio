import ContactSvg from '../assets/Contact.svg'
import { useState } from 'react'
import { Button } from '../components/Button'
import axios from 'axios'

export function Contact() {
    const api = axios.create({
        baseURL: "https://api.smtpexpress.com/",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer eeae0543289997d178081a56d90d915c704b354e1140cce3cd",
        },
    });

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
            const body = {
                subject: "Message from Portfolio Contact Form",
                message: `<h1>Message from ${name}</h1><p>${message}</p>`,
                sender: {
                    name: name,
                    email: email,
                },
                recipients: {
                    name: "Your Name",
                    email: "your.email@example.com",
                },
            };

            const response = await api.post("send", body);
            console.log(response.data);

            setSuccess(true);
            setError(null);
            setEmptyFields([]);
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
            setError("An error occurred while sending the message. Please try again later.", error);
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSendMessage();
    }

    return (
        <div id='contact' className='mb-20'>
            <div className='text-orange font-bold mb-10 mt-10 text-3xl'>Contact Me<span className='text-white'>.</span></div>
            <div className='bg-contrast rounded-lg p-4 lg:flex lg:flex-reverse lg:justify-around md:flex md:justify-around'>
                <form onSubmit={handleFormSubmit} className='flex flex-col gap-2 mb-8 lg:w-96'>
                    <label>Name</label>
                    <input placeholder='Enter your name' className={`text-background font-medium pl-1 rounded ${emptyFields.includes('name') ? 'error' : ''}`} type='text' value={name} onChange={handleNameChange} />
                    <label>Email</label>
                    <input type='email' placeholder='Enter your email' className={`text-background font-medium pl-1 rounded ${emptyFields.includes('email') ? 'error' : ''}`} value={email} onChange={handleEmailChange} />
                    <label>Message</label>
                    <textarea placeholder='Enter your message' className={`text-background font-medium pl-1 rounded h-24 text-left ${emptyFields.includes('message') ? 'error' : ''}`} type='text' value={message} onChange={handleMessageChange} />
                    <div className='flex justify-between md:gap-2 '>
                        <Button type='submit' classNames='w-20 mt-5'>Send</Button>
                        {error && <div className='mt-5 error rounded p-2'>{error}</div>}
                        {success && <div className='mt-5 border text-green-500 border-green-500 rounded p-2'>Message sent successfully</div>}
                    </div>
                </form>
                <div className='flex justify-center'>
                    <img className='w-96' src={ContactSvg} alt='Contact' />
                </div>
            </div>
        </div>
    );
}
