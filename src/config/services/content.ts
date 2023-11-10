import image from "@assets/images/about-us-img.png";
import { StaticImageData } from "next/image";

export type Article = {
  title: string;
  content: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
};

export type Section = {
  title: string;
  subtitle: string;
  articles: Article[];
};

export type Content = {
  id: number;
  title: string;
  subtitle: string;
  section: Section;
};

export const content: Content[] = [
  {
    id: 0,
    title: `Systemy bezpieczeństwa, na <span>Twoją kieszeń</span>`,
    subtitle:
      "Szukasz sposobów na ochronę swojego domu przed intruzami i innymi zagrożeniami bezpieczeństwa? Cóż, nie szukaj dalej! Mamy w ofercie idealne rozwiązania – kompleksowe systemy bezpieczeństwa z kamerami i systemami alarmowymi, które zapewnią bezpieczeństwo Twoim bliskim i dobytkowi.",
    section: {
      title: "title",
      subtitle: "subtitle",
      articles: [
        {
          title: "title",
          content: "content",
          image: {
            src: image,
            alt: "",
          },
        },
        {
          title: "title",
          content: "content",
          image: {
            src: image,
            alt: "",
          },
        },
        {
          title: "title",
          content: "content",
          image: {
            src: image,
            alt: "",
          },
        },
      ],
    },
  },
];
