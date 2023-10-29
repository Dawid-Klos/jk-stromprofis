import Link from "next/link";
import Image from "next/image";
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
        <Link className={styles.link} href="/kontakt">
          Skontaktuj się
        </Link>
      </div>
      <div className={styles.aside}>
        <Image className={styles.icon} src={timeIcon} alt="" priority />
        <p className={styles.asideTitle}>Krótki okres oczekiwania</p>
        <p className={styles.asideSubtitle}>
          Nasza wysoka dostępność gwrantuje, że nie będziesz musiał czekać na kluczowe usługi elektryczne.
        </p>
      </div>
      <div className={styles.background}>
        <p className={styles.backgroundTitle}>JK</p>
      </div>
    </section>
  );
};
