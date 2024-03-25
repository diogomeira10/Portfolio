export const SkillCard = ({icon, title, content}) => {
    return <div className='flex flex-col gap-2 w-48 h-48 p-2 bg-contrast'>
        <div className='pb-3'>
        <img className='w-10' src={icon} />

        </div>
        <div className='text-xs font-bold'>{title}</div>
        <div className='text-xs font-light'>{content}</div>
    </div>
}