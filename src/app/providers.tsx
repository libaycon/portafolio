'use client';
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import  MediaQueryProvider  from "@/context/react/mediaQuery";


function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider {...props}>
        <MediaQueryProvider>
          {children}
        </MediaQueryProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default Providers;