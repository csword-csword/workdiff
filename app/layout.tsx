import type { Metadata } from "next";
import { Bebas_Neue, Playfair_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const playfairDisplay = Playfair_Display({
  weight: "900",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  title: "Work Different - GTM Advisory Services",
  description: "Go-to-Market Advisory services for investors and portfolio companies. Comprehensive GTM due diligence and embedded operator expertise for early stage B2B technology companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${playfairDisplay.variable} ${ibmPlexMono.variable}`}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
