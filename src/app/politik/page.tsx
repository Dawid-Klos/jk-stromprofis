import Link from "next/link";

import Hgroup from "@components/common/Hgroup";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <section className={styles.section}>
      <article className={styles.container}>
        <Hgroup title="Datenschutzerklärung" subtitle="Letzte Aktualisierung - 15.11.2023" headingSize="h1" />
        <p>
          Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen
          Daten (nachfolgend kurz „Daten“) im Rahmen der Erbringung unserer Dienstleistungen im Bereich
          Elektroinstallation auf unserer Website <Link href={"/"}>www.JK-Stromprofis.de</Link>
        </p>
      </article>

      <article className={styles.container}>
        <h2 className={styles.title}>1. Verantwortliche Stelle</h2>
        <p>
          Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          <br />
          <br />
          JK-STROMPROFIS
          <br />
          Würffelstraße 7<br />
          21073 Hamburg
          <br />
          <br />
          info@jk-stromprofis.de
          <br />
          +49 177 629 49 92
        </p>
      </article>

      <article className={styles.container}>
        <h2 className={styles.title}>2. Arten der verarbeiteten Daten:</h2>
        <p>
          - Personenbezogene Daten (z.B. Name, Adresse, E-Mail-Adresse, Telefonnummer, Firmenname)
          <br />- Nutzungsdaten (z.B. besuchte Seiten unserer Website, Interesse an unseren Dienstleistungen)
        </p>
      </article>

      <article className={styles.container}>
        <h2 className={styles.title}>3. Zweck der Datenverarbeitung:</h2>
        <p>Wir verarbeiten Ihre personenbezogenen Daten zu folgenden Zwecken:</p>
        <ul>
          <li>Zur Erfüllung und Abwicklung Ihrer Anfragen und Aufträge</li>
          <li>Zur Sicherstellung eines reibungslosen Betriebs und einer effektiven Nutzung unserer Website</li>
          <li>Zur Kommunikation mit Ihnen, einschließlich Versand von relevanten Informationen und Updates</li>
          <li>Zur Erfüllung gesetzlicher Verpflichtungen</li>
        </ul>
      </article>

      <article className={styles.container}>
        <h2 className={styles.title}>4. Rechtsgrundlage der Verarbeitung:</h2>
        <p>Die Verarbeitung Ihrer Daten erfolgt auf Grundlage einer der folgenden Rechtsgrundlagen:</p>
        <ul>
          <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
          <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung oder vorvertragliche Maßnahmen)</li>
          <li>Art. 6 Abs. 1 lit. c DSGVO (Erfüllung einer rechtlichen Verpflichtung)</li>
          <li>Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse)</li>
        </ul>
      </article>

      <article className={styles.container}>
        <h2 className={styles.title}>5. Datenübermittlung an Dritte:</h2>
        <p>
          Ihre Daten werden nur an Dritte übermittelt, wenn dies zur Erfüllung unserer vertraglichen Verpflichtungen
          oder auf Grundlage Ihrer Einwilligung erfolgt. Eine Weitergabe zu anderen Zwecken erfolgt nicht.
        </p>
      </article>

      <article className={styles.container}>
        <h2 className={styles.title}>6. Speicherdauer:</h2>
        <p>
          Ihre Daten werden nur so lange gespeichert, wie dies für die Erfüllung der oben genannten Zwecke erforderlich
          ist oder wie es die gesetzlichen Aufbewahrungspflichten vorsehen.
        </p>
      </article>

      <article className={styles.container}>
        <h2 className={styles.title}>7. Ihre Rechte:</h2>
        <p>Sie haben folgende Rechte in Bezug auf Ihre personenbezogenen Daten:</p>
        <ul>
          <li>Recht auf Auskunft</li>
          <li>Recht auf Berichtigung</li>
          <li>Recht auf Löschung</li>
          <li>Recht auf Einschränkung der Verarbeitung</li>
          <li>Recht auf Datenübertragbarkeit</li>
          <li>Widerspruchsrecht</li>
          <li>Recht auf Widerruf Ihrer Einwilligung</li>
        </ul>
      </article>

      <article className={styles.container}>
        <h2 className={styles.title}>8. Datensicherheit:</h2>
        <p>
          Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige oder
          vorsätzliche Manipulation, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen.
        </p>
      </article>

      <article className={styles.container}>
        <h2 className={styles.title}>9. Kontakt:</h2>
        <p>
          Für Fragen zum Datenschutz und zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter{" "}
          <Link href="mailto:info@jk-stromprofis.de">info@jk-stromprofis.de</Link> oder
          <Link href="tel:004917643333333">+49 177 629 49 92</Link>.
        </p>
      </article>
    </section>
  );
}
