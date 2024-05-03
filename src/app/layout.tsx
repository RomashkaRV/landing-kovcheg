import { ReactNode } from "react";

import { Golos_Text } from "next/font/google";

import "src/style/index.scss";
import Header from "src/components/Header";

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
      <title>Create Next App</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <body>
        <Header />
        {children}
        <script src="//cdn.jsdelivr.net/npm/eruda"></script>
        <script>eruda.init();</script>
      </body>
    </html>
  );
}
