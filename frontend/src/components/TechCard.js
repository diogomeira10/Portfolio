export const TechCard = ({logo, skill,alt}) => {
    return <div className="w-28 h-28 flex flex-col justify-between items-center mb-5 bg-contrast hover:animate-bounce">
        <img className="w-14 pt-6 pb-3" src={logo} alt={alt}/>
        <div className='flex items-center justify-center pb-2 text-xs'>
            {skill}
        </div>
    </div>
}
