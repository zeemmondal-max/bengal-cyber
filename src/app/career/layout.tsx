import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Open Job Circulars in Dhaka | Bengal Cyber",
  description: "Bengal Cyber is actively hiring! Open circulars: Marketing & Sales Executive (Field Level, BDT 18,000 - 20,000 + Commission), Sales Associate (Part-Time, BDT 5,000 + TA + Commission), and Customer Service Officer (BDT 12,000 - 15,000). Apply today.",
  keywords: [
    "Sales Associate Part Time Dhaka",
    "Part Time Student Jobs Dhaka",
    "Marketing and Sales Job Dhaka",
    "Field Sales Executive Vacancy Bangladesh",
    "Customer Service Officer Job Dhaka",
    "Bengal Cyber Career",
    "Sales Executive Job Gulshan Dhaka",
    "Commission Sales Job Dhaka",
    "Digital Agency Sales Job Dhaka",
    "Customer Support Job Circular Bangladesh",
    "Bengal Cyber Circular 2026"
  ],
  alternates: {
    canonical: "https://bengalcyber.com/career",
  },
  openGraph: {
    title: "Job Circulars at Bengal Cyber | Hiring in Gulshan-1 & Savar",
    description: "Explore open job circulars: Marketing & Sales Executive, Sales Associate (Part-Time, 5,000 BDT + TA + Commission), and Customer Service Officer.",
    url: "https://bengalcyber.com/career",
    siteName: "Bengal Cyber",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Opportunities at Bengal Cyber | Dhaka",
    description: "Open circulars for Field Marketing & Sales, Part-Time Sales Associate (5,000 BDT + TA + Commission), and Customer Service.",
  },
};

const careerJsonLd = {
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
          "name": "Career",
          "item": "https://bengalcyber.com/career"
        }
      ]
    },
    {
      "@type": "JobPosting",
      "title": "Sales Associate (Part-Time)",
      "description": "Bengal Cyber is seeking energetic students and part-time professionals for the Sales Associate position. Generate leads, connect with businesses, and assist in closing digital marketing and website sales. Fixed salary BDT 5,000/month + Travel Allowance (TA) + attractive sales commission on closed deals.",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Bengal Cyber",
        "value": "BC-SA-2026-03"
      },
      "datePosted": "2026-09-27",
      "validThrough": "2026-12-31",
      "employmentType": "PART_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Bengal Cyber",
        "sameAs": "https://bengalcyber.com",
        "logo": "https://bengalcyber.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "The Business Center",
          "addressLocality": "Gulshan 1",
          "addressRegion": "Dhaka",
          "postalCode": "1212",
          "addressCountry": "BD"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "BDT",
        "value": {
          "@type": "QuantitativeValue",
          "value": 5000,
          "unitText": "MONTH"
        }
      }
    },
    {
      "@type": "JobPosting",
      "title": "Marketing & Sales Executive (Field Level)",
      "description": "Bengal Cyber is looking for an energetic Field Marketing & Sales Executive in Dhaka. Responsibilities include attending field client meetings, presenting digital marketing and web services, and converting corporate and business leads into successful closed sales. Salary BDT 18,000 - 20,000 based on experience + attractive commission on successful sales.",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Bengal Cyber",
        "value": "BC-MSE-2026-02"
      },
      "datePosted": "2026-09-27",
      "validThrough": "2026-12-31",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Bengal Cyber",
        "sameAs": "https://bengalcyber.com",
        "logo": "https://bengalcyber.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "The Business Center",
          "addressLocality": "Gulshan 1",
          "addressRegion": "Dhaka",
          "postalCode": "1212",
          "addressCountry": "BD"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "BDT",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 18000,
          "maxValue": 20000,
          "unitText": "MONTH"
        }
      }
    },
    {
      "@type": "JobPosting",
      "title": "Customer Service Officer",
      "description": "Bengal Cyber is looking for a polite, proactive, and energetic Customer Service Officer to handle incoming client inquiries via phone calls, WhatsApp Business, and Facebook Page Messenger at our Gulshan-1 office.",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Bengal Cyber",
        "value": "BC-CSO-2026-01"
      },
      "datePosted": "2026-09-27",
      "validThrough": "2026-12-31",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Bengal Cyber",
        "sameAs": "https://bengalcyber.com",
        "logo": "https://bengalcyber.com/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "The Business Center",
          "addressLocality": "Gulshan 1",
          "addressRegion": "Dhaka",
          "postalCode": "1212",
          "addressCountry": "BD"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "BDT",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 12000,
          "maxValue": 15000,
          "unitText": "MONTH"
        }
      }
    }
  ]
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        id="career-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careerJsonLd) }}
      />
      {children}
    </>
  );
}
