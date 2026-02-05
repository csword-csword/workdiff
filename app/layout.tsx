import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GTM Advisory",
  description: "Go-to-Market Advisory Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
