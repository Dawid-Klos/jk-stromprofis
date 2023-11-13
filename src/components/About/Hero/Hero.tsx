import styles from "./Hero.module.scss";

import BackgroundImage from "@components/common/BackgroundImage";
import backgroundImage from "@assets/images/about-hero.png";

export const Hero = () => {
  return (
    <section className={styles.section}>
      <hgroup className={styles.hgroup}>
        <h1 className={styles.title}>
          Oświetlamy miasto doświadcze-niem i <span>innowacyj-nością</span>
        </h1>
        <p className={styles.text}>
          JK-Stromprofis jest młodą firmą z wielkimi ambicjami. Wierzymy, że dzięki doświadczeniu i profejsonalizmowi
          który nas napędza wszystkie drzwi stoją otworem.
        </p>
      </hgroup>

      <BackgroundImage className={styles.backgroundImage} src={backgroundImage} alt="" priority />
      <span className={styles.backgroundText}>Hamburg</span>
    </section>
  );
};
