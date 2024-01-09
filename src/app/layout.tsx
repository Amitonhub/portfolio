import type { Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'
import './globals.css'

const inter = Lexend_Deca({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amit T | Portfolio',
  description: 'portfolio of amit thakur designed with next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='py-10 px-48'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
