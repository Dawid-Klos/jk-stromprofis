import { Divider as NextDivider } from "@nextui-org/react";

import styles from "./Divider.module.scss";

interface Props {
  type: "horizontal" | "vertical";
  classNames?: string;
}

export const Divider: React.FC<Props> = ({ type, classNames }) => {
  const dividerStyles = type === "horizontal" ? styles.horizontal : styles.vertical;

  return <NextDivider className={`${dividerStyles} ${classNames}`} orientation={type} />;
};
