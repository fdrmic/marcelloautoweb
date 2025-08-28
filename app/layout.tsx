import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import GlobalNavbar from '@/components/global-navbar'
import GlobalFooter from '@/components/global-footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marcello Auto GmbH - Ihre vertrauensvolle Garage in Seewen',
  description: 'Ihre vertrauensvolle Garage in Seewen – Reparaturen, Service und Fahrzeughandel. Zertifizierte Qualität, fairer Service und moderne Ausstattung.',
  keywords: 'Autowerkstatt, Autoreparatur, Fahrzeughandel, MFK, Inspektion, Unfallreparatur, Diepoldsau, Schweiz',
  authors: [{ name: 'Marcello Auto GmbH' }],
  creator: 'Marcello Auto GmbH',
  publisher: 'Marcello Auto GmbH',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://marcello-auto.ch'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Marcello Auto GmbH - Ihre vertrauensvolle Garage in Seewen',
    description: 'Ihre vertrauensvolle Garage in Seewen – Reparaturen, Service und Fahrzeughandel.',
    url: 'https://marcello-auto.ch',
    siteName: 'Marcello Auto GmbH',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marcello Auto GmbH - Ihre vertrauensvolle Garage in Seewen',
      },
    ],
    locale: 'de_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcello Auto GmbH - Ihre vertrauensvolle Garage in Seewen',
    description: 'Ihre vertrauensvolle Garage in Seewen – Reparaturen, Service und Fahrzeughandel.',
    images: ['/images/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <link rel="icon" href="/logo2.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo2.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/logo2.svg" />
        <meta name="theme-color" content="#FF0000" />
        <meta name="msapplication-TileColor" content="#FF0000" />
      </head>
      <body className="antialiased">
        <div className="flex flex-col min-h-[100dvh] bg-black text-white">
          <GlobalNavbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <GlobalFooter />
        </div>
      </body>
    </html>
  )
}
