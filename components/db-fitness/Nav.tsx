'use client'

import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#about', label: 'Daniel' },
  { href: '#team', label: 'Team' },
  { href: '#services', label: 'Leistungen' },
  { href: '#kursplan', label: 'Kursplan' },
  { href: '#reviews', label: 'Bewertungen' },
  { href: '#insta', label: 'Instagram' },
  { href: '#contact', label: 'Kontakt' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const updateNav = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', updateNav, { passive: true })
    updateNav()

    const sectionIds = ['top', 'about', 'team', 'services', 'kursplan', 'reviews', 'insta', 'contact']
    const setActive = () => {
      const y = window.scrollY + window.innerHeight * 0.35
      let current = 'top'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', setActive, { passive: true })
    setActive()

    return () => {
      window.removeEventListener('scroll', updateNav)
      window.removeEventListener('scroll', setActive)
    }
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`db-nav${scrolled ? ' scrolled' : ''}`} id="nav">
        <div className="db-container db-nav-inner">
          <a className="db-logo" href="#top" aria-label="DB Fitness" onClick={closeMenu}>
            <img
              className="db-logo-img"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-YTOilt1kw3eYthkUG9OrKGxXD0iQlS.png"
              alt="DB Fitness"
            />
            <span className="db-logo-text">
              FITNESS
              <small>SONSBECK · SEIT 2019</small>
            </span>
          </a>

          <nav className="db-nav-links" aria-label="Hauptnavigation">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={activeSection === href.slice(1) ? 'active' : ''}
              >
                {label}
              </a>
            ))}
          </nav>

          <a className="db-nav-cta" href="#contact">
            Termin buchen
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>

          <button
            className={`db-menu-btn${menuOpen ? ' open' : ''}`}
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className="bars" />
            {menuOpen ? 'Schließen' : 'Menü'}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`db-mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="db-mobile-menu-links" aria-label="Mobile Navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={activeSection === href.slice(1) ? 'active' : ''}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="db-mobile-menu-cta" href="#contact" onClick={closeMenu}>
          Termin buchen
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div className="db-mobile-backdrop" onClick={closeMenu} aria-hidden="true" />
      )}
    </>
  )
}
