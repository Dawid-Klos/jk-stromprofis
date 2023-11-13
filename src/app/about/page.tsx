import type { Item } from "@components/common/Section/Section";

import Hero from "@components/About/Hero";
import CtaSection from "@components/common/CtaSection";
import Section from "@components/common/Section";
import BackgroundImage from "@components/common/BackgroundImage";

import questionImage from "@assets/images/question-img.svg";
import backgroundImage from "@assets/images/about-bulbs.webp";
import missionImage from "@assets/images/img-mission.webp";
import goalImage from "@assets/images/img-goal.webp";

import styles from "./page.module.scss";

export default function Home() {
  const articles: Item[] = [
    {
      title: "Nasza misja",
      content:
        "Misją JK-Stromprofis jest świadczenie profesjonalnych i niezawodnych usług elektrycznych w Hamburgu i jego okolicach. Mamy prawie 10-letnie doświadczenie w branży, co daje nam zaufaną przewagę, jeśli chodzi o wszystkie aspekty profesjonalnych potrzeb elektrycznych. Nasz zespół dokłada wszelkich starań, aby każdy klient, który z nami współpracuje, otrzymywał usługi najwyższej jakości, na jakie zasługuje.",
      image: {
        src: missionImage,
        alt: "Nasza misja",
      },
    },
    {
      title: "Nasz cel",
      content:
        "Dzięki naszemu doświadczeniu jesteśmy w stanie zaoferować konkurencyjne stawki, jednocześnie zachowując najwyższe standardy bezpieczeństwa i możliwości. Mając mocno zakorzenioną wizję stania się wiodącym dostawcą usług elektrycznych w Hamburgu, każdego dnia dokładamy wszelkich starań, aby nikt nie miał wątpliwości co do wyboru JK-Stromprofis jako eksperta od wszystkiego, co związane z elektrycznością!",
      image: {
        src: goalImage,
        alt: "Nasz cel",
      },
    },
  ];

  return (
    <>
      <Hero />

      <Section subtitle="Historia" title="Czym się kierujemy." items={articles} />

      <BackgroundImage className={styles.bulbsImage} src={backgroundImage} alt="" />

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
