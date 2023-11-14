import Image from "next/image";

import styles from "./Article.module.scss";

import type { Item } from "../Section";
import Divider from "@components/common/Divider";

type Props = {
  item: Item;
  classNames?: {
    article?: string;
    image?: string;
    title?: string;
    content?: string;
  };
};

export const Article = ({ item, classNames }: Props) => {
  const { image, title, content } = classNames || {};

  const articleClassNames = [styles.article, classNames?.article].join(" ");
  const imageClassNames = [styles.image, image].join(" ");
  const titleClassNames = [styles.title, title].join(" ");
  const contentClassNames = [styles.content, content].join(" ");

  return (
    <div className={styles.container}>
      <article className={articleClassNames}>
        <div className={styles.imageWrapper}>
          <Image
            className={imageClassNames}
            sizes="100vw"
            placeholder="blur"
            src={item.image.src}
            alt={item.image.alt}
            priority
            fill
          />
        </div>

        <div className={styles.wrapper}>
          <h3 className={titleClassNames}>{item.title}</h3>
          <p className={contentClassNames}>{item.content}</p>
        </div>
      </article>

      <Divider type="horizontal" />
    </div>
  );
};
