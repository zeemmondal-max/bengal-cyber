import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LiveChat from "@/components/LiveChat";

import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Bengal Cyber | Architecting Digital Empires & Viral Marketing",
    template: "%s | Bengal Cyber"
  },
  description: "Transforming bold visions into digital reality. Bengal Cyber crafts high-converting website designs and viral social media marketing campaigns that engineer hyper-growth for modern brands.",
  keywords: ["Social Media Marketing", "Website Design", "Digital Marketing", "Creative Agency Dhaka", "Brand Engineering", "Viral Marketing", "Performance Web Development"],
  authors: [{ name: "Bengal Cyber" }],
  creator: "Bengal Cyber",
  publisher: "Bengal Cyber",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Bengal Cyber | Engineering Digital Empires",
    description: "We don't just run ads; we ignite movements. Scale your brand with magnetic Website Design and data-obsessed Social Media Marketing.",
    url: "https://bengalcyber.com",
    siteName: "Bengal Cyber",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bengal Cyber | The Growth Architects",
    description: "Transforming visions into digital reality with conversion-obsessed Website Design and aggressive Digital Marketing.",
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: ["/logo.png"],
    apple: [
      { url: "/logo.png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bengal Cyber",
    "image": "https://bengalcyber.com/logo.png",
    "description": "Top Digital Marketing, Social Media Marketing, and Website Design Agency in Bangladesh.",

    "url": "https://bengalcyber.com",
    "telephone": "+8801901364583",
    "address": [
      {
        "@type": "PostalAddress",
        "name": "Headquarters",
        "streetAddress": "The Business Center",
        "addressLocality": "Gulshan 1",
        "addressRegion": "Dhaka",
        "postalCode": "1212",
        "addressCountry": "BD"
      },
      {
        "@type": "PostalAddress",
        "name": "Secondary Office",
        "streetAddress": "Dream Palace: 2, Road 11-12, AlamNagar Housing, Hemayetpur",
        "addressLocality": "Savar",
        "addressRegion": "Dhaka",
        "addressCountry": "BD"
      }
    ],
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/bengalcyber"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <LiveChat />

      </body>
    </html>
  );
}
