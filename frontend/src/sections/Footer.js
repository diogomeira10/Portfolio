import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export function Footer() {
  return (
    <div className='rounded-t-full h-20 flex gap-2 flex-col justify-center bg-contrast items-center'>
      <div className='flex justify-around w-28'>
        <a href='https://www.linkedin.com/in/diogomeira10/' rel="noopener noreferrer" target="_blank" ><FaLinkedin className='text-3xl hover:text-orange duration-300 hover:cursor-pointer ' /></a>
        <a href='https://github.com/diogomeira10' rel="noopener noreferrer" target="_blank"><FaGithubSquare className='text-3xl hover:text-orange duration-300 hover:cursor-pointer'/></a>
      </div>
      <div className='text-xs font-light'>Made by Diogo Meira</div>
    </div>
  );
}

