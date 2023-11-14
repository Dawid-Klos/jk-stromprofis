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

  const { title, subtitle, summary, articles } = service.content || {};

  return (
    <>
      {title && <Hero title={title} subtitle={subtitle} />}

      {articles && <Section subtitle="Professionalität" title="Was Sie von uns erwarten können." items={articles} />}

      <BackgroundImage
        className={styles.backgroundImage}
        src={backgroundImage}
        priority={true}
        alt="Blau, Neon, hängende Glühbirne "
      />

      <CtaSection
        subtitle="wenn Sie es brauchen"
        title="Ihr zuverlässiger Partner"
        content={summary}
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
