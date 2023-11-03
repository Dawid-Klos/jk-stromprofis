"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Navbar,
    NavbarContent,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarBrand
} from "@nextui-org/react";

import logo from "@assets/images/logo.svg";
import Accordion from "./Accordion";
import styles from "./Mobile.module.scss";
import { menuItemsTypes } from "@config/config";

type Props = {
    menuItems: menuItemsTypes;
};


export const Mobile = ({ menuItems }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toogle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Navbar
            classNames={
                {
                    base: styles.nav,
                    wrapper: styles.wrapper,
                    item: styles.item,
                }
            }
            height="75px"
            isMenuOpen={isOpen}
            onMenuOpenChange={setIsOpen}

        >
            <NavbarContent>
                <NavbarBrand>
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <Image
                            src={logo}
                            alt="JK-Stromprofis"
                            width={64}
                            height={54}
                        />
                    </Link>
                </NavbarBrand>

                <NavbarMenuToggle
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    className={styles.toggle}
                />
            </NavbarContent>

            <NavbarMenu className={styles.menu}>

                {menuItems.map(({ title, href, list }) => {
                    return (
                        list ? (
                            <NavbarMenuItem key={title}>
                                <Accordion
                                    title={title}
                                    list={list}
                                    setIsOpen={setIsOpen}
                                />
                            </NavbarMenuItem>
                        ) : (
                            <NavbarMenuItem key={title}>
                                <Link className={styles.link} href={href} onClick={toogle}>
                                    {title}
                                </Link >
                            </NavbarMenuItem>
                        )
                    )
                })}
            </NavbarMenu >
        </Navbar >
    )

};