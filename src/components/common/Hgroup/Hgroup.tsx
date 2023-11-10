import { createElement } from "react";
import styles from "./Hgroup.module.scss";

import Divider from "@components/common/Divider";

type Props = {
  title: string;
  subtitle: string;
  divider?: boolean;
  headingSize?: "h1" | "h2" | "h3" | "h4";
};

export const Hgroup = ({ title, subtitle, divider = true, headingSize = "h2" }: Props) => {
  const HeadingTag = () => createElement(headingSize, { className: styles.title }, title);

  return (
    <hgroup className={styles.hgroup}>
      <p className={styles.subtitle}>{subtitle}</p>

      <HeadingTag />

      {divider && <Divider type="horizontal" />}
    </hgroup>
  );
};
