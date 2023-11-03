import { CardFooter } from '@nextui-org/react';

import styles from './Nav.module.scss';

import ArrowLeft from '@assets/icons/ArrowLeft';
import ArrowRight from '@assets/icons/ArrowRight';

import { TestimonialsTypes } from '@config/testimonials';

type Props = {
    testimonials: TestimonialsTypes;
    currentSlide: number;
    setCurrentSlide: (id: number) => void;
}

export const Nav = ({ testimonials, currentSlide, setCurrentSlide }: Props) => {
    const length = testimonials.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
    }

    return (
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
    )
}