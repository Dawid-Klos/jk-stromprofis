import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { Avatar } from "@nextui-org/react";
import Image from "next/image";

import { Testimonial } from "@config/testimonials";
import maxAvatar from "@assets/images/avatars/max.webp";
import lukasAvatar from "@assets/images/avatars/lukas.webp";
import sophieAvatar from "@assets/images/avatars/sophie.webp";

import styles from "./Item.module.scss";

type Props = {
  testimonial: Testimonial;
  currentSlide: number;
};

const avatarMap: { [key: number]: ReactNode } = {
  0: <Image src={maxAvatar} alt="" width={256} height={256} />,
  1: <Image src={sophieAvatar} alt="" width={256} height={256} />,
  2: <Image src={lukasAvatar} alt="" width={256} height={256} />,
};

export const Item = ({ testimonial, currentSlide }: Props) => {
  const { id, name, position, text } = testimonial;
  const avatarSrc = avatarMap[id];

  const variants: Variants = {
    show: {
      opacity: 1,
      position: "relative",
      visibility: "visible",
      transition: {
        ease: "linear",
        stiffness: 300,
        damping: 30,
        duration: 0.3,
        delay: 0.2,
      },
    },
    hide: {
      opacity: 0,
      position: "absolute",
      visibility: "hidden",
      transition: { duration: 0.3, delay: 0.2 },
    },
  };

  return (
    <motion.article
      className={styles.slide}
      initial="hide"
      animate={currentSlide === id ? "show" : "hide"}
      variants={variants}
    >
      <p className={styles.text}>{text}</p>
      <div className={styles.info}>
        <Avatar icon={avatarSrc} size="lg" isBordered color="primary" />
        <div className={styles.box}>
          <p className={styles.name}>{name}</p>
          <p className={styles.position}>{position}</p>
        </div>
      </div>
    </motion.article>
  );
};
