const InfoDot = () => <span className="info-dot" />

function Slot({
  time,
  title,
  tag,
  h4,
  desc,
  meta,
}: {
  time: string
  title: string
  tag: string
  h4: string
  desc: string
  meta: { label: string; value: string }[]
}) {
  return (
    <div className="db-slot" tabIndex={0}>
      <span className="db-slot-time">{time}</span>
      <span className="db-slot-title">
        {title} <InfoDot />
      </span>
      <div className="db-slot-card">
        <div className="db-slot-card-tag">{tag}</div>
        <h4>{h4}</h4>
        <p>{desc}</p>
        <div className="meta">
          {meta.map((m) => (
            <span key={m.label}>
              <strong>{m.label}</strong> {m.value}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Kursplan() {
  return (
    <section className="db-kursplan" id="kursplan" aria-labelledby="kursplan-title">
      <div className="db-container">
        <div className="db-kursplan-head">
          <div>
            <div className="db-eyebrow">Sei dabei</div>
            <h2 id="kursplan-title">
              Der <span className="graff">Kurs</span>
              <br />
              Plan.
            </h2>
          </div>
          <div className="db-kursplan-meta">
            <div className="valid">Gültig ab</div>
            <strong>01.09.2025</strong>
          </div>
        </div>

        <div className="db-kursplan-grid">
          {/* MONTAG */}
          <div className="db-day">
            <div className="db-day-head">
              <div className="db-day-abbr">MO</div>
              <div className="db-day-name">
                <strong>Mo</strong>Montag
              </div>
            </div>
            <div className="db-day-slots">
              <Slot
                time="17:15" title="TRX-Schlingentraining" tag="Ganzkörper · 30 Min"
                h4="TRX-Schlingentraining"
                desc="Suspension-Training mit Schlingen · dein Körpergewicht ist der Widerstand. Du forderst Kraft, Stabilität und Koordination in jeder Bewegung."
                meta={[{ label: 'Level', value: 'Einsteiger bis Fortgeschritten' }, { label: 'Format', value: 'Gruppe' }]}
              />
              <Slot
                time="18:00" title="HIIT-Zirkeltraining" tag="Cardio + Kraft · 45 Min"
                h4="HIIT-Zirkeltraining"
                desc="High-Intensity-Stationen im Zirkel · kurze, harte Intervalle für maximale Fettverbrennung und Konditionsaufbau. Pausen sind kurz, Effekt ist groß."
                meta={[{ label: 'Level', value: 'Einsteiger bis Fortgeschritten' }, { label: 'Kcal', value: '~500' }]}
              />
              <Slot
                time="19:00" title="Bodyfeeling" tag="Mobility + Kraft · 45 Min"
                h4="Bodyfeeling"
                desc="Bewusstes Ganzkörpertraining mit Fokus auf Haltung, Beweglichkeit und Tiefenmuskulatur. Ideal nach langen Bürotagen."
                meta={[{ label: 'Level', value: 'Einsteiger bis Fortgeschritten' }, { label: 'Format', value: 'Gruppe' }]}
              />
              <Slot
                time="20:00" title="Latin Dance for Fitness" tag="Cardio + Spaß · 60 Min"
                h4="Latin Dance for Fitness"
                desc="Salsa, Merengue, Reggaeton · Cardio, das sich nicht wie Cardio anfühlt. Schritte werden langsam aufgebaut, keine Vorkenntnisse nötig."
                meta={[{ label: 'Level', value: 'Einsteiger bis Fortgeschritten' }, { label: 'Kcal', value: '~450' }]}
              />
            </div>
          </div>

          {/* DIENSTAG */}
          <div className="db-day">
            <div className="db-day-head">
              <div className="db-day-abbr">DI</div>
              <div className="db-day-name">
                <strong>Di</strong>Dienstag
              </div>
            </div>
            <div className="db-day-slots">
              <Slot
                time="09:00" title="HIIT-Zirkeltraining" tag="Cardio + Kraft · 45 Min"
                h4="HIIT-Zirkeltraining"
                desc="Stationen mit kurzen, intensiven Intervallen. Kraft, Cardio und Core in einer Session · der effizienteste Workout-Typ im Plan."
                meta={[{ label: 'Level', value: 'Einsteiger bis Fortgeschritten' }, { label: 'Kcal', value: '~500' }]}
              />
              <Slot
                time="17:30" title="Rollaxx" tag="Faszien · 30 Min"
                h4="Rollaxx"
                desc="Geführtes Faszientraining mit Rolle und Ball. Du löst Verspannungen, verbesserst Beweglichkeit und Regeneration · das beste Tool für gestresste Körper."
                meta={[{ label: 'Level', value: 'Einsteiger bis Fortgeschritten' }, { label: 'Format', value: 'Gruppe' }]}
              />
              <Slot
                time="18:10" title="Hiit the Beat" tag="Cardio · 60 Min"
                h4="Hiit the Beat"
                desc="HIIT-Workout synchron zum Beat. Jede Übung im Takt, jeder Wechsel auf den Drop · Musik trägt dich durch jedes Intervall."
                meta={[{ label: 'Level', value: 'Einsteiger bis Fortgeschritten' }, { label: 'Kcal', value: '~480' }]}
              />
            </div>
          </div>

          {/* MITTWOCH */}
          <div className="db-day">
            <div className="db-day-head">
              <div className="db-day-abbr">MI</div>
              <div className="db-day-name">
                <strong>Mi</strong>Mittwoch
              </div>
            </div>
            <div className="db-day-slots">
              <Slot
                time="17:30" title="Pump &amp; Run" tag="Cardio + Hanteln · 30 Min"
                h4="Pump &amp; Run"
                desc="Wechselnde Blöcke aus Cardio-Sequenzen und Hantel-Sets. Doppelter Effekt: Ausdauer und Muskeldefinition in einer Stunde."
                meta={[{ label: 'Level', value: 'Einsteiger bis Fortgeschritten' }, { label: 'Kcal', value: '~520' }]}
              />
              <Slot
                time="18:15" title="Bodyfeeling" tag="Mobility + Kraft · 45 Min"
                h4="Bodyfeeling"
                desc="Bewusstes Ganzkörpertraining für Haltung und Tiefenmuskulatur. Du gehst aus dem Kurs aufgerichteter, als du reingekommen bist."
                meta={[{ label: 'Level', value: 'Einsteiger bis Fortgeschritten' }, { label: 'Format', value: 'Gruppe' }]}
              />
              <Slot
                time="19:15" title="Latin Dance for Fitness" tag="Cardio + Spaß · 60 Min"
                h4="Latin Dance for Fitness"
                desc="Cardio mit Salsa- und Reggaeton-Choreos. Schritte werden Stück für Stück aufgebaut · Spaß garantiert, Schweiß auch."
                meta={[{ label: 'Level', value: 'Einsteiger bis Fortgeschritten' }, { label: 'Kcal', value: '~450' }]}
              />
            </div>
          </div>

          {/* DONNERSTAG */}
          <div className="db-day">
            <div className="db-day-head">
              <div className="db-day-abbr">DO</div>
              <div className="db-day-name">
                <strong>Do</strong>Donnerstag
              </div>
            </div>
            <div className="db-day-slots">
              <Slot
                time="09:00" title="Bodyfeeling" tag="Mobility + Kraft · 45 Min"
                h4="Bodyfeeling"
                desc="Sanftes Ganzkörpertraining am Morgen. Haltung, Beweglichkeit, Tiefenmuskulatur · perfekter Start in den Tag."
                meta={[{ label: 'Level', value: 'Einsteiger bis Fortgeschritten' }, { label: 'Format', value: 'Gruppe' }]}
              />
              <Slot
                time="10:00" title="FitdankBaby Mini" tag="Postnatal · 60 Min"
                h4="FitdankBaby Mini"
                desc="Rückbildung &amp; Fitness mit Baby (ca. 3–7 Monate). Beckenboden, Bauch und Haltung · sicher und langsam aufgebaut, Baby liegt dabei."
                meta={[{ label: 'Level', value: 'Postnatal' }, { label: 'Alter', value: '3–7 Mon.' }]}
              />
              <Slot
                time="11:15" title="FitdankBaby Maxi" tag="Postnatal · 60 Min"
                h4="FitdankBaby Maxi"
                desc="Intensiveres Workout für Mamas, deren Babys bereits robben oder krabbeln (ca. 7+ Monate). Du trainierst, Baby spielt mit."
                meta={[{ label: 'Level', value: 'Postnatal' }, { label: 'Alter', value: '7+ Mon.' }]}
              />
              <Slot
                time="16:15" title="Functional Kids" tag="Kids · 45 Min"
                h4="Functional Kids"
                desc="Bewegungstraining für Kinder · Koordination, Kraft und Spaß. Spielerische Stationen, die Haltung und Athletik fördern."
                meta={[{ label: 'Level', value: 'Einsteiger bis Fortgeschritten' }, { label: 'Alter', value: '6–12 J.' }]}
              />
              <Slot
                time="17:30" title="Step Aerobic" tag="Cardio · 60 Min"
                h4="Step Aerobic"
                desc="Aerobic-Choreografien auf dem Step. Cardio mit Rhythmus, gut für Koordination und Ausdauer · der Klassiker im Plan."
                meta={[{ label: 'Level', value: 'Einsteiger bis Fortgeschritten' }, { label: 'Kcal', value: '~420' }]}
              />
              <Slot
                time="18:45" title="HIIT-Zirkeltraining" tag="Cardio + Kraft · 45 Min"
                h4="HIIT-Zirkeltraining"
                desc="Hochintensive Intervalle im Stationsbetrieb. Maximaler Output in minimaler Zeit · der Standard für effizientes Training."
                meta={[{ label: 'Level', value: 'Einsteiger bis Fortgeschritten' }, { label: 'Kcal', value: '~500' }]}
              />
            </div>
          </div>

          {/* FREITAG */}
          <div className="db-day">
            <div className="db-day-head">
              <div className="db-day-abbr">FR</div>
              <div className="db-day-name">
                <strong>Fr</strong>Freitag
              </div>
            </div>
            <div className="db-day-slots">
              <Slot
                time="16:30" title="Pump &amp; Run" tag="Cardio + Hanteln · 30 Min"
                h4="Pump &amp; Run"
                desc="Cardio-Intervalle gekreuzt mit Hantel-Sets. Du verlässt das Studio mit dem Wochenende auf den Beinen · und nicht andersrum."
                meta={[{ label: 'Level', value: 'Einsteiger bis Fortgeschritten' }, { label: 'Kcal', value: '~520' }]}
              />
              <div className="db-day-empty">
                Wochenende.
                <br />
                Erholung &amp; Outdoor.
              </div>
            </div>
          </div>
        </div>

        <div className="db-kursplan-footer">
          <p className="note">
            <strong>Anmeldung erforderlich.</strong> Plätze sind limitiert · sichere dir deinen Spot per
            WhatsApp oder Telefon. Probetraining ist immer kostenlos.
          </p>
          <a
            className="db-btn db-btn-primary"
            href="https://optioffice.eu/optioffice/login/homepagemodul.php?s=945&c=303161843&color=&background="
            target="_blank"
            rel="noopener noreferrer"
          >
            Platz reservieren
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
