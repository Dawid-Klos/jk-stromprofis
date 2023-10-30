import Image from "next/image";
import NextLink from "next/link";
import { Button } from "@nextui-org/react";

import styles from "./Hero.module.scss";
import timeIcon from "@assets/icons/time.svg";

export const Hero: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Poznaj niezawodne rozwiązania <span>elektryczne</span>
        </h1>
        <p className={styles.subtitle}>
          Jesteśmy zaufanym partnerem w zakresie wszystkich potrzeb elektrycznych - za każdym razem dostarczając
          doskonałość.
        </p>
        <Button className={styles.link} href="/kontakt" as={NextLink}>
          Skontaktuj się
        </Button>
      </div>
      <div className={styles.aside}>
        <Image className={styles.icon} src={timeIcon} alt="" priority />
        <p className={styles.info}>
          Jesteśmy niezwykle dumni z naszej wyjątkowej dostępności, gwarantując, że nie będziesz musiał czekać na
          kluczowe usługi elektryczne.
        </p>
      </div>
      <div className={styles.background}></div>
    </section>
  );
};
