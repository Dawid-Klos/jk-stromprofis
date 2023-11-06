import styles from "./Testimonials.module.scss";

import Divider from "@components/common/Divider";
import Slider from "./Slider";

import { testimonials } from "@config/testimonials";

export const Testimonials = () => {
  return (
    <section className={styles.section}>
      <hgroup className={styles.header}>
        <p className={styles.subtitle}>zaufanie</p>
        <h2 className={styles.title}>Nasi klienci o nas.</h2>
        <Divider type="horizontal" />
      </hgroup>

      <Slider testimonials={testimonials} />
    </section>
  );
};
