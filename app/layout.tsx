import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { afolkalips, hahmlet, productsFont, guthenBloots } from "./fonts";
import ClientLayout from "./ClientLayout";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mothers of Chibok",
  description: " Hope, resilience, and healing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${afolkalips.variable} ${hahmlet.variable} ${productsFont.variable} ${guthenBloots.variable}`}
        suppressHydrationWarning
      >
        <ClientLayout>{children}</ClientLayout>
        <SpeedInsights/>
      </body>
    </html>
  );
}
