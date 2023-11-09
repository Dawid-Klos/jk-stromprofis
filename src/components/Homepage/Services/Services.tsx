"use client";

import Mobile from "./Mobile";
import Desktop from "./Desktop";

import useBreakpoint from "@hooks/useBreakpoint";
import { Breakpoint } from "@config/enums";

export const Services = () => {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === Breakpoint.Mobile;
  const isDesktop = breakpoint === Breakpoint.Desktop || breakpoint === Breakpoint.Tablet;

  return (
    <>
      {isMobile && <Mobile />}
      {isDesktop && <Desktop />}
    </>
  );
};
