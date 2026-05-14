import '../db-fitness.css'
import LegalLayout from '@/components/db-fitness/LegalLayout'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von DB Fitness · Daniel van der Bij · Sonsbeck',
  alternates: { canonical: '/impressum' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Impressum · DB Fitness',
    description: 'Impressum von DB Fitness · Daniel van der Bij · Sonsbeck',
    url: '/impressum',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <h2>Angaben gemäß § 5 TMG:</h2>
      <p>
        Daniel van der Bij<br />
        Löwensteg 10<br />
        47665 Sonsbeck<br />
        Kontakt: 01788761855<br />
        E-Mail: <a href="mailto:DBFitness@web.de">DBFitness@web.de</a>
      </p>

      <p>Berufsbezeichnung: Fitness Trainer</p>

      <h2>Alternative Streitbeilegung:</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform für die außergerichtliche Online-Streitbeilegung
        (OS-Plattform) bereit, aufrufbar unter{' '}
        <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/odr
        </a>
        .
      </p>
    </LegalLayout>
  )
}
