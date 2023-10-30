"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Navbar,
    NavbarContent,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarBrand,
    Accordion,
    AccordionItem
} from "@nextui-org/react";
import type { menuItems } from "@components/Header/Header";

import logo from "@assets/images/logo.svg";
import styles from "./Mobile.module.scss";

type Props = {
    menuItems: menuItems;
};


export const Mobile = ({ menuItems }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const body = document.querySelector("body");
        if (!body) return;

        isOpen ? (body.style.overflow = "hidden") : (body.style.overflow = "auto");
    }, [isOpen]);

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
            isBordered
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
                        <>
                            {list ? (
                                <NavbarMenuItem>
                                    <Accordion key={title} className={styles.accordion} itemClasses={{
                                        title: styles.link,
                                        trigger: styles.trigger,
                                        content: styles.content,
                                    }}>
                                        <AccordionItem aria-label={title} title={title}>
                                            {list.map(({ title, href }) => {
                                                return (
                                                    <Link href={href} onClick={toogle} key={title}>
                                                        {title}
                                                    </Link>
                                                );
                                            }
                                            )}
                                        </AccordionItem>
                                    </Accordion>
                                </NavbarMenuItem>
                            ) : (
                                <NavbarMenuItem key={title}>
                                    <Link className={styles.link} href={href} onClick={toogle}>
                                        {title}
                                    </Link >
                                </NavbarMenuItem>
                            )}
                        </>
                    )
                }
                )}
            </NavbarMenu >
        </Navbar >
    )

};