import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Bengal Cyber | Best Digital Marketing Agency Team in Bangladesh | Dhaka",
  description: "Meet the team behind Bengal Cyber — Bangladesh's #1 Digital Marketing & Web Design Agency. Serving Company Owners, RMG Industry, SME Entrepreneurs, Doctors, Food Businesses & Influencers across Dhaka and all of Bangladesh.",
  keywords: [
    "About Bengal Cyber",
    "Best Digital Marketing Agency Bangladesh",
    "Digital Marketing Team Dhaka",
    "Web Design Agency Bangladesh",
    "Zeem Mondal Digital Marketing Expert",
    "Bengal Cyber Leadership Team",
    "Digital Agency Gulshan Dhaka",
    "Top Marketing Agency Bangladesh",
    "Social Media Marketing Experts Bangladesh",
    "Performance Marketing Agency Dhaka",
    "Babul Hossen IT Head Bangladesh",
    "Enam Hossain Tax Audit Bangladesh",
    "Web Development Company Bangladesh",
    "Creative Agency Bangladesh 2024",
    "RMG Industry Marketing Expert Bangladesh",
    "Doctor Digital Marketing Bangladesh",
    "Healthcare Marketing Agency Dhaka",
    "SME Marketing Expert Bangladesh",
    "Food Business Marketing Agency Bangladesh",
    "Influencer Marketing Agency Bangladesh",
  ],
  alternates: {
    canonical: "https://bengalcyber.com/about",
  },
  openGraph: {
    title: "About Bengal Cyber | Digital Marketing & Web Design Experts in Bangladesh",
    description: "Meet the team helping Company Owners, RMG, Doctors, SME & Food Businesses grow across Bangladesh. Expert Digital Marketing, Social Media & Web Design from Dhaka.",
    url: "https://bengalcyber.com/about",
    siteName: "Bengal Cyber",
    locale: "en_BD",
    type: "website",
    images: [{ url: "https://bengalcyber.com/logo.png", width: 1200, height: 630, alt: "Bengal Cyber Team Bangladesh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Bengal Cyber | Bangladesh's Top Digital Marketing Agency",
    description: "Discover Bengal Cyber's expert team serving RMG, Doctors, SME, Food & Influencer industries across Bangladesh.",
    images: ["https://bengalcyber.com/logo.png"],
  },
};

const aboutJsonLd = {
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
          "name": "About Us",
          "item": "https://bengalcyber.com/about"
        }
      ]
    },
    {
      "@type": "AboutPage",
      "@id": "https://bengalcyber.com/about/#webpage",
      "url": "https://bengalcyber.com/about",
      "name": "About Us | Leading Digital Marketing & Web Design Agency | Bengal Cyber",
      "description": "Meet the visionaries behind Bengal Cyber. Bangladesh's premier digital growth agency specializing in high-performance Website Design, viral Social Media Marketing, and ROI-driven Media Buying.",
      "about": {
        "@type": "Organization",
        "name": "Bengal Cyber",
        "url": "https://bengalcyber.com",
        "logo": "https://bengalcyber.com/logo.png",
        "founder": {
          "@type": "Person",
          "name": "Zeem Mondal",
          "jobTitle": "Founder, Business Consultant & Digital Marketing Expert",
          "image": "https://bengalcyber.com/founder.jpg"
        },
        "member": [
          {
            "@type": "Person",
            "name": "Babul Hossen",
            "jobTitle": "IT Head",
            "image": "https://bengalcyber.com/babul-hossen.jpg"
          },
          {
            "@type": "Person",
            "name": "Zereen Mondal",
            "jobTitle": "HR Head",
            "image": "https://bengalcyber.com/zereen-mondal.jpg"
          },
          {
            "@type": "Person",
            "name": "Ismahile Hossain",
            "jobTitle": "Operation Head",
            "image": "https://bengalcyber.com/ismahile-hossain.jpg"
          },
          {
            "@type": "Person",
            "name": "Enam Hossain Masud Alom",
            "jobTitle": "Tax and Audit",
            "image": "https://bengalcyber.com/enam-hossain.jpg"
          }
        ],
        "knowsAbout": [

          "Website Design",
          "Web Development",
          "Social Media Marketing",
          "Performance Media Buying",
          "Meta Ads",
          "Google Ads",
          "Graphics Design",
          "Video Editing",
          "Search Engine Optimization"
        ],
        "areaServed": {
          "@type": "Country",
          "name": "Bangladesh"
        }
      }
    }
  ]
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      {children}
    </>
  );
}
