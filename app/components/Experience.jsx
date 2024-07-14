"use client"

import { useScroll, motion } from "framer-motion"
import { useRef } from "react"
import LiIcon from "./LiIcon"

const Details = ({position, company, companyLink, time, address, work}) => {

  const ref = useRef(null)
  return (
   <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
    
    <LiIcon reference={ref}/>
    <div>
      <h3 className='capitalize font-bold md:text-2xl text-lg'>
        {position}&nbsp;
        <a href=""
        target='_blank'
        className='dark:text-blue-500 text-orange-500 animate-pulse capitalize'>
          {company}
        </a>
      </h3>
      <span className=''>
        {time} | {address}
      </span>
      <p className='font-medium w-full'>{work}</p>
    </div>
   </li>
  )
}

const Experience = () => {

  const ref = useRef(null)

  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  );

  return (
    <div className='w-full flex flex-col my-64 p-4 justify-center items-center'>
      <h1 className=' font-bold text-4xl md:text-7xl my-20'>Experience & Education</h1>
      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div
        style={{scaleY: scrollYProgress}} className='absolute md:left-9 md:top-0 w-[4px] h-full bg-dark dark:bg-light origin-top'/>
        <ul>
          <Details position="Associates in Computer Science" company="@Golden West College" 
          time="2021 - 2023" work="Succeeded in getting a associates degree in computer science from Golden West College in the span of 2 years. Placed on the president's honor list for 3 semester in a row.
          Took summer and also winter session classes in order to finish in 2 years."/>

          <Details position="Bachelor in Computer Science" company="@California State University of Long Beach " 
          time="2023 - present" work="Pursuing a bachelor degree in computer science. Received a president's honor list award on the first semester."/>

          <Details position="Looking for work" 
          time="present" work="Building and developing projects to hone my skills. Currently making a full-stack project that consist with the usage of NextJS, TailwindCSS, MongoDB."/>
        </ul>
      </div>
      
    </div>
  )
}

export default Experience
