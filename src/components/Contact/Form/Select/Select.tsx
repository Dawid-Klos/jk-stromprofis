import { Select as NextSelect, SelectItem } from "@nextui-org/react";

import styles from "./Select.module.scss";

type Props = {
  isInvalid: boolean;
  errorMessage?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export const Select = ({ value, onChange, isInvalid, errorMessage }: Props) => {
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
      label="Kundentyp"
      placeholder="Wählen Sie den Kundentyp"
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      disabledKeys={[""]}
      selectedKeys={[value]}
      onChange={onChange}
    >
      <SelectItem className={styles.item} key="" value="">
        Wählen Sie den Kundentyp
      </SelectItem>

      <SelectItem className={styles.item} key="customer" value="customer">
        Privatkunde
      </SelectItem>

      <SelectItem className={styles.item} key="business" value="business">
        Geschäftskunde
      </SelectItem>
    </NextSelect>
  );
};
