"use client";

import { useState } from 'react';
import { Avatar, Card, CardBody, CardFooter } from '@nextui-org/react';

import styles from './Slider.module.scss';

import ArrowLeft from '@assets/icons/ArrowLeft';
import ArrowRight from '@assets/icons/ArrowRight';
import Divider from '@components/common/Divider';
import { TestimonialsTypes } from '@config/testimonials';

type Props = {
    testimonials: TestimonialsTypes;
}

export const Slider = ({ testimonials }: Props) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const length = testimonials.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
    }

    return (
        <Card className={styles.card}>
            <CardBody className={styles.body}>
                <article className={styles.slide}>
                    <p className={styles.text}>{testimonials[currentSlide].text}</p>
                    <div className={styles.info}>
                        <Avatar src={`https://i.pravatar.cc/150?img=${currentSlide + 1}`} size='lg' />
                        <div className={styles.box}>
                            <p className={styles.name}>{testimonials[currentSlide].name}</p>
                            <p className={styles.position}>{testimonials[currentSlide].position}</p>
                        </div>
                    </div>
                </article>
            </CardBody>

            <Divider type="horizontal" />

            <CardFooter className={styles.footer}>
                <div className={styles.nav}>
                    <button className={styles.button} onClick={prevSlide}>
                        <ArrowLeft />
                    </button>
                    <button className={styles.button} onClick={nextSlide}>
                        <ArrowRight />
                    </button>
                </div>
                <div className={styles.indicators}>
                    {testimonials.map(({ id }) => (
                        <button
                            key={id}
                            className={`${styles.indicator} ${currentSlide === id && styles.active}`}
                            onClick={() => setCurrentSlide(id)}
                        >
                        </button>
                    ))}
                </div>
            </CardFooter>
        </Card>
    )
}