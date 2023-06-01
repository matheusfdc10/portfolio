'use client'

import { Transition, Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    children: React.ReactNode;
    image?: boolean;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    image
}) => {
    return (
        <Transition.Root
            show={isOpen}
            as={Fragment}
        >
            <Dialog
                as='div'
                className="relative z-50"
                onClose={onClose}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div
                        className='
                            fixed
                            inset-0
                            bg-neutral-950
                            bg-opacity-75
                            backdrop-blur-sm
                            transition-opacity
                        '
                    />
                </Transition.Child>
                <div className='fixed inset-0 z-10 overflow-y-auto'>
                    <div
                        className='
                            flex
                            min-h-full
                            items-center
                            justify-center
                            p-4
                            text-center
                            sm:p-0
                        '
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                            enterTo='opacity-100 translate-y-0 sm:scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        >
                            <Dialog.Panel
                                className={`
                                    relative 
                                    transform 
                                    overflow-hidden 
                                    rounded-lg 
                                    bg-dark-1 
                                    text-left 
                                    shadow-xl 
                                    transition-all
                                    w-full
                                    sm:my-8 
                                    sm:w-full
                                    sm:mx-4
                                    sm:max-w-3xl
                                    
                                    ${!image && 'sm:p-6 px-4 pb-4 pt-5'}
                                `}
                            >
                                <div className="
                                    absolute 
                                    right-0 
                                    top-0 
                                    pr-4 
                                    pt-4 
                                    sm:block
                                    z-10
                                "
                                >
                                <button
                                    type="button"
                                    className="
                                    rounded-md 
                                    bg-transparent
                                    text-sky-300
                                    hover:text-zinc-50 
                                    focus:outline-none 
                                    focus:ring-2 
                                    focus:ring-sky-300 
                                    focus:ring-offset-0
                                    "
                                    onClick={onClose}
                                >
                                    <span className="sr-only">Close</span>
                                    <IoClose className="h-6 w-6" aria-hidden="true" />
                                </button>
                                </div>
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Modal