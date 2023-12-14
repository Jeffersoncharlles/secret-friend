import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable:'--font-inter' })

export const metadata: Metadata = {
  title: {
    template: "%s | Friend",
    default:"Secret Friend"
  },
  description: 'Generated Sorted secret friend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-gray-100 antialiased">{children}</body>
    </html>
  )
}
