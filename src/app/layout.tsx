import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";

import "./globals.scss";
import { Providers } from "./providers";

import Header from "@components/Header";
import Footer from "@components/Footer";

const montserrat = Montserrat({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "JK-Stromprofis - Elektrische Dienstleistungen - Hamburg",
  description: "Wir bieten professionelle und zuverlässige Elektrodienstleistungen in Hamburg und Umgebung. Mit fast 10 Jahren Erfahrung, die wir in unser Unternehmen einbringen, haben wir einen zuverlässigen Vorsprung in allen Aspekten des professionellen Elektrobedarfs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${montserrat.variable} ${poppins.variable}`}>
        <Header />
        <main className="light">
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
