import { convertTitleToHref } from "@utils/functions";

export type menuItemsTypes = {
  title: string;
  href: string;
  list?: {
    title: string;
    href: string;
  }[];
}[];

const basicServices: string[] = [
  "Instalacje elektryczne",
  "Specjalistyczna budowa tras kablowych",
  "Specjalistyczne wsparcie",
  "System bezpieczeństwa",
  "Inteligentny dom",
  "Systemy nagłaśniające",
  "Punkty ładowania / Doprowadzenie prądu",
];

export const services = basicServices.map((service) => {
  return {
    title: service,
    href: convertTitleToHref(service),
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
