import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

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
            <body className={`${inter.className}`}>
                <Providers
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem={false}
                    storageKey='nextui-theme'
                >
                    <main className="relative h-max w-full">
                        <div className=' container m-auto transition-all'>
                            <div className="grid grid-rows-auto-1fr-auto h-full">
                                <div className='sticky top-0 flex w-full h-[60px] px-8 md:backdrop-blur-xl z-10'>
                                    <Header />
                                </div>
                                <div className='flex flex-col justify-center min-h-[calc(100vh-108px)]'>
                                    {children}
                                </div>
                                <div className='w-full h-max'>
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </main>
                </Providers>
            </body>
        </html>
    )
}
