'use client'
import React from 'react'
import {motion} from 'framer-motion';
import Skill from './Skill';


type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div className=' flex flex-col text-center 
     md:text-left relative h-screen md:flex-row 
      xl:px-10 justify-center items-center mx-auto xl:space-y-0'>
        <h3 className='absolute top-24 uppercase 
       tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>
        <h3 className='absolute top-36 uppercase tracking-[3px]
         text-gray-500 text-sm'>
          Hover over a skill for current proficiency</h3>
        <div className='grid grid-cols-4 gap-5'>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </div>
    </motion.div>
  )
}

export default Skills