import { Card as UICard, CardHeader, CardBody, Divider, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import NextDivider from "@components/common/Divider";

import styles from "./Card.module.scss";

interface CardProps {
  title: string;
  subtitle?: string;
  content: string;
  icon: string;
  darkCard: boolean;
}

export const Card: React.FC<CardProps> = ({ title, subtitle, content, icon, darkCard }) => {
  const cardStyles = darkCard ? `${styles.card} ${styles.darkCard}` : styles.card;

  return (
    <UICard className={cardStyles}>
      <CardHeader className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </CardHeader>

      <CardBody className={styles.body}>
        <NextDivider classNames={styles.divider} type="vertical" />
        <Image className={styles.icon} src={icon} width={110} height={140} alt="" />
      </CardBody>

      <CardFooter className={styles.footer}>
        <NextDivider classNames={styles.divider} type="horizontal" />
        <p className={styles.content}>{content}</p>
      </CardFooter>
    </UICard>
  );
};

export default Card;
