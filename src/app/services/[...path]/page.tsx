import BackgroundImage from "@components/common/BackgroundImage";
import CtaSection from "@components/common/CtaSection";

import { services } from "@config/services";
import { convertTitleToHref } from "@utils/functions";

import ctaImage from "@assets/images/services-cta.png";
import backgroundImage from "@assets/images/services-background.png";
import Section from "@components/common/Section";
import Hero from "@components/Services/Hero";

export default function Page({ params }: { params: { path: string } }) {
  const path = params.path.toString();

  const service = services.find((service) => service.href.includes(path));

  if (!service) {
    return null;
  }

  const { title, subtitle, section } = service.content || {};

  return (
    <>
      {title && <Hero title={title} subtitle={subtitle} />}

      <Section
        subtitle={section?.subtitle}
        title={section?.title}
        items={section?.articles}
      />

      <BackgroundImage src={backgroundImage} alt="" />

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
