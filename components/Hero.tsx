'use client'
import React from 'react';
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';
import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../public/images/profile.png';

type Props = {}

const Hero = (props: Props) => {

    const [text, count] = useTypewriter({
        words:[
            "Hi, This is Diwahar",
            "MERN Stack Developer",
            "<ButLovesToCodeMore/>"
        ],
        loop: true, 
        delaySpeed: 2000,
    })

  return (
    <div className='h-screen flex flex-col space-y-8
     items-center
     justify-center text-center overflow-hidden'>
      <BackgroundCircle />
      <Image className='relative rounded-full h-32 w-32
       mx-auto object-cover'
        src={profileImage} 
        alt='profile' 
      />
        <div className='z-20'>
          <h2 className='text-sm uppercase text-grey-500 
          pb-2 tracking-[15px]'>Software Engineer</h2>
          <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A'/>
          </h1>
          <div className='pt-5'>
            <Link href="#about">
              <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
              <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
              <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
              <button className='heroButton'>Projects</button>
            </Link>
            
            
          </div>
        </div>
    </div>
  )
}

export default Hero