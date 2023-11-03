import NextLink from 'next/link';

import styles from './Link.module.scss';

type Props = {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};

export const Link = ({ href, children, onClick, className }: Props) => {
    return (
        <NextLink href={href} onClick={onClick} className={`${styles.link} ${className}`}>
            {children}
        </NextLink>
    )

}

