import { Button } from "../components/Button"

export function NavBar () { 


    return <div className="pt-4 flex justify-between lg:px-6">
        <div className='text-2xl font-bold lg:text-3xl'>
            Portfolio<span className='text-orange'>.</span>
        </div>
        <div className='flex gap-3 text-sm items-center sm:gap-8 lg:gap-16 lg:text-lg 2xl:gap-28 z-0'>
            <a className='' href='#skills'>Skills</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'><Button>Contact Me</Button></a>
        </div>
    </div>
}