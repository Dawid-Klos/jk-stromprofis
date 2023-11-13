import Hero from "@components/Homepage/Hero";
import Services from "@components/Homepage/Services";
import Testimonials from "@components/Homepage/Testimonials";
import Trust from "@components/Homepage/Trust";
import BackgroundImage from "@components/common/BackgroundImage";
import CtaSection from "@components/common/CtaSection";

import bulbsBackground from "@assets/images/about-bulbs.webp";
import cityBackground from "@assets/images/home-city.webp";
import questionImage from "@assets/images/question-img.svg";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />

      <BackgroundImage className={styles.cityImage} src={cityBackground} alt="a view of city during a night" />

      <Testimonials />

      <BackgroundImage className={styles.bulbsImage} src={bulbsBackground} alt="a few bulbs in the dark" />

      <CtaSection
        subtitle="Wir können helfen"
        title="Haben Sie noch Fragen?"
        content="Mit einem ausgezeichneten Ruf und vielen Empfehlungen sind die JK-Stromprofis zweifellos die erste Wahl für professionelle Elektrodienstleistungen. Nehmen Sie uns nicht beim Wort - erleben Sie die Kompetenz und Energie unseres Teams selbst."
        image={{
          src: questionImage,
          alt: "Charakter, der zeigt, dass er nicht versteht, was vor sich geht",
          width: 260,
          height: 260,
        }}
      />
    </>
  );
}
