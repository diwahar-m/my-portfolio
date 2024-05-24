
import Image from 'next/image';
import React from 'react';
import profileImage from '../public/images/profile.png';
import {motion} from 'framer-motion';

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg space-y-7 
     flex-shrink-0 w-[500px] 
     md:w-[600px] xl:w-[800px] snap-center
      bg-[#292929] p-10 
      opacity-40 hover:opacity-100
       cursor-pointer transition-opacity
        duration-200 overflow-hidden'>
      <motion.div 
       className='p-0' 
       initial={{y:-100, opacity:0}}
       whileInView={{opacity: 1, y:0}}
       transition={{duration:1.2}}
       viewport={{once: true}}
      >

        <Image
         src={profileImage} 
         alt='experienceProfile' 
         className='mx-auto w-32 h-32 
         rounded-full xl:w-[150px] 
         xl:h-[150px] 
         object-cover object-center'
         />
      </motion.div>
      <div className='px-0 md:px-18'>
        <h4 className='text-3xl font-light'>React Js Developer</h4>
        <p className='font-bold text-xl mt-1'>Cyces Innovation Labs</p>
        <div className='flex space-x-2 my-2'>
          <Image
         src={profileImage} 
         alt='experienceProfile' 
         className='h-10 w-10 rounded-full'
         />
          <Image
         src={profileImage} 
         alt='experienceProfile' 
         className='h-10 w-10 rounded-full'
         />
          <Image
         src={profileImage} 
         alt='experienceProfile' 
         className='h-10 w-10 rounded-full'
         />
        </div>
        <p className='uppercase py-5 text-gray-300'>Started work ... - Ended ...</p>

        <ul  className='list-disc
         space-y-4 ml-5 text-lg'>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard