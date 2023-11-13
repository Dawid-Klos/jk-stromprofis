import heroImage from "@assets/images/services-hero.jpg";

import styles from "./Hero.module.scss";
import Image from "next/image";
import BackgroundImage from "@components/common/BackgroundImage";

type Props = {
  title: string;
  subtitle: string;
};

export const Hero = ({ title, subtitle }: Props) => {
  return (
    <section className={styles.section}>
      <hgroup className={styles.hgroup}>
        <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
        <p>{subtitle}</p>
      </hgroup>
      <BackgroundImage className={styles.image} src={heroImage} alt="" />
    </section>
  );
};
