import styles from "./Hgroup.module.scss";

import Divider from "@components/common/Divider";

type Props = {
  title: string;
  subtitle: string;
  divider?: boolean;
};

export const Hgroup = ({ title, subtitle, divider = true }: Props) => {
  return (
    <hgroup className={styles.hgroup}>
      <p className={styles.subtitle}>{subtitle}</p>
      <h2 className={styles.title}>{title}</h2>

      {divider && <Divider type="horizontal" />}
    </hgroup>
  );
};
