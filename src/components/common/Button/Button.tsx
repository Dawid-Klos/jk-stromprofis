import Link from "next/link";
import { Button as NextButton } from "@nextui-org/react";

import styles from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
  href: string;
  variant: "primary" | "secondary";
};

export const Button = ({ children, className, href, variant }: Props) => {
  const classNames = `${styles.button} ${styles[variant]} ${className}`;

  return (
    <NextButton className={classNames} href={href} as={Link}>
      {children}
    </NextButton>
  );
};
