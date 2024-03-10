"use client"
import {motion} from 'framer-motion'

const skills = [
  {
    name: "CSS",
    x:"-5vw",
    y:"-10vw"
  },
  {
    name: "HTML",
    x:"-20vw",
    y:"-2vw"
  },
  {
    name: "JavaScript",
    x:"20vw",
    y:"6vw"
  },
  {
    name: "ReactJs",
    x:"-10vw",
    y:"10vw"
  },
  {
    name: "NextJS",
    x:"-20vw",
    y:"-15vw"
  },
  {
    name: "Python",
    x:"20vw",
    y:"-10vw"
  },
  {
    name: "SQL",
    x:"10vw",
    y:"-15vw"
  },
  {
    name: "Tailwind CSS",
    x:"10vw",
    y:"15vw"
  }

]

const Skill = ({name, x, y}) => {
  return (
    <motion.div
    initial={{x:0, y:0}}
    whileInView={{x:x, y:y, transition: {duration:1.5}}}
    whileHover={{scale:1.05}}
    className='flex items-center justify-center bg-dark text-white dark:bg-light dark:text-dark rounded-full font-semibold py-3 px-6 shadow-dark cursor-pointer absolute'>
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <div className='w-full '>
      <h2 className='font-bold text-6xl mt-56 text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
        <motion.div
        whileHover={{scale:1.05}}
        className='flex items-center justify-center bg-black text-white dark:bg-light dark:text-dark rounded-full font-semibold p-8 shadow-dark cursor-pointer'>
          Web
        </motion.div>
        {skills.map((skill) =>(
          <Skill key={skill.name} name={skill.name} x={skill.x} y={skill.y}/>
        ))}
      </div>
    </div>
  )
}

export default Skills
