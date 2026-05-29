import type { Metadata } from 'next'
import { Cormorant, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Atlas — Portez votre cabinet. Sans porter le poids.',
  description:
    'Le logiciel de gestion pour avocats solos et cabinets 1 à 5 collaborateurs. Fait en France. Dossiers, délais, facturation, documents.',
  openGraph: {
    title: 'Atlas — On porte votre cabinet, vous plaidez.',
    description:
      'Le logiciel de gestion pour avocats solos et cabinets 1 à 5 collaborateurs. Fait en France.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
