import type { Metadata, Viewport } from "next";

import { FirebaseAnalytics } from "@/components/FirebaseAnalytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NoWordBreaks } from "@/components/NoWordBreaks";
import { profile, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.description,
    url: SITE_URL,
    siteName: profile.name,
    images: ["/og.svg"],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.description,
    images: ["/og.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <div className="portfolio-shell relative min-h-screen overflow-hidden bg-white text-black">
          <div className="paper-grid pointer-events-none fixed inset-0" />
          <div className="print-grain pointer-events-none fixed inset-0" />
          <div className="ink-scan pointer-events-none fixed -left-1/3 top-0 h-full w-1/3" />
          <div className="relative z-10">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <NoWordBreaks />
          <FirebaseAnalytics />
        </div>
      </body>
    </html>
  );
}
