import type { Metadata } from 'next'
import { Anton, Permanent_Marker, Inter } from 'next/font/google'
import './globals.css'

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
})

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-graffiti',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'DB Fitness · Personal Training in Sonsbeck',
  description:
    'DB Fitness · Daniel van der Bij · lizensierter Personal Trainer in Sonsbeck. Functional Training, Power Plate, Krafttraining, Laufkurse und mehr.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${anton.variable} ${permanentMarker.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
