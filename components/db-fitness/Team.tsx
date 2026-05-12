export default function Team() {
  const trainers = [
    {
      name: 'Sarah Müller',
      role: 'Fitnesstrainerin',
      description: 'Spezialisiert auf Kraft- und Ausdauertraining. Mit 7 Jahren Erfahrung hilft Sarah ihren Kunden, ihre Ziele zu erreichen.',
      initials: 'SM',
    },
    {
      name: 'Marcus Weber',
      role: 'Personal Trainer',
      description: 'Experte für funktionales Training und Rehabilitation. Marcus kombiniert Wissenschaft mit praktischer Erfahrung.',
      initials: 'MW',
    },
    {
      name: 'Julia Hoffmann',
      role: 'Fitnesstrainerin B',
      description: 'Leidenschaftlich im Gruppentraining und Einzelbetreuung. Julia motiviert ihre Trainierenden mit Energie und Geduld.',
      initials: 'JH',
    },
  ]

  return (
    <section className="db-team" id="team">
      <div className="db-container">
        <div className="db-eyebrow">Unser Team</div>
        <h2 className="db-team-title">Fachkompetenz & Leidenschaft</h2>
        
        <div className="db-team-grid">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="db-team-card">
              <div className="db-team-avatar">{trainer.initials}</div>
              <h3 className="db-team-name">{trainer.name}</h3>
              <div className="db-team-role">{trainer.role}</div>
              <p className="db-team-desc">{trainer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
