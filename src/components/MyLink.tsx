import Link from "next/link";

import { IconType } from "react-icons/lib/esm/iconBase";

interface MyLinkProps {
    text: string;
    href: string;
    textCenter?: boolean;
    icon?: IconType;
}

const MyLink: React.FC<MyLinkProps> = ({
    href,
    text,
    textCenter,
    icon: Icon
}) => {
    return (
        <Link 
            href={href}
            className={`
                text-sky-300
                border-2
                border-sky-300
                text-xs
                sm:text-sm
                font-semibold
                p-3
                sm:px-7
                hover:text-zinc-950
                hover:bg-sky-300
                hover:font-extrabold
                transition-all
                hover:scale-x-[1.02]
                active:scale-x-100
                whitespace-nowrap
                flex
                items-center
                gap-3
                ${textCenter ?  'justify-center' : 'justify-start'}
            `}
        >
            {Icon && <Icon size={30} />}
            {text}
        </Link>
    )
}

export default MyLink;