"use client"

import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <>
      <div className='h-full w-full'>
        <div className='h-full w-full flex flex-col justify-center items-center'>
          
            <Image src="/profile.png" alt='profile' width={90} height={90} className='rounded-[100%] md:mt-40 xl:mt-64 mt-52'></Image>
            <p className='pt-2'>Software Developer</p>
            <h1 className='text-2xl'>
              <Typewriter
                options={{
                  strings: ["Jason Sugiharto", 'Guy-who-likes-drawing', 'ButMainlyCodes'],
                  autoStart: true,
                  loop: true,
                  delaySpeed: 2000
                }}
              />
            </h1>
            <div className='mt-10'>
              <a href="/Resume-Jason.pdf" className='bg-dark p-2 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark duration-300 border-2 border-solid
              border-transparent hover:border-dark text-light dark:text-dark dark:bg-light dark:hover:bg-dark dark:hover:text-light' download='Resume-Jason.pdf'>Resume</a>
            </div>
        </div>
      </div>
    </>
  );
}
