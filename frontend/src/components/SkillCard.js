export const SkillCard = ({icon, title, content}) => {
    return <div className='flex flex-col gap-2 w-full h-96 p-4 bg-contrast lg:w-96 lg:h-96 lg:mb-10 md:w-96 md:h-96 md:mb-10'>
        <div className='pb-3'>
        <img className='w-20 mb-6' src={icon} alt='card icon'/>

        </div>
        <div className='text-xl font-bold '>{title}</div>
        <div className='text-lg font-normal'>{content}</div>
    </div>
}