import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LiveChat from "@/components/LiveChat";
import Script from "next/script";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f172a",
};

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Bengal Cyber | #1 Digital Marketing & Web Design Agency in Bangladesh",
    template: "%s | Bengal Cyber"
  },
  description: "Bengal Cyber — Bangladesh's top Digital Marketing Agency. We help Company Owners, RMG Industry, SME Entrepreneurs, Doctors, Health & Food Businesses, and Influencers grow fast with Website Design, Social Media Marketing & Meta Ads. Dhaka, Bangladesh.",
  keywords: [
    // General Digital Marketing
    "Digital Marketing Agency Bangladesh",
    "Digital Marketing Agency Dhaka",
    "Best Digital Marketing Company Bangladesh",
    "Social Media Marketing Bangladesh",
    "Facebook Marketing Bangladesh",
    "Meta Ads Bangladesh",
    "Google Ads Bangladesh",
    "Website Design Bangladesh",
    "Web Development Company Dhaka",
    "SEO Agency Bangladesh",
    // RMG & Company Owners
    "Digital Marketing for RMG Industry Bangladesh",
    "RMG Factory Website Design Bangladesh",
    "Garments Industry Digital Marketing",
    "B2B Marketing Agency Bangladesh",
    "Corporate Website Design Dhaka",
    "Company Website Bangladesh",
    "Business Marketing Agency Dhaka",
    // SME & Entrepreneurs
    "SME Digital Marketing Bangladesh",
    "Small Business Marketing Dhaka",
    "Startup Marketing Agency Bangladesh",
    "Udyokta Digital Marketing Bangladesh",
    "E-Commerce Website Bangladesh",
    "Online Business Marketing Bangladesh",
    // Doctors & Health Industry
    "Digital Marketing for Doctors Bangladesh",
    "Hospital Marketing Agency Dhaka",
    "Healthcare Digital Marketing Bangladesh",
    "Doctor Website Design Bangladesh",
    "Clinic Marketing Bangladesh",
    "Health Industry Social Media Marketing",
    "Medical Marketing Agency Bangladesh",
    // Food Industry
    "Restaurant Marketing Agency Dhaka",
    "Food Business Digital Marketing Bangladesh",
    "Restaurant Website Design Bangladesh",
    "Food Brand Marketing Dhaka",
    "Cloud Kitchen Marketing Bangladesh",
    // Influencers
    "Influencer Marketing Agency Bangladesh",
    "Content Creator Marketing Dhaka",
    "Social Media Influencer Bangladesh",
    "Brand Deal Agency Bangladesh",
    "Influencer Brand Collaboration Bangladesh",
    // Location
    "Bengal Cyber",
    "Bengal Cyber Dhaka",
    "Digital Agency Gulshan Dhaka",
    "Best Agency Bangladesh 2024",
  ],
  authors: [{ name: "Bengal Cyber", url: "https://bengalcyber.com" }],
  creator: "Bengal Cyber",
  publisher: "Bengal Cyber",
  category: "Digital Marketing, Web Design, Social Media Marketing",
  alternates: {
    canonical: "https://bengalcyber.com",
    languages: {
      "en-BD": "https://bengalcyber.com",
      "bn-BD": "https://bengalcyber.com",
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Bengal Cyber | #1 Digital Marketing & Web Design Agency in Bangladesh",
    description: "Company Owners, RMG, SME, Doctors, Health & Food Businesses — Grow fast with Bengal Cyber! Expert Website Design, Social Media Marketing & Meta Ads. Based in Dhaka, Bangladesh.",
    url: "https://bengalcyber.com",
    siteName: "Bengal Cyber",
    locale: "en_BD",
    type: "website",
    images: [
      {
        url: "https://bengalcyber.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Bengal Cyber - Digital Marketing Agency Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bengal Cyber | #1 Digital Agency in Bangladesh",
    description: "Helping Company Owners, RMG, Doctors, SME & Influencers grow online. Website Design + Social Media Marketing + Meta Ads. Dhaka, Bangladesh.",
    images: ["https://bengalcyber.com/logo.png"],
    creator: "@bengalcyber",
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
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Bengal Cyber",
    "alternateName": "Bengal Cyber Digital Agency",
    "image": "https://bengalcyber.com/logo.png",
    "logo": "https://bengalcyber.com/logo.png",
    "description": "Bangladesh's #1 Digital Marketing & Web Design Agency. We specialize in Social Media Marketing, Meta Ads, Website Design, SEO & Content Marketing for Company Owners, RMG Industry, SME, Doctors, Health & Food Businesses, and Influencers across Bangladesh.",
    "url": "https://bengalcyber.com",
    "telephone": "+8801901364583",
    "email": "info@bengalcyber.com",
    "foundingDate": "2022",
    "numberOfEmployees": "10-50",
    "areaServed": [
      { "@type": "Country", "name": "Bangladesh" },
      { "@type": "City", "name": "Dhaka" },
      { "@type": "City", "name": "Chittagong" },
      { "@type": "City", "name": "Sylhet" }
    ],
    "serviceType": [
      "Digital Marketing",
      "Social Media Marketing",
      "Website Design",
      "Web Development",
      "Meta Ads Management",
      "Facebook Marketing",
      "SEO Services",
      "Content Marketing",
      "Video Editing",
      "Graphics Design",
      "Influencer Marketing",
      "Healthcare Marketing",
      "RMG Industry Marketing",
      "Restaurant Marketing",
      "E-Commerce Marketing"
    ],
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
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.7937",
      "longitude": "90.4066"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "09:00",
        "closes": "22:00"
      }
    ],
    "priceRange": "৳৳",
    "currenciesAccepted": "BDT",
    "paymentAccepted": "bKash, Bank Transfer, Cash",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5"
    },
    "sameAs": [
      "https://www.facebook.com/bengalcyber",
      "https://www.linkedin.com/company/bengalcyber",
      "https://www.instagram.com/bengalcyber",
      "https://github.com/zeemmondal-max/bengal-cyber"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": "Facebook, Instagram, TikTok marketing for businesses in Bangladesh"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design & Development",
            "description": "Professional website design for companies, doctors, restaurants, RMG factories in Bangladesh"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Meta Ads Management",
            "description": "Facebook & Instagram paid advertising for businesses across Bangladesh"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Healthcare Digital Marketing",
            "description": "Digital marketing for doctors, hospitals, clinics and health businesses in Bangladesh"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "RMG Industry Digital Marketing",
            "description": "B2B and B2C digital marketing for garments and RMG sector in Bangladesh"
          }
        }
      ]
    }
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
