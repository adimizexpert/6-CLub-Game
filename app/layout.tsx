import type { Metadata } from 'next'
import { Orbitron, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '6Club Game Official Guide - Download APK & Play Games',
  description: '6 Club is a premier online gaming platform. Download the 6 Club APK for Android and iOS. Play K3 Lotre, TRX Hash, 5D Lotre, Colour Prediction, and Wingo games.',
  keywords: '6 club, 6 club game, 6 club download, 6 club apk, 6 club login, 6 club guide, online gaming, mobile games',
  authors: [{ name: '6Club Guide' }],
  icons: {
    icon: [
      { url: '/images/favicon.ico', sizes: 'any' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#03002e',
  other: {
    'msapplication-TileColor': '#03002e',
  },
  openGraph: {
    title: '6Club Game Official Guide - Download APK & Play Games',
    description: '6 Club is a premier online gaming platform. Download the 6 Club APK and start playing today.',
    url: 'https://6clubguide.com',
    siteName: '6Club Guide',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://6clubguide.com/images/6-club-main.webp',
        width: 1200,
        height: 630,
        alt: '6Club Game',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '6Club Game Official Guide',
    description: '6 Club is a premier online gaming platform. Download the 6 Club APK and start playing today.',
    images: ['https://6clubguide.com/images/6-club-main.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://6clubguide.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${poppins.variable}`}>
      <body className="bg-dark-blue text-white font-poppins">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

