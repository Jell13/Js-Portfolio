"use client"

import React from 'react'
import TransitionEffect from '../components/TransitionEffect'
import {motion} from 'framer-motion'
import Contacts from '../components/Contacts'

const Contact = () => {

  return (
    <>
      <TransitionEffect/>
      <div className='w-full h-full flex flex-col items-center'>
        <motion.h1
        initial={{y:"10vh"}}
        animate={{y:"0%"}}
        transition={{duration: 1.5}}
        className='text-4xl md:text-7xl font-bold mt-20'>Contact Me</motion.h1>
        <Contacts/>
      </div>
    </>
  )
}

export default Contact
