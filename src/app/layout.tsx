import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Figma to OG Image",
  description:
    "Create dynamic OG images for your Next.js apps without writing JSX.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        {children} <Analytics />
      </body>
    </html>
  );
}
