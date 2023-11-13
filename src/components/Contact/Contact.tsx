import { Chip } from "@nextui-org/react";
import Image from "next/image";

import Hgroup from "@components/common/Hgroup";
import contactImage from "@assets/images/contact-img.webp";

import Form from "./Form";

import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <Hgroup title="Kontaktieren Sie uns." subtitle="ZUSAMMENARBEIT" headingSize="h1" />

        <p>Wir warten gespannt auf Ihre Nachricht. Gemeinsam können wir Großartiges schaffen.</p>

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
      <Form />
    </section>
  );
};
