import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/cursor-glow";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://progen5.com";

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
    default: "Progen5 Startup Execution Agency | Build and Launch Fast",
    template: "%s — Progen5",
  },
  description:
    "Progen5 helps non-technical founders design, build, and launch websites and MVPs with one fast startup team.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "en-IN": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Progen5 Startup Execution Agency | Build and Launch Fast",
    description: "Design, build, and launch websites and MVPs with one startup-focused team.",
    url: siteUrl,
    siteName: "Progen5",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Progen5 Startup Execution Agency | Build and Launch Fast",
    description: "Design, build, and launch websites and MVPs with one startup-focused team.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Progen5",
              url: siteUrl,
              description:
                "Progen5 helps non-technical founders design, build, and launch digital products.",
              email: "hechtix@gmail.com",
              areaServed: "Worldwide",
              sameAs: [
                "https://instagram.com/progen5.digital",
                "https://www.linkedin.com/company/progen5",
                "https://x.com/progen5",
                "https://www.facebook.com/progen5",
                "https://www.youtube.com/@progen5",
              ],
            }),
          }}
        />
        <CursorGlow />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
