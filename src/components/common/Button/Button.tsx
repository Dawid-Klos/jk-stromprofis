import Link from "next/link";
import { Button as NextButton } from "@nextui-org/react";

import styles from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  element: "button" | "link";
  variant: "primary" | "secondary";
  isLoading?: boolean;
};

export const Button = ({ children, className, variant, href, onClick, element, isLoading = false }: Props) => {
  const classNames = `${styles.button} ${styles[variant]} ${className}`;

  if (element === "link") {
    return (
      <NextButton className={classNames} href={href} as={Link}>
        {children}
      </NextButton>
    );
  }

  if (element === "button") {
    return (
      <NextButton className={classNames} type="submit" onClick={onClick} isLoading={isLoading}>
        {children}
      </NextButton>
    );
  }
};
