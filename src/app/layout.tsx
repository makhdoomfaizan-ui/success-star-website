import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Tutoring & Training in Sharjah`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "tutoring centre Sharjah",
    "Success Star Training Center",
    "IGCSE tuition Sharjah",
    "Excel course Sharjah",
    "mental math Sharjah",
    "computer training Sharjah",
    "graphic design course Sharjah",
  ],
  openGraph: {
    title: `${site.name} | Sharjah`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AE" className={`${sora.variable} ${fraunces.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <OrganizationJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
