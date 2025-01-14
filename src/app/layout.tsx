import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'News Next',
  description:
    'The Simplified Online News Platform is a web application built with Next.js. ' +
    'It fetches news articles from a public API, displays them in a grid layout, ' +
    'and allows users to filter articles by category and search using keywords. ' +
    'The application is designed to be responsive and optimized for performance.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="google-site-verification"
          content="qSDOJp112Hb10vJ0Z10wZqHsQr-4fxAYq1TpgnCfdRA"
        />
        <meta
          name="keywords"
          content="braycenews, news, sports, technology, business, latest news, NFL, NBA, stock market, technology news, updates, trends"
        />
        <meta name="author" content="Ernest Brayce" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
