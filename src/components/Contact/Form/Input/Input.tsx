import { Input as NextInput } from "@nextui-org/react";

import styles from "./Input.module.scss";

type Props = {
  type: string;
  label: string;
  autoComplete: string;
};

export const Input = ({ type, label, autoComplete }: Props) => {
  const inputClassnames = {
    inputWrapper: styles.inputBase,
    input: styles.input,
    label: styles.label,
  };

  return (
    <NextInput
      className={styles.container}
      classNames={inputClassnames}
      variant="bordered"
      isRequired
      type={type}
      label={label}
      autoComplete={autoComplete}
    />
  );
};
