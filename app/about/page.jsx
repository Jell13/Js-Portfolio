"use client"

import React from 'react'
import TransitionEffect from '../components/TransitionEffect'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Hero from '../../public/hero.jpg'
import Skills from '../components/Skills'
import Experience from '../components/Experience'

const About = () => {
  return (
    <>
      <TransitionEffect/>
      <div className='h-full w-full flex flex-col items-center p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48'>
        <motion.div
        initial={{y:"-200vh"}}
        animate={{y:"0%"}}
        transition={{duration:1}} className='text-7xl font-bold flex self-center'>
          Passion Fuels Purpose!
        </motion.div>

        {/* Biography */}
        <div className='mt-20 grid grid-cols-6 self-start'>
          <div className=' col-span-3'>
            <h1 className='text-xl font-semibold mb-10'>BIOGRAPHY</h1>

            {/* Text Container */}
            <p>
            Hello, I'm Jason, a proficient web developer experienced in both front-end and back-end development. I strive to create clients' visions using my dedication to problem solving in coding.
            </p>
            <p className='mt-4'>
              I approach challenges like an intricate puzzle. I carefully piece together each component to carefully craft the desired output. This approach not only increases efficiency but also makes the process more enjoyable and fullfilling.
            </p>
            <p className='mt-4'>
              I am deeply passionate about creating interactive experiences accessible on different devices. Eager to find opportunities to continue growing my skills and expertise in the future.
            </p>
          </div>
          <div className='col-span-3 ml-8 relative h-max rounded-2xl border-2 border-solid border-black'>
            <Image src={Hero} className='w-full h-auto rounded-2xl'></Image>      
          </div>
          
        </div>

        {/* Skills */}
        <div className='w-full'>
          <Skills/>
        </div>
          
        <div className='w-full'>
          <Experience/>
        </div>
      </div>
    </>
  )
}

export default About
