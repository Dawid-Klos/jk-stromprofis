import Button from "@components/common/Button";

import styles from "./SubmitResult.module.scss";

type Props = {
  isSuccess: boolean;
  setIsFormSubmitted: (value: boolean) => void;
  setIsSuccess: (value: boolean) => void;
};

export const SubmitResult = ({ isSuccess, setIsFormSubmitted, setIsSuccess }: Props) => {
  return (
    <div className={styles.messageContainer}>
      <h2 className={styles.title}>{isSuccess ? "Dziękujemy za wiadomość!" : "Coś poszło nie tak..."}</h2>
      {isSuccess ? (
        <>
          <p className={styles.successMessage}>Odpowiemy na nią najszybciej jak to możliwe. Pozdrawiamy!</p>
          <p className={styles.accent}>
            Zespół JK-Stromprofis{" "}
            <span className={styles.emoji} role="img" aria-label="Emoji">
              👋
            </span>
          </p>
        </>
      ) : (
        <>
          <p className={styles.errorMessage}>Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.</p>
          <div className={styles.btnContainer}>
            <Button
              className={styles.button}
              element="button"
              onClick={() => setIsFormSubmitted(false)}
              variant="primary"
            >
              Spróbuj ponownie
            </Button>
            <Button className={styles.button} element="link" variant="secondary" href="tel:+4915753177888">
              Zadzwoń
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
