import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { robotsDirective } from "@/lib/indexing";
import { getSiteUrl, siteConfig } from "@/lib/site-config";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Carports, parasols, stores et voiles au Maroc | Terrastore",
    template: "%s",
  },
  description:
    "Terrastore, siège à Agadir : carports aluminium, parasols, stores, pergolas et voiles d'ombrage sur mesure, partout au Maroc.",
  applicationName: "Terrastore",
  authors: [{ name: "Terrastore" }],
  robots: robotsDirective(),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName: "Terrastore",
    title: "Carports, parasols, stores et voiles au Maroc | Terrastore",
    description:
      "Terrastore, siège à Agadir : carports aluminium, parasols, stores, pergolas et voiles d'ombrage sur mesure, partout au Maroc.",
    images: [
      {
        url: "/images/terrastore-carport-autoportant.jpg",
        width: 1024,
        height: 682,
        alt: "Carport aluminium autoportant à couverture translucide, deux véhicules dans une cour de villa.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/terrastore-carport-autoportant.jpg"],
  },
  verification: siteConfig.googleSiteVerification
    ? { google: siteConfig.googleSiteVerification }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#f3f0ea",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${manrope.variable} h-full`}>
      <body className="min-h-full bg-paper text-ink antialiased">
        <SiteHeader />
        <main id="contenu">{children}</main>
        <SiteFooter />
        <MobileCta />
        <Analytics gaId={siteConfig.gaId} />
      </body>
    </html>
  );
}
