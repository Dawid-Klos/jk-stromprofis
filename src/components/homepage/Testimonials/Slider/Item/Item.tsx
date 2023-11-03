import { motion, Variants } from 'framer-motion';
import { Avatar } from '@nextui-org/react';

import styles from './Item.module.scss';

type Props = {
    testimonial: {
        id: number;
        name: string;
        position: string;
        text: string;
    },
    currentSlide: number;
}

export const Item = ({ testimonial, currentSlide }: Props) => {
    const { id, name, position, text } = testimonial;

    const variants: Variants = {
        show: {
            opacity: 1,
            position: "relative",
            visibility: "visible",
            transition: { stiffness: 300, damping: 24 }
        },
        hide: {
            opacity: 0,
            position: "absolute",
            visibility: "hidden",
            transition: { duration: 0.3 }
        }
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
                <Avatar src={`https://i.pravatar.cc/150?img=${id}`} size='lg' />
                <div className={styles.box}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.position}>{position}</p>
                </div>
            </div>
        </motion.article>
    )
}