import TimeTrack1 from '../assets/Projects/TimeTrack-1.svg'
import TimeTrack2 from '../assets/Projects/TimeTrack-2.svg'
import Logo from '../assets/Projects/TimeTrack-Logo.svg'
import { ArrowButton } from './ArrowButton'

export const TimeTrack = () => {
    return <div className='flex flex-wrap mb-16 lg:flex-nowrap lg:flex-row-reverse lg:justify-around'>
        <div className='mb-4 lg:w-1/2'>
            <img className='mb-4 h-6 lg:h-8' src={Logo} alt='HashTraining Logo' />
            <div className='mb-4 text-lg font-bold lg:text-2xl'>Spotify History Data</div>
            <div className='text-sm sm:mb-6 lg:text-base'>Ever wondered what your Spotify listening habits reveal about you? Our app unlocks insights into your top artists, tracks, and a range of user stats. Dive into your music journey with ease, exploring your preferences and sharing your unique profile with friends. Discover the power of your Spotify History Data today! </div>
            <div className='mt-6'>
                <ArrowButton />

            </div>
        </div>

        <div className='flex gap-1 sm:w-full lg:gap-10 lg:w-1/2'>
            <img className='w-1/2 lg:w-56' src={TimeTrack1} alt='HashTraining feed picture' />
            <img className='w-1/2 lg:w-56 rounded-3xl' src={TimeTrack2} alt='HashTraining suggestions picture' />
        </div>
    </div>
}
