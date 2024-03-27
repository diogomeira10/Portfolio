import HashTraining1 from '../assets/Projects/HashTraining-1.svg'
import HashTraining2 from '../assets/Projects/HashTraining-2.svg'
import HashTraingLogo from '../assets/Projects/HashTraining-Logo.svg'
import { ArrowButton } from './ArrowButton'


export const HashTraining = () => {
    return <div className='flex flex-wrap mb-16 lg:flex-nowrap lg:mb-28 '>
        <div className='mb-4 lg:w-3/4 '>
            <img className='mb-4 h-6 lg:h-8' src={HashTraingLogo} alt='HashTraining Logo' />
            <div className='mb-4 text-lg font-bold lg:text-2xl'>Social Media for Sportsmen</div>
            <div className='text-sm lg:text-base'>Introducing HashTraining: Your ultimate fitness destination! Dive into a vibrant community where you can share your workouts, connect with fellow fitness enthusiasts, and engage in lively discussions about all things health and wellness. From sharing training tips to finding workout buddies, HashTraining has everything you need to stay motivated and inspired on your fitness journey.</div>
            {/* <div className='mt-6'>
                <ArrowButton />
            </div> */}
        </div>
        <div className='flex gap-2 justify-around w-full lg:justify-center lg:gap-6'>
            <img className='w-1/2 lg:w-56 md:w-72' src={HashTraining1} alt='HashTraining feed' />
            <img className='w-1/2 lg:w-56 md:w-72' src={HashTraining2} alt='HashTraining suggestions' />
        </div>
    </div>
} 