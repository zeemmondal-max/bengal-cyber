import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";
import Services from "@/components/Services";
import ServiceRoadmap from "@/components/ServiceRoadmap";
import ServiceFAQ from "@/components/ServiceFAQ";
import Footer from "@/components/Footer";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {

  title: "Top Digital Marketing & Website Design Services in Bangladesh | Bengal Cyber",
  description: "Scale your revenue with Bengal Cyber's elite digital services: Custom Website Design & Development, Viral Social Media Marketing, Performance Media Buying, High-End Graphics Design, and Video Editing in Bangladesh.",
  keywords: [
    "Digital Marketing Bangladesh",
    "Website Design Bangladesh",
    "Social Media Marketing Dhaka",
    "Web Development Agency Bangladesh",
    "Media Buying Bangladesh",
    "Meta Ads Management Dhaka",
    "Facebook Marketing Bangladesh",
    "Creative Graphics Design Dhaka",
    "Video Editing Services Bangladesh",
    "E-Commerce Website Development Dhaka",
    "SEO Agency Bangladesh",
    "Bengal Cyber Services"
  ],
  alternates: {
    canonical: "https://bengalcyber.com/services",
  },
  openGraph: {
    title: "Elite Digital Marketing & Web Design Services | Bengal Cyber",
    description: "Architect your brand's digital dominance with custom Website Design, ROI-driven Media Buying, and viral Social Media Marketing in Bangladesh.",
    url: "https://bengalcyber.com/services",
    siteName: "Bengal Cyber",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Digital Services in Bangladesh | Bengal Cyber",
    description: "Transform your business with high-converting Web Design, Social Media Marketing, and Performance Media Buying.",
  },
};

export default function ServicesPage() {
  const serviceJsonLd = {
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
            "name": "Services",
            "item": "https://bengalcyber.com/services"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Digital Marketing & Website Design Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Bengal Cyber",
          "url": "https://bengalcyber.com",
          "logo": "https://bengalcyber.com/logo.png"
        },
        "areaServed": [
          {
            "@type": "Country",
            "name": "Bangladesh"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Dhaka"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Bengal Cyber Digital Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Design & Development",
                "description": "Custom Next.js & React website engineering, SEO-optimized architecture, and scalable e-commerce platforms."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Social Media Marketing",
                "description": "Data-driven social media growth, viral content strategy, and community engagement across Facebook, Instagram, and TikTok."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Media Buying & Paid Advertising",
                "description": "High-ROAS Meta and Google ads management with precision audience targeting and conversion tracking."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Graphics Design & Brand Identity",
                "description": "Corporate visual identities, marketing collateral, UI/UX graphics, and social creatives."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professional Video Editing",
                "description": "High-retention reels, corporate videos, cinematic color grading, and motion graphics."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Customer Support & Lead Management",
                "description": "24/7 live chat, ticket management, and omnichannel client retention solutions."
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 relative">
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />
      
      {/* High-Converting Lucrative Services Hero Header */}
      <ServicesHero />

      <Services />
      
      <ServiceRoadmap />

      <ServiceFAQ />

      {/* Call to action at the bottom of services */}
      <section className="py-24 bg-gradient-to-br from-brand-primary via-orange-500 to-brand-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
            Partner With The Growth Leaders
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Ready to Dominate Your Industry in Bangladesh?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-2xl mx-auto leading-relaxed">
            Let's build a high-converting website and viral marketing machine that accelerates your revenue and brand authority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-brand-dark text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-2xl shadow-black/30">
              Claim Your Free Strategy Audit
            </Link>
            <Link href="/portfolio" className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full text-lg font-bold backdrop-blur-md transition-colors">
              Explore Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
