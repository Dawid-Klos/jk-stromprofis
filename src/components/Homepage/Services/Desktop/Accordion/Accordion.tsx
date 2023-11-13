import { Accordion as NextAccordion, AccordionItem } from "@nextui-org/react";

import Chevron from "@assets/icons/Chevron";
import Divider from "@components/common/Divider";
import Link from "@components/common/Link";
import ArrowRight from "@assets/icons/ArrowRight";
import { Service } from "@config/services";

import styles from "./Accordion.module.scss";

type Props = {
  services: Service[];
  className: string;
  selectedKeys: any;
  setSelectedKeys: (value: any) => void;
};

export const Accordion = ({ services, className, selectedKeys, setSelectedKeys }: Props) => {
  return (
    <NextAccordion
      variant="splitted"
      className={className}
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      itemClasses={{
        base: styles.base,
        title: styles.title,
        trigger: styles.trigger,
        content: styles.content,
        indicator: styles.indicator,
      }}
    >
      {services.map(({ id, title, href, shortDescription, icon }) => {
        const Icon = icon;

        return (
          <AccordionItem
            key={id}
            aria-label={title}
            title={title}
            indicator={<Chevron className={styles.chevron} />}
            startContent={<Icon />}
            data-open={false}
          >
            <>
              <Divider type="horizontal" />
              {shortDescription}
              <Link href={href} className={styles.link}>
                Siehe Service
                <ArrowRight />
              </Link>
            </>
          </AccordionItem>
        );
      })}
    </NextAccordion>
  );
};
