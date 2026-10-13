import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | FS1 to Year 12 Academy Sharjah`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "FS1 to Year 12 tuition Sharjah",
    "academic support Sharjah",
    "tutoring centre Sharjah",
    "Success Star Training Center",
    "IGCSE tuition Sharjah",
    "IELTS course Sharjah",
  ],
  openGraph: {
    title: `${site.name} | FS1 to Year 12 Sharjah`,
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
    <html lang="en-AE" className={`${outfit.variable} ${fraunces.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <OrganizationJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
