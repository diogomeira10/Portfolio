import HashTraining1 from '../assets/Projects/HashTraining-1.svg'
import HashTraining2 from '../assets/Projects/HashTraining-2.svg'
import HashTraingLogo from '../assets/Projects/HashTraining-Logo.svg'
import { ArrowButton } from './ArrowButton'


export const HashTraining = () => {
    return <div className='flex flex-wrap mb-16'>
        <div className='mb-4'>
            <img className='mb-4 h-6' src={HashTraingLogo} alt='HashTraining Logo' />
            <div className='mb-4 text-lg font-bold'>Social Media for Sportsmen</div>
            <div className='text-sm'>Introducing HashTraining, your go-to social hub for sports enthusiasts! Connect with fellow fans, discuss game highlights, and organize pickup matches all in one place. Stay updated on scores, engage in lively debates, and forge connections beyond the screen. </div>

            <div className='mt-6'>
                <ArrowButton />

            </div>
        </div>
        <div className='flex gap-2 justify-around w-full'>
            <img className='w-1/2' src={HashTraining1} alt='HashTraining feed picture' />
            <img className='w-1/2' src={HashTraining2} alt='HashTraining suggestions picture' />
        </div>
    </div>
}