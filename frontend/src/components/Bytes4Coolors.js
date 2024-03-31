import Bytes4Coolors from '../assets/Projects/Bytes4Coolors.svg'
import Logo from '../assets/Projects/Bytes4Coolors-Logo.svg'
import { ArrowButton } from './ArrowButton'



export const BytesFourCoolors = () => {
    return <div className='flex flex-wrap mb-16 lg:flex-nowrap'>
        <div className='mb-4'>
            <img className='mb-4 h-6 lg:h-8' src={Logo} alt='HashTraining Logo' />
            <div className='mb-4 text-lg font-bold lg:text-2xl'>Generate a new color palette</div>
            <div className='text-sm lg:text-base'>Elevate your creativity with this Color Palette app! Generate five new colors with each click, lock your favorites, and easily copy their values.  </div>
            <div className='sm:mt-6'>
                <div className='mt-6'>
                  <a href='https://github.com/diogomeira10/Color-Palette' rel="noopener noreferrer" target='_blank'>  <ArrowButton /></a>
                </div>
            </div>
        </div>
        <div className='flex justify-center w-full'>
            <img className='w-96' src={Bytes4Coolors} alt='Colors' />
        </div>
    </div>
}