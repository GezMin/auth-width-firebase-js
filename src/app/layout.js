import { Inter } from 'next/font/google'
import Header from '@/components/header/Header'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Auth width Firebase - Next 14 with Tailwind',
    description: 'Auth width Firebase - Next 14 with Tailwind',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    )
}
