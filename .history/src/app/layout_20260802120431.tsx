import type { Metadata } from "next";
import Script from "next/script";
import PageTransition from "@/components/page-transition";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import { StructuredData } from "@/components/structured-data";
import React from "react";
import { Montserrat, Playfair_Display, Dancing_Script } from "next/font/google";
import Clarity from "@microsoft/clarity";
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://permanent-fush.vercel.app/"),
  title: "FUSH - Перманентний макіяж та брови у Києві",
  description:
    "Професійне пудрове напилення брів, видалення перманентного макіяжу, ламінування вій. Якісні послуги у Києві.",
  keywords:
    "перманентний макіяж, пудрове напилення брів, ламінування вій, видалення перманентного макіяжу, Київ",
  authors: [{ name: "FUSH" }],
  openGraph: {
    title: "FUSH - Перманентний макіяж",
    description: "Професійні послуги перманентного макіяжу у Києві",
    type: "website",
    locale: "uk_UA",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${montserrat.variable} ${playfair.variable} ${dancing.variable}`}
    >
      <head>
        <title>Permanent Fush</title>
        <StructuredData />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content={process.env.GOOGLE_VERIFICATION_CODE}
        />
        <meta name="format-detection" content="telephone=no" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XKWKVJCLZW`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XKWKVJCLZW');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xw011swgwh");
  `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {/* Навбар поверх усіх секцій */}
        <NavBar />

        {/* Контент сторінки */}
        <PageTransition>
          <main className="">
            {" "}
            {/* Додаємо відступ зверху для фіксованого навбара */}
            {children}
          </main>
        </PageTransition>
      </body>
    </html>
  );
}
