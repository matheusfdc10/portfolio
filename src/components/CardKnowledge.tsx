'use client'

import { useState } from "react";
import { IconType } from "react-icons";
import ModalKnowledge from "./ModalKnowledge";

export type CardKnowled = {
    title: string;
    description: string;
    icon: IconType;
}

interface CardKnowledge {
    data: CardKnowled
}

const CardKnowledge: React.FC<CardKnowledge> = ({
    data
}) =>  {
    const [isOpen, setIsOpen] = useState(false);
    const Icon = data.icon

    return (
        <>
            <ModalKnowledge 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)}
                data={data}
            />
            <div 
                title={data.title}
                onClick={() => setIsOpen(true)} 
                className="bg-dark-1 p-6 flex flex-col items-center gap-3 rounded-lg shadow-zinc-950 shadow-xl transition-all hover:bg-dark-0 overflow-hidden cursor-pointer">
                <Icon size={120} />
                <h3 className="text-center text-2xl font-semibold text-zinc-50">
                    {data.title}
                </h3>
                <p className="text-zinc-400 text-center break-all line-clamp-6">
                    {data.description}
                </p>
            </div>
        </>
    )
}

export default CardKnowledge;