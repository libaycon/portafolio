'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@nextui-org/react";
import Modal from "@/components/modal/modal";
import SnakeGame from "@/components/projects/snake/snake_game";


export default function SnakeModal({params}: {params: {project_name: string}}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const router = useRouter();
    const project_name = params.project_name;

    useEffect(() => {
        project_name && onOpen();
    }, [project_name])

    return (
        <Modal isOpen={isOpen} router={router} onOpenChange={onOpenChange}>
            {project_name === 'snake'? <SnakeGame />: <></>}
        </Modal>
    )
}