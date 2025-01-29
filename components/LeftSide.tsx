import React from 'react'
import { TbBrandGithub } from "react-icons/tb";
import {SlSocialLinkedin,SlSocialInstagram } from "react-icons/sl";

const LeftSide = () => {
  return (
    // social media icons and links 
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
        <div className='flex flex-col gap-4'>
            <a href="https://github.com/JoelLGarcia0" target='_blank'>
            <span className='w-10 h-10 text-lg bg-hoverColor rounded-full inline-flex items-center
             justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <TbBrandGithub/>
            </span>
            </a>
            <a href="https://www.linkedin.com/in/joel-garcia-69163a20b/" target='_blank'>
            <span className='w-10 h-10 text-lg bg-hoverColor rounded-full inline-flex items-center
             justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <SlSocialLinkedin/>
            </span>
            </a>
            <a href="https://www.instagram.com/joel.lgarcia/" target='_blank'>
            <span className='w-10 h-10 text-lg bg-hoverColor rounded-full inline-flex items-center
             justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <SlSocialInstagram/>
            </span>
            </a>
        </div>
        {/* line after social icons */}
        <div className='w-[2px] h-32 bg-textDark '>
        </div>
    </div>
  )
}

export default LeftSide