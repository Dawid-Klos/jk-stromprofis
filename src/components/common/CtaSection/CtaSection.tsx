import Link from "next/link";
import { Button } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";

import styles from "./CtaSection.module.scss";
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

      <Image className={styles.image} src={src} alt={alt} width={width} height={height} />

      <Button className={styles.link} href="/kontakt" as={Link}>
        Skontaktuj się teraz
        <ArrowRight />
      </Button>
    </section>
  );
};
