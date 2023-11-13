import styles from "./page.module.scss";

import Hero from "@components/Services/Hero";
import BackgroundImage from "@components/common/BackgroundImage";
import CtaSection from "@components/common/CtaSection";
import Section from "@components/common/Section";

import { services } from "@config/services";

import backgroundImage from "@assets/images/services-trust.webp";
import ctaImage from "@assets/images/partners-img.svg";

export default function Page({ params }: { params: { path: string } }) {
  const path = params.path.toString();

  const service = services.find((service) => service.href.includes(path));

  if (!service) {
    return null;
  }

  const { title, subtitle, articles } = service.content || {};

  return (
    <>
      {title && <Hero title={title} subtitle={subtitle} />}

      {articles && <Section subtitle="profesjonalizm" title="Czego możesz od nas oczekiwać." items={articles} />}

      <BackgroundImage className={styles.backgroundImage} src={backgroundImage} alt="" />

      <CtaSection
        subtitle="kiedy tego potrzebujesz"
        title="Twój zaufany partner"
        content="Przenieś swój dom lub firmę na wyższy poziom dzięki naszym najwyższej jakości instalacjom elektrycznym. Niezależnie od tego, czy chcesz zmodernizować swój obecny system, czy rozpocząć zupełnie nowy projekt, pozwól JK-Stromprofis być Twoim zaufanym partnerem."
        image={{
          src: ctaImage,
          alt: "",
          width: 260,
          height: 260,
        }}
      />
    </>
  );
}
