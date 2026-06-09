export default function About() {
  return (
    <section className="db-about" id="about" aria-labelledby="about-title">
      <div className="db-container db-about-grid">
        {/* Portrait */}
        <div className="db-about-portrait">
          <div className="db-about-badge">
            <div className="since">since &apos;19</div>
            <div className="id">
              <strong>Daniel van der Bij</strong>
              Personal Trainer · Coach
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="db-about-copy">
          <div className="db-eyebrow">Über Daniel</div>
          <h2 id="about-title">
            Sport ist <span className="graff">leidenschaft</span>
            <br />– keine pflicht.
          </h2>
          <p>
            Mein Name ist Daniel, ich bin <strong>39 Jahre alt</strong> und lizensierter Personal Trainer mit
            Medizinischer Fitness, den Trainer-Lizenzen A &amp; B und einem Power-Plate-Zertifikat. 2019 habe
            ich mit <strong>DB Fitness</strong> mein eigenes Studio in Sonsbeck eröffnet.
          </p>
          <p>
            Angefangen hat alles aus einer Laune heraus mit Triathlon. Aus dem Hobby wurden Marathons, dann
            Functional- und Schlingentraining – und irgendwann die Überzeugung, dass dieses Gefühl mehr
            Menschen verdient haben.
          </p>
          <p>
            Heute zeige ich dir, was in dir steckt. Wir gehen gemeinsam an deine Grenzen · und ein Stück
            darüber hinaus. <strong>Es gibt unendlich viele Ausreden, keinen Sport zu machen. Du brauchst nur
            einen Grund, warum doch.</strong>
          </p>

          <div className="db-certs">
            <div className="db-certs-label">Lizenzen &amp; Zertifikate</div>
            <div className="db-certs-list">
              <span className="db-cert">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z" />
                </svg>
                Medizinische Fitness
              </span>
              <span className="db-cert">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="9" r="6" />
                  <path d="M9 14l-2 7 5-3 5 3-2-7" />
                </svg>
                Fitnesstrainer A
              </span>
              <span className="db-cert">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="9" r="6" />
                  <path d="M9 14l-2 7 5-3 5 3-2-7" />
                </svg>
                Fitnesstrainer B
              </span>
              <span className="db-cert">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="6" width="18" height="12" rx="1" />
                  <path d="M3 10h18M7 14h2M11 14h6" />
                </svg>
                Power Plate Basic Academy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
