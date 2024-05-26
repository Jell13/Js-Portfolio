"use client"
import React from 'react'
import TransitionEffect from '../components/TransitionEffect'
import {motion} from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import Image from 'next/image'
import profile from '../../public/profile.png'

const FeaturedProject = ({type, title, summary, img, link, github}) => {
  return (
    <article className='w-full min-w-screen-lg p-12 flex flex-col md:flex-row items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl'>
      <Link className='md:w-1/2 cursor-pointer overflow-hidden rounded-lg' href={link} target="_blank">
        <Image src={img} alt={title} className='w-full h-auto'/>
      </Link>

      <div className='md:w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-cyan-400 dark:text-purple-400 font-medium text-xl'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold text-dark'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark '>{summary}</p>
        <div className='flex justify-center items-center'> 
          <SocialIcon url={github}
            bgColor='transparent'
            fgColor='black'
            
            />
          <Link className='ml-4 rounded-lg bg-dark text-light p-2  px-6 text-lg hover:bg-light hover:text-dark duration-500' href="/">Visit Project</Link>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <>
        <TransitionEffect/>
        <div className='w-full mb-6 p-4 flex flex-col items-center justify-center'>
          <motion.div
          initial={{y:"10vh"}}
          animate={{y:"0%"}}
          transition={{duration: 1.5}} className='md:text-7xl text-4xl mt-16 font-bold flex self-center '>
            Learn By Doing
          </motion.div>
          <div className='grid mt-20 w-[80vw] gap-24'>
            <div className=''>
              <FeaturedProject title="Instant Messaging App" type="Featured Project" link="/" summary="An instant messaging app using
              NextJs, Convex, TailwindCSS, Clerk" github="/" img={profile}/>
            </div>
            {/* <div className='col-span-6'>
              Project 1
            </div> */}
          </div>
        </div>
    </>
  )
}

export default Projects
