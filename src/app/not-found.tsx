import Button from "@components/common/Button";
import Hgroup from "@components/common/Hgroup";

import styles from "./error.module.scss";

export const NotFound = () => {
  return (
    <section className={styles.error}>
      <Hgroup title="Ups, Eine solche Seite gibt es nicht!" subtitle="Fehler" />
      <div className={styles.container}>
        <p>
          Die gewählte Unterseite existiert nicht, aber das macht nichts. Klicken Sie auf die Schaltfläche unten, um zur
          Hauptseite zurückzukehren.
        </p>
        <p>Vielen Dank für Ihren Besuch! 😊</p>
        <Button href={"/"} element="link" variant="primary">
          Zurück zu Startseite
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
