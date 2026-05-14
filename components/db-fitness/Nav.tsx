'use client'

import Image from 'next/image'
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

const SCROLL_FADE_DISTANCE = 240
const NAV_BG_MIN_OPACITY = 0.4

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [bgOpacity, setBgOpacity] = useState(0)
  const [activeSection, setActiveSection] = useState('top')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const updateNav = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      const progress = Math.min(Math.max(y / SCROLL_FADE_DISTANCE, 0), 1)
      setBgOpacity(NAV_BG_MIN_OPACITY + (1 - NAV_BG_MIN_OPACITY) * progress)
    }
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

  // iOS Safari: position:fixed nav scrolls with content until the page's
  // compositor is forced to reinit. Empirically, the only thing that fixes
  // it on this site is opening the mobile menu (which toggles
  // document.body.style.overflow) and then closing it. Mimic that toggle
  // on mount so the nav is fixed from page load.
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const id = window.setTimeout(() => {
      document.body.style.overflow = ''
    }, 60)
    return () => window.clearTimeout(id)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`db-nav${scrolled ? ' scrolled' : ''}`}
        id="nav"
        style={{ '--nav-bg-opacity': bgOpacity } as React.CSSProperties}
      >
        <div className="db-container db-nav-inner">
          <a className="db-logo" href="#top" aria-label="DB Fitness · Startseite" onClick={closeMenu}>
            <Image
              className="db-logo-img"
              src="/logo.png"
              alt="DB Fitness Logo"
              width={120}
              height={40}
              priority
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
