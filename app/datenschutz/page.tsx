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
      <h2>Datenschutzerklärung:</h2>
      <p>
        Ich nehme den Schutz Ihrer persönlichen Daten ernst und halte mich an die Regeln der gesetzlichen
        Vorgaben, insbesondere der Datenschutzgesetze. Die in dieser Erklärung verwendeten
        Begrifflichkeiten sind geschlechtsneutral zu verstehen und umfassen jeweils die weibliche und
        männliche Form.
      </p>

      <h2>Information über die Erhebung personenbezogener Daten</h2>
      <p>
        In dieser Datenschutzerklärung informiere ich Sie über die Erhebung personenbezogener Daten bei
        Nutzung meiner Internetpräsenz. Personenbezogene Daten sind alle Daten, die auf Sie persönlich
        beziehbar sind, beispielsweise Ihr Name, Ihre Anschrift oder Ihre E-Mail-Adresse.
      </p>
      <p>Verantwortlicher gem. Art. 4 Abs. 7 EU-Datenschutz-Grundverordnung (DS-GVO) bin ich,</p>
      <p>
        Daniel van der Bij<br />
        Löwensteg 10<br />
        47665 Sonsbeck<br />
        Kontakt: 01788761855<br />
        E-Mail: <a href="mailto:DBFitness@web.de">DBFitness@web.de</a>
      </p>

      <h2>Erhebung und Speicherung personenbezogener Daten bei Aufruf meiner Website</h2>
      <p>
        Wenn Sie meine Internetpräsenz informatorisch nutzen, erhebe ich bei deren Aufruf diejenigen
        personenbezogenen Daten, die Ihr Browser automatisch an den Server meiner Website übermittelt.
        Diese Informationen werden temporär in einem sog. Logfile gespeichert.
      </p>
      <p>Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:</p>
      <ul>
        <li>IP-Adresse des anfragenden Rechners</li>
        <li>Datum und Uhrzeit der Anfrage bzw. des Zugriffs</li>
        <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
        <li>Inhalt der Anforderung (konkrete Seite)</li>
        <li>Name und URL der abgerufenen Datei</li>
        <li>Zugriffsstatus/HTTP-Statuscode</li>
        <li>jeweils übertragene Datenmenge</li>
        <li>Website, von der die Anforderung bzw. der Zugriff erfolgt (Referrer-URL)</li>
        <li>verwendeter Browser</li>
        <li>Betriebssystem Ihres Rechners und dessen Oberfläche sowie der Name Ihres Access-Providers</li>
        <li>Sprache und Version der Browsersoftware</li>
      </ul>
      <p>
        Die Rechtsgrundlage für die Datenverarbeitung bildet Art. 6 Abs. 1 S. 1 lit. f DS-GVO.
      </p>

      <h2>Datenschutzerklärung für die Nutzung von Wix Visitor Analytics</h2>
      <p>
        Die oben genannten Daten werden erhoben und verarbeitet von Wix.com Ltd., Namal 40, 6350671 Tel
        Aviv, Israel. Wix.com ist gemäß des U.S.-Handelsministerium vom EU-US-Datenschutzschild
        ausgezeichnet. Weitere Informationen dazu:{' '}
        <a href="https://support.wix.com/de/article/eu-datenschutz-grundverordnung-dsgvo" target="_blank" rel="noopener noreferrer">
          support.wix.com
        </a>
        .
      </p>

      <h2>Kontaktaufnahme</h2>
      <p>
        Wenn Sie mir eine E-Mail schreiben, speichere ich die von Ihnen mitgeteilten Daten (z.B. Ihre
        E-Mail-Adresse, ggf. Ihren Namen und Ihre Telefonnummer), um Ihre Fragen zu beantworten. Ist eine
        Speicherung nicht mehr erforderlich, lösche ich die erhobenen personenbezogenen Daten. Die
        Rechtsgrundlage für die Datenverarbeitung zum Zwecke der Kontaktaufnahme bildet Art. 6 Abs. 1 S.
        1 lit. f DS-GVO.
      </p>

      <h2>Weitergabe von Daten / Datenübermittlung</h2>
      <p>Ich übermittele Ihre persönlichen Daten an Dritte ausschließlich zu folgenden Zwecken:</p>
      <ul>
        <li>nach Erteilung einer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO,</li>
        <li>zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen nach Art. 6 Abs. 1 S. 1 lit. f DSGVO,</li>
        <li>falls für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht,</li>
        <li>sofern dies nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen erforderlich ist.</li>
      </ul>

      <h2>Ihre Rechte</h2>
      <ul>
        <li><strong>Recht auf Auskunft:</strong> gemäß Art. 15 DSGVO können Sie Auskunft über Ihre von mir verarbeiteten personenbezogenen Daten verlangen.</li>
        <li><strong>Recht auf Berichtigung:</strong> gemäß Art. 16 DSGVO können Sie unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei mir gespeicherten personenbezogenen Daten verlangen.</li>
        <li><strong>Recht auf Löschung:</strong> gemäß Art. 17 DSGVO können Sie die Löschung Ihrer bei mir gespeicherten personenbezogenen Daten verlangen.</li>
        <li><strong>Recht auf Einschränkung der Verarbeitung:</strong> gemäß Art. 18 DSGVO können Sie die Einschränkung der Verarbeitung verlangen.</li>
        <li><strong>Recht auf Widerspruch:</strong> gemäß Art. 7 Abs. 3 DSGVO können Sie Ihre einmal erteilte Einwilligung jederzeit widerrufen.</li>
        <li><strong>Recht auf Datenübertragbarkeit:</strong> gemäß Art. 20 DSGVO können Sie verlangen, Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
        <li>Sie haben gemäß Art. 77 DSGVO zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.</li>
      </ul>

      <h2>Verschlüsselung</h2>
      <p>
        Zur Sicherung Ihrer Daten verwende ich auf meiner Internetpräsenz eine SSL-Verschlüsselung.
        Ob eine Seite verschlüsselt übertragen wird, erkennen Sie an dem Schloss-Symbol in der
        Statusleiste Ihres Browsers.
      </p>

      <h2>Cookies</h2>
      <p>
        Bei Ihrer Nutzung meiner Website werden sogenannte Cookies auf Ihrem Endgerät gespeichert. Dies
        sind kleine Textdateien, die auf Ihrer Festplatte dem von Ihnen verwendeten Browser zugeordnet
        gespeichert werden. Cookies können keine Programme ausführen oder Viren auf Ihren Computer
        übertragen.
      </p>

      <h2>Einbindung von Google Maps</h2>
      <p>
        Ich nutze auf meiner Website Google Maps. Bei der Nutzung werden von Google Daten über Ihre
        Nutzung der Kartenfunktionen erhoben, verarbeitet und genutzt. Weitere Informationen finden Sie
        in den{' '}
        <a href="http://www.google.de/intl/de/policies/privacy" target="_blank" rel="noopener noreferrer">
          Datenschutzrichtlinien von Google
        </a>
        .
      </p>

      <h2>Youtube</h2>
      <p>
        Unsere Seite verwendet für die Einbindung von Videos den Anbieter YouTube LLC, 901 Cherry Avenue,
        San Bruno, CA 94066, USA. Wenn Sie ein Video anklicken, wird Ihre IP-Adresse an YouTube
        übermittelt. Nähere Informationen finden Sie in der{' '}
        <a href="http://www.google.de/intl/de/policies/privacy" target="_blank" rel="noopener noreferrer">
          Datenschutzerklärung von YouTube
        </a>
        .
      </p>

      <h2>Widerspruch oder Widerruf gegen die Verarbeitung Ihrer Daten</h2>
      <p>
        Sofern Sie Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einlegen möchten oder
        eine erteilte Einwilligung widerrufen möchten, richten Sie eine E-Mail an:{' '}
        <a href="mailto:DBFitness@web.de">DBFitness@web.de</a>
      </p>
      <p>
        Daniel van der Bij<br />
        Löwensteg 10<br />
        47665 Sonsbeck<br />
        Kontakt: 01788761855
      </p>

      <h2>Widerspruch Werbe-Mails</h2>
      <p>
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von
        nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen.
        Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten
        Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
      </p>

      <h2>Weitere Fragen</h2>
      <p>
        Konnte meine Datenschutzerklärung eine Ihrer Fragen nicht beantworten? Dann lassen Sie mich dies
        wissen. Für alle Anfragen zum Datenschutz wenden Sie sich bitte an:{' '}
        <a href="mailto:DBFitness@web.de">DBFitness@web.de</a>
      </p>
    </LegalLayout>
  )
}
