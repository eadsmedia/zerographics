import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-cal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zero Graphics | Premier Digital Printing, Flex & Creative Artworks in Mecheda",
  description:
    "Zero Graphics is Purba Medinipur's premier digital printing press and creative design house since 2000. Flex print, Eco-solvent, Xerox DocuColor, Ishanee Brand Envelopes, PVC cards, Pre-ink stamps, and Jumbo Xerox in Mecheda, West Bengal.",
  keywords: [
    "Zero Graphics Mecheda",
    "Flex printing Mecheda",
    "Eco solvent print Purba Medinipur",
    "Digital colour printing West Bengal",
    "Ishanee Brand envelopes",
    "Xerox Docucolour print",
    "Konica 512i flex printer",
    "Pre ink stamp Mecheda",
    "PVC card print",
    "Jumbo xerox Mecheda",
    "Wedding invitation envelopes",
  ],
  authors: [{ name: "Zero Graphics" }],
  openGraph: {
    title: "Zero Graphics | High Quality Digital Printing & Creative Design in Mecheda",
    description:
      "Modern printing solutions with Konica 512i high-speed flex, Epson eco-solvent, Xerox digital press, and Ishanee brand envelopes. Serving Purba & Paschim Medinipur, Howrah and beyond since 2000.",
    url: "https://www.zerographics.co.in",
    siteName: "Zero Graphics",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#07090e] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
