export const SkillCard = ({icon, title, content}) => {
    return <div className='flex flex-col gap-2 w-full h-96 p-4 bg-contrast lg:w-96 lg:h-96 lg:mb-10 md:w-96 md:h-96 md:mb-10 hover:scale-105 transition-transform duration-300'>
        <div className='pb-3'>
        <img className='w-20 mb-6' src={icon} alt='card icon'/>

        </div>
        <div className='text-xl font-bold '>{title}</div>
        <div className='text-lg font-normal'>{content}</div>
    </div>
}

export const SkillCards = ({ icon, title, content }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg transform hover:scale-10 transition-transform duration-300">
            <img className="w-20 h-20 mx-auto mb-6" src={icon} alt="card icon" />
            <div className="text-xl font-bold">{title}</div>
            <div className="text-lg font-normal">{content}</div>
        </div>
    );
};
