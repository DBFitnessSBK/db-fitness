import Image from 'next/image'

export default function Team() {
  const trainers = [
    {
      name: 'Daniel van der Bij',
      role: 'Personal Trainer · Coach',
      description: 'Lizensierter Personal Trainer mit Medizinischer Fitness, den Trainer-Lizenzen A & B und Power-Plate-Zertifikat. 2019 gründete er DB Fitness in Sonsbeck und bringt dich gemeinsam an deine Grenzen – und ein Stück darüber hinaus.',
      image: '/team/trainer-1.jpeg',
    },
    {
      name: 'Steffi',
      role: 'Kurstrainerin',
      description: 'Ich bin Steffi und gebe die Kurse Bodyfeeling, Step Aerobic und den Kinderkurs. Seit 2024 bin ich Trainerin bei DB Fitness und war vorher begeisterte Teilnehmerin. Für die Kursteilnehmer immer wieder neue Übungen und kreative Herausforderungen zu gestalten, bereitet mir große Freude. Im Vordergrund steht für mich, dass sich jeder wohlfühlt – egal auf welchem Sportlevel man gerade ist. Hauptsache, wir haben gemeinsam Spaß beim Sport. Das ist die größte Motivation.',
      image: '/team/trainer-2.jpeg',
    },
    {
      name: 'Anke',
      role: 'Latin-Dance-Trainerin',
      description: 'Hallo, mein Name ist Anke. Seit über 10 Jahren tanze ich mit großer Leidenschaft. Latin Dance ist für mich die perfekte Möglichkeit, dem Alltag zu entfliehen, abzuschalten und neue Energie zu tanken. Diese Freude an Musik und Bewegung möchte ich gerne mit euch teilen. In meinen Kursen stehen Spaß, Fitness und gute Laune im Mittelpunkt. Alle sind herzlich willkommen. Ich freue mich darauf, mit euch zu tanzen!',
      image: '/team/trainer-3.jpeg',
    },
    {
      name: 'Sarah',
      role: 'Latin-Dance-Trainerin',
      description: 'Hi, ich bin Sarah! Meine größte Leidenschaft ist das Tanzen. Seit 2014 leite ich mit viel Freude Latin-Dance-Kurse. Gemeinsam tanzen wir zu mitreißenden Rhythmen, bringen den Kreislauf in Schwung und haben vor allem jede Menge Spaß. Besonders schön ist, dass mich viele Teilnehmerinnen schon seit Jahren begleiten. Ich freue mich darauf, mit euch zu tanzen und gemeinsam aktiv zu sein!',
      image: '/team/trainer-4.jpeg',
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
