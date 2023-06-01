'use client'

import { CardKnowled } from "./CardKnowledge";
import Modal from "./Modal";

interface ModalKnowledgeProps {
    isOpen?: boolean;
    onClose: () => void;
    data: CardKnowled;
}

const ModalKnowledge: React.FC<ModalKnowledgeProps> = ({
    isOpen,
    onClose,
    data
}) => {
    const Icon = data.icon

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >   
            <div className="flex flex-col items-center gap-6">
                <Icon 
                    size={120} 
                    className="text-center"
                />
                <h3 className="text-3xl font-semibold">
                    {data.title}
                </h3>
                <p className="text-zinc-50 text-base">
                    {data.description}
                </p>
            </div>
        </Modal>
        
    )
}

export default ModalKnowledge;