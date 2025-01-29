import React from 'react'
import SectionTitle from './SectionTitle'
import { AiFillThunderbolt } from 'react-icons/ai'
import Image from 'next/image'
import { profileImg } from '@/public/assests'

const About = () => {

  return (
    <section id="about" className='max-w-containerSmall mx-auto py-10 lgl:py32 flex flex-col gap-8 scroll-mt-20'>
        {/* title component */}
    <SectionTitle title="About Me" titleNo=".01"/>  
    <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
        <p> Hello! My name is Joel Garcia. I enjoy sports, finance, and learning every aspect of building innovative and stylish 
            applications. I was always curious as a child about how things online were created, and that had carried over into 
            adulthood. That&apos;s how my journey began. In high school I took Web design courses, which I always loved. Eventually,
             I rediscovered my love for computers and dove into the <span className='text-textGreen'>Computer Science Program 
             at FIU </span>. From there, I started from the ground up and began learning things like Java, HTML, CSS and Computer 
             Architecture.
        </p>
        <p> 
        As I started developing my skills, building some backend applications, and learning about
         Agile software development, I submerged myself into trying to learn as much as possible in my downtime.
          I spearheaded a backend application in school that was able to perform CRUD functionality and connect to 
          a database that I created using MySQL. I was voted Scrum master by my peers, and made sure that the project 
          was completed, while also helping students that were having trouble completing their portion.
          <span className='text-textGreen'> I am an extremely motivated individual and have fully designated my time and 
          energy into learning as much as I can about web applications and web development, both on the front and back end.  </span> 
        </p>
        <p>
            Here are a few technologies i&apos;ve worked with recently:
        </p>
        <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-2'>
            <li className='flex items-center gap-2 hover:text-textGreen hover:underline'><span className='text-textGreen'><AiFillThunderbolt/></span> JavaScript</li>
            <li className='flex items-center gap-2 hover:text-textGreen hover:underline'><span className='text-textGreen'><AiFillThunderbolt/></span> Next.js</li>
            <li className='flex items-center gap-2 hover:text-textGreen hover:underline'><span className='text-textGreen'><AiFillThunderbolt/></span> React</li>
            <li className='flex items-center gap-2 hover:text-textGreen hover:underline'><span className='text-textGreen'><AiFillThunderbolt/></span> Node.js</li>
            <li className='flex items-center gap-2 hover:text-textGreen hover:underline'><span className='text-textGreen'><AiFillThunderbolt/></span> TypeScript</li>
            <li className='flex items-center gap-2 hover:text-textGreen hover:underline'><span className='text-textGreen'><AiFillThunderbolt/></span> MySQL</li>
            <li className='flex items-center gap-2 hover:text-textGreen hover:underline'><span className='text-textGreen'><AiFillThunderbolt/></span> Tailwindcss</li>
            <li className='flex items-center gap-2 hover:text-textGreen hover:underline'><span className='text-textGreen'><AiFillThunderbolt/></span> Java</li>
            <li className='flex items-center gap-2 hover:text-textGreen hover:underline'><span className='text-textGreen'><AiFillThunderbolt/></span> Springboot</li>
            <li className='flex items-center gap-2 hover:text-textGreen hover:underline'><span className='text-textGreen'><AiFillThunderbolt/></span> Docker</li>
            
        </ul>
        </div>
        <div className='w-full lgl:w-1/3 h-80 relative group'>
            <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
                <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
                    <Image className='rounded-lg h-full object-cover'
                    src={profileImg}
                    alt="profileImg" 
                    />
                </div>
            </div>
            <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md
                group-hover:-translate-x-2 group-hover:-translate-y-2 transiation-transform duration-300'> </div>
           </div>
        </div>
    </section>
  );
};

export default About