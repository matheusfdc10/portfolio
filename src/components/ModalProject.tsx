'use client'

import {BsGithub} from 'react-icons/bs'
import {AiFillEye} from 'react-icons/ai'
import Image from "next/image";
import { ProjectType } from "./CardProject";
import Modal from "./Modal";
import MyLink from "./MyLink";

interface ModalProjectProps {
    isOpen?: boolean;
    onClose: () => void;
    data: ProjectType;
}

const ModalProject: React.FC<ModalProjectProps> = ({
    isOpen,
    onClose,
    data
}) => {

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >   
            <div className="flex flex-col items-center gap-6 mt-8">
                <h3 className="sm:text-3xl text-2xl font-semibold">
                    {data.title}
                </h3>
                <Image
                    alt="image"
                    src={data.image}
                    className="w-full group-hover:opacity-75 transition-all shadow-zinc-950 shadow-md"
                />
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
                <div className='flex gap-4'>
                    <MyLink
                        text="GitHub"
                        href={data.urlGithub}
                        icon={BsGithub}
                        site
                    />
                    {data.urlSite && (
                        <MyLink
                            text="Site"
                            href={data.urlSite}
                            icon={AiFillEye}
                            site
                        />
                    )}
                </div>
            </div>
        </Modal>
        
    )
}

export default ModalProject;