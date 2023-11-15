import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";

import "./globals.scss";
import { Providers } from "./providers";

import Header from "@components/Header";
import Footer from "@components/Footer";
import ErrorBoundary from "@components/ErrorBoundary";

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
  title: "JK-Stromprofis",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${montserrat.variable} ${poppins.variable}`}>
        <Header />
        <ErrorBoundary>
          <main className="light">
            <Providers>{children}</Providers>
          </main>
        </ErrorBoundary>
        <Footer />
      </body>
    </html>
  );
}
