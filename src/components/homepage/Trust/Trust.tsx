import { Divider } from "@nextui-org/react";
import Card from "components/common/Card/Card";
import styles from "./Trust.module.scss";

import timeIcon from "@assets/icons/time-card.svg";
import serviceIcon from "@assets/icons/service-card.svg";
import euroIcon from "@assets/icons/euro-card.svg";
import peopleIcon from "@assets/icons/people-card.svg";
import contractIcon from "@assets/icons/contract-card.svg";

export const Trust: React.FC = () => {
  return (
    <section className={styles.section}>
      <hgroup className={styles.header}>
        <p className={styles.subtitle}>Wyjątkowość</p>
        <h2 className={styles.title}>Dlaczego warto nam zaufać.</h2>
        <Divider className={styles.divider} />
      </hgroup>

      <div className={styles.topContainer}>
        <Card
          title="Sprawna realizacja zamówień"
          content="Jesteśmy dumni z naszej zdolności do szybkiej i skutecznej realizacji zamówień klientów. Dzięki naszemu krótkiemu czasowi realizacji możesz mieć pewność, że Twoje żądania zostaną szybko obsłużone, minimalizując wszelkie niepotrzebne opóźnienia."
          icon={timeIcon}
          darkCard={false}
        />
        <Card
          title="Wyjątkowa obsługa klienta"
          content="Zapewnienie profesjonalnej obsługi klienta jest podstawą naszych wartości. Wierzymy, że możemy zrobić wszystko, aby zaspokoić potrzeby naszych klientów i zapewnić ich satysfakcję. Nasz oddany zespół zapewnia spersonalizowane wsparcie i wskazówki w trakcie całego procesu."
          icon={serviceIcon}
          darkCard={false}
        />
      </div>

      <section className={styles.bottomContainer}>
        <div className={styles.titleContainer}>
          <Divider className={styles.dividerLeft} />
          <h3 className={styles.title}>Bądź jeszcze bardziej spokojny.</h3>
          <Divider className={styles.dividerRight} />
        </div>

        <div className={styles.cardsContainer}>
          <Card
            title="5 lat gwarancji"
            subtitle="Przy wyborze polecanych produktów"
            content="W JK-Stromprofis rozumiemy, że przy wyborze usługodawcy możesz mieć wątpliwości. Ale właśnie dlatego z dumą oferujemy 5-letnią gwarancję* na nasze oferowane usługi! Chcemy dać Ci całkowitą pewność, że nasze usługi są najwyższej jakości i że możesz na nas polegać w zakresie rozwiązań elektrycznych w dłuższej perspektywie."
            icon={contractIcon}
            darkCard={true}
          />
          <Card
            title="Elastyczne opcje płatności"
            subtitle="Wyłącznie dla prywatnych klientów"
            content="Elastyczność finansowa ma kluczowe znaczenie w dzisiejszym szybko zmieniającym się świecie. Dlatego też oferujemy możliwość dokonywania płatności w ratach. Zapewniamy to rozwiązanie płatnicze, z myślą o zwiekszeniu dostępności i wygodzie naszych klientów."
            icon={euroIcon}
            darkCard={true}
          />
        </div>
      </section>

      <section className={styles.bottomContainer}>
        <div className={styles.titleContainer}>
          <Divider className={styles.dividerLeft} />
          <h3 className={styles.title}>Twoje wsparcie w projektach.</h3>
          <Divider className={styles.dividerRight} />
        </div>
        <div className={styles.cardsContainer}>
          <Card
            title="Leasing pracowników"
            subtitle="Wyłącznie dla przedsiębiorców"
            content="Jako dodatkową korzyść oferujemy unikalną usługę, która umożliwia leasing pracowników na potrzeby biznesowe. To innowacyjne podejście zapewnia elastyczność w skalowaniu ilości personelu w zależności od zapotrzebowania, pomagając zoptymalizować operacje i zmniejszyć ogólne koszty."
            icon={peopleIcon}
            darkCard={true}
          />
        </div>
      </section>
    </section>
  );
};
