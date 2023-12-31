'use client';
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button, useDisclosure } from "@nextui-org/react";
import darkLogo from "/public/dark_logo.png";
import lightLogo from "/public/white_logo.png";
import { BsGithub } from "react-icons/bs";
import DarkButton from "./darkButton";
import { useTheme } from "next-themes";
import { useMediaQuery } from "@/context/react/mediaQuery";
import { BiHomeSmile, BiCollection, BiRocket, BiX, BiMenuAltLeft, BiUserVoice } from "react-icons/bi";


const Header: React.FC = (): JSX.Element => {
    const [logo, setLogo] = useState<StaticImageData>(lightLogo);
    const { theme, setTheme } = useTheme();
    const { smallMobile, loading } = useMediaQuery();

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const navigation = [
        { name: "Home", path: "/", Icon: BiHomeSmile },
        { name: "About", path: "/about", Icon: BiRocket },
        { name: "Projects", path: "#projects", Icon: BiCollection },
        { name: "Contacto", path: "/contact", Icon: BiUserVoice }
    ];

    useEffect(() => {
        theme === "dark" ? setLogo(lightLogo) : setLogo(darkLogo);
    }, [theme]);

    useEffect(() => {
        const handleClose: any = (e: React.ChangeEvent<HTMLIFrameElement>): void => {
            isOpen && !e.target.closest(".navbar_modal") && onOpenChange();
        }
        isOpen && window.addEventListener("click", handleClose);
        return () => window.removeEventListener("click", handleClose);
    }, [isOpen]);

    return (
        <header className="grid grid-cols-auto-1fr-auto gap-1 w-full h-full mx-auto" role="nav">
            <div className="flex h-full gap-4 items-center z-10">
                <div className="max-w-[35px]">
                    <Link href={"/"}>
                        <Image src={logo} alt="logo" className="w-full h-full object-cover" priority />
                    </Link>
                </div>
                <div>
                    {smallMobile && (
                        <Button
                            isIconOnly
                            size="lg"
                            radius="full"
                            className="bg-transparent border-0 hover:border-2 hover:border-primary-200"
                            startContent={isOpen ? <BiX size="2rem" /> : <BiMenuAltLeft size="2rem" /> }
                            onClick={isOpen ? onOpenChange : onOpen}
                        />
                    )}
                </div>
            </div>
            <div>
                {!smallMobile && !loading ? (
                    <ul className="flex flex-row select-none h-full items-center">
                        {navigation.map((item, index) =>
                            <li key={`${item.name}-${index}`} className="text-[0.85rem] md:text-[1rem] font-[600]">
                                <Link href={item.path} className="flex line-clamp-1 w-full h-full items-center px-2 py-2 neading-none" onClick={onOpenChange}>
                                    {item.name}
                                </Link>
                            </li>
                        )}
                    </ul>
                ) :
                    <div className={`absolute -left-0 -right-0 top-0 pt-[60px] ${isOpen ? `h-[100vh]` : 'h-0'} transition-all ease-in-out duration-300 bg-[#af8dff12] backdrop-blur-xl overflow-hidden z-[+1]`}>
                        <div className="navbar_modal relative p-4 max-h-max min-h-0 overflow-y-auto">
                            <ul className="flex flex-col select-none">
                                {navigation.map((item, index) =>
                                    <li key={`${item.name}-${index}`} className="text-[0.85rem] font-[600] w-full">
                                        <Link href={item.path} className="flex flex-row gap-4 line-clamp-1 w-full h-full items-center px-4 py-3 hover:bg-default-200" onClick={onOpenChange}>
                                            <item.Icon className="" size="1.5rem" />
                                            <span className="text-[1rem] leading-none">
                                                {item.name}
                                            </span>
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                }

            </div>
            <div className="flex h-full items-center gap-4 z-10">
                <DarkButton darkMode={theme} setDarkMode={setTheme} />


                <Link href="https://github.com/libaycon" target="blank"
                    className="bg-transparent border-2 border-transparent hover:border-slate-300 rounded-full"
                ><BsGithub size="2rem" /></Link>
            </div>
        </header>
    );
};

export default Header;