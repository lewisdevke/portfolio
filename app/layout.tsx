import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lewis Mwaura Kinyanjui - Software Developer & Computer Trainer',
  description: 'Professional software developer specializing in Python, Django, React, MERN stack, and computer training. Experienced in full-stack development since 2019.',
  keywords: 'Lewis Mwaura, Software Developer, Python Developer, Django Developer, React Developer, MERN Stack, Computer Trainer, Kenya Developer',
  authors: [{ name: 'Lewis Mwaura Kinyanjui' }],
  creator: 'Lewis Mwaura Kinyanjui',
  publisher: 'Lewis Mwaura Kinyanjui',
  robots: 'index, follow',
  metadataBase: new URL('https://lewismwaura.vercel.app/'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lewismwaura.vercel.app/',
    title: 'Lewis Mwaura Kinyanjui - Software Developer & Computer Trainer',
    description: 'Professional software developer specializing in Python, Django, React, MERN stack, and computer training.',
    siteName: 'Lewis Mwaura Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lewis Mwaura Kinyanjui - Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lewis Mwaura Kinyanjui - Software Developer & Computer Trainer',
    description: 'Professional software developer specializing in Python, Django, React, MERN stack, and computer training.',
    images: ['/og-image.png'],
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3b82f6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8RZPXTYDZ1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8RZPXTYDZ1');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
} 