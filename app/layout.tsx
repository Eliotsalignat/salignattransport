import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salignat Transport | Transport régional, national et urgent",
  description:
    "Salignat Transport assure vos transports dédiés, régionaux, nationaux et urgents en moins de 3,5 tonnes. Réponse sous 24h maximum.",
  keywords: [
    "Salignat Transport",
    "transport urgent",
    "transport régional",
    "transport national",
    "transport Lyon",
    "transport Rhône-Alpes",
    "transport Auvergne",
    "transport moins de 3,5 tonnes",
    "livraison express",
    "transport dédié",
  ],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Salignat Transport",
    description:
      "On transporte votre confiance. Transport régional, national et urgent avec réponse sous 24h maximum.",
    url: "https://salignattransport.fr",
    siteName: "Salignat Transport",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Salignat Transport",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}