
import styles from "./Hero.module.scss";

type Props = {
  title: string;
  subtitle: string;
};

export const Hero = ({ title, subtitle }: Props) => {
  return (
    <section className={styles.section}>
      <hgroup className={styles.hgroup}>
        <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
        <p>{subtitle}</p>
      </hgroup>
   
    </section>
  );
};
