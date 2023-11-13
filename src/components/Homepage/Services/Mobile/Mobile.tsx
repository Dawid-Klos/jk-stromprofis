import Link from "@components/common/Link";

import Hgroup from "@components/common/Hgroup";
import Divider from "@components/common/Divider";
import styles from "./Mobile.module.scss";

import { services } from "@config/services";
import ArrowRight from "@assets/icons/ArrowRight";

export const Mobile = () => {
  return (
    <section className={styles.section}>
      <Hgroup title="Was wir anbieten." subtitle="Dienstleistungen" />

      <div className={styles.container}>
        {services.map(({ id, title, href, shortDescription, icon }) => {
          const Icon = icon;

          return (
            <article key={id} className={styles.card}>
              <div className={styles.cardTitle}>
                <Icon />
                <h3 className={styles.title}>{title}</h3>
              </div>
              <Divider type="horizontal" />
              {shortDescription}
              <Divider type="horizontal" />

              <Link href={`/dienstleistungen/${href}`} className={styles.link}>
                Siehe Service
                <ArrowRight />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};
