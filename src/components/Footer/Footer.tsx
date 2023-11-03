import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.scss";

import logo from "@assets/images/logo.svg";
import phoneIcon from "@assets/icons/phone.svg";
import emailIcon from "@assets/icons/email.svg";
import copyrightIcon from "@assets/icons/copyright.svg";

import { menuItems, services } from "@config/config";

export const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.logoContainer}>
                    <Image
                        src={logo}
                        alt="JK-Stromprofis"
                        fill
                    />
                </div>
                <article className={styles.article}>
                    <h2 className={styles.title}>Skontaktuj się</h2>
                    <div className={styles.box}>
                        <Link href="tel:004917643333333" className={styles.link}>
                            <Image
                                className={styles.icon}
                                src={phoneIcon}
                                alt="phone"
                                width={24}
                                height={24}
                            />
                            <p>+49 176 433 333 33</p>
                        </Link>
                        <Link href="mailto:info@jk-stromprofis.de" className={styles.link}>
                            <Image
                                className={styles.icon}
                                src={emailIcon}
                                alt="email"
                                width={24}
                                height={24}
                            />
                            <p>info@jk-stromprofis.de</p>
                        </Link>
                    </div>
                </article>
                <article className={styles.article}>
                    <h2 className={styles.title}>Lista usług</h2>
                    <ul className={styles.box}>
                        {services.map(({ title, href }) => {
                            return (
                                <li key={title}>
                                    <Link className={styles.link} href={href}>{title}</Link>
                                </li>

                            )
                        }
                        )}
                    </ul>
                </article>
                <article className={styles.article}>
                    <h2 className={styles.title}>Legal</h2>
                    <ul className={styles.box}>
                        {menuItems.map(({ title, href }) => {
                            return (
                                <li key={title}>
                                    <Link className={styles.link} href={href}>{title}</Link>
                                </li>
                            )
                        }
                        )}
                    </ul>
                </article>
            </div>

            <div className={styles.copy}>
                <Image className={styles.icon} src={copyrightIcon} width={16} height={16} alt="" />
                <p className={styles.text}>
                    2023 JK-Stromprofis.
                    Wszystkie prawa zastrzeżone.
                </p>
            </div>
        </footer>
    )
}