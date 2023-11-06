import { services } from "@config/services";
import type { Service } from "@config/services";

import { convertTitleToHref } from "@utils/functions";

export interface MenuItem {
  title: string;
  href: string;
  list?: Service[];
}

const basicMenuItems: MenuItem[] = [
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
