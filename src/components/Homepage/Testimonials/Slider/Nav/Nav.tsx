import { Button, CardFooter } from "@nextui-org/react";
import { motion } from "framer-motion";

import styles from "./Nav.module.scss";

import ArrowLeft from "@assets/icons/ArrowLeft";
import ArrowRight from "@assets/icons/ArrowRight";

import type { Testimonial } from "@config/testimonials";

type Props = {
  testimonials: Testimonial[];
  currentSlide: number;
  setCurrentSlide: (id: number) => void;
};

export const Nav = ({ testimonials, currentSlide, setCurrentSlide }: Props) => {
  const length = testimonials.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  const indicatorAnimateVariants = {
    active: {
      scale: 1.8,
      transition: {
        ease: "linear",
        duration: 0.2,
        delay: 0.1,
      },
    },
    inactive: {
      scale: 1,
      transition: { duration: 0.2, delay: 0.1 },
    },
  };

  return (
    <CardFooter className={styles.footer}>
      <div className={styles.nav}>
        <Button className={styles.button} onClick={prevSlide}>
          <ArrowLeft />
        </Button>
        <Button className={styles.button} onClick={nextSlide}>
          <ArrowRight />
        </Button>
      </div>
      <div className={styles.indicators}>
        {testimonials.map(({ id }) => (
          <motion.button
            key={id}
            variants={indicatorAnimateVariants}
            animate={currentSlide === id ? "active" : "inactive"}
            className={styles.indicator}
            onClick={() => setCurrentSlide(id)}
          ></motion.button>
        ))}
      </div>
    </CardFooter>
  );
};
