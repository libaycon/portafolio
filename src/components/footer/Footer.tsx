'use client';
import Image, {StaticImageData} from "next/image";
import light from "/public/dark_logo.png";
import dark from "/public/white_logo.png";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
    const [logo, setLogo] = useState<StaticImageData>(dark);
    const { theme } = useTheme();

    useEffect(() => {
        theme === "light" ? setLogo(light) : setLogo(dark);
    },[theme]);

    return <>
        <div className="container m-auto flex h-full pt-8">
            <div className="flex flex-row justify-center items-end gap-8 w-full py-2">
                <Link href={"#"}>
                <Image src={logo} alt="logo" width={30} priority/>
                </Link>
                <div>
                    <span className="text-tiny text-slate-500 dark:text-slate-400">
                        © {new Date().getFullYear()}
                    </span>
                </div>
            </div>
        </div>
    </>;
}
