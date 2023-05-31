'use client'
import { Link } from 'react-scroll'
import { FiMenu } from 'react-icons/fi'
import { IoCloseSharp } from 'react-icons/io5'
import { useState } from 'react'

const links = [
    {
        title: 'Sobre',
        href: 'about'
    },
    {
        title: 'Conhecimentos',
        href: 'knowledge'
    },
    {
        title: 'Projetos',
        href: 'project'
    },
    {
        title: 'Contato',
        href: 'contact'
    },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <FiMenu 
                size={36} 
                className="block md:hidden cursor-pointer text-sky-500 hover:text-sky-300"
                onClick={() => setIsOpen(true)}
            />
            <nav className={`
                h-full ${isOpen ? 'block' : 'hidden'} md:block md:static md:bg-transparent md:bottom-auto md:right-auto md:left-auto md:p-0
                fixed bg-dark-2 bottom-0 right-0 left-0 p-8
            `}>
                <IoCloseSharp 
                    size={40} 
                    className="block md:hidden absolute top-5 right-5 cursor-pointer text-sky-500 hover:text-sky-300" 
                    onClick={() => setIsOpen(false)}
                />
                <ul className="font-semibold text-xl flex flex-col items-center gap-5 h-full pt-6
                    md:flex-row md:font-medium md:gap-6 md:pt-0
                ">
                    {links.map((link) => (
                        <li
                            key={link.title}
                            className="hover:text-sky-300 transition-all hover:transform-1 cursor-pointer"
                            
                        >
                            <Link to={link.href} onClick={() => setIsOpen(false)} spy={true} smooth={true} duration={500}>{link.title}</Link>
                            {/* <hr className="" /> */}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Navbar;