"use client"

import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import TransitionEffect from './components/TransitionEffect';
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <>
      <TransitionEffect/>
      <motion.div
      initial={{y:"10vh"}}
      animate={{y:"0%"}}
      transition={{duration: 1.5}}
       className='h-full w-full flex flex-col justify-center items-center'>

        <Image src="/profile.png" width={90} height={90} className='rounded-[100%]'></Image>
        <p className='pt-2'>Software Engineering</p>
        <h1 className='text-2xl'>
          <Typewriter
            options={{
              strings: ["Hi, my name is Jason Sugiharto", 'Guy-who-likes-drawing', 'ButMainlyCodes'],
              autoStart: true,
              loop: true,
              delaySpeed: 2000
            }}
          />
        </h1>

        <div className='mt-10'>
          <Link href="/" target={"_blank"} className='bg-dark p-2 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark duration-300 border-2 border-solid
          border-transparent hover:border-dark text-light dark:text-dark dark:bg-light dark:hover:bg-dark dark:hover:text-light' download={true}>Resume</Link>
        </div>
      </motion.div>
    </>
  );
}
