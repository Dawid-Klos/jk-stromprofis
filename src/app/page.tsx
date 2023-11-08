import Image from "next/image";

import Hero from "@components/Homepage/Hero";
import Trust from "@components/Homepage/Trust";
import Testimonials from "@components/Homepage/Testimonials";
import Services from "@components/Homepage/Services";

import styles from "./page.module.scss";
import cityImag from "@assets/images/home-city-desktop-xl.png";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <div className={styles.background}>
        <Image
          className={styles.image}
          src={cityImag}
          alt="a view of city during a night"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
        />
      </div>

      <Testimonials />
    </>
  );
}
