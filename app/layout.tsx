import type { Metadata, Viewport } from 'next'
import { Anton, Permanent_Marker, Inter } from 'next/font/google'
import './globals.css'

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
})

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-graffiti',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.db-fitness.de'
const siteName = 'DB Fitness'
const siteTitle = 'DB Fitness · Personal Training in Sonsbeck'
const siteDescription =
  'Personal Training, Functional Fitness, Power Plate, Krafttraining und Laufkurse in Sonsbeck am Niederrhein. Lizensierter Personal Trainer Daniel van der Bij · seit 2019. Jetzt kostenloses Probetraining sichern.'
const ogImagePath = '/logo.png'
const ogImageAbsolute = `${siteUrl}${ogImagePath}`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s · DB Fitness Sonsbeck',
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    'Personal Training Sonsbeck',
    'Personal Trainer Niederrhein',
    'Fitnessstudio Sonsbeck',
    'Functional Training Sonsbeck',
    'Power Plate Sonsbeck',
    'Krafttraining Sonsbeck',
    'TRX Schlingentraining',
    'Laufkurse Sonsbeck',
    'HIIT Sonsbeck',
    'Ernährungsberatung Sonsbeck',
    'DB Fitness',
    'Daniel van der Bij',
    'Fitness Niederrhein',
    'Personal Coach Kreis Wesel',
  ],
  authors: [{ name: 'Daniel van der Bij' }],
  creator: 'Daniel van der Bij',
  publisher: 'DB Fitness',
  category: 'fitness',
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: 'DB Fitness · Personal Training in Sonsbeck',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: ogImagePath,
    apple: ogImagePath,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HealthClub', 'SportsActivityLocation'],
  '@id': `${siteUrl}/#business`,
  name: 'DB Fitness · Personal Training by Daniel',
  alternateName: 'DB Fitness',
  url: siteUrl,
  image: ogImageAbsolute,
  logo: ogImageAbsolute,
  description: siteDescription,
  telephone: '+49 178 8761855',
  email: 'DBFitness@web.de',
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  foundingDate: '2019',
  founder: {
    '@type': 'Person',
    name: 'Daniel van der Bij',
    jobTitle: 'Lizensierter Personal Trainer',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hochstraße 143',
    postalCode: '47665',
    addressLocality: 'Sonsbeck',
    addressRegion: 'NRW',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.6031,
    longitude: 6.3758,
  },
  hasMap: 'https://maps.app.goo.gl/kwbV6ptLNcjRQCVC6',
  areaServed: [
    { '@type': 'City', name: 'Sonsbeck' },
    { '@type': 'City', name: 'Xanten' },
    { '@type': 'City', name: 'Kevelaer' },
    { '@type': 'City', name: 'Geldern' },
    { '@type': 'AdministrativeArea', name: 'Niederrhein' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '06:00',
      closes: '21:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/db_fitness86/',
    'https://www.facebook.com/PersonalTrainerNiederrhein/',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    reviewCount: '3',
  },
  makesOffer: [
    'Personal Training',
    'Krafttraining',
    'Functional Fitness',
    'TRX Schlingentraining',
    'Laufkurse',
    'Power Plate',
    'Ernährungsberatung',
    'Pump & Run',
  ].map((service) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: service,
      provider: { '@type': 'LocalBusiness', name: siteName },
      areaServed: { '@type': 'City', name: 'Sonsbeck' },
    },
  })),
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  inLanguage: 'de-DE',
  publisher: { '@id': `${siteUrl}/#business` },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${anton.variable} ${permanentMarker.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger -- JSON-LD payload is fully server-generated from trusted, static values.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger -- JSON-LD payload is fully server-generated from trusted, static values.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
