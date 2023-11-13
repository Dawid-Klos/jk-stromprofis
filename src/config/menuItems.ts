import { services } from "@config/services";
import type { Service } from "@config/services";

export interface MenuItem {
  id: React.Key;
  title: string;
  href: string;
  list?: Service[];
}

export const menuItems: MenuItem[] = [
  {
    id: 10,
    title: "Homepage",
    href: "/",
  },
  {
    id: 11,
    title: "Dienstleistungen",
    href: "",
    list: services,
  },
  {
    id: 12,
    title: "Über uns",
    href: "/uber-uns",
  },
  {
    id: 13,
    title: "Kontakt",
    href: "/kontakt",
  },
];
