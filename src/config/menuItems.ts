import { services } from "@config/services";
import type { Service } from "@config/services";

import { convertTitleToHref } from "@utils/functions";

export interface MenuItem {
  id: React.Key;
  title: string;
  href: string;
  list?: Service[];
}

const basicMenuItems: MenuItem[] = [
  {
    id: 10,
    title: "Home",
    href: "",
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
    href: "",
  },
  {
    id: 13,
    title: "Contact",
    href: "",
  },
];

export const menuItems = basicMenuItems.map((item) => {
  if (item.title === "Home")
    return {
      id: item.id,
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
