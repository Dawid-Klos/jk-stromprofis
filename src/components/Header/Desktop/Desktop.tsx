import Image from "next/image";
import { usePathname } from "next/navigation";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

import Link from "@components/common/Link";
import logo from "@assets/images/logo-web.svg";
import type { MenuItem } from "@config/menuItems";

import Dropdown from "./Dropdown";
import styles from "./Desktop.module.scss";

type Props = {
  menuItems: MenuItem[];
};

export const Desktop = ({ menuItems }: Props) => {
  const path = usePathname();

  return (
    <Navbar
      classNames={{
        base: styles.nav,
        wrapper: styles.wrapper,
      }}
      height={80}
    >
      <NavbarContent>
        <Link className={styles.logo} href="/">
          <Image src={logo} alt="JK-Stromprofis" width={238} height={52} />
        </Link>

        <NavbarBrand className={styles.brand}>
          {menuItems.map(({ id, title, href, list }) => {
            return list ? (
              <Dropdown key={id} title={title} list={list} />
            ) : (
              <NavbarItem key={id} className={styles.item} isActive={path === href}>
                <Link className={`${styles.link} ${title === "Contact" && styles.button}`} href={href} key={title}>
                  {title}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarBrand>
      </NavbarContent>
    </Navbar>
  );
};
