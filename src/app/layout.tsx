import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@/components/analytics";
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
    default: "Carports, parasols et stores sur mesure au Maroc | Terrastore",
    template: "%s",
  },
  description:
    "Terrastore étudie et installe des carports, parasols et stores sur mesure pour les maisons et les projets professionnels au Maroc.",
  applicationName: "Terrastore",
  authors: [{ name: "Terrastore" }],
  robots: robotsDirective(),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName: "Terrastore",
    title: "Carports, parasols et stores sur mesure au Maroc | Terrastore",
    description:
      "Terrastore étudie et installe des carports, parasols et stores sur mesure pour les maisons et les projets professionnels au Maroc.",
  },
  twitter: { card: "summary_large_image" },
  verification: siteConfig.googleSiteVerification
    ? { google: siteConfig.googleSiteVerification }
    : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${manrope.variable} h-full`}>
      <body className="min-h-full bg-paper text-ink antialiased">
        <SiteHeader />
        <main id="contenu">{children}</main>
        <SiteFooter />
        <Analytics gaId={siteConfig.gaId} />
      </body>
    </html>
  );
}
