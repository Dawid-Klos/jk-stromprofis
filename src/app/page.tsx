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
        subtitle="Komunikacja"
        title="Wciąż masz pytania?"
        content="Dzięki silnej reputacji i świetnym rekomendacjom, JK-Stromprofis jest bez wątpienia wiodącym wyborem w zakresie profesjonalnych usług elektrycznych. Nie musisz wierzyć nam na słowo - przekonaj się o kompetencjach i energii naszego zespołu na własnej skórze."
        image={{
          src: questionImage,
          alt: "Wciąż masz pytania?",
          width: 260,
          height: 260,
        }}
      />
    </>
  );
}
