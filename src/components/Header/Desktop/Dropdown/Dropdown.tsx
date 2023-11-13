import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Dropdown as NextDropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  NavbarItem,
  Button,
} from "@nextui-org/react";

import styles from "./Dropdown.module.scss";
import Chevron from "@assets/icons/Chevron";
import type { Service } from "@config/services";

type Props = {
  title: string;
  list: Service[];
};

export const Dropdown = ({ title, list }: Props) => {
  const path = usePathname();

  return (
    <NextDropdown
      classNames={{
        base: styles.dropdown,
      }}
    >
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className={styles.button}
            endContent={<Chevron />}
          >
            {title}
          </Button>
        </DropdownTrigger>
      </NavbarItem>

      <DropdownMenu aria-label="">
        {list.map(({ id, title, href, icon }) => {
          const Icon = icon;
          const isActive = path === href;

          return (
            <DropdownItem
              key={id}
              className={`${styles.item} ${isActive && styles.active}`}
              startContent={<Icon />}
            >
              <Link className={styles.link} href={href}>
                {title}
              </Link>
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </NextDropdown>
  );
};
