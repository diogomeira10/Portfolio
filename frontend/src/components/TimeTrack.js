import TimeTrack1 from '../assets/Projects/TimeTrack-1.svg'
import TimeTrack2 from '../assets/Projects/TimeTrack-2.svg'
import Logo from '../assets/Projects/TimeTrack-Logo.svg'
import { ArrowButton } from './ArrowButton'

export const TimeTrack = () => {
    return <div className='flex flex-wrap mb-16'>
        <div className='mb-4'>
            <img className='mb-4 h-6' src={Logo} alt='HashTraining Logo' />
            <div className='mb-4 text-lg font-bold'>Social Media for Sportsmen</div>
            <div className='text-sm sm:mb-6'>Ever wondered what your Spotify listening habits reveal about you? Our app unlocks insights into your top artists, tracks, and a range of user stats. Dive into your music journey with ease, exploring your preferences and sharing your unique profile with friends. Discover the power of your Spotify History Data today! </div>
            <div className='mt-6'>
                <ArrowButton />

            </div>
        </div>

        <div className='flex gap-1 sm:w-full '>
            <img className='w-1/2' src={TimeTrack1} alt='HashTraining feed picture' />
            <img className='w-2/4 rounded-3xl' src={TimeTrack2} alt='HashTraining suggestions picture' />
        </div>
    </div>
}
