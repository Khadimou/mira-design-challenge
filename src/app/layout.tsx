import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mira-design-challenge.vercel.app"),
  title: "MIRA Design Challenge | Imagine ta tenue de rêve et gagne-la",
  description:
    "Participe au MIRA Design Challenge ! Crée ta tenue traditionnelle avec notre IA et gagne-la cousue sur mesure. Concours ouvert à tous, Sénégal et diaspora.",
  keywords: [
    "MIRA Studio",
    "design challenge",
    "mode africaine",
    "tenue traditionnelle",
    "IA mode",
    "concours",
    "Ramadan",
    "boubou",
    "kaftan",
    "wax",
    "Sénégal",
    "diaspora",
  ],
  authors: [{ name: "MIRA Studio" }],
  openGraph: {
    title: "MIRA Design Challenge | Imagine ta tenue de rêve et gagne-la",
    description:
      "Crée ta tenue traditionnelle avec notre IA et gagne-la cousue sur mesure. Concours du 9 février au 10 mars 2026.",
    type: "website",
    locale: "fr_FR",
    siteName: "MIRA Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MIRA Design Challenge - Imagine ta tenue de rêve",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MIRA Design Challenge | Imagine ta tenue de rêve",
    description:
      "Crée ta tenue traditionnelle avec notre IA et gagne-la cousue sur mesure.",
    images: ["/og-image.jpg"],
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
    <html lang="fr">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-cream text-earth`}
      >
        {children}
      </body>
    </html>
  );
}
