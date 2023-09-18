/* ===================================================
    Date: 2023-09-02 22:21:52
    Desc: ClientOnly component
    Author: 🟣 Enok Lima
=====================================================*/


import { useEffect, useState } from "react";

/**
 * 
 * @param children: Reac.ReactNode;
 * @returns null || children
 */

export const ClientOnly = ({children}: {children: React.ReactNode}) => {
    const [hasMounted, setHasMounted] = useState<boolean>(false);

    useEffect(() => setHasMounted(true), []);

    return !hasMounted? null : children;
}