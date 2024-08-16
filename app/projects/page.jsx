"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import Image from 'next/image'
import notenet from '../../public/notenet.png'
import livedocs from '../../public/livedocs.png'
import order from '../../public/order_system.png'

const FeaturedProject = ({type, title, summary, img, link, github}) => {
  return (
    <article className='w-full min-w-screen-lg p-12 flex flex-col md:flex-row items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl'>
      <Link className='md:w-1/2 cursor-pointer overflow-hidden rounded-lg' href={link} target="_blank">
        <Image src={img} alt={title} className='w-full h-full'/>
      </Link>

      <div className='md:w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-orange-500 dark:text-blue-500 font-medium text-xl'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold text-dark'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark '>{summary}</p>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.6, duration: 0.4, ease: "easeInOut"}}} className='flex justify-center items-center'> 
          <SocialIcon url={github}
            bgColor='transparent'
            fgColor='black'
            
            />
          <Link className='ml-4 rounded-lg bg-dark text-light p-2  px-6 text-lg hover:bg-light hover:text-dark duration-500' href="https://notenet.vercel.app/">Visit Project</Link>
        </motion.div>
      </div>
    </article>
  )
}

const NormalProject = ({title, img, link, github,summary}) => {
  return(
    <article className='w-full min-w-screen-lg p-1 flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl'>
      <Link className='md:w-1/2 cursor-pointer overflow-hidden rounded-lg mt-10' href={link} target="_blank">
        <Image src={img} alt={title} className='w-full'/>
      </Link>

      <div className='w-full flex flex-col items-start justify-between pl-6 mb-10'>

        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold text-dark'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark '>{summary}</p>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.6, duration: 0.4, ease: "easeInOut"}}} className='flex justify-center items-center'> 
          <SocialIcon url={github}
            bgColor='transparent'
            fgColor='black'
            
            />
          <Link className='ml-4 rounded-lg bg-dark text-light p-2  px-6 text-lg hover:bg-light hover:text-dark duration-500' href="https://notenet.vercel.app/">Visit Project</Link>
        </motion.div>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <>
        <div className='w-full mb-6 p-4'>
          <div className='w-full h-full flex flex-col items-center'>
            <div className='md:text-7xl text-4xl mt-16 font-bold flex '>
              Learn By Doing
            </div>
            <div className='grid mt-20 w-[80vw] gap-24'>
              <div className=''>
                <FeaturedProject title="NoteNet" type="Featured Project" link="https://notenet.vercel.app/" summary="A note taking app using
                NextJs-14, Convex, ClerkJs, react-quill" github="https://github.com/Jell13/notenet" img={notenet}/>
              </div>
            </div>
            <div className='w-[80vw] mt-10 grid grid-cols-2 gap-24 mb-10'>
              <NormalProject title="LiveDocs" type="" link="https://livedocs-delta.vercel.app/" github="https://github.com/Jell13/livedocs" img={livedocs} summary="NextJs, React, LiveBlocks, Shadcn, Lexical,"/>
              <NormalProject title="Ordering" type="" link="https://ifgf-oc-cafe.vercel.app/" github="https://github.com/Jell13/order-system" img={order} summary="NextJs, React, Convex, Shadcn, Tailwind"/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Projects
