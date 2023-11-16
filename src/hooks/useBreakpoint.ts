"use client";

import { Breakpoint, BreakpointWidth } from "config/enums";
import { useState, useEffect, useMemo } from "react";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<string | null>(null);

  const breakpoints = useMemo(
    () => ({
      [Breakpoint.Mobile]: BreakpointWidth.Mobile,
      [Breakpoint.Tablet]: BreakpointWidth.Tablet,
      [Breakpoint.Desktop]: BreakpointWidth.Desktop,
    }),
    []
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      switch (true) {
        case width < breakpoints[Breakpoint.Mobile]:
          return setBreakpoint(Breakpoint.Mobile);

        case width < breakpoints[Breakpoint.Tablet]:
          return setBreakpoint(Breakpoint.Tablet);

        case width >= breakpoints[Breakpoint.Desktop]:
          return setBreakpoint(Breakpoint.Desktop);

        default:
          return setBreakpoint(Breakpoint.Desktop);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints]);

  return breakpoint;
};

export default useBreakpoint;
