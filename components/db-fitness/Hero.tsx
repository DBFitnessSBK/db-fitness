export default function Hero() {
  return (
    <section className="db-hero" id="top">
      <div className="db-hero-video">
        <iframe
          src="https://www.youtube.com/embed/iSSAk4XCsRA?autoplay=1&mute=1&loop=1&playlist=iSSAk4XCsRA&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0&disablekb=1&iv_load_policy=3"
          title="DB Fitness · Reel"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <div className="db-video-fallback" aria-hidden="true" />
      </div>
      <div className="db-hero-overlay" />
      <div className="db-hero-noise" />

      <div className="db-hero-side">
        <span className="bar" />
        REEL · DB FITNESS / 26
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
