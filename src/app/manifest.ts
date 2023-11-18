import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JK-Stromprofis - Elektrische Dienstleistungen - Hamburg",
    short_name: "JK-Stromprofis",
    description:
      "Wir bieten professionelle und zuverlässige Elektrodienstleistungen in Hamburg und Umgebung. Mit fast 10 Jahren Erfahrung, die wir in unser Unternehmen einbringen, haben wir einen zuverlässigen Vorsprung in allen Aspekten des professionellen Elektrobedarfs.",
    start_url: "/",
    display: "standalone",
    background_color: "#191919",
    theme_color: "#191919",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
