'use client'

import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="db-contact" id="contact">
      <div className="db-container db-contact-grid">
        {/* Left */}
        <div>
          <div className="db-eyebrow">Kontakt &amp; Termin</div>
          <h2>
            Lass uns <span className="graff">trainieren.</span>
          </h2>
          <p className="db-contact-lede">
            Schreib mir, ruf an, oder buch direkt eine kostenlose Probe-Einheit. Du findest mich in Sonsbeck,
            Hochstraße 143 · Parkplätze direkt vor der Tür.
          </p>

          <div className="db-contact-info">
            <div className="db-contact-row">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span className="label">Studio</span>
              <span className="value">
                Studio DB Fitness
                <small>Hochstraße 143 · 47665 Sonsbeck</small>
              </span>
            </div>
            <div className="db-contact-row">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.5 19.5 0 0 1 5.2 13a19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4 2.1h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
                </svg>
              </span>
              <span className="label">Telefon</span>
              <span className="value">
                <a href="tel:+4901788761855">0178 876 1855</a>
              </span>
            </div>
            <div className="db-contact-row">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </span>
              <span className="label">E-Mail</span>
              <span className="value">
                <a href="mailto:DBFitness@web.de">DBFitness@web.de</a>
              </span>
            </div>
            <div className="db-contact-row">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </span>
              <span className="label">Zeiten</span>
              <span className="value">
                Mo – Fr · 06:00 – 21:00
                <small>Sa &amp; So · nach Vereinbarung</small>
              </span>
            </div>
          </div>
        </div>

        {/* Booking form */}
        <aside className="db-booking">
          <div className="db-booking-eyebrow">· Probetraining anfragen</div>
          <h3>Erste Einheit auf mich.</h3>
          <form
            className="db-booking-form"
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
          >
            <div className="field-row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Vor- und Nachname" required />
              </div>
              <div className="field">
                <label htmlFor="email">E-Mail</label>
                <input id="email" type="email" placeholder="du@beispiel.de" required />
              </div>
            </div>
            <div className="field">
              <label htmlFor="goal">Dein Ziel</label>
              <select id="goal">
                <option>Personal Training</option>
                <option>Functional Fitness</option>
                <option>Krafttraining</option>
                <option>Laufkurse</option>
                <option>Ernährungsberatung</option>
                <option>Probetraining – noch unentschieden</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="msg">Kurz zu dir</label>
              <textarea id="msg" rows={2} placeholder="Was soll ich wissen, bevor wir starten?" />
            </div>
            <button className="db-btn db-btn-primary submit" type="submit">
              {submitted ? 'Anfrage gesendet ✓' : (
                <>
                  Anfrage senden
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </aside>
      </div>
    </section>
  )
}
