'use client'

import { FaSpinner } from 'react-icons/fa'

interface ButtonProps {
    onClick: () => void;
    text: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    start?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    text,
    type = 'button',
    disabled,
    start,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`                
                text-sky-300
                bg-transparent
                border-2
                border-sky-300
                text-sm
                sm:text-sm
                font-semibold
                px-5
                sm:px-7
                py-3
                hover:text-zinc-950
                hover:bg-sky-300
                hover:font-extrabold
                transition-all
                hover:scale-[1.02]
                active:scale-100
                whitespace-nowrap
                shadow-zinc-950
                shadow-sm
                flex
                items-center
                gap-3
                ${start ? 'text-start' : 'text-center'}
                ${disabled && 'cursor-not-allowed'}
            `}
        >
            {disabled && <FaSpinner size={20} className='animate-spin transition-all'/>}
            <span>{text}</span>
        </button>
    )
}

export default Button;