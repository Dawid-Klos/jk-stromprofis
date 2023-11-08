import Image, { StaticImageData } from "next/image";

import styles from "./BackgroundImage.module.scss";

type Props = {
  className?: string;
  src: StaticImageData;
  alt: string;
};

export const BackgroundImage = ({ className, src, alt }: Props) => {
  return (
    <div className={`${styles.background} ${className}`}>
      <Image
        className={styles.image}
        src={src}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        alt={alt}
      />
    </div>
  );
};
