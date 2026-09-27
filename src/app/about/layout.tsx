import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Leading Digital Marketing & Web Design Agency | Bengal Cyber",
  description: "Meet the visionaries behind Bengal Cyber. Bangladesh's premier digital growth agency specializing in high-performance Website Design, viral Social Media Marketing, and ROI-driven Media Buying.",
  keywords: [
    "About Bengal Cyber",
    "Digital Marketing Agency Bangladesh",
    "Web Design Company Dhaka",
    "Creative Agency Bangladesh",
    "Zeem Mondal Founder",
    "Social Media Marketing Experts Dhaka",
    "Best Marketing Agency Bangladesh",
    "Bengal Cyber Leadership Team",
    "Performance Marketing Agency Dhaka",
    "Web Development Bangladesh"
  ],
  alternates: {
    canonical: "https://bengalcyber.com/about",
  },
  openGraph: {
    title: "About Bengal Cyber | The Growth Architects",
    description: "Meet the team architecting digital empires in Bangladesh. Specialized in high-converting Website Design, viral Social Media Marketing, and precision Media Buying.",
    url: "https://bengalcyber.com/about",
    siteName: "Bengal Cyber",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Bengal Cyber | Digital Marketing & Web Design Leaders",
    description: "Discover the collective of creatives, engineers, and marketers building market-leading brands across Bangladesh and beyond.",
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
          }
        ],
        "sponsor": {
          "@type": "Person",
          "name": "Md Kamruzzaman Didar",
          "jobTitle": "Business Consultant & Development Advisor",
          "image": "https://bengalcyber.com/kamruzzaman-didar.jpg"
        },
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
