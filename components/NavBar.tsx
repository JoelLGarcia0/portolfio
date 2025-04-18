import Image from 'next/image'
import { logo2 } from '@/public/assests'
import Link from 'next/link'
import { motion } from "motion/react"
import React, { useRef, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { TbBrandGithub } from 'react-icons/tb'
import { SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl'


const NavBar = () => {

    const ref = useRef<HTMLDivElement | null>(null);
    const[showMenu,setShowMenu] = useState(false);

    const handleScroll =(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
        e.preventDefault();
        setShowMenu(false);
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

    function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (e.target instanceof Node && ref.current?.contains(e.target)) {
            setShowMenu(false);
        }
    }



  return (

    //first div is the initial container
    <div className='w-full h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
        {/* second container div */}
        <div className=' max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between '>  
            {/* image container */}
            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration: 5 }}   
            >
                <Image className="w-20" src={logo2} alt="logo" />
            </motion.div>

            {/* hidden div */}
            <div className='hidden mdl:inline-flex items-center gap-7'>

                {/* start of list */}
                <ul className='flex text-[13px] gap-7'>
                    {/* home */}
                    <Link 
                    href="#home" 
                    onClick={handleScroll}
                    className='flex items-center gap-1 font-medium text-textDark 
                    hover:text-textGreen cursor-pointer duration-300 nav-link'>
                    <motion.li
                        initial={{y: -10, opacity:0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: .1 }} 
                    >
                        Home
                    </motion.li>
                    </Link>

                    {/* about */}
                    <Link 
                    href="#about" 
                    onClick={handleScroll}
                    className='flex items-center gap-1 font-medium text-textDark
                     hover:text-textGreen cursor-pointer duration-300 nav-link'>
                    <motion.li
                    initial={{y: -10, opacity:0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: .1, delay: 0.1}}
                    >
                    <span className='text-textGreen'>.01</span> About
                    </motion.li>
                    </Link>

                    {/* project */}
                     <Link
                      href="#project" 
                      onClick={handleScroll}
                      className='flex items-center gap-1 font-medium text-textDark
                     hover:text-textGreen cursor-pointer duration-300 nav-link'>
                    <motion.li
                    initial={{y: -10, opacity:0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: .1, delay: 0.4}}
                    >
                    <span className='text-textGreen'>.02</span> Projects
                    </motion.li>
                    </Link>

                    {/* contact */}
                    <Link 
                    href="#contact" 
                    onClick={handleScroll}
                    className='flex items-center gap-1 font-medium text-textDark
                     hover:text-textGreen cursor-pointer duration-300 nav-link'>
                    <motion.li
                    initial={{y: -10, opacity:0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: .1, delay: 0.8}}
                    >
                    <span className='text-textGreen'>.03</span> Contact
                    </motion.li>
                    </Link>
                    </ul>
             <a href="/joel_resume.pdf" target="_blank" rel="noopener noreferrer">
             <motion.button
                 initial={{y: -10, opacity:0}}
                 animate={{y: 0, opacity: 1}}
                 transition={{duration: .1, delay: 1.2}}
                className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'
                >
                    Resume
                </motion.button>
             </a>
                
            </div> 
            {/* small icon section */}
            <div 
                onClick={()=>setShowMenu(true)}
                className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform 
                group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
                 <span className='w-full h-[2px] bg-textGreen inline-flex transform 
                 translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
                 <span className='w-full h-[2px] bg-textGreen inline-flex transform 
                translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
                
            </div>
            {showMenu && (
                    <div 
                    ref={(node) => {(ref.current = node)}}
                    onClick={handleClick}
                    className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
                    >
                    <motion.div 
                    initial={{x: 20, opacity:0}}
                    animate={{x: 0, opacity: 1}}
                     transition={{duration: .1}}
                    className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-black flex flex-col items-center px-4 py-10 relative"
                    >
                    <MdOutlineClose 
                        onClick={()=> setShowMenu(false) }
                        className='text-3xl text-textGreen cursor-pointer hover:text-white-500 absolute top-4 right-4' />
            
            
              <div className='flex flex-col text-base gap-7 items-center'>
                <ul className='flex flex-col text-base gap-7 items-center'>
                    {/* home small menu */}
                    <Link 
                    href="#home" 
                    onClick={handleScroll}
                    className='flex items-center gap-1 font-medium text-textDark 
                    hover:text-textGreen cursor-pointer duration-300 nav-link'>
                    <motion.li
                        initial={{x: 20, opacity:0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{

                            duration: .2,
                            delay: 0.1,
                            ease: "easeIn" }} 
                    >
                        Home
                    </motion.li>
                    </Link>

                    {/* about small menu */}
                    <Link 
                    href="#about" 
                    onClick={handleScroll}
                    className='flex items-center gap-1 font-medium text-textDark
                     hover:text-textGreen cursor-pointer duration-300 nav-link'>
                    <motion.li
                    initial={{x: 20, opacity:0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{

                        duration: .2,
                        delay: 0.2,
                        ease: "easeIn" }} 
                    >
                    <span className='text-textGreen'>.01</span> About
                    </motion.li>
                    </Link>

                    {/* project small menu*/}
                     <Link
                      href="#project" 
                      onClick={handleScroll}
                      className='flex items-center gap-1 font-medium text-textDark
                     hover:text-textGreen cursor-pointer duration-300 nav-link'>
                    <motion.li
                    initial={{x: 20, opacity:0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{

                        duration: .2,
                        delay: 0.3,
                        ease: "easeIn" }} 
                    >
                    <span className='text-textGreen'>.02</span> Projects
                    </motion.li>
                    </Link>

                    {/* contact small menu*/}
                    <Link 
                    href="#contact" 
                    onClick={handleScroll}
                    className='flex items-center gap-1 font-medium text-textDark
                     hover:text-textGreen cursor-pointer duration-300 nav-link'>
                    <motion.li
                    initial={{x: 20, opacity:0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{

                        duration: .2,
                        delay: 0.4,
                        ease: "easeIn" }} 
                    >
                    <span className='text-textGreen'>.03</span> Contact
                    </motion.li>
                    </Link>
                         </ul>

                         <a href="/joel_resume.pdf" target="_blank" rel="noopener noreferrer">
                        <motion.button
                         initial={{opacity:0}}
                         animate={{opacity: 1}}
                         transition={{delay: .4, ease: "easeIn"}}
                         className='w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen
                         hover:bg-hoverColor duration-300'
                         >
                         Resume
                         </motion.button>
                         </a>

            {/*  Icons div in small menu*/}
            <div className='flex gap-4'>
            <motion.a 
            initial={{y: 20, opacity:0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: 1, ease: "easeIn"}}
            href="https://github.com/JoelLGarcia0" target='_blank'>
            <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen
             text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer 
             hover:-translate-y-2 transition-all duration-300'>
                <TbBrandGithub/>
            </span>
            </motion.a>
            <motion.a 
            initial={{y: 20, opacity:0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: 1, ease: "easeIn"}}
            href="https://www.linkedin.com/in/joel-garcia-69163a20b/" target='_blank'>
            <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen
             text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer 
             hover:-translate-y-2 transition-all duration-300'>
                <SlSocialLinkedin/>
            </span>
            </motion.a>
            <motion.a 
            initial={{y: 20, opacity:0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: 1, ease: "easeIn"}}
            href="https://www.instagram.com/joel.lgarcia/" target='_blank'>
            <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen
             text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer 
             hover:-translate-y-2 transition-all duration-300'>
                <SlSocialInstagram/>
                </span>
                </ motion.a>
            </div>
            </div>
            <motion.a
            initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{delay: 1.2, ease: "easeIn"}}
            className='text-sm w-72 tracking-widest text-textGreen text-center mt-4'
            href="mailto:joellorenzogarcia0@gmail.com">
            <p>joellorenzogarcia0@gmail.com/</p>
            </motion.a>
        </motion.div>
        </div>
      )}
    </div>  
    </div>
  )
}

export default NavBar