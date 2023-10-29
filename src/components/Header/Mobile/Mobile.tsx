"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import styles from "./Mobile.module.scss";

export const Mobile = ({ menuItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const body = document.querySelector("body");
        isOpen ? (body.style.overflow = "hidden") : (body.style.overflow = "auto");
    }, [isOpen]);

    const toogle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.header}>
            {/* <Navbar onMenuOpenChange={setIsOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>

                    </NavbarBrand>
                </NavbarContent>
            </Navbar> */}
            {isOpen && (
                <nav className={`${styles.nav} ${isOpen && styles.open}`}>
                    <ul className={styles.ul}>
                        {menuItems.map(({ title, href }) => {
                            return (
                                <li className={styles.li} key={title}>
                                    <Link className={styles.link} href={href} onClick={toogle}>
                                        {title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            )}

            <div className={styles.wrapper}>

                <Link href="/" onClick={toogle}>
                    Logo
                </Link>

                <button className={styles.button} onClick={toogle}>
                    <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12.5H38" stroke="#BEA6A0" strokeWidth="3" strokeLinecap="round" />
                        <path d="M6 22.5H38" stroke="#BEA6A0" strokeWidth="3" strokeLinecap="round" />
                        <path d="M6 32.5H38" stroke="#BEA6A0" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
        </header>
    )

};