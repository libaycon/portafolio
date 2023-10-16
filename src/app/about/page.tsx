'use client';
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";

const About = (): JSX.Element => {
    const frontend = [
        {name: "Html", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1694925956/icons/hc6okvcmqjikvrnvqpgc.png"},
        {name: "Css", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/wy83lkmdoyffnxdky74d.png"},
        {name: "Javascript", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/qc7dsupffqorfagyz6gv.png"},
        {name: "TypeScript", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1696018061/icons/typeScript_ktd2dv.png"},
        { name: "React", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/klubyfz3jujrmbxbhego.png" },
        { name: "NextJs", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/yflff899h0ijgrieacki.png" },
        {name: "TailwindCss", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/sjgvfpoftg6z5tnl6rev.png"},
        {name: "Bootstrap", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1696018937/icons/bontstrap_wetxlg.png"},
    ];

    const backend = [
        {name: "Python", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/e2wmwtcb6gc5cfvj5i7c.png"},
        {name: "Django", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1694925956/icons/xw0svuuz9ahtu7tnjn2s.png"},
        {name: "Flask", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1694925956/icons/qoajqedfc3iwb50r4dqh.png"},
        {name: "Nodejs", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/nejkya7xlhren9cvlwwb.png"},
        {name: "Express", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1694925956/icons/yqbzhvvg0ymp8gdkcsdu.png"},
    ];

    const databases = [
        {name: "PostgreSql", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/itgaxkz6jx2rpx92lplz.png"},
        {name: "Sqlite", icon: "https://res.cloudinary.com/dppta0r5e/image/upload//c_thumb,w_48,h_48,g_auto/v1696022488/icons/sqlite3_fpdohd.png"},
        {name: "MongoDB", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697476814/icons/mongoDb_tbc8xn.png"},
        {name: "Firebase", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1694925956/icons/fii00f7h15lsnfe6zh50.png"},
    ];

    const tools = [
        {name: "Git", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697476898/icons/git_oostie.png"},
        {name: "VsCode", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/fgg9p3zlcvhe1yy3dod0.png"},
        {name: "Linux", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/achz6yg7wpfr8nu2pqwh.png"},
        {name: "Adove XD", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697476815/icons/adoveXd_yoarf6.png"},
        {name: "Cloudinary", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697476814/icons/cloudinary_wf35ao.png"},
        {name: "Vercel", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697476814/icons/vercel_pi83yp.png"},
        {name: "Heroku", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697476814/icons/heroku_urh0sv.png"},
        {name: "Netlify", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697476816/icons/tetlify_pchosq.png"},
        {name: "Google Cloud", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697476815/icons/googleCloud_cyzjvi.png"},
        {name: "Digital Ocean", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697476817/icons/digitalOcean_zkkerq.png"},
        {name: "AWS", icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697476814/icons/aws_wdunk1.png"},
    ];

    return (
        <div className="w-full min-h-[calc(100vh-141px)] flex items-center py-10 px-4">
            <div className="container m-auto">
                <div>
                    <div className="flex flex-col tablet:flex-row  justify-center items-center gap-8 pb-10">
                        <div className="w-[150px] tablet:w-[250px] h-[150px] tablet:h-[350px]">
                            <Image src="https://res.cloudinary.com/dppta0r5e/image/upload/v1696481979/startx/avatars/q178mpr8gmzp0ehxhlwu.jpg" alt="Enoc Lima" width={500} height={500} priority className="rounded-xl h-full w-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-6 w-full tablet:max-w-[50%] h-full">
                            <h1 className="text-3xl md:text-6xl font-bold text-center text-slate-600 dark:text-slate-300">Mi nombre es Enoc Lima</h1>
                            <span className="text-md md:text-[1.15rem] text-slate-500 dark:text-slate-400 font-[500]">
                                Soy un apasionado desarrollador de software con un profundo amor por la creación de soluciones tecnológicas innovadoras. Mi objetivo principal es convertir conceptos en código, diseñando y construyendo aplicaciones que resuelvan problemas y mejoren la vida de las personas.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full pt-10 text-slate-600 dark:text-slate-300">
                    <div className="flex flex-col gap-10 max-w-[350px] w-full m-auto [&>div]:flex [&>div]:flex-row [&>div]:justify-between [&>div>h3]:text-md [&>div>h3]:font-bold [&>div>ul]:max-w-[200px] [&>div>ul]:justify-end" >
                        <h2 className="text-md uppercase font-semibold">Habilidades tecnológicas que domino</h2>
                        <div>
                            <h3>Frontend</h3>
                            <ul className="flex flex-row flex-wrap gap-2">
                                {frontend.map((item, index) => (
                                    <li key={`${item.name}-${index}`} className="flex flex-col items-center gap-2">
                                        <Tooltip showArrow={true} content={item.name} placement="top" classNames={{ base: "text-slate-500 dark:text-slate-300 font-semibold" }}>
                                            <div className="flex justify-center items-center cursor-pointer rounded-sm bg-[#b4bddb] dark:bg-[#7c4dcf] h-[40px] w-[40px]">
                                                <Image src={item.icon} alt={item.name} width={30} height={40} className="w-auto" priority />
                                            </div>
                                        </Tooltip>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3>Backend</h3>
                            <ul className="flex flex-row flex-wrap gap-2">
                                {backend.map((item, index) => (
                                    <li key={`${item.name}-${index}`} className="flex flex-col items-center gap-2">
                                        <Tooltip showArrow={true} content={item.name} placement="top" classNames={{ base: "text-slate-500 dark:text-slate-300 font-semibold" }}>
                                            <div className="flex justify-center items-center cursor-pointer rounded-sm bg-[#b4bddb] dark:bg-[#7c4dcf] h-[40px] w-[40px]">
                                                <Image src={item.icon} alt={item.name} width={30} height={40} className="w-auto" priority />
                                            </div>
                                        </Tooltip>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3>Bases de Datos</h3>
                            <ul className="flex flex-row flex-wrap gap-2">
                                {databases.map((item, index) => (
                                    <li key={`${item.name}-${index}`} className="flex flex-col items-center gap-2">
                                        <Tooltip showArrow={true} content={item.name} placement="top" classNames={{ base: "text-slate-500 dark:text-slate-300 font-semibold" }}>
                                            <div className="flex justify-center items-center cursor-pointer rounded-sm bg-[#b4bddb] dark:bg-[#7c4dcf] h-[40px] w-[40px]">
                                                <Image src={item.icon} alt={item.name} width={30} height={40} className="w-auto" priority />
                                            </div>
                                        </Tooltip>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3>Herramientas</h3>
                            <ul className="flex flex-row flex-wrap gap-2">
                                {tools.map((item, index) => (
                                    <li key={`${item.name}-${index}`} className="flex flex-col items-center gap-2">
                                        <Tooltip showArrow={true} content={item.name} placement="top" classNames={{ base: "text-slate-500 dark:text-slate-300 font-semibold" }}>
                                            <div className="flex justify-center items-center cursor-pointer p-2 rounded-sm bg-[#b4bddb] dark:bg-[#7c4dcf] h-[40px] w-[40px]">
                                                <Image src={item.icon} alt={item.name} width={25} height={35} className="w-auto" priority />
                                            </div>
                                        </Tooltip>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute -top-[4rem] bottom-0 left-0 right-0 bg-[rgba(255,255,255,0)] bg-linerWt dark:bg-linerDk z-[-1]' />
        </div>
    )
}

export default About;