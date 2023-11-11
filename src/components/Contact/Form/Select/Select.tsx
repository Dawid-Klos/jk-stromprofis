import { Select as NextSelect, SelectItem } from "@nextui-org/react";

import styles from "./Select.module.scss";

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export const Select = ({ value, onChange }: Props) => {
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
      placeholder="Wybierz klienta"
      disabledKeys={[""]}
      selectedKeys={[value]}
      onChange={onChange}
    >
      <SelectItem className={styles.item} key="" value="">
        Wybierz klienta
      </SelectItem>

      <SelectItem className={styles.item} key="customer" value="customer">
        Klient prywatny
      </SelectItem>

      <SelectItem className={styles.item} key="business" value="business">
        Klient biznesowy
      </SelectItem>
    </NextSelect>
  );
};
