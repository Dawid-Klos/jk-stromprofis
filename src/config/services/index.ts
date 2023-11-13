import Accumulator from "@assets/icons/services/Accumulator";
import SmartHome from "@assets/icons/services/SmartHome";
import Glove from "@assets/icons/services/Glove";
import LightBulb from "@assets/icons/services/LightBulb";
import Safety from "@assets/icons/services/Safety";
import Wires from "@assets/icons/services/Wires";
import Wiring from "@assets/icons/services/Wiring";
import Speaker from "@assets/icons/services/Speaker";

import { content } from "./content";

export interface Service {
  id: number;
  title: string;
  href: string;
  shortDescription: string;
  icon: React.FC;
}

const basicServices: Service[] = [
  {
    id: 0,
    title: "Elektrische Installationen",
    href: "elektrische-installationen",
    shortDescription:
      "Bei JK-Stromprofis verstehen wir die entscheidende Rolle, die zuverlässige elektrische Installationen spielen. Deshalb bieten wir eine Reihe von herausragenden Dienstleistungen im Bereich elektrischer Installationen an, die auf die Bedürfnisse des Kunden zugeschnitten sind.",
    icon: Wires,
  },
  {
    id: 1,
    title: "Fachgerechter Kabelbau",
    href: "fachgerechter-kabelbau",
    shortDescription:
      "Bei JK-Stromprofis haben wir uns auf die Bereitstellung hochwertiger Dienstleistungen für die Verlegung von Kabeltrassen in großen Gebäuden spezialisiert. Wir verstehen, dass eine effiziente Kabelführung das Fundament für jedes moderne Gebäude bildet, und wir sind hier, um die Leistung zu optimieren und den Betrieb zu verbessern.",
    icon: Wiring,
  },
  {
    id: 2,
    title: "Spezialisierte Unterstützung",
    href: "spezialisierte-unterstutzung",
    shortDescription:
      "Bei JK-Stromprofis gehen wir über herkömmliche Dienstleister hinaus, indem wir umfassende Projektunterstützung für Unternehmen jeder Größe anbieten. Wir verstehen die Herausforderungen, denen Unternehmen gegenüberstehen, sei es aufgrund begrenzter Ressourcen oder spezialisierter Kenntnisse. Daher haben wir uns darauf spezialisiert, unschätzbar wertvolle Unterstützung anzubieten, die bei der reibungslosen und effektiven Umsetzung von Projekten hilft.",
    icon: Glove,
  },
  {
    id: 3,
    title: "Sicherheitssysteme",
    href: "sicherheitssysteme",
    shortDescription:
      "Suchen Sie nach Möglichkeiten, Ihr Zuhause vor Eindringlingen und anderen Sicherheitsbedrohungen zu schützen? Nun, suchen Sie nicht weiter! Wir bieten die perfekten Lösungen - umfassende Sicherheitssysteme mit Kameras und Alarmanlagen, die die Sicherheit Ihrer Familie und Ihres Eigentums gewährleisten.",
    icon: Safety,
  },
  {
    id: 4,
    title: "Smart Home",
    href: "smart-home",
    shortDescription:
      "Entdecken Sie eine völlig neue Welt des Komforts und der Effizienz, die direkt vor Ihnen liegt. Stellen Sie sich ein Zuhause vor, das alle Ihre Bedürfnisse kennt, Ihre Wünsche voraussieht und jeden Ihrer Launen erfüllt. Intelligente Häuser revolutionieren Ihren Lebensstil und verbessern jeden Aspekt Ihrer täglichen Routine.",
    icon: SmartHome,
  },
  {
    id: 5,
    title: "Beschallungssysteme",
    href: "beschallungssysteme",
    shortDescription:
      "Suchen Sie nach dem perfekten Beschallungssystem, das die Erfahrungen Ihrer Kunden verbessert und Ihre Leidenschaft mit der Welt teilt? Dann sind Sie hier genau richtig mit unserer Installation von Audiosystemen!",
    icon: Speaker,
  },
  {
    id: 6,
    title: "Beleuchtungssysteme",
    href: "beleuchtungssysteme",
    shortDescription:
      "Suchen Sie nach einer professionellen Beleuchtungslösung, die beeindruckende Ergebnisse liefert und Ihren Raum erhellt? Suchen Sie nicht weiter als unsere umfassenden Beleuchtungsdienstleistungen für Privatpersonen und Geschäftsinhaber. Unser Team erfahrener Techniker bietet professionelle Planungs-, Installations- und Austauschdienstleistungen für alle Arten von Beleuchtung.",
    icon: LightBulb,
  },
  {
    id: 7,
    title: "Ladestationen für Fahrzeuge",
    href: "ladestationen-fur-fahrzeuge",
    shortDescription:
      "Wir präsentieren die Zukunft des Komforts und nachhaltiger Entwicklung – Ladestationen für moderne Elektrofahrzeuge! Entwickelt mit Kreativität und Präzision sind Ladepunkte Ihr Ticket für eine reibungslose und umweltfreundliche Fahrt. Investieren Sie in Ihre energetische Zukunft und suchen Sie nicht weiter.",
    icon: Accumulator,
  },
];

export const services = basicServices.map(({ id, title, href, shortDescription, icon }) => {
  const updatedHref = `/dienstleistungen/${href}`;

  return {
    id,
    title,
    href: updatedHref,
    shortDescription,
    icon,
    content: content[id],
  };
});
