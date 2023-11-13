import type { Item } from "@components/common/Section/Section";

import Hero from "@components/About/Hero";
import CtaSection from "@components/common/CtaSection";
import Section from "@components/common/Section";
import BackgroundImage from "@components/common/BackgroundImage";

import questionImage from "@assets/images/question-img.svg";
import backgroundImage from "@assets/images/about-bulbs.webp";
import missionImage from "@assets/images/about-misson.webp";
import goalImage from "@assets/images/about-goal.webp";

import styles from "./page.module.scss";

export default function Home() {
  const articles: Item[] = [
    {
      title: "Unsere Mission",
      content:
        "Die Mission von JK-Stromprofis besteht darin, professionelle und zuverlässige elektrische Dienstleistungen in Hamburg und Umgebung zu erbringen. Mit fast 10 Jahren Erfahrung in der Branche haben wir einen vertrauenswürdigen Vorteil in allen Aspekten professioneller elektrischer Bedürfnisse. Unser Team setzt alles daran, sicherzustellen, dass jeder Kunde, der mit uns zusammenarbeitet, die qualitativ hochwertigen Dienstleistungen erhält, die er verdient.",
      image: {
        src: missionImage,
        alt: "Nasza misja",
      },
    },
    {
      title: "Unser Ziel",
      content:
        "Dank unserer Erfahrung können wir wettbewerbsfähige Preise anbieten, dabei jedoch die höchsten Sicherheits- und Leistungsstandards beibehalten. Mit einer fest verwurzelten Vision, der führende Anbieter von elektrischen Dienstleistungen in Hamburg zu werden, setzen wir uns täglich dafür ein, dass niemand Zweifel an der Wahl von JK-Stromprofis als Experten für alles rund um Elektrizität hat!",
      image: {
        src: goalImage,
        alt: "Nasz cel",
      },
    },
  ];

  return (
    <>
      <Hero />

      <Section subtitle="GESCHICHTE" title="Wofür wir stehen." items={articles} />

      <BackgroundImage className={styles.bulbsImage} src={backgroundImage} alt="" />

      <CtaSection
        subtitle="WIR KÖNNEN HELFEN"
        title="Haben Sie noch Fragen?"
        content="Dank unseres guten Rufs und hervorragender Empfehlungen ist JK-Stromprofis zweifellos die erste Wahl für professionelle elektrische Dienstleistungen. Sie müssen uns nicht einfach glauben - überzeugen Sie sich selbst von der Kompetenz und Energie unseres Teams."
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
