import Link from "next/link";
import { FiMenu } from 'react-icons/fi'

const links = [
    {
        title: 'Sobre',
        href: '#about'
    },
    {
        title: 'Conhecimentos',
        href: '#knowledge'
    },
    {
        title: 'Projetos',
        href: '#project'
    },
    {
        title: 'Contato',
        href: '#contact'
    },
]

const Navbar = () => {
    return (
        <>
            <nav className="h-full hidden md:block">
                <ul className="font-medium text-lg flex items-center gap-6 h-full">
                    {links.map((link) => (
                        <li
                            key={link.title}
                            className="hover:text-sky-300 transition-all hover:transform-1"
                        >
                            <Link href={link.href}>{link.title}</Link>
                            {/* <hr className="" /> */}
                        </li>
                    ))}
                </ul>
            </nav>
            <FiMenu size={36} className="block md:hidden cursor-pointer text-sky-500 hover:text-sky-300"/>
        </>
    )
}

export default Navbar;