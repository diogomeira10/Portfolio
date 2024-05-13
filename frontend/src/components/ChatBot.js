import { ArrowButton } from './ArrowButton'
import NiceRobot from '../assets/Projects/nice-robot.webp'
import OpenAiImage from '../assets/Projects/openai.png'


export const ChatBot = () => {
    return <div className='flex flex-wrap mb-16 lg:flex-nowrap'>
        <div className='mb-4'>
            <div className='font-bold flex items-center gap-1'>
                <img className='openai' src={OpenAiImage} alt='OpenAI Logo' />
                <span style={{ fontSize: "2em", color: '#00FFFC' }}>MERN</span><span style={{color: '#00FFFC'}}>-GPT</span>
            </div>
            <div className='mb-4 text-lg font-bold lg:text-2xl'>Chat Bot Application</div>
            <div className='text-sm lg:text-base'>Experience the power of MERN stack with this chat bot application! Built with Vite and TypeScript, this chat bot provides seamless communication and integration with MongoDB, Express.js, React, and Node.js. It features a strong user authentication system to ensure secure access to the chat functionality.</div>
            <div className='sm:mt-6'>
                <div className='mt-6'>
                    <a href='https://github.com/diogomeira10/chat-bot' rel="noopener noreferrer" target='_blank'>  <ArrowButton /></a>
                </div>
            </div>
        </div>
        <div className='flex justify-center w-full'>
            <img className='w-96' src={NiceRobot} alt='Colors' />
        </div>
    </div>
}