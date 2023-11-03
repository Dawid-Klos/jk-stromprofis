"use client";

import Mobile from "./Mobile";
import Desktop from "./Desktop";

import useBreakpoint from "@hooks/useBreakpoint";
import { Breakpoint } from "@config/enums";
import { menuItems } from "@config/menuItems";


export const Header = () => {
    const breakpoint = useBreakpoint();
    const isMobile = breakpoint === Breakpoint.Mobile;
    const isDesktop = breakpoint === Breakpoint.Desktop || breakpoint === Breakpoint.Tablet;


    return (
        <>
            {isMobile && <Mobile menuItems={menuItems} />}
            {isDesktop && <Desktop menuItems={menuItems} />}
        </>
    )
}