
//assets
import IntroImage from '../assets/Intro-Image.svg'

export function Intro() {
    return <div className='pt-10 flex flex-col items-center lg:flex-row lg:pt-0 lg:justify-between xl:h-96 xl:pt-64 lg:mb-20 lg:px-10 xl:mb-40'>

        <div className='text-xs flex flex-col gap-3 mt-10 text-center lg:text-left lg:pb-10 lg:pl-10'>
            <div className='font-bold text-3xl lg:text-4xl md:text-4xl'>I'm Diogo Meira, a FullStack Developer</div>
            <div className='text-sm md:text-lg'>Turning ideas into reality by building beautiful websites</div>
            <div className='hidden sm:block text-center'>
                <div className='lg:flex'>

                </div>

            </div>
        </div>


        <div className="block lg:flex lg:w-3/4 lg:justify-center md:justify-center md:w-3/4">
            <img className='w-4/4 lg:w-4/4 ' src={IntroImage} alt="Intro" />
        </div>
    </div>
}
