import { Mulish } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'

const mulish = Mulish({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-sans',
    display: 'swap',
})

export const metadata: Metadata = {
    icons: {
        icon: '/favicon.svg?v=timestamp',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ru" suppressHydrationWarning className={cn('dark antialiased', mulish.variable)}>
            <body>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                    <div className="container">{children}</div>
                </ThemeProvider>
            </body>
        </html>
    )
}
