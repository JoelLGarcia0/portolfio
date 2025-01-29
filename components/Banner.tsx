import React, { useState } from 'react'
import {motion} from "framer-motion";

const Banner = () => {

 const letters = "full-stack developer.".split(""); // Split "web developer" into an array of letters

 const handleScroll =(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
     e.preventDefault();
     const href= e.currentTarget.href;
     const targetId = href.replace(/.*\#/,"");
     const elem = document.getElementById(targetId);
     elem?.scrollIntoView({
         behavior: "smooth"
     })
     //Update the class name of the clicked link 
     const links = document.querySelectorAll(".nav-link")
     links.forEach((link) => {
       link.classList.remove("active");

     });
     e.currentTarget.classList.add("active")

 };
  return (
    <section id="home"
    className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 scroll-mt-20'
    >    
        {/* first line */}
        <motion.h3 
          initial={{y: 10, opacity:0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: .5, delay: 0.6 }} 
        className='text-lg font-titleFont tracking-wide text-textGreen '>Hi, my name is
        </motion.h3>
        {/* second line */}
        <motion.h1
         initial={{y: 10, opacity:0}}
         animate={{y: 0, opacity: 1}}
         transition={{duration: .5, delay: 0.6 }} 
         className='text-4xl lgl:text-6xl font-semibold flex flex-col'
        >
        Joel Garcia. 

        {/* third line */}
        <motion.span 
           initial={{ y: 10, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{
             duration: 0.8,
             delay: 1,
             ease: "easeInOut",
           }}
        className='text-textDark mt-2 lgl:mt-4'> 
        I am a {" "}
        <span className="flex mt-2">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                className="text-textGreen font-bold"
                whileHover={{ 
                    y: -5, 
                    rotate: 10, 
                    color: "#FFFFFF" }
                }
                transition={{ type: "spring", stiffness: 300 }}
              >
                {letter === " " ? "\u00A0" : letter} {/* Preserve spaces */}
              </motion.span>
            ))}
          </span>
        </motion.span>
      </motion.h1>

        {/* paragraph */}
        <motion.p
        initial={{y: 10, opacity:0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: .5, delay: 0.6 }}
        className='text-base md:max-w-[650px] text-textDark font-medium'
        >
        {" "}
        I am a recent FIU graduate with a Bachelor's degree in Computer Science, skilled in front-end and back-end development.
         My experience includes Agile software development, REST APIs, SQL, and database management with tools like MySQL and 
         MongoDB. I’ve also worked with Docker and have leveraged my business and management background to lead teams and 
         enhance technical projects.  {" "}
        </motion.p>

        {/* project button */}
        <a
        href="#project"
        onClick={handleScroll}>
        <motion.button
          initial={{y: 10, opacity:0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: .5, delay: 0.9 }}
         className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen 
         tracking-wide hover:bg-hoverColor duration-300'>Check out my Projects!
        </motion.button>
        </a>
    </section>
  )
}

export default Banner