"use client"

import React from 'react'
import {delay, motion} from 'framer-motion'
import Image from 'next/image'
import Hero from '../../public/hero.jpg'
import Skills from '../components/Skills'
import Experience from '../components/Experience'

const About = () => {
  return (
    <>
      <div className='h-full w-full bg-light dark:bg-dark dark:text-white flex flex-col items-center mb-6 p-4'>
        <div className='text-4xl md:text-7xl mt-16 font-bold flex justify-center self-center p-4'>
          Passion Fuels Purpose!
        </div>

        {/* Biography */}
        <div className='mt-20 p-8 flex flex-col gap-5 md:flex-row self-start'>

          {/* Text Container */}
          <div className='md:w-1/2'>
            <h1 className='md:text-xl text-lg font-semibold mb-10'>BIOGRAPHY</h1>
            <p>
            Hello, I&apos;m Jason, a proficient web developer experienced in both front-end and back-end development. I strive to create clients&apos; visions using my dedication to problem solving in coding.
            </p>
            <p className='mt-4'>
              I approach challenges like an intricate puzzle. I carefully piece together each component to carefully craft the desired output. This approach not only increases efficiency but also makes the process more enjoyable and fullfilling.
            </p>
            <p className='mt-4'>
              I am deeply passionate about creating interactive experiences accessible on different devices. Eager to find opportunities to continue growing my skills and expertise in the future.
            </p>
          </div>
          <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.6, duration: 0.4, ease: "easeInOut"}}} className='md:w-1/2 md:ml-8 relative flex justify-center h-max rounded-2xl border-2 border-solid border-dark'>
            <img src={"/hero.jpg"} alt='hero' className='w-full h-auto rounded-2xl'/>     
          </motion.div>
          
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
