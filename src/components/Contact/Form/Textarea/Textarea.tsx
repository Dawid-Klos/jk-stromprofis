import { Textarea as NextTextarea } from "@nextui-org/react";

import styles from "./Textarea.module.scss";

type Props = {
  isInvalid: boolean;
  errorMessage?: string;
  value: string;
  onChange: (value: string) => void;
};

export const Textarea = ({ value, onChange, isInvalid, errorMessage }: Props) => {
  const textAreaClassnames = {
    base: styles.textarea,
    label: styles.label,
    inputWrapper: styles.inputWrapper,
    input: styles.input,
    errorMessage: styles.errorMessage,
  };

  return (
    <NextTextarea
      classNames={textAreaClassnames}
      variant="bordered"
      label="Wiadomość"
      isRequired
      placeholder="Wyjaśnij co możemy dla Ciebie zrobić lub dlaczego się z nami kontaktujesz..."
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      value={value}
      onValueChange={onChange}
    />
  );
};
