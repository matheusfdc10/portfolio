'use client'
import { Link } from 'react-scroll/modules'
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="bg-dark-2 fixed w-full h-20 top-0 z-50">
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
                    <h1 className="font-extrabold text-2xl transition-all hover:text-sky-300 hover:transform-1 cursor-pointer">
                        Portfólio
                    </h1>
                </Link>
                <Navbar />
            </div>
        </header>
    )
}

export default Header;