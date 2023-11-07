import Accumulator from "@assets/icons/services/Accumulator";
import SmartHome from "@assets/icons/services/SmartHome";
import Glove from "@assets/icons/services/Glove";
import LightBulb from "@assets/icons/services/LightBulb";
import Safety from "@assets/icons/services/Safety";
import Wires from "@assets/icons/services/Wires";
import Wiring from "@assets/icons/services/Wiring";
import Speaker from "@assets/icons/services/Speaker";

import { convertTitleToHref } from "@utils/functions";

export interface Service {
  title: string;
  href: string;
  icon: React.FC;
}

const basicServices: Service[] = [
  {
    title: "Instalacje elektryczne",
    href: "",
    icon: Wires,
  },
  {
    title: "Specjalistyczna budowa tras kablowych",
    href: "",
    icon: Wiring,
  },
  {
    title: "Specjalistyczne wsparcie",
    href: "",
    icon: Glove,
  },
  {
    title: "System bezpieczeństwa",
    href: "",
    icon: Safety,
  },
  {
    title: "Inteligentny dom",
    href: "",
    icon: SmartHome,
  },
  {
    title: "Systemy nagłaśniające",
    href: "",
    icon: Speaker,
  },
  {
    title: "Planowanie, montaż i wymiana oświetlenia",
    href: "",
    icon: LightBulb,
  },
  {
    title: "Punkty ładowania / Doprowadzenie prądu",
    href: "",
    icon: Accumulator,
  },
];

export const services = basicServices.map(({ title, icon }) => {
  return {
    title,
    href: convertTitleToHref(title),
    icon,
  };
});
