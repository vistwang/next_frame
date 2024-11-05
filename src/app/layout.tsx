import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className={`${inter.className} h-full justify-between flex flex-col`}>
        <header className="bg-blue-400 py-3 px-2 text-white">我是头</header>
        <main className="flex-1">{children}</main>
        <footer className="bg-blue-400 py-3 px-2 text-white">我是尾</footer>
      </body>
    </html>
  )
}
