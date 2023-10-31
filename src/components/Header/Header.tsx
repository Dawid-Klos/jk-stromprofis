"use client";

import Mobile from "./Mobile";

export type menuItems = {
    title: string;
    href: string;
    list?: {
        title: string;
        href: string;
    }[];
}[];

export const Header = () => {
    const menuItems: menuItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Services",
            href: "/services",
            list: [
                {
                    title: "Instalacje elektryczne",
                    href: "/services/instalacje-elektryczne",
                },
                {
                    title: "Specjalistyczna budowa tras kablowych",
                    href: "/services/specjalistyczna-budowa-tras-kablowych",
                },
                {
                    title: "Specjalistyczne wsparcie",
                    href: "/services/specjalistyczne-wsparcie",
                },
                {
                    title: "System bezpieczeństwa",
                    href: "/services/system-bezpieczenstwa",
                },
                {
                    title: "Inteligentny dom",
                    href: "/services/inteligentny-dom",
                },
                {
                    title: "Systemy nagłaśniające",
                    href: "/services/systemy-naglasniajace",
                },
                {
                    title: "Punkty ładowania / Doprowadzenie prądu",
                    href: "/services/punkty-ladowania-doprowadzenie-pradu",
                }
            ],
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Contact",
            href: "/contact",
        },
    ];

    return (
        <>
            <Mobile menuItems={menuItems} />
        </>
    )
}