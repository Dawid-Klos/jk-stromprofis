import styles from "./Testimonials.module.scss";

import Slider from "./Slider";

import { testimonials } from "@config/testimonials";
import Hgroup from "@components/common/Hgroup";

export const Testimonials = () => {
  return (
    <section className={styles.section}>
      <Hgroup subtitle="Zaufanie" title="Nasi klienci o nas." />

      <Slider testimonials={testimonials} />
    </section>
  );
};
