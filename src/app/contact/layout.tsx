import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Hire Top Web Design & Digital Marketing Agency | Bengal Cyber",
  description: "Get in touch with Bengal Cyber in Gulshan-1, Dhaka. Ready to scale your revenue with expert Website Design, viral Social Media Marketing, and precision Media Buying? Book your free consultation today.",
  keywords: [
    "Contact Bengal Cyber",
    "Hire Digital Marketing Agency Dhaka",
    "Hire Web Designer Bangladesh",
    "Social Media Marketing Agency Gulshan",
    "Bengal Cyber Phone Number",
    "Digital Marketing Consultant Dhaka",
    "Web Development Agency Contact",
    "Facebook Ads Specialist Bangladesh",
    "Bengal Cyber Address Gulshan",
    "Bengal Cyber Savar Office",
    "Hemayetpur Digital Marketing Agency"
  ],
  alternates: {
    canonical: "https://bengalcyber.com/contact",
  },
  openGraph: {
    title: "Get in Touch with Bengal Cyber | Top Digital Agency in Dhaka",
    description: "Connect with our growth strategists, web engineers, and media buyers. Schedule a free strategy consultation at our Gulshan-1 office or online.",
    url: "https://bengalcyber.com/contact",
    siteName: "Bengal Cyber",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Bengal Cyber | Let's Scale Your Brand",
    description: "Reach out to Bangladesh's premier web design and digital marketing experts. Phone: 01901364583.",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://bengalcyber.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact Us",
          "item": "https://bengalcyber.com/contact"
        }
      ]
    },
    {
      "@type": "ContactPage",
      "@id": "https://bengalcyber.com/contact/#webpage",
      "url": "https://bengalcyber.com/contact",
      "name": "Contact Us | Bengal Cyber",
      "description": "Get in touch with Bengal Cyber in Gulshan-1, Dhaka. Hire top Web Design, Social Media Marketing, and Media Buying experts.",
      "mainEntity": {
        "@type": "ProfessionalService",
        "name": "Bengal Cyber",
        "image": "https://bengalcyber.com/logo.png",
        "telephone": "+8801901364583",
        "email": "hello@bengalcyber.com",
        "url": "https://bengalcyber.com",
        "priceRange": "$$",
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
          "latitude": "23.7788",
          "longitude": "90.4172"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Saturday",
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday"
            ],
            "opens": "09:00",
            "closes": "20:00"
          }
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+8801901364583",
          "contactType": "customer service",
          "availableLanguage": ["English", "Bengali"],
          "areaServed": "Bangladesh"
        }
      }
    }
  ]
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  );
}
