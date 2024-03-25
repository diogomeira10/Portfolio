import { TechCard } from '../components/TechCard'


//assets
import CSS from '../assets/TechStack/CSS-Logo.svg'
import Express from '../assets/TechStack/Express-Logo.svg'
import Github from '../assets/TechStack/Github-Logo.svg'
import HTML from '../assets/TechStack/HTML-Logo.svg'
import JS from '../assets/TechStack/JS-Logo.svg'
import MongoDB from '../assets/TechStack/MongoDB-Logo.svg'
import Tailwind from '../assets/TechStack/Tailwind-Logo.svg'
import ReactLogo from '../assets/TechStack/React-Logo.svg'

export function TechStack() {


    const stack = [
        {
            logo: HTML,
            skill: 'HTML',
            alt: 'HTML Logo'
        },
        {
            logo: CSS,
            skill: 'CSS',
            alt: 'CSS Logo'
        },
        {
            logo: JS,
            skill: 'Javascript',
            alt: 'JavaScript Logo'
        },
        {
            logo: ReactLogo,
            skill: 'React',
            alt: 'React Logo'
        },
        {
            logo: Tailwind,
            skill: 'TailwindCSS',
            alt: 'TailwindCSS Logo'
        },
        {
            logo: Express,
            skill: 'Express.js',
            alt: 'Express.js Logo'
        },
        {
            logo: MongoDB,
            skill: 'MongoDB',
            alt: 'MongoDB Logo'
        },
        {
            logo: Github,
            skill: 'Github',
            alt: 'Github Logo'
        },
    ];
    
    

    const renderedStack = stack.map((skill, index) => {
        return <TechCard key={index} logo={skill.logo} skill={skill.skill} alt={skill.alt}/>
    })





    return <div>
        <div className='text-orange font-bold mb-10 mt-10 text-3xl'>TechStack<span className='text-white'>.</span></div>
        <div className='flex flex-wrap justify-around '>
            {renderedStack}
        </div>
    </div>
}