'use client'
import Image from 'next/image'
import React from 'react';
import profileImage from '../public/images/profile.png';
import {motion} from 'framer-motion';


type Props = {}

const Projects = (props: Props) => {
  const projects = [1, 2,3 , 4, 5]
  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5}}
    
    className='flex flex-col text-center 
     md:text-left relative h-screen md:flex-row 
      px-10 justify-evenly items-center'>
        <h3 className='absolute top-24 uppercase 
       tracking-[20px] text-gray-500 text-2xl
        text-center md:text-center
        '>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll
         overflow-y-hidden snap-x snap-mandatory z-20 justify-center'>
          {projects.map(project =>(
            <div key={project} className='w-screen flex-shrink-0 snap-center flex flex-col 
            space-y-5 items-center justify-center p-20 md:p-44 h-screen mt-20 '>
                <motion.div 
                initial={{ y: -300, opacity: 0}}
                whileInView={{y:0, opacity: 1}}
                transition={{duration: 1.5}}
                >

                <Image src={profileImage} alt='profile' className='h-40 w-40' />
                </motion.div>
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                  <h4 className='text-4xl font-semibold text-center'>
                    <span className='underline decoration-[#F7AB0A]/50'>Case Study 1 of 3:</span>
                     Netflix Clone
                  </h4>
                  <p className='text-lg text-center md:text-left'>cbdjcbdssd vsjbbs cdsbbcshcsdv bcbsbiuvhishiuhi bsdjdbvjbsdv</p>
                </div>
            </div>
          ))}
        </div>

        <div className='w-full absolute top-[30%]
         bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>
        </div>
        
        </motion.div>
  )
}

export default Projects