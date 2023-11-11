import { Checkbox as NextCheckbox } from "@nextui-org/react";

import styles from "./Checkbox.module.scss";

type Props = {
  value: boolean | undefined;
  onChange: (isSelected: boolean) => void;
};

export const Checkbox = ({ value, onChange }: Props) => {
  const checkboxClassnames = {
    base: styles.checkbox,
    wrapper: styles.wrapper,
    icon: styles.icon,
    label: styles.label,
  };

  return (
    <NextCheckbox
      classNames={checkboxClassnames}
      radius="sm"
      size="lg"
      color="success"
      isSelected={value}
      onValueChange={onChange}
    >
      Akceptuje politykę prywatności
    </NextCheckbox>
  );
};
