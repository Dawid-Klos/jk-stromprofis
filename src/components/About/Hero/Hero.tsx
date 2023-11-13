import styles from "./Hero.module.scss";

import BackgroundImage from "@components/common/BackgroundImage";
import backgroundImage from "@assets/images/about-hero.webp";

export const Hero = () => {
  return (
    <section className={styles.section}>
      <hgroup className={styles.hgroup}>
        <h1 className={styles.title}>
          Wir erhellen die Stadt mit <span>Erfahrung und</span> <span>Innovation</span>
        </h1>
        <p className={styles.text}>
          JK-Stromprofis ist ein junges Unternehmen mit großen Ambitionen. Wir glauben, dass dank der Erfahrung und
          Professionalität, die uns antreiben, alle Türen offen stehen.
        </p>
      </hgroup>

      <BackgroundImage className={styles.backgroundImage} src={backgroundImage} alt="" priority />
      <span className={styles.backgroundText}>Hamburg</span>
    </section>
  );
};
