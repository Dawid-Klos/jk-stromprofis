import { convertTitleToHref } from "@utils/functions";

import accumulatorIcon from "@assets/icons/services/accumulator.svg";
import smartHomeIcon from "@assets/icons/services/smart-home.svg";
import gloveIcon from "@assets/icons/services/glove.svg";
import lightBulbIcon from "@assets/icons/services/light-bulb.svg";
import safetyIcon from "@assets/icons/services/safety.svg";
import wiresIcon from "@assets/icons/services/wires.svg";
import wiringIcon from "@assets/icons/services/wiring.svg";
import speakerIcon from "@assets/icons/services/speaker.svg";

type servicesTypes = {
  title: string;
  href: string;
  icon: string;
}[];

export type menuItemsTypes = {
  title: string;
  href: string;
  list?: servicesTypes;
}[];

const basicServices: servicesTypes = [
  {
    title: "Instalacje elektryczne",
    href: "",
    icon: wiresIcon,
  },
  {
    title: "Specjalistyczna budowa tras kablowych",
    href: "",
    icon: wiringIcon,
  },
  {
    title: "Specjalistyczne wsparcie",
    href: "",
    icon: gloveIcon,
  },
  {
    title: "System bezpieczeństwa",
    href: "",
    icon: safetyIcon,
  },
  {
    title: "Inteligentny dom",
    href: "",
    icon: smartHomeIcon,
  },
  {
    title: "Systemy nagłaśniające",
    href: "",
    icon: speakerIcon,
  },
  {
    title: "Planowanie, montaż i wymiana oświetlenia",
    href: "",
    icon: lightBulbIcon,
  },
  {
    title: "Punkty ładowania / Doprowadzenie prądu",
    href: "",
    icon: accumulatorIcon,
  },
];

export const services = basicServices.map(({ title, icon }) => {
  return {
    title,
    href: convertTitleToHref(title),
    icon,
  };
});

const basicMenuItems: menuItemsTypes = [
  {
    title: "Home",
    href: "",
  },
  {
    title: "Services",
    href: "",
    list: services,
  },
  {
    title: "About",
    href: "",
  },
  {
    title: "Contact",
    href: "",
  },
];

export const menuItems = basicMenuItems.map((item) => {
  if (item.title === "Home")
    return {
      title: item.title,
      href: "/",
    };

  item.href = convertTitleToHref(item.title);
  if (item.list) {
    item.list.forEach((subItem) => {
      subItem.href = convertTitleToHref(subItem.title);
    });
  }

  return item;
});
