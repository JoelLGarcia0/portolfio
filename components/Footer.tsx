import React from 'react'
import { SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl'
import { TbBrandGithub } from 'react-icons/tb'

const Footer = () => {
  return (
    <div className='hidden md:inline-flex xl:hidden item-center justify-center w-full py-6 gap-4'>
        <a href="https://github.com/JoelLGarcia0" target='_blank'>
            <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen
             text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer 
             hover:-translate-y-2 transition-all duration-300'>
                <TbBrandGithub/>
            </span>
            </a>
            <a href="https://www.linkedin.com/in/joel-garcia-69163a20b/" target='_blank'>
            <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen
             text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer 
             hover:-translate-y-2 transition-all duration-300'>
                <SlSocialLinkedin/>
            </span>
            </a>
            <a href="https://www.instagram.com/joel.lgarcia/" target='_blank'>
            <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen
             text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer 
             hover:-translate-y-2 transition-all duration-300'>
                <SlSocialInstagram/>
            </span>
            </a>
    </div>
  )
}

export default Footer