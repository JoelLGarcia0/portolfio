import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { portfolio } from '@/public/assests'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'

const Projects = () => {
  return (
<section id="project" className='max-w-container mx-auto lgl:px-20 py-24 scroll-mt-20' >
    <SectionTitle title="Projects I Have Worked On" titleNo=".02" />  
    <div className='w-full flex flex-col items-center justify-between gap-28 mt-5'>
    {/* Project 1 */}
    <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>

        <div className='flex flex-col xl:flex-row gap-6'>
           <a
                className='w-full h-auto relative group' 
                href="https://www.joellgarcia.com" target="_blank"> 
        
                <div>
                
                <Image className="w-full h-full object-contain" 
                src={portfolio}
                alt="portfoliopic"
                />

                </div>

                 
 
            </a>
            <div className='w-full xl-w-1/2 flex flex-col gap-6 lgl:justify-between 
            items-end text-right xl:-ml-16 z-10'>


            <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project
            </p>

             <h3 className='text-2xl font-bold'> Portfolio Website
             </h3>

             <p className='bg-[#161616] text-sm md-text-base p-2 md:p-6 rounded-md'>
            A showcase of my Next.js, React, Typscript, and Javascript skills. Get to know me and some of 
            the stuff i have worked on. Contact me via any of my pages or Email 
            </p>

                <ul className='text-xs md:text:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>   
                     <li>Nextjs</li>
                     <li>React</li>
                      <li>Typescript</li>
                      <li>Tailwindcss</li>
                     <li>Vercel</li>
                </ul>


            <div className='text-2xl flex gap-4'>   
                <a
                className='hover:text-textGreen duration-300'
                href="https://github.com/JoelLGarcia0"
                target= "_blank">
                <TbBrandGithub />
                </a>
                <a
                className='hover:text-textGreen duration-300'
                href="https://www.joellgarcia.com"
                target= "_blank">
                <RxOpenInNewWindow />
                </a>
              </div>
            </div>
            </div> 
        </div>
        </div>
</section>
  )
}

export default Projects