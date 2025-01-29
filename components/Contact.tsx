import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className='max-x-contentContainer mx-auto py-10 xl:py-32 flex 
    flex-col gap-4 items-center justify-between scroll-mt-20'>
        <p className='font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide'>
            .03 What&apos;s Next?
        </p>
        <h2 className='font-titleFont text-5xl font-semibold'> Get In Touch</h2>
        <p className='max-w-[600px] text-center text-textDark'>I am currently looking for opportunities and I check my 
        email regularly. If you have any questions or want to reach out to me directly, please do not hesitate to do so. </p>
        
     <a href="mailto:joellorenzogarcia0@gmail.com"
     >
        <button className=' w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider
        rounded-md hover:bg-hoverColor duration-300'>Message Me!</button>
    </a>
    </section>
  )
}

export default Contact