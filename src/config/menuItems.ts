import { services, servicesTypes } from "@config/services";

import { convertTitleToHref } from "@utils/functions";

export type menuItemsTypes = {
  title: string;
  href: string;
  list?: servicesTypes;
}[];

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
