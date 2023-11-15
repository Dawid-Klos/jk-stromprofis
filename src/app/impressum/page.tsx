import Link from "next/link";

import Hgroup from "@components/common/Hgroup";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <section className={styles.section}>
      <Hgroup title={"Impressum"} subtitle="Rechtliche Informationen und Hinweise" headingSize="h1" />

      <article className={styles.container}>
        <h2 className={styles.title}>Firmename:</h2>
        <p>JK-Stromprofis</p>
      </article>

      <article className={styles.container}>
        <h2 className={styles.title}>Anschrift:</h2>
        <p>
          Würffelstraße 7<br /> 21073 Hamburg
          <br /> Deutschland
        </p>
      </article>

      <article className={styles.container}>
        <h2 className={styles.title}>E-Mail-Adresse:</h2>
        <Link href="mailto:info@jk-stromprofis.de" className={styles.link}>
          <p>info@jk-stromprofis.de</p>
        </Link>
      </article>

      <article className={styles.container}>
        <h2 className={styles.title}>Telefon:</h2>
        <Link href="tel:00491776294992" className={styles.link}>
          +49 177 629 49 92
        </Link>
      </article>

      <article className={styles.container}>
        <h2 className={styles.title}>Geschäftsführer:</h2>
        <p>Jakub Rafal Klos</p>
      </article>

      <article className={styles.container}>
        <h2 className={styles.title}>Steuernummer:</h2>
        <p>053 652 43 31 1</p>
      </article>

      <article className={styles.container}>
        <h2 className={styles.title}>Berufsrechtliche Regelungen:</h2>
        <p>
          Meister des Elektroinstallateur-Handwerks / Elektrotechniker-Handwerks (In Zusammenarbeit mit unseren
          Geschäftspartnern)
        </p>
      </article>

      <article className={styles.container}>
        <h2 className={styles.title}>Urheberrechte</h2>
        <p>
          Der Inhalt einschließlich Bilder und die Gestaltung dieser Internetpräsenz sind urheberrechtlich geschützt.
          Jede Nutzung, die über die durch das Urheberrecht gestattete hinausgeht, insbesondere Vervielfältigung,
          Verarbeitung und Reproduktion, bedarf der vorherigen schriftlichen Zustimmung des Diensteanbieters. Davon
          ausgenommen ist das auf dieser Internetpräsenz ausdrücklich für die Weiterverbreitung angebotene Text- und
          Bildmaterial.
        </p>
      </article>

      <article className={styles.container}>
        <h2 className={styles.title}>Markenzeichen</h2>
        <p>
          Sofern nicht anders angegeben, sind alle auf dieser Internetpräsenz verwendeten Marken, Kennzeichen und
          geschäftlichen Bezeichnungen markenrechtlich geschützt.
        </p>
      </article>

      <article className={styles.container}>
        <h2 className={styles.title}>Haftung</h2>
        <p>
          Die Informationen, die auf dieser Webseite zur Verfügung gestellt werden, wurden mit größtmöglicher Sorgfalt
          zusammengestellt und werden laufend aktualisiert. Trotz sorgfältigster Kontrolle kann die Fehlerfreiheit nicht
          garantiert werden. Der Diensteanbieter schließt daher jede Haftung oder Garantie hinsichtlich der Genauigkeit,
          Vollständigkeit und Aktualität der auf dieser Webseite bereitgestellten Informationen aus. Der Diensteanbieter
          behält sich das Recht vor, jederzeit ohne Ankündigung, Änderungen oder Ergänzungen der bereitgestellten
          Informationen oder Daten vorzunehmen.
        </p>
      </article>

      <article className={styles.container}>
        <h2 className={styles.title}>Verweise und Links</h2>
        <p>
          Für Webseiten, auf die mittels eines Links verwiesen wird, gilt Folgendes: Es handelt sich dabei um fremde
          Webseiten, auf deren Inhalt kein Einfluss besteht. Der Diensteanbieter schließt daher eine Haftung für den
          Inhalt derartiger Seiten ausdrücklich aus. Für den Inhalt der verlinkten Seiten sind ausschließlich deren
          Betreiber verantwortlich. Der Diensteanbieter ist auch nicht verantwortlich für die Datenschutzvorkehrungen
          der Betreiber derartiger Webseiten.
        </p>
      </article>
    </section>
  );
}
