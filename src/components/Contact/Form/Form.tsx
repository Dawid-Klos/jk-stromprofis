"use client";

import Button from "@components/common/Button";

import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";

import styles from "./Form.module.scss";

export const Form = () => {
  return (
    <form className={styles.form}>
      <Input type="name" label="Imie i nazwisko" autoComplete="name" />
      <Input type="email" label="Email" autoComplete="email" />
      <Input type="tel" label="Numer telefonu" autoComplete="tel-local" />

      <Select />

      <Textarea />
      <div className={styles.checkboxWrapper}>
        <Checkbox />
        <p className={styles.paragraph}>Akceptuje politykę prywatności</p>
      </div>

      <Button className={styles.button} element="button" variant="secondary">
        Wyślij wiadomość
      </Button>
    </form>
  );
};
