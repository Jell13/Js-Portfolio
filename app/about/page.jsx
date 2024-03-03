"use client"

import React from 'react'
import TransitionEffect from '../components/TransitionEffect'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Hero from '../../public/hero.jpg'
import Skills from '../components/Skills'

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
              Hi, I'm Jason, a web developer that works with both front-end and also back-end. Having a pasion to solve problems through coding. Loves doing puzzle and work effortlessly in order to satisfy and brings any client's vision to life.
            </p>
            <p className='mt-4'>
              I believe when solving problems I treat them almost as a game of puzzles that we need to complete with each pieces in order to have an amazing output. I do that because it makes it better and enjoyable experience when solving a problem.
            </p>
            <p className='mt-4'>
              I don't only try my best to be good in making web applications but I love to make them interactive therefore any type of medium would be satisfied with the result that I produce. I look forward to any opportunity that I will find in the future.
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
          
      </div>
    </>
  )
}

export default About
