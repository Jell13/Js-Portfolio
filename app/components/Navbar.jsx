"use client"
import Link from "next/link"
import Logo from "./Logo"
import { usePathname } from "next/navigation"
import { SocialIcon } from "react-social-icons"
import {motion} from "framer-motion"

const CustomLink = ({href, title}) => {

    const router = usePathname();

    return(
        <Link className="relative group" href={href}>
            {title}
            <span className={`h-[2px] inline-block bg-black absolute left-0 bottom-0.5
            group-hover:w-full transition-[width] ease duration-300 ${router === href ? 'w-full' :' w-0'}`}>
                &nbsp;</span>
        </Link>
    )
}

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">

        <nav
         className="flex flex-row gap-6 w-1/3">
            <CustomLink href='/' title={'Home'}></CustomLink>
            <CustomLink href={'/about'} title={'About'}></CustomLink>
            <CustomLink href={'/projects'} title={'Projects'}></CustomLink>
            <CustomLink href={'/contact'} title={'Contact'}></CustomLink>
        </nav>
        <div className="w-1/3">
            <Logo/>
        </div>
        
        <nav className="flex gap-2 w-1/3 justify-center">
            <SocialIcon url='' 
            bgColor='transparent' 
            fgColor='black'
            />
            <SocialIcon url='https://github.com/Jell13'
            bgColor='transparent'
            fgColor='black'
            
            />
            <SocialIcon url='https://linkedin.com'
            bgColor='transparent'
            fgColor='black'
            />
        </nav>
    </header>
  )
}

export default Navbar
