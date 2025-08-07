
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iram - UI/UX & Graphic Designer Portfolio',
  description: 'Professional UI/UX and Graphic Designer creating beautiful digital experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className} style={{ fontFamily: 'Poppins, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
