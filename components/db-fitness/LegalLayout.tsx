import Link from 'next/link'
import type { ReactNode } from 'react'

export default function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="db-body db-legal-page">
      <header className="db-legal-header">
        <div className="db-container db-legal-header-inner">
          <Link className="db-logo" href="/" aria-label="DB Fitness – zurück zur Startseite">
            <img
              className="db-logo-img"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-YTOilt1kw3eYthkUG9OrKGxXD0iQlS.png"
              alt="DB Fitness"
            />
            <span className="db-logo-text">
              FITNESS
              <small>SONSBECK · SEIT 2019</small>
            </span>
          </Link>
          <Link href="/" className="db-legal-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            Zurück zur Startseite
          </Link>
        </div>
      </header>

      <main className="db-container db-legal-content">
        <h1>{title}</h1>
        {children}
      </main>

      <footer className="db-legal-footer">
        <div className="db-container db-legal-footer-inner">
          <span>© 2026 DB Fitness · Daniel van der Bij · Sonsbeck</span>
          <nav aria-label="Rechtliche Links">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
