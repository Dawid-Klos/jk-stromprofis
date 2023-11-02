import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Desktop.module.scss";

import Dropdown from "./Dropdown";

import { menuItems } from "../Header";

import logo from "@assets/images/logo.svg";

type Props = {
    menuItems: menuItems;
};

export const Desktop = ({ menuItems }: Props) => {
    return (
        <Navbar
            classNames={{
                base: styles.nav,
                wrapper: styles.wrapper,
            }}
            height="120px"
        >
            <NavbarContent>
                <Link href="/">
                    <Image
                        src={logo}
                        alt="JK-Stromprofis"
                        width={116}
                        height={97}
                    />
                </Link>

                <NavbarBrand className={styles.brand}>
                    {menuItems.map(({ title, href, list }) => {
                        return (
                            list ?
                                <Dropdown
                                    key={title}
                                    title={title}
                                    list={list}
                                />
                                :
                                <NavbarItem className={styles.item}>
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
}