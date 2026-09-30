import type { Metadata } from 'next'
import { Figtree, Source_Serif_4 } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-sans',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: {
    default: 'ThisIsMyProperty.com — Your home’s health at your fingertips',
    template: '%s | ThisIsMyProperty.com',
  },
  description:
    'Manage, monitor, and maximize your property portfolio with intelligent insights and secure document storage.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${sourceSerif.variable} font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
