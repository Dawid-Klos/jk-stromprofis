import Image from "next/image";

import Button from "@components/common/Button";
import timeIcon from "@assets/icons/time.svg";

import styles from "./Hero.module.scss";

export const Hero: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Sichern Sie sich zuverlässige <span>elektrische</span> <span>Lösungen</span>
        </h1>
        <p className={styles.subtitle}>
          Wir sind Ihr vertrauenswürdiger Partner für alle elektrischen Bedürfnisse, und liefern stets höchste Qualität.
        </p>

        <Button className={styles.link} element="link" href="/kontakt" variant="primary">
          Kontaktieren Sie uns
        </Button>
      </div>
      <div className={styles.aside}>
        <Image className={styles.icon} src={timeIcon} alt="" priority />
        <p className={styles.info}>
          Wir bieten eine hervorragende Verfügbarkeit, damit Sie nicht auf wichtige elektrische Dienstleistungen warten
          müssen.
        </p>
      </div>
      <div className={styles.background}></div>
    </section>
  );
};
