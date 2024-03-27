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
            content: 'I\'m your go-to person for React.js frontend development. I specialize in crafting sleek and user-friendly interfaces that pack a punch. Let\'s collaborate and turn your web dreams into reality!'
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
        <div id='skills'>
            <div className='text-orange font-bold mb-6 mt-10 text-3xl lg:text-4xl lg:mb-20'>SkillSet<span className='text-white'>.</span></div>
            <div className='flex flex-wrap justify-around gap-3'>
            {renderedData}
            </div>
        </div>
    )
}