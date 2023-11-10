import CtaSection from "@components/common/CtaSection";

import { services } from "@config/services";
import { convertTitleToHref } from "@utils/functions";

import ctaImage from "@assets/images/services-cta.png";

export default function Page({ params }: { params: { title: string } }) {
  const title = params.title.toString();

  const service = services.find(
    (service) => convertTitleToHref(service.title) === title
  );

  return (
    <>
      <h1>{title}</h1>

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
