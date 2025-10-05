import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PaluVerse - Easy to Play, Hard to Stop. Endless Fun!',
  description: 'Discover the ultimate NFT gaming experience with PaluVerse. Play, collect, and trade unique characters in an immersive blockchain universe. Join our community today!',
  keywords: 'NFT, blockchain, gaming, PaluVerse, collectibles, characters, crypto, digital assets',
  icons: {
    icon: '/f2fRFObO_400x400',
    shortcut: '/f2fRFObO_400x400',
    apple: '/f2fRFObO_400x400',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' },
  ],
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
