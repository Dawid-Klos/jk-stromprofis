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
    title: "Instalacje elektryczne",
    href: "instalacje-elektryczne",
    shortDescription:
      "W JK-Stromprofis rozumiemy kluczową rolę, jaką odgrywają niezawodne instalacje elektryczne. Dlatego oferujemy szereg wyjątkowych usług w zakresie instalacji elektrycznych, które są dostosowane do potrzeb klienta.",
    icon: Wires,
  },
  {
    id: 1,
    title: "Specjalistyczna budowa tras kablowych",
    href: "specjalistyczna-budowa-tras-kablowych",
    shortDescription:
      "W JK-Stromprofis rozumiemy kluczową rolę, jaką odgrywają niezawodne instalacje elektryczne. Dlatego oferujemy szereg wyjątkowych usług w zakresie instalacji elektrycznych, które są dostosowane do potrzeb klienta.",
    icon: Wiring,
  },
  {
    id: 2,
    title: "Specjalistyczne wsparcie",
    href: "specjalistyczne-wsparcie",
    shortDescription:
      "W JK-Stromprofis rozumiemy kluczową rolę, jaką odgrywają niezawodne instalacje elektryczne. Dlatego oferujemy szereg wyjątkowych usług w zakresie instalacji elektrycznych, które są dostosowane do potrzeb klienta.",
    icon: Glove,
  },
  {
    id: 3,
    title: "Systemy bezpieczeństwa",
    href: "systemy-bezpieczenstwa",
    shortDescription:
      "W JK-Stromprofis rozumiemy kluczową rolę, jaką odgrywają niezawodne instalacje elektryczne. Dlatego oferujemy szereg wyjątkowych usług w zakresie instalacji elektrycznych, które są dostosowane do potrzeb klienta.",
    icon: Safety,
  },
  {
    id: 4,
    title: "Inteligentny dom",
    href: "inteligentny-dom",
    shortDescription:
      "W JK-Stromprofis rozumiemy kluczową rolę, jaką odgrywają niezawodne instalacje elektryczne. Dlatego oferujemy szereg wyjątkowych usług w zakresie instalacji elektrycznych, które są dostosowane do potrzeb klienta.",
    icon: SmartHome,
  },
  {
    id: 5,
    title: "Systemy nagłaśniające",
    href: "systemy-naglasniajace",
    shortDescription:
      "W JK-Stromprofis rozumiemy kluczową rolę, jaką odgrywają niezawodne instalacje elektryczne. Dlatego oferujemy szereg wyjątkowych usług w zakresie instalacji elektrycznych, które są dostosowane do potrzeb klienta.",
    icon: Speaker,
  },
  {
    id: 6,
    title: "Planowanie, montaż i wymiana oświetlenia",
    href: "planowanie-montaz-i-wymiana-oswietlenia",
    shortDescription:
      "W JK-Stromprofis rozumiemy kluczową rolę, jaką odgrywają niezawodne instalacje elektryczne. Dlatego oferujemy szereg wyjątkowych usług w zakresie instalacji elektrycznych, które są dostosowane do potrzeb klienta.",
    icon: LightBulb,
  },
  {
    id: 7,
    title: "Punkty ładowania/Doprowadzenie prądu",
    href: "punkty-ladowania-doprowadzenie-pradu",
    shortDescription:
      "W JK-Stromprofis rozumiemy kluczową rolę, jaką odgrywają niezawodne instalacje elektryczne. Dlatego oferujemy szereg wyjątkowych usług w zakresie instalacji elektrycznych, które są dostosowane do potrzeb klienta.",
    icon: Accumulator,
  },
];

export const services = basicServices.map(({ id, title, href, shortDescription, icon }) => {
  const updatedHref = `/services/${href}`;

  return {
    id,
    title,
    href: updatedHref,
    shortDescription,
    icon,
    content: content[id]
  };
});
