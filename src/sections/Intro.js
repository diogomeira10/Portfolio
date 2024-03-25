import { Button } from "../components/Button"

//assets
import IntroImage from '../assets/Intro-Image.svg'

export function Intro() {
    return <div className='pt-10 flex flex-col items-center '>

         <div className='text-xs flex flex-col gap-3 mt-10 text-center'>
            <div className='font-bold text-3xl'>I'm Diogo Meira, a FullStack Developer</div>
            <div className='text-sm'>Turning ideas into reality by building beautiful websites</div>
            <div className='hidden sm:block text-center'>
            <Button classNames='w-24'>Get in Touch</Button>
            </div>
        </div>

        
        <div className="block">
            <img className='w-4/4' src={IntroImage} alt="Intro Image" />
        </div>
    </div>
}
