"use client";

import Button from "@components/common/Button";
import Hgroup from "@components/common/Hgroup";
import styles from "./error.module.scss";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export const Error = ({ error, reset }: ErrorProps) => {
  return (
    <section className={styles.error}>
      <Hgroup title="Ups, da ist ein Fehler aufgetreten!" subtitle="Error" />
      <div className={styles.container}>
        <p>
          Es ist ein unbekannter Fehler aufgetreten, der nichts mit dem Betrieb unserer Website zu tun hat. Bitte
          drücken Sie die Taste unten, um es erneut zu versuchen.
        </p>
        <Button element="button" variant="primary" onClick={() => reset()}>
          Try again
        </Button>
      </div>
    </section>
  );
};

export default Error;
