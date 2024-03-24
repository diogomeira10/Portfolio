import { Button } from "../components/Button"

//assets
import IntroImage from '../assets/Intro-Image.svg'

export function Intro () { 
    return <div className='pt-10 flex'>
        <div className='text-xs'>
            <div className='font-bold'>I'm Diogo Meira, a FullStack Developer</div>
            <div>Turning ideas into reality by building beautiful websites</div>
            <Button>Get in Touch</Button>
        </div>
        <div>
            <img src={IntroImage} />
        </div>
        </div>
}