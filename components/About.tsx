'use client'
import Image from 'next/image'
import React from 'react';
import {motion} from 'framer-motion';
import profileImage from '../public/images/profile.png';

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div className='flex flex-col text-center 
     md:text-left relative h-screen md:flex-row 
      px-10 justify-evenly items-center'
     initial={{ opacity: 0}}
     whileInView={{opacity: 1}} 
     transition={{duration: 1.5}}
     >
       <h3 className='absolute top-24 uppercase 
       tracking-[20px] text-gray-500 text-2xl
        text-center md:text-center'
        >
          About
        </h3>
        
        <motion.div
            initial={{
                x:-200,
                opacity: 0
            }}
            whileInView={{x: 0, opacity: 1}}
            viewport={{once: true}} // done only once
            transition={{duration: 1.2}}
            className=' mt-5 md:w-64 md:h-96
             p-0 '
        >
            <Image 
             src={profileImage} alt='aboutProfile'
              className='-mb-20 md:mb-0 flex-shrink-0 
              w-36 h-36 rounded-full object-cover 
              md:rounded-lg md:w-64 
              md:h-96 xl:w-[300px] xl:h-[400px]' />
        </motion.div>
        <div className='space-y-10 px-0 md:px-2 '>
            <h4 className='text-2xl text-semibold'>Here is a{" "} 
             <span className='underline
              decoration-[#F7AB0A]/50'>little</span>
                {" "}background</h4>
               <p className='text-base md:w-[500px] 
               xl:w-[700px]'>
                I am a passionate and detail-oriented MERN full stack
                 developer with one year of hands-on experience in 
                  developing, and deploying robust web applications. 
                  Proficient in MongoDB, Express.js, React, and Node.js.
                My journey in the tech industry has honed my skills in both 
                frontend and backend development, allowing me to deliver 
                comprehensive solutions that meet client needs and industry
                standards. With a strong foundation in JavaScript and a 
                keen eye for UI/UX design, I am committed to continuous learning
                 and contributing to innovative projects that make a real impact.
               </p>
        </div> 

     </motion.div>

    // <div className='relative flex justify-evenly '>
    //     <p className='absolute bg-[#ffffff] top-24'>sjddvnive</p>
    // </div>
  )
}

export default About
