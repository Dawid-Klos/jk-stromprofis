import { Chip } from "@nextui-org/react";
import Image from "next/image";

import Hgroup from "@components/common/Hgroup";
import contactImage from "@assets/images/contact-img.jpeg";

import Form from "./Form";

import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <Hgroup title="Skontaktuj się z nami." subtitle="Współpraca" headingSize="h1" />

        <p>Z niecierpliwością czekamy na Twoją wiadomość. Razem, możemy zbudować coś wielkiego.</p>

        <Chip className={styles.chip} size="lg">
          Antwort in 24 Stunden
        </Chip>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.img}
            src={contactImage}
            alt="Office with chair and a laptop on the desk"
            fill
            priority
          />
        </div>
      </article>
      <article className={styles.article}>
        <h3 className={styles.title}>Wpisz dane kontaktowe</h3>

        <Form />
      </article>
    </section>
  );
};
