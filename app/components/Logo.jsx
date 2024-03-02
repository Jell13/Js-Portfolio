import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <Link className='w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-2xl font-bold hover:bg-blue-950 duration-300' href="/">JS</Link>
    </div>
  )
}

export default Logo
