import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import PageTransitionProvider from "@/components/providers/PageTransitionProvider";
import DesktopEffects from "@/components/shared/DesktopEffects";
import GrainOverlay from "@/components/shared/GrainOverlay";
import { generatePersonJsonLd, generateBondSmartJsonLd } from "@/lib/seo";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  preload: true,
  display: "swap",
});
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  preload: true,
  display: "swap",
});

export const metadata: Metadata = {
  title: "Girish Lakhotya — The Bondsman of India | Bond Smart",
  description: "Official platform of Girish Lakhotya ('The Bondsman of India'). Discover insights on bail bonds reform, legal rights, and Bond Smart — the future of bail bonds in India.",
  metadataBase: new URL("https://girishlakhotiya.com"),
  alternates: {
    canonical: "https://girishlakhotiya.com",
  },
  openGraph: {
    title: "Girish Lakhotya — The Bondsman of India | Bond Smart",
    description: "Official platform of Girish Lakhotya ('The Bondsman of India'). Discover insights on bail bonds reform, legal rights, and Bond Smart.",
    url: "https://girishlakhotiya.com",
    siteName: "Girish Lakhotya — The Bondsman of India",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Girish Lakhotya — The Bondsman of India | Bond Smart",
    description: "Official platform of Girish Lakhotya ('The Bondsman of India').",
    creator: "@girishlakhotya",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = generatePersonJsonLd();
  const organizationJsonLd = generateBondSmartJsonLd();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} antialiased bg-cream text-ink min-h-screen flex flex-col`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SmoothScrollProvider>
          <PageTransitionProvider>
            <DesktopEffects />
            <GrainOverlay />
            <Navbar />
            <main id="main-content" className="flex-grow">
              {children}
            </main>
            <Footer />
          </PageTransitionProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
