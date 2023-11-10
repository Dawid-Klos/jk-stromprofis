import { Select as NextSelect, SelectItem } from "@nextui-org/react";

import styles from "./Select.module.scss";

export const Select = () => {
  const selectClassnames = {
    trigger: styles.selectTrigger,
    innerWrapper: styles.selectWrapper,
    label: styles.label,
    value: styles.value,
  };

  const listBoxClassnames = {
    base: styles.listBox,
  };

  const popOverClassnames = {
    base: styles.popOver,
    errorMessage: styles.errorMessage,
  };

  return (
    <NextSelect
      classNames={selectClassnames}
      listboxProps={{ itemClasses: listBoxClassnames }}
      popoverProps={{ classNames: popOverClassnames }}
      variant="bordered"
      isRequired
      label="Rodzaj klienta"
    >
      <SelectItem className={styles.item} key="1" value="Klient prywatny">
        Klient prywatny
      </SelectItem>

      <SelectItem className={styles.item} key="2" value="Klient biznesowy">
        Klient biznesowy
      </SelectItem>
    </NextSelect>
  );
};
