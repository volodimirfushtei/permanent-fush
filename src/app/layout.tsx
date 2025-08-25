import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/nav-bar";
import ErrorBoundary from '@/components/error-boundary';
import React from "react";
import { Montserrat, Playfair_Display, Dancing_Script } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin", "cyrillic"],
    variable: "--font-sans",
    weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
    subsets: ["latin", "cyrillic"],
    variable: "--font-serif",
    weight: ["400", "600", "700"],
});

const dancing = Dancing_Script({
    subsets: ["latin"],  // Removed cyrillic as it's not supported
    variable: "--font-script",
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Permanent Brows",
    description: "Сайт студії перманентного макіяжу брів",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${montserrat.variable} ${playfair.variable} ${dancing.variable}`}
      >
      <ErrorBoundary>
      {/* Навбар поверх усіх секцій */}
      <NavBar />

      {/* Контент сторінки */}
      <main>{children}</main>

      </ErrorBoundary>
      </body>
    </html>
  );
}
