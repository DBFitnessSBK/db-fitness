export default function Booking() {
  return (
    <section className="db-booking" id="buchung" aria-labelledby="booking-title">
      <div className="db-container">
        <div className="db-booking-head">
          <div className="db-eyebrow">Direkt online</div>
          <h2 id="booking-title">
            Buchungs<span className="graff">Kalender</span>
          </h2>
          <p>
            Wähle deinen Kurs, sichere dir deinen Platz · alles in Echtzeit, direkt
            hier im Kalender.
          </p>
        </div>

        <div className="db-booking-frame">
          <iframe
            title="Buchungskalender DB Fitness"
            scrolling="auto"
            allowTransparency
            src="https://optioffice.eu/optioffice/login/homepagemodul.php?s=945&c=303161843&color=01AAFF&background=0a0a0a"
          />
        </div>
      </div>
    </section>
  )
}
