export const TechCard = ({logo, skill,alt}) => {
    return <div className="w-20 h-20 flex flex-col justify-between items-center mb-2 bg-contrast">
        <img className="w-8 pt-3 pb-3" src={logo} alt={alt}/>
        <div className='flex items-center justify-center pb-2 text-xs'>
            {skill}
        </div>
    </div>
}