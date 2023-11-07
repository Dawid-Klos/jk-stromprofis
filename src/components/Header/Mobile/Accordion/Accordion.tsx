import Image from "next/image";
import { Accordion as NextAccordion, AccordionItem } from "@nextui-org/react";

import Divider from "@components/common/Divider";
import Link from "@components/common/Link";

import styles from "./Accordion.module.scss";

type Props = {
  title: string;
  list: {
    title: string;
    href: string;
    icon: React.FC;
  }[];
  setIsOpen: (value: boolean) => void;
};

export const Accordion = ({ title, list, setIsOpen }: Props) => {
  return (
    <NextAccordion
      key={title}
      className={styles.accordion}
      itemClasses={{
        title: styles.title,
        trigger: styles.trigger,
        content: styles.content,
      }}
    >
      <AccordionItem aria-label={title} title={title}>
        {list.map(({ title, href, icon }) => {
          const Icon = icon;

          return (
            <>
              <Link className={styles.link} href={href} onClick={() => setIsOpen(false)} key={title}>
                {/* <Image className={styles.icon} src={icon} alt="Service" width={24} height={24} /> */}
                <Icon />
                {title}
              </Link>
              <Divider type="horizontal" />
            </>
          );
        })}
      </AccordionItem>
    </NextAccordion>
  );
};
