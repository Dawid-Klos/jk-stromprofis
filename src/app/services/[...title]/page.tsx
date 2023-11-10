import BackgroundImage from "@components/common/BackgroundImage";
import CtaSection from "@components/common/CtaSection";

import { services } from "@config/services";
import { convertTitleToHref } from "@utils/functions";

import ctaImage from "@assets/images/services-cta.png";
import backgroundImage from "@assets/images/services-background.png";
import Section from "@components/common/Section";

export default function Page({ params }: { params: { title: string } }) {
  const title = params.title.toString();

  const service = services.find(
    (service) => convertTitleToHref(service.title) === title
  );

  if (!service) {
    return null;
  }

  const { title: serviceTitle, subtitle, section } = service.content || {};

  return (
    <>
      <section>
        <h1>{serviceTitle}</h1>
        <p>{subtitle}</p>
      </section>

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
