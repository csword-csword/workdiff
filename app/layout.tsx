import type { Metadata } from "next";
import { Bebas_Neue, Playfair_Display, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
      <body style={{ paddingBottom: '200px' }}>
        <Navigation />
        {children}
        <Footer />
        <Script
          id="apollo-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function initApollo(){
                var n=Math.random().toString(36).substring(7),
                    o=document.createElement("script");
                o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;
                o.async=true;
                o.defer=true;
                o.onload=function(){window.trackingFunctions.onLoad({appId:"69a5b0868bd88e00152a4eef"})};
                document.head.appendChild(o);
              }
              initApollo();
            `,
          }}
        />
      </body>
    </html>
  );
}
