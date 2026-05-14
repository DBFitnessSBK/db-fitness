import Image from 'next/image'

export default function Team() {
  const trainers = [
    {
      name: 'Sarah Müller',
      role: 'Fitnesstrainerin',
      description: 'Spezialisiert auf Kraft- und Ausdauertraining. Mit 7 Jahren Erfahrung hilft Sarah ihren Kunden, ihre Ziele nachhaltig zu erreichen.',
      image: '/team/sarah-mueller.jpg',
    },
    {
      name: 'Marcus Weber',
      role: 'Personal Trainer',
      description: 'Experte für funktionales Training und Rehabilitation. Marcus kombiniert sportwissenschaftliche Methodik mit praktischer Erfahrung.',
      image: '/team/marcus-weber.jpg',
    },
    {
      name: 'Julia Hoffmann',
      role: 'Fitnesstrainerin',
      description: 'Leidenschaftlich im Gruppentraining und Einzelbetreuung. Julia motiviert ihre Trainierenden mit Energie und Geduld.',
      image: '/team/julia-hoffmann.jpg',
    },
  ]

  return (
    <section className="db-team" id="team" aria-labelledby="team-title">
      <div className="db-container">
        <div className="db-eyebrow">Unser Team</div>
        <h2 className="db-team-title" id="team-title">Fachkompetenz &amp; Leidenschaft</h2>

        <div className="db-team-grid">
          {trainers.map((trainer) => (
            <article key={trainer.name} className="db-team-card">
              <div className="db-team-photo">
                <Image
                  src={trainer.image}
                  alt={`${trainer.name} · ${trainer.role} bei DB Fitness Sonsbeck`}
                  width={600}
                  height={600}
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 400px"
                  loading="lazy"
                />
              </div>
              <div className="db-team-body">
                <div className="db-team-role">{trainer.role}</div>
                <h3 className="db-team-name">{trainer.name}</h3>
                <p className="db-team-desc">{trainer.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
