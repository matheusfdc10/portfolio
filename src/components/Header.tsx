'use client'
import { Link } from 'react-scroll/modules'
import { useEffect, useRef, useState } from 'react'
import Navbar from "./Navbar";

const Header = () => {
    const divMaxTop = useRef<HTMLDivElement>(null);
    const [isMaxTop, setIsMaxTop] = useState(1)
    const [isOpenNavbar, setIsOpenNavbar] = useState(false)
    
    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            const ratio = entry.intersectionRatio;

            setIsMaxTop(ratio);
        })

        if (divMaxTop.current) {
            intersectionObserver.observe(divMaxTop.current)
        }

        return () => {
            intersectionObserver.disconnect();
        }
    }, [divMaxTop])

    return (
        <>
            <header className={`${isMaxTop ? 'bg-dark-2' : `bg-neutral-950/70 shadow-neutral-950 shadow-lg ${isOpenNavbar ? 'md:backdrop-blur-3xl' : 'backdrop-blur-3xl'}`} fixed w-full h-20 top-0 z-50`}>
                <div className="
                    max-w-[1440px] 
                    mx-auto 
                    h-full 
                    flex 
                    items-center 
                    justify-between 
                    px-6
                    sm:px-8
                    text-sky-500
                ">
                    <Link to='main' spy={true} smooth={true} duration={500}>
                        <h1 className="font-extrabold text-2xl transition-all hover:text-sky-300 hover:scale-110 cursor-pointer">
                            Portfólio
                        </h1>
                    </Link>
                    <Navbar isOpen={isOpenNavbar} setIsOpen={setIsOpenNavbar}/>
                </div>
            </header>
            <div ref={divMaxTop}/>
        </>
    )
}

export default Header;