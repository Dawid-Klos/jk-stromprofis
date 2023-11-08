import Image, { StaticImageData } from "next/image";

import styles from "./CtaSection.module.scss";

import Button from "@components/common/Button";
import ArrowRight from "@assets/icons/ArrowRight";
import Hgroup from "@components/common/Hgroup";

type Props = {
  title: string;
  subtitle: string;
  content: string;
  image: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
};

export const CtaSection = ({ title, subtitle, content, image }: Props) => {
  const { src, alt, width, height } = image;

  return (
    <section className={styles.section}>
      <Hgroup title={title} subtitle={subtitle} divider={false} />

      <p className={styles.content}>{content}</p>

      <Image
        className={styles.image}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />

      <Button href="/kontakt" variant="secondary">
        Skontaktuj się teraz
        <ArrowRight />
      </Button>
    </section>
  );
};
