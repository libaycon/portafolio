import { Button } from "@nextui-org/react";
import { BiX } from "react-icons/bi";

interface ModalProps {
    isOpen: boolean,
    onOpenChange: () => void,
    router: any,
    children: React.ReactNode
}


const Modal = ({isOpen, onOpenChange, router, children}: ModalProps) => {
    const onClose = () => {
        onOpenChange();
        router.back();
    }

    return <>
        {isOpen? (
            <div className="fixed w-full h-full max-h-[100vh] inset-0 flex justify-center items-center bg-[#161a22b0] text-white z-10"
                onClick={onClose}
            >
                <div className="relative w-max h-max" onClick={(e) => e.stopPropagation()}>
                    {children}
                    <Button
                        isIconOnly
                        size="sm"
                        radius="full"
                        className="absolute top-2 right-2 bg-[#7c3aed] text-white"
                        onClick={onClose}
                        startContent={<BiX size='1.5rem'/>}
                    />
                </div>
            </div>
        ): <></>}
    </>
}
export default Modal;