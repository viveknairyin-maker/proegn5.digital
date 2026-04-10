import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/cursor-glow";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Progen5 — Turn your Vision into Reality",
    template: "%s — Progen5",
  },
  description:
    "Progen5 is a startup execution agency based in India. We help non-technical founders turn ideas into fully launched digital products—design, development, branding, and launch under one roof.",
  metadataBase: new URL("https://progen5.digital"),
  openGraph: {
    title: "Progen5 — Turn your Vision into Reality",
    description:
      "We help non-technical founders turn ideas into fully launched digital products.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CursorGlow />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
