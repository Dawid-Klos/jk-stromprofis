"use client";

import { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";

import styles from "./Slider.module.scss";

import Divider from "@components/common/Divider";
import { TestimonialsTypes } from "@config/testimonials";
import Nav from "./Nav";
import Item from "./Item";

type Props = {
  testimonials: TestimonialsTypes;
};

export const Slider = ({ testimonials }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className={styles.cardWrapper}>
      <Card className={styles.card}>
        <CardBody className={styles.body}>
          {testimonials.map((testimonial) => (
            <Item
              key={testimonial.id}
              testimonial={testimonial}
              currentSlide={currentSlide}
            />
          ))}
        </CardBody>

        <Divider type="horizontal" />

        <Nav
          testimonials={testimonials}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
      </Card>
    </div>
  );
};
