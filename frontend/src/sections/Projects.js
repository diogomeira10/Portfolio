import { HashTraining } from "../components/Hashtraining"
import {BytesFourCoolors} from '../components/Bytes4Coolors'
import { TimeTrack } from "../components/TimeTrack"


export function Projects() {

    return <div id='projects'>
        <div className='text-orange font-bold mb-10 mt-10 text-3xl lg:text-4xl lg:mb-20'>Projects<span className='text-white'>.</span></div>
        <div className=''>
            <HashTraining />
            <TimeTrack />
            <BytesFourCoolors />
        </div>
    </div>
}