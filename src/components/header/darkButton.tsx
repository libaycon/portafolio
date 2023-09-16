import { useEffect, useState } from "react";
import { MoonIcon } from "./moonIcon";
import { SunIcon } from "./sunIcon";
import { Button } from "@nextui-org/react";


type ThemeContextValue = {
    darkMode?: string;
    setDarkMode: (value: string) => void;
}

const DarkButton: React.FC<ThemeContextValue> = ({darkMode, setDarkMode}): JSX.Element | null => {
    const [mounted, setMounted] = useState(false);

    const handleClick = () => setDarkMode(darkMode === "dark" ? "light" : "dark");

    useEffect(() => setMounted(true), []);

    return !mounted ? null : 
    <Button
        isIconOnly
        size="sm"
        radius="full"
        className="bg-transparent border-0 hover:bg-slate-200 dark:hover:bg-slate-800 hover:border-1 hover:border-slate-300"
        onClick={handleClick}
        startContent={darkMode === "dark" ? <SunIcon fontSize={20} /> : <MoonIcon fontSize={20} />}
    />
}

export default DarkButton;