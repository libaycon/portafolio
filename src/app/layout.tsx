import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'
import Header from '@/components/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Mi Portafolio',
    description: 'Mi portafolio personal',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html suppressHydrationWarning lang="en">
            <body className={`${inter.className} container m-auto transition-all`}>
                <Providers
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem={false}
                    storageKey='nextui-theme'
                >
                    <main className="h-[100vh] w-full">
                        <div className="grid grid-rows-auto-1fr-auto h-full">
                            <div className='flex w-full h-[60px] px-8'>
                                <Header />
                            </div>
                            <div className='flex flex-col justify-center'>
                                {children}
                            </div>
                            <div>
                                footerd
                            </div>
                        </div>
                    </main>
                </Providers>
            </body>
        </html>
    )
}
