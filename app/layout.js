'use client'

import { Lexend, Roboto, Manrope } from 'next/font/google'

//STYLE GLOBAL
import './globals.css'
import Script from 'next/script';

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

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['300', '400', '600', '800']
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
        <meta name="description" content="Nuestro equipo multidisciplinario de profesionales está enfocado en llevar a cabo soluciones tecnológicas innovadoras, que contribuyan a crear un futuro digital y cognitivo." />
        <meta name="keywords" content="Realidad Virtual, VR, virtual reality, augmented reality, Realdad Aumentada, AR, experience, nultimedia, diseño, design, simulator, environment, desarrollo web, website, 3D, react, gaming, videojuegos, archviz, arquitectura, recorrido, software" />
        <meta name="color-scheme" content="blue" />
        <link rel="canonical" href="https://www.gemdam.com" />
        <link rel="alternate" hreflang="es" href="https://www.gemdam.com" />
        <link rel="alternate" hreflang="en" href="https://www.gemdam.com" />
        <meta name="robots" content="index,follow" />
        <link rel="sitemap" type="application/xml" href="https://www.gemdam.com/sitemap.xml" />

        {/* Google tag GEMDAM (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-8XYCR02B4V" />
        <Script id="google-analytics">
          {` window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-8XYCR02B4V'); `}
        </Script>

      </head>
      <body className={`${lexend.variable} ${roboto.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  )
}
