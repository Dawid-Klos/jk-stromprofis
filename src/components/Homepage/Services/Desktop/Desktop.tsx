import Hgroup from "@components/common/Hgroup";
import { Service, services } from "@config/services";

import styles from "./Desktop.module.scss";
import { Accordion } from "./Accordion/Accordion";

export const Desktop = () => {
  const firstCol: Service[] = services.slice(0, 4);
  const secondCol: Service[] = services.slice(4, 8);

  return (
    <section className={styles.section}>
      <Hgroup title="Co mamy do zaoferowania." subtitle="Usługi" />
      <div className={styles.grid}>
        <Accordion services={firstCol} className={styles.column} />
        <Accordion services={secondCol} className={styles.column} />
      </div>
    </section>
  );
};
