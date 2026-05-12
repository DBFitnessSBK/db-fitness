export default function Footer() {
  return (
    <footer className="db-footer">
      <div className="db-container">
        <div className="db-footer-top">
          <div className="db-footer-brand">
            <div className="display-mark">
              DB<span className="accent">.</span>
              <br />
              Fitness
            </div>
            <p>
              Personal Training, Functional Fitness und Power Plate in Sonsbeck am Niederrhein. Geführt von
              Daniel van der Bij · seit 2019.
            </p>
          </div>

          <div className="db-footer-col">
            <h4>Studio</h4>
            <ul>
              <li><a href="#about">Über Daniel</a></li>
              <li><a href="#services">Leistungen</a></li>
              <li><a href="#contact">Termin buchen</a></li>
            </ul>
          </div>

          <div className="db-footer-col">
            <h4>Social</h4>
            <ul>
              <li>
                <a href="https://www.instagram.com/db_fitness86/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/PersonalTrainerNiederrhein/" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li><a href="#insta">Aktuelle Reels</a></li>
            </ul>
          </div>

          <div className="db-footer-col">
            <h4>Rechtliches</h4>
            <ul>
              <li><a href="/impressum">Impressum</a></li>
              <li><a href="/datenschutz">Datenschutz</a></li>
            </ul>
          </div>
        </div>

        <div className="db-footer-bottom">
          <span>© 2026 DB Fitness · Daniel van der Bij · Sonsbeck</span>
          <div className="socials">
            <a href="https://www.instagram.com/db_fitness86/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a href="https://www.facebook.com/PersonalTrainerNiederrhein/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5V12H16l-.4 3h-2.2v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a href="mailto:DBFitness@web.de" aria-label="E-Mail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
