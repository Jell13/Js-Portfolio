"use client"

import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <>
      <div className='h-full w-full '>
          <div className='h-full w-full flex flex-col justify-center items-center'>

            <div className=" w-24 h-24 flex justify-center items-center relative rounded-full">
              <div className="inset-0 opacity-100 absolute w-[100%] h-[105%] bg-gradient-to-r dark:from-blue-500 dark:to-purple-600 from-orange-500 to-yellow-300 rounded-full blur"></div>
              <img src='/hero.jpg' width={70} height={70} className="rounded-full w-full relative hover:opacity-75 duration-200"/>
            </div>
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
