import { Button } from "../components/Button"

export function NavBar () { 
    return <div className="pt-4 flex justify-between lg:px-6">
        <div className='text-2xl font-bold lg:text-3xl'>
            Portfolio<span className='text-orange'>.</span>
        </div>
        <div className='flex gap-3 text-sm items-center sm:gap-8 lg:gap-16 lg:text-lg'>
            <a href=''>Home</a>
            <a href=''>Skills</a>
            <a href=''>Projects</a>
            <a href=''><Button>Contact Me</Button></a>
        </div>
    </div>
}