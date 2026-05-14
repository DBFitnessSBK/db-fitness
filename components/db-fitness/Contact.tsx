'use client'

import { useState } from 'react'

export default function Contact() {
  const [mapConsent, setMapConsent] = useState(false)

  return (
    <section className="db-contact" id="contact">
      <div className="db-container">
        <div className="db-contact-header">
          <div className="db-eyebrow">Kontakt &amp; Termin</div>
          <h2>
            Lass uns <span className="graff">trainieren.</span>
          </h2>
          <p className="db-contact-lede">
            Schreib mir, ruf an, oder buch direkt eine kostenlose Probe-Einheit. Du findest mich in <a href="https://maps.app.goo.gl/kwbV6ptLNcjRQCVC6" target="_blank" rel="noopener noreferrer">Sonsbeck, Hochstraße 143</a> · Parkplätze direkt vor der Tür.
          </p>
        </div>

        <div className="db-contact-grid">
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
                <a href="https://maps.app.goo.gl/kwbV6ptLNcjRQCVC6" target="_blank" rel="noopener noreferrer">
                  Studio DB Fitness
                  <small>Hochstraße 143 · 47665 Sonsbeck</small>
                </a>
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
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.554 4.1 1.523 5.828L0 24l6.34-1.498A11.956 11.956 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.371l-.36-.213-3.727.881.936-3.618-.234-.372A9.818 9.818 0 1 1 12 21.818z" />
                </svg>
              </span>
              <span className="label">WhatsApp</span>
              <span className="value">
                <a href="https://wa.me/4917887618557" target="_blank" rel="noopener noreferrer">
                  Nachricht schreiben
                  <small>Schnelle Antwort via WhatsApp</small>
                </a>
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
                &nbsp;<small>Sa &amp; So · nach Vereinbarung</small>
              </span>
            </div>
          </div>

          {/* Map */}
          <aside className="db-map">
            {mapConsent ? (
              <iframe
                title="Studio DB Fitness · Hochstraße 143, Sonsbeck"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.094908510018!2d6.37580067662584!3d51.603149571835296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7633ea0ce626b%3A0xf008c787c2a17d34!2sDB%20Fitness-Personal%20Training%20by%20Daniel!5e0!3m2!1sen!2sde!4v1778729619157!5m2!1sen!2sde"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="db-map-placeholder">
                <svg className="db-map-placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <h3>Karte laden?</h3>
                <p>
                  Beim Anzeigen der Karte werden Daten an Google übertragen. Mit einem Klick erlaubst du das Laden des Google Maps Inhalts.
                </p>
                <button type="button" className="db-btn db-btn-primary" onClick={() => setMapConsent(true)}>
                  Karte anzeigen
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
                <a
                  className="db-map-placeholder-fallback"
                  href="https://maps.app.goo.gl/kwbV6ptLNcjRQCVC6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stattdessen in Google Maps öffnen
                </a>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}
