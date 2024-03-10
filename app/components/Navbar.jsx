"use client"
import Link from "next/link"
import Logo from "./Logo"
import { usePathname } from "next/navigation"
import { SocialIcon } from "react-social-icons"
import {motion} from "framer-motion"
import useThemeSwitcher from "./hooks/useThemeSwitcher"
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons"

const links = [
    {
        href: '/',
        title: 'Home'
    },
    {
        href: '/about',
        title: 'About'
    },
    {
        href: '/projects',
        title: 'Projects'
    },
    {
        href: '/contact',
        title: 'Contact'
    }
]

const CustomLink = ({href, title}) => {

    const router = usePathname();
    return(
        <Link className="relative group" href={href}>
            {title}
            <span className={`h-[2px] inline-block absolute bg-dark dark:bg-light left-0 bottom-0.5
            group-hover:w-full transition-[width] ease duration-300 ${router === href ? 'w-full' :' w-0'}`}>
                &nbsp;</span>
        </Link>
    )
}

const Navbar = () => {

    const[mode, setMode] = useThemeSwitcher();
  return (
    <header className="w-full h-full py-8 px-32 dark:bg-dark dark:text-light
     font-medium flex items-center justify-between sticky">

        <nav
         className="flex flex-row gap-6 w-1/3">
            {/* <CustomLink href='/' title={'Home'}></CustomLink>
            <CustomLink href={'/about'} title={'About'}></CustomLink>
            <CustomLink href={'/projects'} title={'Projects'}></CustomLink>
            <CustomLink href={'/contact'} title={'Contact'}></CustomLink> */}
            {links.map((link) => (
                <CustomLink key={link.title} href={link.href} title={link.title}/>
            ))}
        </nav>
        <div className="w-1/3">
            <Logo/>
        </div>
        
        <nav className="flex gap-2 w-1/3 justify-center items-center">

            <Link className="w-8 h-8 mr-4" href="https://github.com">
                <GithubIcon className="w-full h-full"/>
            </Link>
            
            <Link className="w-8 h-8" href="https://linkedin.com">
                <LinkedInIcon className="w-full h-full"/>
            </Link>
            

            <button className={`ml-4 flex items-center justify-center rounded-full p-[5px] ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
             onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                {mode === "dark" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/> }
            </button>
        </nav>
        
    </header>
  )
}

export default Navbar
