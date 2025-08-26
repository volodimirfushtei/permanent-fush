import type { Metadata } from "next";
import PageTransition from "@/components/page-transition";
import "./globals.css";
import NavBar from "@/components/nav-bar";


import React from "react";
import { Montserrat, Playfair_Display, Dancing_Script } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin", "cyrillic"],
    variable: "--font-sans",
    weight: ["400", "500", "600"],
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ["latin", "cyrillic"],
    variable: "--font-serif",
    weight: ["400", "600", "700"],
    display: 'swap',
});

const dancing = Dancing_Script({
    subsets: ["latin"],
    variable: "--font-script",
    weight: ["400", "500", "600", "700"],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Permanent Fush",
    description: "Сайт студії перманентного макіяжу брів",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk" className={`${montserrat.variable} ${playfair.variable} ${dancing.variable}`}>
        <body className="font-sans antialiased">

            {/* Навбар поверх усіх секцій */}
            <NavBar />

            {/* Контент сторінки */}
            <PageTransition>
                <main className=""> {/* Додаємо відступ зверху для фіксованого навбара */}
                    {children}
                </main>
            </PageTransition>

        </body>
        </html>
    );
}