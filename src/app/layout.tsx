import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'
import Header from '@/components/header/header';
import Footer from "@/components/footer/Footer";

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
            <body className={`${inter.className} transition-all`}>
                <Providers
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem={false}
                    storageKey='nextui-theme'
                >
                    <main className="relative h-max w-full">
                        <div className="grid grid-rows-auto-1fr-auto h-full">
                            <div className='container m-auto sticky top-0 flex w-full h-[60px] px-8 tablet:backdrop-blur-xl z-10'>
                                <Header />
                            </div>
                            <div className=''>
                                {children}
                            </div>
                            <div className='relative w-full full'>
                                <div className='absolute -top-[4rem] right-0 left-0 bottom-0 bg-[#b9bdcd] dark:bg-[#11172b] -z-[2]' />
                                <Footer />
                            </div>
                        </div>
                    </main>
                </Providers>
            </body>
        </html>
    )
}
