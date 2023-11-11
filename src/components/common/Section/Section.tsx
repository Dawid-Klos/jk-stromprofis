import { StaticImageData } from "next/image";

import Hgroup from "@components/common/Hgroup";
import Article from "./Article";
import styles from "./Section.module.scss";

export type Item = {
  title: string;
  content: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
};

type Props = {
  title: string;
  subtitle: string;
  items: Item[];
  classNames?: {
    section?: string;
    wrapper?: string;
    article?: string;
    image?: string;
    title?: string;
    content?: string;
  };
};

export const Section = ({ title, subtitle, items, classNames }: Props) => {
  const sectionClassNames = [styles.section, classNames?.section].join(" ");
  const wrapperClassNames = [styles.wrapper, classNames?.wrapper].join(" ");

  const articleClassNames = {
    article: classNames?.article,
    image: classNames?.image,
    title: classNames?.title,
    content: classNames?.content,
  };

  return (
    <section className={sectionClassNames}>
      <Hgroup subtitle={subtitle} title={title} />

      <div className={wrapperClassNames}>
        {items &&
          items.map((item, index) => (
            <Article key={index} item={item} classNames={articleClassNames} />
          ))}
      </div>
    </section>
  );
};
