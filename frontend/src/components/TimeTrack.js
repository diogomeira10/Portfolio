import TimeTrack1 from '../assets/Projects/TimeTrack-1.svg'
import TimeTrack2 from '../assets/Projects/TimeTrack-2.svg'
import Logo from '../assets/Projects/TimeTrack-Logo.svg'

// import { ArrowButton } from './ArrowButton'

export const TimeTrack = () => {
    return <div className='flex flex-wrap mb-16 lg:flex-nowrap lg:flex-row-reverse lg:justify-around 2xl:mb-28'>
        <div className='mb-4 lg:w-1/2'>
            <img className='mb-4 h-6 lg:h-8' src={Logo} alt='HashTraining Logo' />
            <div className='mb-4 text-lg font-bold lg:text-2xl'>Spotify History Data</div>
            <div className='text-sm sm:mb-6 lg:text-base'>Ever wondered what your Spotify listening habits reveal about you? This app unlocks insights into your top artists, tracks, and a range of user stats. Dive into your music journey with ease, exploring your preferences and sharing your unique profile with friends. Discover the power of your Spotify History Data today! </div>
            {/* <div className='mt-6'>
                <ArrowButton />

            </div> */}
        </div>

        <div className='flex justify-around w-full gap-1 sm:w-full lg:w-1/2 md:justify-around 2xl:justify-center 2xl:gap-6  '>
            <img className='w-1/2 lg:w-56 md:w-72' src={TimeTrack1} alt='HashTraining feed ' />
            <img className='w-1/2 lg:w-56 rounded-3xl md:w-72' src={TimeTrack2} alt='HashTraining suggestions' />
        </div>
    </div>
}
