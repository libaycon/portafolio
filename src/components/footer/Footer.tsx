'use client';
import Image from "next/image";
import white from "/public/dark_logo.png";
import dark from "/public/white_logo.png";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Footer() {
    const { theme } = useTheme();

    return <>
        <div className="container m-auto flex h-full pt-8">
            <div className="flex flex-row justify-center items-end gap-8 w-full py-2">
                <Link href={"#"}>
                <Image src={theme === "light" ? white : dark} alt="logo" width={30} priority/>
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
