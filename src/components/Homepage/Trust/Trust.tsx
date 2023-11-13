import NextDivider from "@components/common/Divider";
import Card from "components/common/Card";

import styles from "./Trust.module.scss";

import Hgroup from "@components/common/Hgroup";
import timeIcon from "@assets/icons/time-card.svg";
import serviceIcon from "@assets/icons/service-card.svg";
import euroIcon from "@assets/icons/euro-card.svg";
import peopleIcon from "@assets/icons/people-card.svg";
import contractIcon from "@assets/icons/contract-card.svg";

export const Trust: React.FC = () => {
  return (
    <section className={styles.section}>
      <Hgroup subtitle="exzellenz" title="Warum sollten Sie uns vertrauen." />

      <div className={styles.topContainer}>
        <Card
          title="Effiziente Auftragsabwicklung."
          content="Wir sind stolz auf unsere Fähigkeit, die Bestellungen unserer Kunden schnell und effizient abzuwickeln. Dank unserer kurzen Bearbeitungszeit können Sie sicher sein, dass Ihre Anfragen schnell bearbeitet werden und unnötige Verzögerungen minimiert werden."
          icon={timeIcon}
          darkCard={false}
        />
        <Card
          title="Hervorragender Kundenservice"
          content="Die Bereitstellung professionellen Kundenservice ist der Kern unserer Werte. Wir sind davon überzeugt, dass wir alles tun können, um die Bedürfnisse unserer Kunden zu erfüllen und ihre Zufriedenheit zu gewährleisten. Unser engagiertes Team bietet personalisierte Unterstützung und Anleitungen während des gesamten Prozesses."
          icon={serviceIcon}
          darkCard={false}
        />
      </div>

      <section className={styles.bottomContainer}>
        <div className={styles.titleContainer}>
          <NextDivider classNames={styles.dividerLeft} type="horizontal" />
          <h3 className={styles.title}>Seien Sie noch ruhiger.</h3>
          <NextDivider classNames={styles.dividerRight} type="horizontal" />
        </div>

        <div className={styles.cardsContainer}>
          <Card
            title="5 Jahre Garantie"
            content="Bei JK-Stromprofis verstehen wir, dass Sie möglicherweise Bedenken haben, wenn Sie einen Dienstleister auswählen. Deshalb bieten wir mit Stolz eine 5-jährige Garantie für unsere angebotenen Dienstleistungen an! Wir möchten Ihnen die volle Gewissheit geben, dass unsere Dienstleistungen von höchster Qualität sind und Sie sich langfristig auf uns in Bezug auf elektrische Lösungen verlassen können."
            icon={contractIcon}
            darkCard={true}
          />
          <Card
            title="Flexible Zahlungsoptionen"
            subtitle="Exklusiv für Privatkunden"
            content="Finanzielle Flexibilität spielt in der heutigen schnelllebigen Welt eine entscheidende Rolle. Aus diesem Grund bieten wir die Möglichkeit, Ratenzahlungen zu leisten. Wir stellen diese Zahlungsoption zur Verfügung, um die Zugänglichkeit und Bequemlichkeit für unsere Kunden zu erhöhen."
            icon={euroIcon}
            darkCard={true}
          />
        </div>
      </section>

      <section className={styles.bottomContainer}>
        <div className={styles.titleContainer}>
          <NextDivider classNames={styles.dividerLeft} type="horizontal" />
          <h3 className={styles.title}>Unterstützung in ihren projekten.</h3>
          <NextDivider classNames={styles.dividerRight} type="horizontal" />
        </div>
        <div className={styles.cardsContainer}>
          <Card
            title="Mitarbeiterleasing"
            content="Als zusätzlichen Vorteil bieten wir einen einzigartigen Service an, der es ermöglicht, Mitarbeiter für geschäftliche Zwecke zu leasen. Dieser innovative Ansatz bietet Flexibilität bei der Anpassung der Personalstärke je nach Bedarf und trägt dazu bei, den Betrieb zu optimieren und die Gesamtkosten zu reduzieren."
            icon={peopleIcon}
            darkCard={true}
          />
        </div>
      </section>
    </section>
  );
};
