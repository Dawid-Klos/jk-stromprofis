import Link from "next/link";
import { Checkbox as NextCheckbox } from "@nextui-org/react";

import styles from "./Checkbox.module.scss";

type Props = {
  isInvalid: boolean;
  errorMessage?: string;
  value: boolean | undefined;
  onChange: (isSelected: boolean) => void;
};

export const Checkbox = ({ value, onChange, isInvalid, errorMessage }: Props) => {
  const checkboxClassnames = {
    base: styles.checkbox,
    wrapper: styles.wrapper,
    icon: styles.icon,
    label: styles.label,
  };

  return (
    <>
      <NextCheckbox
        classNames={checkboxClassnames}
        radius="sm"
        size="lg"
        color="success"
        aria-errormessage="errorMessage"
        isInvalid={isInvalid}
        isSelected={value}
        onValueChange={onChange}
      >
        <>
          Ich akzeptiere die{" "}
          <Link className={styles.link} href={"/politik"}>
            Datenschutzerklärung
          </Link>
        </>
      </NextCheckbox>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </>
  );
};
