import Button from "@components/common/Button";

import styles from "./SubmitResult.module.scss";
import Refresh from "@assets/icons/Refresh";

type Props = {
  isSuccess: boolean;
  setIsFormSubmitted: (value: boolean) => void;
  setIsSuccess: (value: boolean) => void;
};

export const SubmitResult = ({ isSuccess, setIsFormSubmitted, setIsSuccess }: Props) => {
  return (
    <div className={styles.messageContainer}>
      <h2 className={styles.title}>{isSuccess ? "Vielen Dank für Ihre Nachricht!" : "Etwas ist schiefgegangen..."}</h2>
      {isSuccess ? (
        <>
          <p className={styles.successMessage}>Wir werden so schnell wie möglich antworten. Herzliche Grüße!</p>
          <p className={styles.accent}>
            Team von JK-Stromprofis{" "}
            <span className={styles.emoji} role="img" aria-label="Emoji">
              👋
            </span>
          </p>
        </>
      ) : (
        <>
          <p className={styles.errorMessage}>Versuchen Sie es erneut oder kontaktieren Sie uns direkt.</p>
          <div className={styles.btnContainer}>
            <Button
              className={styles.button}
              element="button"
              onClick={() => setIsFormSubmitted(false)}
              variant="primary"
            >
              Erneut versuchen
              <Refresh />
            </Button>
            <Button className={styles.button} element="link" variant="secondary" href="tel:+4915753177888">
              Telefonischer Kontakt
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
