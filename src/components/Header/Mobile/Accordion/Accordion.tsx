import { usePathname } from "next/navigation";
import { AccordionItem, Accordion as NextAccordion } from "@nextui-org/react";

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
  const path = usePathname();

  return (
    <NextAccordion
      key={title}
      className={styles.accordion}
      itemClasses={{
        title: styles.title,
        trigger: styles.trigger,
        content: styles.content,
        indicator: styles.indicator,
      }}
    >
      <AccordionItem aria-label={title} title={title}>
        {list.map(({ title, href, icon }) => {
          const Icon = icon;
          const isActive = path === href;

          return (
            <>
              <Link
                className={`${styles.link} ${isActive && styles.active}`}
                href={href}
                onClick={() => setIsOpen(false)}
                key={title}
              >
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
