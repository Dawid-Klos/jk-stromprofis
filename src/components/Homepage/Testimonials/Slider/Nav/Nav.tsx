import { useState } from "react";
import { Button, CardFooter } from "@nextui-org/react";
import { motion } from "framer-motion";

import ArrowLeft from "@assets/icons/ArrowLeft";
import ArrowRight from "@assets/icons/ArrowRight";

import type { Testimonial } from "@config/testimonials";

import styles from "./Nav.module.scss";

type Props = {
  testimonials: Testimonial[];
  currentSlide: number;
  setCurrentSlide: (id: number) => void;
};

export const Nav = ({ testimonials, currentSlide, setCurrentSlide }: Props) => {
  const [isChanging, setIsChanging] = useState(false);

  const length = testimonials.length;

  const nextSlide = () => {
    setIsChanging(true);
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);

    setTimeout(() => {
      setIsChanging(false);
    }, 400);
  };

  const prevSlide = () => {
    setIsChanging(true);
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);

    setTimeout(() => {
      setIsChanging(false);
    }, 400);
  };

  const indicatorAnimateVariants = {
    active: {
      scale: 1.8,
      transition: {
        ease: "linear",
        duration: 0.4,
        delay: 0.2,
      },
    },
    inactive: {
      scale: 1,
      transition: { duration: 0.4, delay: 0.2 },
    },
  };

  return (
    <CardFooter className={styles.footer}>
      <div className={styles.nav}>
        <Button className={styles.button} disabled={isChanging} onClick={prevSlide}>
          <ArrowLeft />
        </Button>

        <Button className={styles.button} disabled={isChanging} onClick={nextSlide}>
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
