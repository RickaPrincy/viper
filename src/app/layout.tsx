import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Viper',
  description: 'By RickaPrincy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-900 w-screen text-slate-300 h-screen center-container ${inter.className}`}>{children}</body>
    </html>
  )
}
