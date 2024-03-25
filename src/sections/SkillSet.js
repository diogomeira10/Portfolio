import { SkillCard } from "../components/SkillCard"


//assets
import BackendIcon from '../assets/SkillSet/BackendIcon.svg'
import FrontendIcon from '../assets/SkillSet/React-Icon.svg'
import GithubIcon from '../assets/SkillSet/Github-Icon.svg'



export function SkillSet() {

    const data = [
        {
            icon: FrontendIcon,
            title: 'Frontend Development',
            content: 'I specialize in sleek and user-friendly React.js frontend development, turning your web dreams into reality!'
        },
        {
            icon: BackendIcon,
            title: 'Backend Development',
            content: 'Crafting robust backend solutions for web applications using MERN. Let\'s turn your ideas into reality with efficient code.'
        },
        {
            icon: GithubIcon,
            title: 'Git Version Control',
            content: 'With expertise at managing code repositories efficiently. Ready to optimize your development workflow and ensure seamless versioning and coordination.'
        },
    ]


    const renderedData = data.map((element,index) => {
        return <SkillCard key={index} icon={element.icon} title={element.title} content={element.content} />

    })


    return (
        <div>
            <div className='text-orange font-bold mb-6 mt-10 text-xl'>SkillSet<span className='text-white'>.</span></div>
            <div className='flex flex-wrap justify-around gap-3'>
            {renderedData}
            </div>
        </div>
    )
}