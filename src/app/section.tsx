'use client';
import Image, {StaticImageData} from "next/image";
import { Button, Tooltip } from "@nextui-org/react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface SectionProps {
    Icon: StaticImageData,
    title: string,
    description: string,
    link: string,
    techs: {
        name: string,
        Icon: string
    }[]
}

export default function section({apps}: {apps: SectionProps[]}) {
    return <>
        <div className='container m-auto flex flex-col p-8 gap-16' id="projects">
            <div className='flex justify-start'>
                <h1 className='text-3xl font-semibold'>
                    Apps
                </h1>
            </div>
            <div className='grid grid-cols-auto-fit-1fr tablet:grid-cols-auto-fit2-1fr gap-10 select-none'>
                {apps.map((app, i) => (
                    <div key={`${app.title}-${i}`} className='relative px-4 py-3 border-2 border-solid bg-[#889ad71c] border-[#c0c8e3] dark:border-[#37288f82] rounded-xl hover:border-[#9873ff] dark:hover:border-[#673AB7] hover:shadow-violet25 dark:hover:shadow-violet50 transition-all ease-in-out duration-300'>
                        <div className='flex flex-col justify-start gap-2'>
                            <div className='text-sky-500'>
                                <Image src={app.Icon} alt={app.title} height={40} />
                            </div>
                            <h1 className="text-xl font-bold">
                                {app.title}
                            </h1>
                            <p className='text-sm font-semibold text-slate-500 dark:text-slate-400 line-clamp-2'>{app.description}</p>
                            <div className="flex justify-start items-center gap-1">
                                {app.techs.map((tech, i) => (
                                    <div key={`${tech.name}-${i}`} className='flex items-center'>
                                        <Tooltip showArrow={true} content={tech.name} placement='top' classNames={{base:"text-slate-500 dark:text-slate-300 font-semibold"}}>
                                            <div className="cursor-pointer p-1 rounded-sm bg-[#b4bddb] dark:bg-[#7c4dcf]">
                                                <Image src={tech.Icon} alt={tech.name} width={30} height={40} priority />
                                            </div>
                                        </Tooltip>
                                    </div>
                                ))}
                            </div>
                                <Button 
                                    isIconOnly
                                    startContent={< FaExternalLinkAlt size="1.2rem" className="outline-none" />}
                                    size='sm'
                                    radius="sm"
                                    className="absolute top-2 right-2 bg-[none] p-2 cursor-pointer text-slate-400 hover:text-slate-500"
                                />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
}
