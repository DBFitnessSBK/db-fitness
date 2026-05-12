'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    const updateNav = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', updateNav, { passive: true })
    updateNav()

    const sectionIds = ['top', 'about', 'services', 'kursplan', 'insta', 'contact']
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

  return (
    <header className={`db-nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="db-container db-nav-inner">
        <a className="db-logo" href="#top" aria-label="DB Fitness">
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
          {[
            { href: '#about', label: 'Daniel' },
            { href: '#services', label: 'Leistungen' },
            { href: '#kursplan', label: 'Kursplan' },
            { href: '#insta', label: 'Instagram' },
            { href: '#contact', label: 'Kontakt' },
          ].map(({ href, label }) => (
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

        <button className="db-menu-btn" aria-label="Menü">
          <span className="bars" />
          Menü
        </button>
      </div>
    </header>
  )
}
