import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import profileImage from '../public/images/profile.png'

type Props = {
    directionLeft: boolean
}

const Skill = (props: Props) => {
  return (
    <div className='group relative flex 
    cursor-pointer'>
        <motion.div 
          initial={{
            x: props?.directionLeft ? -200 : 200,
            opacity: 0
          }}
          whileInView={{ opacity:1, x:0}}
          transition={{duration:1}}
        >
            <Image src={profileImage} alt='skill'
              className='rounded-full border border-gray-500
               object-cover w-24 h-24 xl:w-32 xl:h-32 filter
                group-hover:grayscale transition-duration-300 ease-in-out'
            />
        </motion.div>
        <div className='absolute rounded-full opacity-0
         group-hover:opacity-60
             transition-duration-300 ease-in-out hover:bg-white
              h-24 w-24 xl:w-32 xl:h-32'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>100%</p>
                </div>
            </div>
        
    </div>
  )
}

export default Skill