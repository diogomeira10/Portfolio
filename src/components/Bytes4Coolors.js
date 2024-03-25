import Bytes4Coolors from '../assets/Projects/Bytes4Coolors.svg'
import Logo from '../assets/Projects/Bytes4Coolors-Logo.svg'
import { ArrowButton } from './ArrowButton'



export const BytesFourCoolors = () => {
    return <div className='flex flex-wrap mb-16'>
        <div className='mb-4'>
            <img className='mb-4 h-6' src={Logo} alt='HashTraining Logo' />
            <div className='mb-4 text-lg font-bold'>Generate a new color palette</div>
            <div className='text-sm'>Elevate your creativity with this Color Palette app! Generate five new colors with each click, lock your favorites, and easily copy their values.  </div>
            <div className='sm:mt-6'>
                <div className='mt-6'>
                    <ArrowButton />

                </div>

            </div>
        </div>
        <div className='flex justify-center w-full'>
            <img className='w-96' src={Bytes4Coolors} alt='Colors picture' />
        </div>
    </div>
}