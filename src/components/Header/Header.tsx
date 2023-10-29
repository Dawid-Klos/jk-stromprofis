"use client";

import Mobile from "./Mobile";

export const Header = () => {
    const menuItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Services",
            href: "/services",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Contact us",
            href: "/contact",
        },
    ];

    return (
        <>
            <Mobile menuItems={menuItems} />
        </>
    )
}