'use client'

import { Lexend, Roboto } from 'next/font/google'
import Script from 'next/script'

//STYLE GLOBAL
import './globals.css'

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
  weight: ['300', '500', '800']
});

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['300', '500', '900']
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

        {/* METATAGS */}
        <link rel="icon" href="./logo-gemdam.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gemdam Studio</title>
        <meta name="description" content="La mejor empresa del mundo junto al Rodri multimedial" />
        <meta name="keywords" content="webs, tu hermana virtual y ar" />
        <link rel="canonical" href="https://www.maxiviajes.com.ar" />
        <link rel="alternate" hreflang="es" href="https://www.briptravel.com" />
        <link rel="alternate" hreflang="en" href="https://briptravel.com" />
        <meta name="robots" content="index,follow" />
        <link rel="sitemap" type="application/xml" href="https://briptravel.com/sitemap.xml" />

      </head>
      <body className={`${lexend.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  )
}
