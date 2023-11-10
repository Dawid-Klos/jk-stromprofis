import image from "@assets/images/about-us-img.png";
import { StaticImageData } from 'next/image';

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
    title: "Instalacje elektryczne",
    subtitle: "subtitle",
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
