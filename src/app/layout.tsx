import React, { ReactNode } from "react";

import { Golos_Text } from "next/font/google";

import "src/style/index.scss";
import Header from "src/components/Header";
import Footer from "../components/Footer";

const golos = Golos_Text({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={golos.className}>
      <head />
      <body>
        <Header />
        {children}
        <Footer />
        <script src="//cdn.jsdelivr.net/npm/eruda"></script>
        <script>eruda.init();</script>
      </body>
    </html>
  );
}
