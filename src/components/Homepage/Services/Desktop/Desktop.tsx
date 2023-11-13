"use client";

import { useState } from "react";

import Hgroup from "@components/common/Hgroup";
import { Service, services } from "@config/services";

import styles from "./Desktop.module.scss";
import { Accordion } from "./Accordion/Accordion";

export const Desktop = () => {
  const [selectedKeys, setSelectedKeys] = useState<any>();
  const firstCol: Service[] = services.slice(0, 4);
  const secondCol: Service[] = services.slice(4, 8);

  return (
    <section className={styles.section}>
      <Hgroup title="Was wir anbieten." subtitle="Dienstleistungen" />

      <div className={styles.grid}>
        <Accordion
          services={firstCol}
          className={styles.column}
          selectedKeys={selectedKeys}
          setSelectedKeys={setSelectedKeys}
        />
        <Accordion
          services={secondCol}
          className={styles.column}
          selectedKeys={selectedKeys}
          setSelectedKeys={setSelectedKeys}
        />
      </div>
    </section>
  );
};
