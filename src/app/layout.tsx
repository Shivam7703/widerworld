import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { footer } from "@/data/homeData";
import { patta } from "@/assets";
import Image from "next/image";

/**
 * Cormorant Garamond — editorial serif for headings
 * Refined, trustworthy, used by law firms & luxury brands
 */

export const metadata: Metadata = {
  title: "Wider World",
  description: "Premium Immigration & Visa Consultancy Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` font-sans relative`}
        style={{
          fontFamily: "var(--font-sans), sans-serif",
        }}
      >
        {/* <Image
          src={patta}
          alt="immigration"
          className="fixed -left-7 animate-y opacity-40 -bottom-10 sm:w-[24vw] w-44 z-[-1]"
        /> */}
        <Header />
        {children}
        <Footer footer={footer} />
      </body>
    </html>
  );
}
