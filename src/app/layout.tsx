"use client";

import React, { ReactNode } from "react";
import { SnackbarProvider } from "notistack";

import { Golos_Text } from "next/font/google";

import Header from "src/components/Header";
import Footer from "src/components/Footer";
import Feedback from "src/components/Feedback";

import "src/style/index.scss";


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
        <SnackbarProvider>
          <Header />
          <div className="wrapper">
            {children}
          </div>
          <Feedback />
          <Footer />
          <script src="//cdn.jsdelivr.net/npm/eruda"></script>
          <script>eruda.init();</script>
        </SnackbarProvider>
      </body>
    </html>
  );
}
