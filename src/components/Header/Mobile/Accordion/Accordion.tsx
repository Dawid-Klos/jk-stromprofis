import Link from 'next/link';
import { Accordion as NextAccordion, AccordionItem } from '@nextui-org/react';

import styles from './Accordion.module.scss';

type Props = {
    title: string;
    list: {
        title: string;
        href: string;
    }[];
    setIsOpen: (value: boolean) => void;
};

export const Accordion = ({ title, list, setIsOpen }: Props) => {
    return (
        <NextAccordion key={title} className={styles.accordion} itemClasses={{
            title: styles.link,
            trigger: styles.trigger,
            content: styles.content,
        }}>
            <AccordionItem aria-label={title} title={title}>
                {list.map(({ title, href }) => {
                    return (
                        <Link href={href} onClick={() => setIsOpen(false)} key={title}>
                            {title}
                        </Link>
                    );
                }
                )}
            </AccordionItem>
        </NextAccordion>
    )

}