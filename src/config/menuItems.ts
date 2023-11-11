import { services } from "@config/services";
import type { Service } from "@config/services";

import { convertTitleToHref } from "@utils/functions";

export interface MenuItem {
  id: React.Key;
  title: string;
  href: string;
  list?: Service[];
}

export const menuItems: MenuItem[] = [
  {
    id: 10,
    title: "Home",
    href: "/",
  },
  {
    id: 11,
    title: "Services",
    href: "",
    list: services,
  },
  {
    id: 12,
    title: "About",
    href: "/about",
  },
  {
    id: 13,
    title: "Contact",
    href: "/kontakt",
  },
];
