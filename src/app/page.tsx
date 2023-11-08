import Hero from "@components/Homepage/Hero";
import Trust from "@components/Homepage/Trust";
import Testimonials from "@components/Homepage/Testimonials";
import CtaSection from "@components/common/CtaSection";
import BackgroundImage from "@components/common/BackgroundImage";

import questionImage from "@assets/images/question-image.png";
import backgroundImage from "@assets/images/home-cta.png";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Testimonials />

      <BackgroundImage src={backgroundImage} alt="" />

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
