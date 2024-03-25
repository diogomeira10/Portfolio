export const SkillCard = ({icon, title, content}) => {
    return <div className='flex flex-col gap-2 w-full h-96 p-4 bg-contrast'>
        <div className='pb-3'>
        <img className='w-20 mb-6' src={icon} />

        </div>
        <div className='text-xl font-bold '>{title}</div>
        <div className='text-lg font-normal'>{content}</div>
    </div>
}