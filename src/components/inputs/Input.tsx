import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { FormProps } from "../Contact";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disable?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues | FormProps>;
    errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type = "text",
    disable,
    register,
    required,
    errors,
}) => {
    return (
        <div className="w-full relative">
            <input
                id={id}
                disabled={disable}
                {...register(id, { required })}
                placeholder=" "
                type={type}
                autoComplete={id}
                className={`
                    peer
                    w-full
                    p-4
                    pt-6
                    font-light
                    bg-dark-1
                    border-2
                    outline-none
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    shadow-zinc-950
                    shadow-sm
                    ${disable && 'cursor-not-allowed'}
                    ${errors[0] ? 'border-rose-500' : 'border-sky-300'}
                    ${errors[0] ? 'focus:border-rose-500' : 'focus:border-sky-600 focus:bg-dark-0'}
                `}
            />
            <label
                className={`
                    absolute
                    text-sm
                    duration-150
                    transform
                    -translate-y-3
                    top-5
                    z-10
                    origin-[0]
                    left-4
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-x-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-4
                    ${errors[0] ? 'text-rose-500' : 'text-zinc-400'}
                `}
            >
                {label}
            </label>
        </div>
    )
}

export default Input;