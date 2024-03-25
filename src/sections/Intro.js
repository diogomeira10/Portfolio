import { Button } from "../components/Button"

//assets
import IntroImage from '../assets/Intro-Image.svg'

export function Intro () { 
    return <div className='pt-10 flex'>
        <div className='text-xs flex flex-col gap-3 mt-10'>
            <div className='font-bold text-lg'>I'm Diogo Meira, a FullStack Developer</div>
            <div>Turning ideas into reality by building beautiful websites</div>
                <Button classNames='w-24'>Get in Touch</Button>            
        </div>
        <div>
            <img className='w-96' src={IntroImage} />
        </div>
        </div>
}