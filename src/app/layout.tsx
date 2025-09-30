import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Build - Professional Computer Building Services',
  description: 'Expert computer building services for gaming, workstations, and custom PCs. Professional assembly, optimization, and support.',
  keywords: 'computer building, custom PC, gaming computer, workstation, PC assembly, computer repair',
  authors: [{ name: 'Next Build' }],
  openGraph: {
    title: 'Next Build - Professional Computer Building Services',
    description: 'Expert computer building services for gaming, workstations, and custom PCs.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next Build - Professional Computer Building Services',
    description: 'Expert computer building services for gaming, workstations, and custom PCs.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}