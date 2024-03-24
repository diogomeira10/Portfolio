import { Button } from "../components/Button"

export function NavBar () { 
    return <div className="pt-4 flex justify-between">
        <div className='text-2xl font-bold'>
            Portfolio<span className='text-orange'>.</span>
        </div>
        <div className='flex gap-3 text-sm items-center'>
            <a href=''>Home</a>
            <a href=''>Skills</a>
            <a href=''>Projects</a>
            <a href=''><Button>Contact Me</Button></a>
        </div>
    </div>
}