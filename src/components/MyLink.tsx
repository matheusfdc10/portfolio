import { Link as Lk } from 'react-scroll'
import Link from 'next/link';

import { IconType } from "react-icons/lib/esm/iconBase";

interface MyLinkProps {
    text: string;
    href: string;
    textCenter?: boolean;
    icon?: IconType;
    site?: boolean;
}

const MyLink: React.FC<MyLinkProps> = ({
    href,
    text,
    textCenter,
    icon: Icon,
    site
}) => {
    return (
        <>
            {site ? (
                <Link 
                    href={href}
                    className={`
                        text-sky-300
                        bg-transparent
                        border-2
                        border-sky-300
                        text-sm
                        sm:text-sm
                        font-semibold
                        p-3
                        sm:px-7
                        hover:text-zinc-950
                        hover:bg-sky-300
                        hover:font-extrabold
                        transition-all
                        hover:scale-[1.02]
                        active:scale-100
                        whitespace-nowrap
                        flex
                        items-center
                        gap-2
                        cursor-pointer
                        ${textCenter ?  'justify-center' : 'justify-start'}
                    `}
                >
                    {Icon && <Icon size={30} />}
                    {text}
                </Link>
            ) : (
                <Lk 
                    to={href}
                    spy={true}
                    smooth={true} 
                    duration={500}
                    className={`
                        text-sky-300
                        bg-transparent
                        border-2
                        border-sky-300
                        text-sm
                        sm:text-sm
                        font-semibold
                        p-3
                        sm:px-7
                        hover:text-zinc-950
                        hover:bg-sky-300
                        hover:font-extrabold
                        transition-all
                        hover:scale-[1.02]
                        active:scale-100
                        whitespace-nowrap
                        flex
                        items-center
                        gap-2
                        cursor-pointer
                        ${textCenter ?  'justify-center' : 'justify-start'}
                    `}
                >
                    {Icon && <Icon size={30} />}
                    {text}
                </Lk>
            )}
        </>
    )
}

export default MyLink;