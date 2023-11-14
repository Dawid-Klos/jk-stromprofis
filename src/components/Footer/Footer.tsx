import Image from "next/image";

import styles from "./Footer.module.scss";

import Link from "@components/common/Link";

import logo from "@assets/images/logo.svg";
import phoneIcon from "@assets/icons/phone.svg";
import emailIcon from "@assets/icons/email.svg";
import copyrightIcon from "@assets/icons/copyright.svg";

import { menuItems } from "@config/menuItems";
import { services } from "@config/services";
import Divider from "@components/common/Divider";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Divider type="horizontal" />

      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="JK-Stromprofis" fill />
        </div>
        <article className={styles.article}>
          <h2 className={styles.title}>Kontakt aufnehmen</h2>
          <div className={styles.box}>
            <Link href="tel:00491776294992" className={styles.link}>
              <Image className={styles.icon} src={phoneIcon} alt="phone" width={24} height={24} />
              <p>+49 177 629 49 92</p>
            </Link>
            <Link href="mailto:info@jk-stromprofis.de" className={styles.link}>
              <Image className={styles.icon} src={emailIcon} alt="email" width={24} height={24} />
              <p>info@jk-stromprofis.de</p>
            </Link>
          </div>
        </article>
        <article className={styles.article}>
          <h2 className={styles.title}>Liste der Dienstleistungen</h2>
          <ul className={styles.box}>
            {services.map(({ title, href }) => {
              return (
                <li key={title}>
                  <Link className={styles.link} href={href}>
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </article>
        <article className={styles.article}>
          <h2 className={styles.title}>Wichtige Links</h2>
          <ul className={styles.box}>
            <Link className={styles.link} href={"/politik"}>
              Datenschutzerklärung
            </Link>
            <Link className={styles.link} href={"/politik"}>
              Impressum
            </Link>
            {menuItems.map(({ title, href }) => {
              return (
                <li key={title}>
                  <Link className={styles.link} href={href}>
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </article>
      </div>

      <div className={styles.copy}>
        <Image className={styles.icon} src={copyrightIcon} width={16} height={16} alt="" />
        <p className={styles.text}>2023 JK-Stromprofis. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
};
