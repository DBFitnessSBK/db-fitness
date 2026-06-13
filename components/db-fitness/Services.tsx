const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
)
const CtaArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const services = [
  {
    num: '01 · Signature',
    featured: true,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="22" r="8" /><path d="M22 36 Q32 30 42 36 L40 56 H24 Z" /><path d="M14 44 L22 36 M50 44 L42 36" />
      </svg>
    ),
    title: 'Personal Training',
    tag: '1:1 · ab 60 Min',
    desc: 'Volle Aufmerksamkeit, dein Plan, dein Tempo. Wir setzen klare Ziele und ich begleite jede Einheit persönlich · ob Abnehmen, Aufbau oder gezielte Reha.',
    meta1: '1:1', meta2: 'Alle Level',
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 32h8M48 32h8M16 24h32v16H16z" /><path d="M22 20v24M42 20v24" />
      </svg>
    ),
    title: 'Krafttraining',
    tag: 'Hypertrophie + Kraft · 60 Min',
    desc: 'Strukturierter Aufbau mit freien Gewichten und sauberer Technik. Vom Grundlagenlift bis zum gezielten Muskelaufbau · wir bauen Stärke, die im Alltag trägt.',
    meta1: '60 Min', meta2: 'Alle Level',
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="32" cy="40" rx="20" ry="8" /><path d="M12 40v6c0 4 9 8 20 8s20-4 20-8v-6M32 8v22M22 14h20" />
      </svg>
    ),
    title: 'Power Plate',
    tag: 'Vibration · 30 Min',
    desc: 'Vibrationstraining mit Power Plate Basic Academy Zertifikat. Effizient, gelenkschonend und ergänzend · ideal für Kraft, Mobilität und Regeneration.',
    meta1: '30 Min', meta2: '1:1',
  },
  {
    num: '04',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 12c-8 0-14 6-14 14 0 12 14 24 14 24s14-12 14-24c0-8-6-14-14-14z" /><circle cx="32" cy="26" r="5" />
      </svg>
    ),
    title: 'Ernährungsberatung',
    tag: 'Coaching · Individueller Plan',
    desc: 'Kein Diät-Geschwurbel. Realistische Pläne, die zu deinem Job, Alltag und Ziel passen · dauerhafte Veränderung statt 4-Wochen-Hype.',
    meta1: '1:1', meta2: 'Beratung',
  },
  {
    num: '05',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="22" cy="18" r="6" /><circle cx="42" cy="18" r="6" /><path d="M10 44 Q22 34 22 44 L22 54 H12 Z M42 44 Q54 34 54 44 L54 54 H44 Z M28 40 Q32 34 36 40 L36 54 H28 Z" />
      </svg>
    ),
    title: 'Gruppenkurse',
    tag: 'Gruppe · feste Termine',
    desc: 'Gemeinsam stark: motivierende Workouts in der Gruppe mit klarer Anleitung und viel Energie. Vom Einsteiger bis zum Profi · jeder trainiert im eigenen Tempo, alle ziehen mit.',
    meta1: 'Gruppe', meta2: 'Alle Level',
  },
]

export default function Services() {
  return (
    <section className="db-services" id="services" aria-labelledby="services-title">
      <div className="db-container">
        <div className="db-section-head">
          <div>
            <div className="db-eyebrow">Meine Leistungen</div>
            <h2 id="services-title">
              Fünf Wege, dich <span className="graff">besser</span> zu machen.
            </h2>
          </div>
          <p className="db-section-head-right">
            Vom 1:1 Personal Training bis zur Gruppe · alle Programme laufen in meinem Studio an der
            Hochstraße. Outdoor-Termine auf Anfrage.
          </p>
        </div>

        <div className="db-services-grid">
          {services.map((s) => (
            <article
              key={s.num}
              className={`db-service${s.featured ? ' featured' : ''}`}
              tabIndex={0}
            >
              <span className="db-service-arrow">
                <ArrowIcon />
              </span>
              {/* Front */}
              <div className="db-service-front">
                <div>
                  <div className="db-service-num">{s.num}</div>
                  <div className="db-service-icon">{s.icon}</div>
                </div>
                <div>
                  <h3>{s.title}</h3>
                  <span className="db-service-hint">
                    <span className="info-dot" />
                    Mehr erfahren
                  </span>
                </div>
              </div>
              {/* Back */}
              <div className="db-service-back">
                <div>
                  <div className="db-card-tag">{s.tag}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                <div className="db-card-foot">
                  <div className="db-card-meta">
                    <strong>{s.meta1}</strong>
                    {s.meta2}
                  </div>
                  <a href="#contact" className="db-card-cta">
                    Termin <CtaArrow />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
