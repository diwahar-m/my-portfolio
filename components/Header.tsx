"use client"

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return <header className="sticky top-0
   flex justify-between items-start max-w-7xl mx-auto z-20
    xl:items-center p-5">
    
      {/* SOCIAL ICONS */}
      <motion.div 
        initial={{
          x:-500,
          opacity:0, 
          scale:0.5
        }}
        animate={{
          x:0, 
          opacity: 1, 
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
         className="flex items-center">
        <SocialIcon url="https://www.youtube.com" 
          bgColor="transparent" fgColor="gray"/>
        <SocialIcon url="https://www.youtube.com" 
          bgColor="transparent" fgColor="gray"/>
        <SocialIcon url="https://www.youtube.com" 
          bgColor="transparent" fgColor="gray"/>
      </motion.div>

      <motion.div
      initial={{
          x:500,
          opacity:0, 
          scale:0.5
        }}
        animate={{
          x:0, 
          opacity: 1, 
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
       className="flex items-center text-gray-300 cursor-pointer">
        <SocialIcon className="cursor-pointer" network="email"
         bgColor="transparent" fgColor="gray"/>
         <p className="uppercase hidden 
         md:inline-flex text-sm text-grey-400">
          Get In Touch</p>

      </motion.div>
    
  </header>;
};

export default Header;
