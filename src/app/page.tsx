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
        content="Dank unseres guten Rufs und hervorragender Empfehlungen ist JK-Stromprofis zweifellos die erste Wahl für professionelle elektrische Dienstleistungen. Sie müssen uns nicht einfach glauben - überzeugen Sie sich selbst von der Kompetenz und Energie unseres Teams."
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
