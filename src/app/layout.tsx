import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script';

import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { footer } from "@/data/homeData";
import Popups from "@/components/global/pop";

/**
 * Cormorant Garamond — editorial serif for headings
 * Refined, trustworthy, used by law firms & luxury brands
 */

export const metadata: Metadata = {
  title: "Wider World",
  description: "Immigration & Visa Consultancy Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <head>
       <Script async  src="https://www.googletagmanager.com/gtm.js?id=GTM-PQTK9HT" strategy="beforeInteractive"></Script>
        <Script strategy="beforeInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
          `}
        </Script></head>

      <body className={` relative`}>
        <Header />
            {children}
        <Footer footer={footer} />
        <Popups/>
      </body>
    </html>
  );
}
