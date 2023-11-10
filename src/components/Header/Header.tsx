"use client";

import Mobile from "./Mobile";
import Desktop from "./Desktop";

import useBreakpoint from "@hooks/useBreakpoint";
import { Breakpoint } from "@config/enums";
import { menuItems } from "@config/menuItems";

export const Header = () => {
  return (
    <>
      <Mobile menuItems={menuItems} />
      <Desktop menuItems={menuItems} />
    </>
  );
};
