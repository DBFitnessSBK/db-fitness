import '../db-fitness.css'
import LegalLayout from '@/components/db-fitness/LegalLayout'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung von DB Fitness · Daniel van der Bij · Sonsbeck',
  alternates: { canonical: '/datenschutz' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Datenschutz · DB Fitness',
    description: 'Datenschutzerklärung von DB Fitness · Daniel van der Bij · Sonsbeck',
    url: '/datenschutz',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutz">
      <h2>Datenschutzerklärung</h2>
      <p>
        Ich nehme den Schutz Ihrer persönlichen Daten ernst und halte mich an die Vorgaben der
        EU-Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG). Die in dieser
        Erklärung verwendeten Begrifflichkeiten sind geschlechtsneutral zu verstehen.
      </p>

      <h2>Verantwortlicher</h2>
      <p>Verantwortlicher gem. Art. 4 Abs. 7 DSGVO bin ich:</p>
      <p>
        Daniel van der Bij<br />
        Löwensteg 10<br />
        47665 Sonsbeck<br />
        Telefon: 01788761855<br />
        E-Mail: <a href="mailto:DBFitness@web.de">DBFitness@web.de</a>
      </p>

      <h2>Erhebung und Speicherung von Daten beim Aufruf der Website</h2>
      <p>
        Wenn Sie diese Website rein informatorisch nutzen, erhebe ich diejenigen personenbezogenen Daten,
        die Ihr Browser automatisch an den Server übermittelt. Diese werden temporär in einem sog. Logfile
        gespeichert:
      </p>
      <ul>
        <li>IP-Adresse des anfragenden Rechners</li>
        <li>Datum und Uhrzeit der Anfrage</li>
        <li>Inhalt der Anforderung (konkrete Seite)</li>
        <li>Zugriffsstatus / HTTP-Statuscode</li>
        <li>jeweils übertragene Datenmenge</li>
        <li>Referrer-URL</li>
        <li>verwendeter Browser, Betriebssystem, Sprache</li>
      </ul>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse besteht in der
        Sicherstellung des stabilen, sicheren Betriebs der Website. Logfiles werden nach spätestens 30
        Tagen automatisch gelöscht, sofern sie nicht zur Abwehr eines konkreten Angriffs benötigt werden.
      </p>

      <h2>Hosting durch Vercel</h2>
      <p>
        Diese Website wird gehostet bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Beim
        Aufruf der Seite werden technisch notwendige Daten (insbesondere Ihre IP-Adresse) an Vercel
        übermittelt und dort in Server-Logs verarbeitet. Vercel betreibt auch Server in der EU (u. a. in
        Frankfurt). Eine Übermittlung in die USA kann jedoch nicht ausgeschlossen werden.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Bereitstellung der Website). Die Übermittlung in
        die USA stützt sich auf Standardvertragsklauseln gem. Art. 46 Abs. 2 lit. c DSGVO sowie – soweit
        Vercel zertifiziert ist – auf das EU-U.S. Data Privacy Framework (Art. 45 DSGVO). Weitere
        Informationen:{' '}
        <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
          vercel.com/legal/privacy-policy
        </a>
        .
      </p>

      <h2>Kontaktaufnahme</h2>
      <p>
        Wenn Sie mir eine E-Mail, WhatsApp-Nachricht oder Anruf zukommen lassen, speichere ich die von
        Ihnen mitgeteilten Daten (z. B. E-Mail-Adresse, Name, Telefonnummer, Anliegen), um Ihre Anfrage
        zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung eines Vertrags) bzw.
        Art. 6 Abs. 1 lit. f DSGVO (Beantwortung allgemeiner Anfragen). Ihre Daten lösche ich, sobald die
        Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2>Cookies</h2>
      <p>
        Diese Website setzt keine eigenen Cookies und speichert ohne Ihre Einwilligung keine Informationen
        auf Ihrem Endgerät. Sofern Sie die untenstehenden eingebetteten Inhalte (Google Maps,
        Instagram-Feed) durch einen aktiven Klick laden, können die jeweiligen Anbieter eigene Cookies und
        vergleichbare Technologien einsetzen.
      </p>

      <h2>Eingebetteter Instagram-Feed über Behold</h2>
      <p>
        Auf dieser Website werden aktuelle Instagram-Beiträge meines Profils @db_fitness86 angezeigt. Die
        Beiträge werden über den Dienst Behold (Stack Five Ltd., 71-75 Shelton Street, Covent Garden,
        London, WC2H 9JQ, Großbritannien) abgerufen. Die Beiträge werden erst geladen, nachdem Sie auf
        „Beiträge anzeigen" geklickt haben.
      </p>
      <p>
        Sobald Sie die Beiträge laden, wird Ihre IP-Adresse an Behold und an die Instagram-Bilderserver
        (Meta Platforms Ireland Ltd., 4 Grand Canal Square, Dublin 2, Irland) übertragen. Dabei können
        Cookies gesetzt werden. Rechtsgrundlage ist Ihre Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO und
        – soweit ein Zugriff auf Ihr Endgerät erfolgt – § 25 Abs. 1 TTDSG. Ihre Einwilligung können Sie
        jederzeit für die Zukunft widerrufen, indem Sie diese Seite neu laden.
      </p>
      <p>
        Datenschutzhinweise:{' '}
        <a href="https://behold.so/privacy/" target="_blank" rel="noopener noreferrer">
          behold.so/privacy
        </a>{' '}
        ·{' '}
        <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener noreferrer">
          privacycenter.instagram.com/policy
        </a>
      </p>

      <h2>Einbindung von Google Maps</h2>
      <p>
        Diese Website bindet auf der Kontaktseite eine Google-Maps-Karte ein (Anbieter: Google Ireland
        Ltd., Gordon House, Barrow Street, Dublin 4, Irland; bei Datenübermittlungen in die USA: Google
        LLC). Die Karte wird erst geladen, nachdem Sie auf „Karte anzeigen" geklickt haben.
      </p>
      <p>
        Sobald Sie die Karte laden, wird Ihre IP-Adresse an Google übertragen und Google kann Cookies auf
        Ihrem Endgerät setzen. Rechtsgrundlage ist Ihre Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO und
        § 25 Abs. 1 TTDSG. Eine Übermittlung in die USA stützt sich auf das EU-U.S. Data Privacy Framework
        (Art. 45 DSGVO) bzw. auf Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO). Sie können Ihre
        Einwilligung jederzeit für die Zukunft widerrufen, indem Sie diese Seite neu laden. Weitere
        Informationen:{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          policies.google.com/privacy
        </a>
        .
      </p>

      <h2>Links zu sozialen Netzwerken und Messenger-Diensten</h2>
      <p>
        Auf dieser Website finden Sie Links zu meinen Profilen bei Instagram und Facebook (jeweils Meta
        Platforms Ireland Ltd., 4 Grand Canal Square, Dublin 2, Irland) sowie zu WhatsApp (WhatsApp
        Ireland Ltd., 4 Grand Canal Square, Dublin 2, Irland). Es handelt sich ausschließlich um normale
        Hyperlinks. Eine Datenübertragung an diese Anbieter erfolgt erst, wenn Sie den Link aktiv
        anklicken. Welche Daten dann verarbeitet werden, entnehmen Sie bitte den
        Datenschutzhinweisen des jeweiligen Anbieters.
      </p>

      <h2>Schriftarten (Google Fonts, selbst gehostet)</h2>
      <p>
        Zur einheitlichen Darstellung von Schriftarten verwende ich Schriften aus der Google-Fonts-
        Bibliothek (Anton, Permanent Marker, Inter). Die Schriften werden zum Build-Zeitpunkt auf den
        Server geladen und ausschließlich von diesem Server ausgeliefert. Beim Besuch der Website findet
        keine Verbindung zu Servern von Google statt.
      </p>

      <h2>Weitergabe von Daten</h2>
      <p>Ich übermittele Ihre persönlichen Daten an Dritte ausschließlich zu folgenden Zwecken:</p>
      <ul>
        <li>nach Ihrer ausdrücklichen Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO,</li>
        <li>
          zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen nach Art. 6 Abs. 1 lit. f
          DSGVO,
        </li>
        <li>sofern eine gesetzliche Verpflichtung gem. Art. 6 Abs. 1 lit. c DSGVO besteht,</li>
        <li>
          sofern dies nach Art. 6 Abs. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen
          erforderlich ist.
        </li>
      </ul>

      <h2>Ihre Rechte</h2>
      <ul>
        <li><strong>Auskunft</strong> (Art. 15 DSGVO) über Ihre von mir verarbeiteten Daten;</li>
        <li><strong>Berichtigung</strong> (Art. 16 DSGVO) unrichtiger oder unvollständiger Daten;</li>
        <li><strong>Löschung</strong> (Art. 17 DSGVO) Ihrer Daten;</li>
        <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO);</li>
        <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO);</li>
        <li><strong>Widerspruch</strong> gegen die Verarbeitung auf Basis berechtigter Interessen (Art. 21 DSGVO);</li>
        <li><strong>Widerruf</strong> einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO);</li>
        <li>
          <strong>Beschwerde</strong> bei einer Aufsichtsbehörde (Art. 77 DSGVO). Zuständig ist u. a.
          die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen,
          Kavalleriestraße 2–4, 40213 Düsseldorf.
        </li>
      </ul>
      <p>
        Zur Ausübung Ihrer Rechte wenden Sie sich bitte an{' '}
        <a href="mailto:DBFitness@web.de">DBFitness@web.de</a>.
      </p>

      <h2>SSL-Verschlüsselung</h2>
      <p>
        Diese Website nutzt aus Sicherheitsgründen eine SSL/TLS-Verschlüsselung. Eine verschlüsselte
        Verbindung erkennen Sie am Schloss-Symbol in der Adressleiste Ihres Browsers und am Präfix
        „https://".
      </p>

      <h2>Widerspruch gegen Werbe-Mails</h2>
      <p>
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung
        nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen.
        Rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
        Spam-E-Mails, bleiben ausdrücklich vorbehalten.
      </p>
    </LegalLayout>
  )
}
