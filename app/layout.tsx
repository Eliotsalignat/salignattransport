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
  metadataBase: new URL("https://salignattransport.fr"),

  title: "Salignat Transport | Transport régional, national et urgent",
  description:
    "Salignat Transport assure vos transports de marchandises en véhicule léger moins de 3,5 tonnes. Transport régional, national et urgent avec interlocuteur unique au départ de Villefranche-sur-Saône.",

  keywords: [
    "Salignat Transport",
    "transport urgent",
    "transport régional",
    "transport national",
    "transport Villefranche-sur-Saône",
    "transport Lyon",
    "transport Rhône-Alpes",
    "transport Auvergne",
    "transport moins de 3,5 tonnes",
    "transport dédié",
    "livraison express",
  ],

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Salignat Transport",
    description:
      "On transporte votre confiance. Transport régional, national et urgent. Réponse sous 24h maximum.",
    url: "https://salignattransport.fr",
    siteName: "Salignat Transport",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Logo Salignat Transport",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Salignat Transport",
    description:
      "Transport régional, national et urgent. Réponse sous 24h maximum.",
    images: ["/favicon.png"],
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