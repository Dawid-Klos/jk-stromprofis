"use client";

import { Chip, Input, Checkbox, Select, SelectItem, Button, Textarea } from "@nextui-org/react";
import Image from "next/image";

import Hgroup from "@components/common/Hgroup";
import contactImage from "@assets/images/contact-img.jpeg";

import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <Hgroup title="Skontaktuj się z nami." subtitle="Współpraca" />
        <p className={styles.paragraph}>
          Z niecierpliwością czekamy na Twoją wiadomość. Razem, możemy zbudować coś wielkiego.
        </p>
        <Chip className={styles.chip} size="lg">
          Zwykle odpowiadamy w ciągu 24 godzin
        </Chip>
        <Image src={contactImage} alt="Office with chair and a laptop on the desk" width={500} height={500} />
      </article>
      <form className={styles.form}>
        <h3 className={styles.title}>Wpisz dane kontaktowe</h3>
        <Input className={styles.input} variant="bordered" type="name" placeholder="Imie i nazwisko" />
        <Input className={styles.input} variant="bordered" type="email" placeholder="Email" />
        <Input className={styles.input} variant="bordered" type="tel" placeholder="Numer telefonu" />

        <Select className={styles.select} label="Wybierz: typ klienta">
          <SelectItem key="1" value="Klient prywanty">
            Klient prywanty
          </SelectItem>

          <SelectItem key="2" value="Klient biznesowy">
            Klient biznesowy
          </SelectItem>
        </Select>
        <Textarea
          variant="bordered"
          label="Wiadomość"
          placeholder="Wyjaśnij co możemy dla Ciebie zrobić lub dlaczego się z nami kontaktujesz..."
        />
        <div className={styles.checkboxWrapper}>
          <Checkbox radius="full" />
          <p className={styles.checkboxParagraph}>Akceptuje politykę prywatności</p>
        </div>
        <div className="linkWrapper">
          <Button className={styles.button} color="primary" size="lg">
            Wyślij
          </Button>
        </div>
      </form>
    </section>
  );
};
