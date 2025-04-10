'use client'
import Image from "next/image";
import { useState } from "react";
import { AiFillEye } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import ModalProject from "./ModalProject";

export type ProjectType = {
    title: string;
    image: string;
    description: string;
    urlGithub: string;
    urlSite: string;
    topics: Array<string>
}

interface CardProjectProps {
    data: ProjectType;
}

const CardProject: React.FC<CardProjectProps> = ({
    data,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ModalProject 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)}
                data={data}
            />
            <div 
                onClick={() => setIsOpen(true)}
                className="group bg-dark-2 p-6 flex flex-col items-center gap-3 rounded-lg shadow-zinc-950 shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
                <div className="aspect-auto relative shadow-zinc-950 shadow-md">
                    <Image
                        width={500} 
                        height={500}
                        alt="imge"
                        src={`/images/${data.image}`}
                        className="w-full group-hover:opacity-75 transition-all"
                    />
                    <div className="group-hover:sm:block hidden absolute z-auto w-full h-full top-0 transition-all">
                        <div className="flex gap-3 justify-center items-center h-full">
                            <a href={data.urlGithub} target="_blank" 
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                <div
                                    title="GitHub"
                                    className="rounded-full bg-dark-2 hover:bg-sky-300 border-2 border-sky-300 p-2 text-sky-300 hover:text-zinc-950 shadow-zinc-950 shadow-md active:scale-95 cursor-pointer"
                                >
                                    <BsGithub href={data.urlGithub} size={40}/>
                                </div>
                            </a>
                            {data.urlSite && (
                                <a href={data.urlSite} target="_blank"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                    }}
                                >
                                    <div
                                        title="Site"
                                        className="rounded-full bg-dark-2 hover:bg-sky-300 border-2 border-sky-300 p-2 text-sky-300 hover:text-zinc-950 shadow-zinc-950 shadow-md active:scale-95 cursor-pointer"
                                    >
                                        <AiFillEye size={40}/>
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <p className="text-xl text-center text-zinc-50">
                    {data.title}
                </p>
                <span className="text-center text-zinc-400">
                    {data.topics.map((topic) => {
                        if (data.topics[0] === topic) {
                            return (
                                `${topic}`
                            )
                        }
                        return (
                            ` - ${topic}`
                        )
                    })}
                </span>
            </div>
        </>
    )
}

export default CardProject;