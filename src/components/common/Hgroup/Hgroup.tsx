import styles from "./Hgroup.module.scss";

import Divider from "@components/common/Divider";

type Props = {
  title: string;
  subtitle: string;
};

export const Hgroup = ({ title, subtitle }: Props) => {
  return (
    <hgroup className={styles.hgroup}>
      <p className={styles.subtitle}>{subtitle}</p>
      <h2 className={styles.title}>{title}</h2>

      <Divider type="horizontal" />
    </hgroup>
  );
};
