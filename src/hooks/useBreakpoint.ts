"use client";

import { Breakpoint, BreakpointWidth } from "config/enums";
import { useState, useEffect } from "react";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<string | null>(null);

  const breakpoints: {
    [enumMember: string]: BreakpointWidth;
  } = {
    [Breakpoint.Mobile]: BreakpointWidth.Mobile,
    [Breakpoint.Tablet]: BreakpointWidth.Tablet,
    [Breakpoint.DesktopMd]: BreakpointWidth.DesktopMd,
    [Breakpoint.DesktopLg]: BreakpointWidth.DesktopLg,
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const breakpoint = Object.keys(breakpoints).find(
        (key) => width < breakpoints[key]
      ) as Breakpoint;

      setBreakpoint(breakpoint);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
