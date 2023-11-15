"use client";

import { useEffect } from "react";

import Button from "@components/common/Button";
import Hgroup from "@components/common/Hgroup";

import styles from "./error.module.scss";
import Divider from "@components/common/Divider";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className={styles.error}>
      <Hgroup title="Ups, da ist ein Fehler aufgetreten!" subtitle="Error" />
      <div className={styles.container}>
        <h2>{error.name}</h2>
        <p>{error.message}</p>
        <Divider type="horizontal" />
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
}
