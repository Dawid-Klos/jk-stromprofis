import { Checkbox as NextCheckbox } from "@nextui-org/react";

import styles from "./Checkbox.module.scss";

export const Checkbox = () => {
  const checkboxClassnames = {
    base: styles.checkbox,
    wrapper: styles.wrapper,
    icon: styles.icon,
    label: styles.label,
  };

  return <NextCheckbox classNames={checkboxClassnames} radius="sm" size="lg" color="success" />;
};
