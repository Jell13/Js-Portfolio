import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

const Logo = () => {

  const MotionLink = motion(Link);
   
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink 
      whileHover={
        {backgroundColor:["#121212", "#00FFFF","#800080","#FFFF00", "#121212"],
        transition:{duration:1, repeat:Infinity}
      }
        
      }
      className='w-16 h-16 bg-dark text-light border-2 border-solid border-transparent dark:border-light flex items-center justify-center rounded-full text-2xl font-bold hover:bg-blue-950 duration-300' href="/">
        JS
      </MotionLink>
    </div>
  )
}

export default Logo
