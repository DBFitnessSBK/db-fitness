export default function Hero() {
  return (
    <section className="db-hero" id="top" aria-label="Intro · DB Fitness Sonsbeck">
      <div className="db-hero-video">
        <div className="db-video-fallback" aria-hidden="true" />
      </div>
      <div className="db-hero-overlay" />
      <div className="db-hero-noise" />

      <div className="db-hero-side">
        <span className="bar" />
        DB FITNESS · SONSBECK / 26
        <span className="bar" />
      </div>

      <div className="db-container db-hero-inner">
        <div className="db-hero-tag">
          <span className="dot" />
          Personal Training · Sonsbeck · Niederrhein
        </div>

        <h1>
          <span className="beast">Beast</span>
          <span>
            <em>Mode</em> ist
          </span>
          <span>
            <span className="you">deine</span> Gewohnheit.
          </span>
        </h1>

        <div className="db-hero-sub">
          <p className="db-hero-sub-left">
            <strong>Ich bin Daniel.</strong> Lizensierter Personal Trainer. Seit 2019 mein eigenes Studio in
            Sonsbeck · und seitdem die feste Überzeugung: Jeder Körper kann mehr, als sein Kopf glaubt. Lass
            uns rausfinden, wieviel mehr.
          </p>
          <div className="db-hero-ctas">
            <a className="db-btn db-btn-primary" href="#contact">
              Probetraining sichern
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a className="db-btn db-btn-ghost" href="#services">
              Leistungen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
