import styles from "./Testimonials.module.scss";

import Slider from "./Slider";

import { testimonials } from "@config/testimonials";
import Hgroup from "@components/common/Hgroup";

export const Testimonials = () => {
  return (
    <section className={styles.section}>
      <Hgroup subtitle="VERTRAUEN" title="Was unsere Kunden über uns sagen." />

      <Slider testimonials={testimonials} />
    </section>
  );
};
