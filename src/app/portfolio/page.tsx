import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "আমাদের কাজ | Digital Marketing & Web Design Portfolio Bangladesh | Bengal Cyber Dhaka",
  description: "Bengal Cyber-এর সফল client projects দেখুন। বাংলাদেশে সেরা Digital Marketing, Website Design, Social Media Marketing, Meta Ads, Video Production এবং Healthcare Marketing। Dhaka-based #1 Digital Agency — আপনার business কে আমরা online-এ নিয়ে যাই।",
  keywords: [
    // Portfolio & Case Studies
    "Digital Marketing Portfolio Bangladesh",
    "Website Design Portfolio Dhaka",
    "Social Media Marketing Case Study Bangladesh",
    "Meta Ads Success Bangladesh",
    "Facebook Ads Portfolio Bangladesh",
    "Best Digital Marketing Results Bangladesh",
    "Bengal Cyber Portfolio",
    "Bengal Cyber Case Study",
    "Digital Agency Work Bangladesh",
    "Marketing Agency Portfolio Dhaka",

    // Service-specific Bangladesh
    "Website Design Company Bangladesh",
    "Web Development Portfolio Dhaka",
    "Custom Website Bangladesh",
    "Corporate Website Design Dhaka",
    "E-Commerce Website Bangladesh",
    "Business Website Design Bangladesh",

    // Social Media
    "Facebook Marketing Agency Bangladesh",
    "Instagram Marketing Dhaka",
    "Social Media Management Bangladesh",
    "Facebook Page Management Dhaka",
    "Meta Ads Agency Bangladesh",
    "Facebook Ads Expert Bangladesh",

    // Healthcare
    "Healthcare Digital Marketing Bangladesh",
    "Doctor Digital Marketing Dhaka",
    "Hospital Marketing Agency Bangladesh",
    "Doctor Website Design Bangladesh",
    "Medical Social Media Marketing",
    "Cancer Doctor Marketing Bangladesh",

    // Industry specific
    "RMG Industry Marketing Bangladesh",
    "Garments Company Website Bangladesh",
    "Food Business Marketing Dhaka",
    "Restaurant Digital Marketing Bangladesh",
    "Furniture Brand Marketing Bangladesh",
    "Automotive Facebook Ads Bangladesh",
    "SME Marketing Bangladesh",

    // Video
    "Video Marketing Bangladesh",
    "Video Production Agency Dhaka",
    "Professional Video Editing Bangladesh",
    "Product Video Bangladesh",

    // Location targeting
    "Digital Marketing Agency Dhaka",
    "Digital Agency Gulshan Dhaka",
    "Best Digital Agency Bangladesh 2024",
    "Top Marketing Company Dhaka",
    "Digital Marketing Agency Chittagong",
    "Digital Marketing Bangladesh",
    "Online Marketing Bangladesh",

    // Intent-based
    "Social Media Agency Bangladesh er kaaj",
    "Website banano Bangladesh",
    "Facebook Marketing Bangladesh",
    "Digital Marketing kotha theke nibo Bangladesh",
    "Best marketing agency near me Dhaka",
  ],
  alternates: {
    canonical: "https://bengalcyber.com/portfolio",
    languages: {
      "en-BD": "https://bengalcyber.com/portfolio",
      "bn-BD": "https://bengalcyber.com/portfolio",
    },
  },
  openGraph: {
    title: "Bengal Cyber Portfolio | Real Results for Bangladeshi Businesses — Dhaka's #1 Digital Agency",
    description: "দেখুন কিভাবে Bengal Cyber বাংলাদেশের ব্যবসাগুলোকে Digital Marketing, Website Design, Meta Ads, Video Production দিয়ে এগিয়ে নিয়েছে। Healthcare, RMG, Food, Furniture, Automotive — সব industry তে আমাদের proven results আছে।",
    url: "https://bengalcyber.com/portfolio",
    siteName: "Bengal Cyber",
    locale: "en_BD",
    type: "website",
    images: [
      {
        url: "https://bengalcyber.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Bengal Cyber Portfolio — Digital Marketing & Web Design Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bengal Cyber Portfolio | Digital Marketing Results in Bangladesh",
    description: "Real client success stories: Website Design, Facebook Ads, Healthcare Marketing, Video Production — Bangladesh's leading digital agency. Dhaka.",
    images: ["https://bengalcyber.com/logo.png"],
    creator: "@bengalcyber",
  },
};

export default function ProjectsPage() {
  const portfolioJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bengalcyber.com" },
          { "@type": "ListItem", "position": 2, "name": "Portfolio & Case Studies", "item": "https://bengalcyber.com/portfolio" }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": "https://bengalcyber.com/portfolio/#webpage",
        "url": "https://bengalcyber.com/portfolio",
        "name": "Digital Marketing & Web Design Portfolio Bangladesh | Bengal Cyber Dhaka",
        "description": "Bengal Cyber-এর proven client success stories। Bangladesh-এ সেরা Digital Marketing, Website Design, Social Media Marketing, Healthcare Marketing, Video Production। Dhaka based #1 Digital Agency।",
        "inLanguage": ["en", "bn"],
        "about": {
          "@type": "Organization",
          "name": "Bengal Cyber",
          "url": "https://bengalcyber.com",
          "areaServed": "Bangladesh",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gulshan 1",
            "addressRegion": "Dhaka",
            "addressCountry": "BD"
          }
        },
        "mainEntity": {
          "@type": "ItemList",
          "name": "Bengal Cyber Client Portfolio Bangladesh",
          "numberOfItems": 6,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "CreativeWork",
                "name": "Karizma Care — Bangladesh's First Seaweed Mermaid Soap",
                "headline": "Product Launch & Viral Video Marketing Campaign Bangladesh",
                "description": "Professional product launch video campaign and social media marketing for Karizma Care skincare brand in Bangladesh.",
                "creator": { "@type": "Organization", "name": "Bengal Cyber", "url": "https://bengalcyber.com" },
                "genre": "Video Marketing & Product Launch",
                "keywords": "Video Marketing Bangladesh, Product Launch Marketing, Skincare Brand Marketing Bangladesh"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "CreativeWork",
                "name": "Athena's Furniture BD — Social Media & Meta Ads",
                "headline": "Facebook & Instagram Ads Management for Furniture Brand Bangladesh",
                "description": "Comprehensive social media management, Meta Ads, and audience retargeting for premium furniture brand in Bangladesh.",
                "creator": { "@type": "Organization", "name": "Bengal Cyber", "url": "https://bengalcyber.com" },
                "genre": "Media Buying & Furniture Brand Growth",
                "keywords": "Furniture Marketing Bangladesh, Facebook Ads Dhaka, Social Media Management Bangladesh"
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "CreativeWork",
                "name": "TIANAS BD — Fashion E-Commerce Marketing",
                "headline": "E-Commerce Ad Campaigns & Digital Marketing Bangladesh",
                "description": "High-ROAS Facebook ad campaigns and e-commerce growth strategy for TIANAS fashion brand in Bangladesh.",
                "creator": { "@type": "Organization", "name": "Bengal Cyber", "url": "https://bengalcyber.com" },
                "genre": "E-Commerce Digital Marketing",
                "keywords": "E-Commerce Marketing Bangladesh, Fashion Brand Ads, Facebook Ads Bangladesh"
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@type": "CreativeWork",
                "name": "Bengal Glory Ltd — Corporate Website Design Bangladesh",
                "headline": "Full-Stack Corporate Web Development & SEO Bangladesh",
                "description": "Complete corporate website design, development and SEO optimization for Bengal Glory Ltd in Dhaka, Bangladesh.",
                "creator": { "@type": "Organization", "name": "Bengal Cyber", "url": "https://bengalcyber.com" },
                "genre": "Web Design & Development",
                "keywords": "Corporate Website Design Bangladesh, Web Development Dhaka, Company Website Bangladesh, SEO Bangladesh"
              }
            },
            {
              "@type": "ListItem",
              "position": 5,
              "item": {
                "@type": "CreativeWork",
                "name": "Cancer Answer — Doctor Digital Marketing Bangladesh",
                "headline": "Healthcare Digital Marketing & Medical Video Production Bangladesh",
                "description": "Doctor personal branding, medical video editing, and patient engagement social media marketing for oncology specialist in Bangladesh.",
                "creator": { "@type": "Organization", "name": "Bengal Cyber", "url": "https://bengalcyber.com" },
                "genre": "Healthcare Marketing & Medical Video",
                "keywords": "Doctor Marketing Bangladesh, Healthcare Digital Marketing, Medical Video Bangladesh, Hospital Marketing Dhaka"
              }
            },
            {
              "@type": "ListItem",
              "position": 6,
              "item": {
                "@type": "CreativeWork",
                "name": "Eva Iqra Motors — Automotive Facebook Ads Bangladesh",
                "headline": "Automotive Lead Generation & Facebook Ad Campaigns Dhaka",
                "description": "High-performance automotive Facebook ads, lead generation, and social media marketing for Eva Iqra Motors in Bangladesh.",
                "creator": { "@type": "Organization", "name": "Bengal Cyber", "url": "https://bengalcyber.com" },
                "genre": "Automotive Social Media Marketing",
                "keywords": "Automotive Marketing Bangladesh, Car Dealer Facebook Ads, Lead Generation Dhaka"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Bangladesh-এ কোন Digital Marketing Agency সবচেয়ে ভালো?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bengal Cyber হলো Bangladesh-এর অন্যতম সেরা Digital Marketing Agency, যারা Dhaka-র Gulshan থেকে পরিচালিত। আমরা Website Design, Social Media Marketing, Meta Ads, Healthcare Marketing, Video Production এবং SEO তে ৫+ বছরের proven experience নিয়ে কাজ করি।"
            }
          },
          {
            "@type": "Question",
            "name": "Dhaka-তে কোথায় ভালো Website Design পাবো?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bengal Cyber Dhaka-র Gulshan 1 ভিত্তিক একটি Professional Web Design Agency। আমরা Doctors, Hospitals, RMG Companies, SME, Food Businesses এবং Influencer-দের জন্য custom website তৈরি করি।"
            }
          },
          {
            "@type": "Question",
            "name": "Bangladesh-এ Doctor বা Hospital-এর জন্য Digital Marketing কে করবে?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bengal Cyber ৫+ বছর ধরে Bangladesh-এ Healthcare Digital Marketing করছে। আমরা Doctor Personal Branding, Hospital Social Media Marketing, Medical Video Production, Appointment System Setup এবং Patient Engagement Campaign পরিচালনা করি।"
            }
          },
          {
            "@type": "Question",
            "name": "Bengal Cyber-এর কাজের portfolio কোথায় দেখবো?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bengal Cyber-এর portfolio দেখতে পারবেন https://bengalcyber.com/portfolio তে। এখানে Karizma Care, Athena's Furniture, TIANAS, Bengal Glory, Cancer Answer ও Eva Iqra Motors সহ বিভিন্ন client-এর case study রয়েছে।"
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen relative bg-slate-50">
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
      <Navbar />
      
      {/* Spacer to account for fixed navbar on desktop */}
      <div className="hidden lg:block h-20 bg-transparent"></div>
      
      {/* Page Header */}
      <section className="pt-4 pb-12 sm:pt-10 sm:pb-16 md:py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">
            Proven Results & Client Transformations
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight whitespace-nowrap">
            Client Success Stories & Portfolio
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed text-balance">
            Explore real case studies demonstrating how Bengal Cyber accelerates revenue, engineers custom web platforms, and executes viral marketing campaigns across Bangladesh.
          </p>
        </div>
      </section>

      {/* Projects Container */}
      <section className="pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Project 1: Karizma Care */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-dark/5 border border-slate-100 grid md:grid-cols-2 gap-0 group hover:shadow-2xl transition-all duration-500">
            
            {/* Video Side */}
            <div className="relative w-full h-[350px] md:h-full bg-black flex items-center justify-center">
              <video 
                className="w-full h-full object-contain"
                poster="/projects/karizma-care-thumb.jpg"
                controls
                muted
                loop
                playsInline
                preload="none"
              >
                <source src="/projects/project1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm z-10">
                Video Marketing
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-sm text-brand-primary font-bold mb-3 uppercase tracking-wider">Karizma Care</div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">Bangladesh's First Seaweed Mermaid Soap</h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                A captivating promotional video campaign introducing a groundbreaking skincare product to the market. Crafted to highlight the premium quality, organic seaweed extracts, and unique benefits of Karizma Care's Mermaid Soap.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span className="text-slate-700 font-medium">Product Launch Campaign</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span className="text-slate-700 font-medium">High-Resolution Video Editing & Color Grading</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span className="text-slate-700 font-medium">Social Media Viral Marketing Strategy</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Project 2: Athena's Furniture */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-dark/5 border border-slate-100 grid md:grid-cols-2 gap-0 group hover:shadow-2xl transition-all duration-500 mt-12">
            
            {/* Content Side (Left for alternate layout) */}
            <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
              <div className="text-sm text-[#1877F2] font-bold mb-3 uppercase tracking-wider">Social Media Management</div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">Athena's Furniture BD</h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                We manage and execute comprehensive social media campaigns, high-converting Meta ad placements, and audience retargeting to drive high-intent leads and brand awareness for this premium furniture brand.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1877F2]"></div>
                  <span className="text-slate-700 font-medium">Facebook & Instagram Ads Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1877F2]"></div>
                  <span className="text-slate-700 font-medium">High-Intent Audience Retargeting</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1877F2]"></div>
                  <span className="text-slate-700 font-medium">Daily Page Growth & Community Support</span>
                </li>
              </ul>

              <a 
                href="https://www.facebook.com/AthenasFurnitureBD" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1877F2] text-white px-8 py-4 rounded-full font-bold hover:bg-[#166fe5] shadow-lg shadow-[#1877F2]/30 transition-all hover:-translate-y-1 w-fit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                View Facebook Page
              </a>
            </div>

            {/* Showcase Side (Right) */}
            <div className="relative w-full h-[350px] md:h-full bg-gradient-to-br from-slate-900 via-[#0d1e3d] to-slate-900 flex flex-col items-center justify-center order-1 md:order-2 overflow-hidden p-8 border-l border-slate-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1877F2]/20 via-transparent to-transparent"></div>
              
              {/* Brand Logo & Presentation */}
              <div className="relative z-10 w-full max-w-xs flex flex-col items-center text-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-3xl p-4 shadow-2xl shadow-black/40 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-500 border border-white/20">
                  <img 
                    src="/brands/brand7.png" 
                    alt="Athena's Furniture BD Logo" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1877F2]/20 border border-[#1877F2]/40 text-[#60a5fa] text-xs font-bold uppercase tracking-wider mb-2">
                  <span>Meta Ads & Growth Partner</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm font-medium">
                  Official Social Media Management & Performance Campaign
                </p>
              </div>

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm z-20">
                Media Buying
              </div>
            </div>

          </div>

          {/* Project 3: TIANAS */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-dark/5 border border-slate-100 grid md:grid-cols-2 gap-0 group hover:shadow-2xl transition-all duration-500 mt-12">
            
            {/* Showcase Side (Left) */}
            <div className="relative w-full h-[350px] md:h-full bg-gradient-to-br from-slate-950 via-[#1c1326] to-slate-950 flex flex-col items-center justify-center overflow-hidden p-8 border-r border-slate-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary/20 via-transparent to-transparent"></div>
              
              {/* Brand Logo & Presentation */}
              <div className="relative z-10 w-full max-w-xs flex flex-col items-center text-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-3xl p-4 shadow-2xl shadow-black/40 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-500 border border-white/20">
                  <img 
                    src="/brands/brand1.png" 
                    alt="TIANAS BD Logo" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <span>E-Commerce Performance Ads</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm font-medium">
                  Fashion Brand Scaling & Conversion Retargeting
                </p>
              </div>

              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm z-20">
                Digital Marketing
              </div>
            </div>

            {/* Content Side (Right) */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-sm text-[#1877F2] font-bold mb-3 uppercase tracking-wider">Ad Campaigns & Strategy</div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">TIANAS</h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                We handle comprehensive digital marketing campaigns for TIANAS, crafting tailored ad strategies and viral creative direction that maximize ROI, scale fashion sales, and build commanding brand presence.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1877F2]"></div>
                  <span className="text-slate-700 font-medium">Conversion-Optimized Ad Campaigns</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1877F2]"></div>
                  <span className="text-slate-700 font-medium">Advanced Performance & ROAS Tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1877F2]"></div>
                  <span className="text-slate-700 font-medium">Brand Awareness & Viral Engagement</span>
                </li>
              </ul>

              <a 
                href="https://www.facebook.com/tianas.bd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1877F2] text-white px-8 py-4 rounded-full font-bold hover:bg-[#166fe5] shadow-lg shadow-[#1877F2]/30 transition-all hover:-translate-y-1 w-fit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                View Facebook Page
              </a>
            </div>

          </div>

          {/* Project 4: Bengal Glory */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-dark/5 border border-slate-100 grid md:grid-cols-2 gap-0 group hover:shadow-2xl transition-all duration-500 mt-12">
            
            {/* Content Side (Left) */}
            <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
              <div className="text-sm text-brand-primary font-bold mb-3 uppercase tracking-wider">Web Development</div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">Bengal Glory Ltd</h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                We designed and engineered a comprehensive, modern, and lightning-fast corporate web platform from scratch to establish their authoritative digital presence, optimize on-page SEO, and showcase their enterprise services.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                  <span className="text-slate-700 font-medium">Full-Stack Custom Web Engineering</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                  <span className="text-slate-700 font-medium">Mobile-First Responsive UI/UX</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                  <span className="text-slate-700 font-medium">Technical Search Engine Optimization (SEO)</span>
                </li>
              </ul>

              <a 
                href="https://bengalglory.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 shadow-lg shadow-brand-dark/30 transition-all hover:-translate-y-1 w-fit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                Visit Website
              </a>
            </div>

            {/* Image Side (Right) */}
            <div className="relative w-full h-[350px] md:h-full bg-slate-50 flex items-center justify-center order-1 md:order-2 overflow-hidden border-l border-slate-100">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-200"></div>
              <img 
                src="/projects/bengal-glory-mockup.png" 
                alt="Bengal Glory Ltd - Corporate Website Development Case Study by Bengal Cyber" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top relative z-10 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm z-20">
                Custom Website
              </div>
            </div>

          </div>

          {/* Project 5: Cancer Answer */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-dark/5 border border-slate-100 grid md:grid-cols-2 gap-0 group hover:shadow-2xl transition-all duration-500 mt-12">
            
            {/* Video Side (Left) */}
            <div className="relative w-full h-[350px] md:h-full bg-black flex items-center justify-center overflow-hidden">
              <video 
                className="w-full h-full object-contain relative z-10"
                poster="/projects/cancer-answer-thumb.jpg"
                controls
                muted
                loop
                playsInline
                preload="none"
              >
                <source src="/projects/cancer-answer.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm z-20">
                Medical Branding
              </div>
            </div>

            {/* Content Side (Right) */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-sm text-[#00a859] font-bold mb-3 uppercase tracking-wider">Healthcare Marketing</div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">Cancer Answer</h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                We manage the comprehensive personal branding, high-retention medical video editing, and specialized social media marketing for a prominent oncology specialist to educate and engage patients across Bangladesh.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00a859]"></div>
                  <span className="text-slate-700 font-medium">Doctor Personal Branding & Authority Building</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00a859]"></div>
                  <span className="text-slate-700 font-medium">Educational Medical Video Production</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00a859]"></div>
                  <span className="text-slate-700 font-medium">Targeted Patient Engagement Campaigns</span>
                </li>
              </ul>

              <a 
                href="https://www.facebook.com/canceranswer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#00a859] text-white px-8 py-4 rounded-full font-bold hover:bg-[#00924c] shadow-lg shadow-[#00a859]/30 transition-all hover:-translate-y-1 w-fit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                View Facebook Page
              </a>
            </div>

          </div>

          {/* Project 6: Eva Iqra Motors */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-dark/5 border border-slate-100 grid md:grid-cols-2 gap-0 group hover:shadow-2xl transition-all duration-500 mt-12">
            
            {/* Content Side (Left) */}
            <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
              <div className="text-sm text-[#1877F2] font-bold mb-3 uppercase tracking-wider">Social Media Marketing</div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">Eva Iqra Motors</h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                We handle high-performance automotive social media marketing and targeted ad campaigns to accelerate vehicle sales, generate pre-qualified buyer inquiries, and build brand loyalty.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1877F2]"></div>
                  <span className="text-slate-700 font-medium">Automotive High-Intent Lead Generation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1877F2]"></div>
                  <span className="text-slate-700 font-medium">Hyper-Targeted Facebook Ads</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1877F2]"></div>
                  <span className="text-slate-700 font-medium">Daily Page Management & Sales Funnel</span>
                </li>
              </ul>

              <a 
                href="https://www.facebook.com/evaiqra.motors/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1877F2] text-white px-8 py-4 rounded-full font-bold hover:bg-[#166fe5] shadow-lg shadow-[#1877F2]/30 transition-all hover:-translate-y-1 w-fit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                View Facebook Page
              </a>
            </div>

            {/* Image Side (Right) */}
            <div className="relative w-full h-[350px] md:h-full bg-slate-100 flex items-center justify-center order-1 md:order-2 overflow-hidden border-l border-slate-100">
              <img 
                src="/projects/eva-iqra-motors.jpg" 
                alt="Eva Iqra Motors - Automotive Social Media Ads Case Study by Bengal Cyber" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm z-20">
                Automotive Ads
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Healthcare Industry Blog Post */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Blog Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00a859]/10 text-[#00a859] text-xs font-bold uppercase tracking-widest border border-[#00a859]/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              Industry Insight — Healthcare
            </span>
            <span className="text-slate-400 text-sm">November 2024</span>
          </div>

          {/* Blog Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 leading-tight tracking-tight">
            Why Digital Marketing is Now Essential for Doctors, Hospitals & the Healthcare Industry in Bangladesh
          </h2>
          <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed max-w-3xl">
            The healthcare landscape in Bangladesh has changed forever. Patients no longer rely solely on word of mouth — they search online, browse social media, and choose doctors based on digital presence. Here's why your clinic or hospital must be online, and how Bengal Cyber can take you there.
          </p>

          {/* Section 1: Why Web & Social Media Matter */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-10 border border-slate-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-[#00a859] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">Why Web & Social Media Are Critical for Healthcare</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-slate-600 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <span className="font-bold text-brand-dark">🔍 Patients Search Online First.</span> Over 70% of patients in Bangladesh now search for doctors, clinics, and hospitals on Google and Facebook before making an appointment. If you are not visible online, you simply don't exist to them.
                </p>
                <p>
                  <span className="font-bold text-brand-dark">📱 Social Media Builds Trust.</span> A strong Facebook or YouTube presence lets doctors and hospitals share health tips, patient education, and success stories — building the credibility and trust that leads to appointments. People choose doctors they feel they know.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  <span className="font-bold text-brand-dark">🏥 Your Competitors Are Already Online.</span> Hospitals and clinics in Dhaka, Chittagong, and other cities are aggressively growing their digital presence. Without a professional website and active social media, you will lose patients to competitors who invest in digital branding.
                </p>
                <p>
                  <span className="font-bold text-brand-dark">📊 Measurable Patient Growth.</span> Unlike traditional advertising, digital marketing lets you see exactly how many people saw your post, clicked your website, or booked an appointment — giving you full control over your growth.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Our Services for Healthcare */}
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-[#00a859] rounded-full inline-block"></span>
              How Bengal Cyber Helps the Healthcare Industry Grow
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Service 1 */}
              <div className="bg-gradient-to-br from-[#00a859]/5 to-white border border-[#00a859]/15 rounded-2xl p-6 hover:shadow-lg hover:shadow-[#00a859]/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-[#00a859]/10 flex items-center justify-center mb-4">
                  <span className="text-xl">📋</span>
                </div>
                <h4 className="font-bold text-brand-dark mb-2 text-lg">1. Total 1-Year Digital Plan</h4>
                <p className="text-slate-600 text-sm leading-relaxed">We build a complete 12-month digital roadmap tailored to your clinic or hospital — covering every touchpoint from brand setup to patient acquisition and retention.</p>
              </div>

              {/* Service 2 */}
              <div className="bg-gradient-to-br from-[#1877F2]/5 to-white border border-[#1877F2]/15 rounded-2xl p-6 hover:shadow-lg hover:shadow-[#1877F2]/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-[#1877F2]/10 flex items-center justify-center mb-4">
                  <span className="text-xl">📲</span>
                </div>
                <h4 className="font-bold text-brand-dark mb-2 text-lg">2. Social Media Setup & Marketing</h4>
                <p className="text-slate-600 text-sm leading-relaxed">From Facebook page setup and professional branding to daily content creation, targeted Meta Ads, and community management — we build your digital following and patient base.</p>
              </div>

              {/* Service 3 */}
              <div className="bg-gradient-to-br from-brand-primary/5 to-white border border-brand-primary/15 rounded-2xl p-6 hover:shadow-lg hover:shadow-brand-primary/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl">💻</span>
                </div>
                <h4 className="font-bold text-brand-dark mb-2 text-lg">3. Website Design & Marketing</h4>
                <p className="text-slate-600 text-sm leading-relaxed">We design professional, fast-loading, mobile-first websites for doctors, clinics, and hospitals — with built-in SEO, appointment booking forms, and Google Maps integration.</p>
              </div>

              {/* Service 4 */}
              <div className="bg-gradient-to-br from-purple-500/5 to-white border border-purple-500/15 rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <span className="text-xl">🎬</span>
                </div>
                <h4 className="font-bold text-brand-dark mb-2 text-lg">4. Video Shooting & Editing</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Professional health awareness videos, doctor interviews, clinic tours, and patient education content — shot and edited to broadcast quality. Video drives 5x more engagement in healthcare marketing.</p>
              </div>

              {/* Service 5 */}
              <div className="bg-gradient-to-br from-orange-500/5 to-white border border-orange-500/15 rounded-2xl p-6 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                  <span className="text-xl">🎨</span>
                </div>
                <h4 className="font-bold text-brand-dark mb-2 text-lg">5. Graphics & Picture Design</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Eye-catching health awareness posts, doctor profile banners, clinic brochures, and campaign creatives — designed to look professional, trustworthy, and highly shareable.</p>
              </div>

              {/* Service 6 */}
              <div className="bg-gradient-to-br from-teal-500/5 to-white border border-teal-500/15 rounded-2xl p-6 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4">
                  <span className="text-xl">📅</span>
                </div>
                <h4 className="font-bold text-brand-dark mb-2 text-lg">6. Monthly Digital Channel Management</h4>
                <p className="text-slate-600 text-sm leading-relaxed">We manage your Facebook, Instagram, YouTube, and Google Business Profile every month — handling content posting, ad campaigns, inbox responses, and performance reporting.</p>
              </div>

              {/* Service 7 — Full width */}
              <div className="sm:col-span-2 lg:col-span-3 bg-gradient-to-br from-brand-dark/5 to-white border border-brand-dark/15 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-dark/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🗓️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-2 text-lg">7. Customer Support & Appointment Setup System</h4>
                    <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">We set up and manage complete patient appointment booking systems — integrated into your website and social media — along with dedicated inbox support and CRM tools, so you never miss a patient inquiry again.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Badge */}
          <div className="bg-gradient-to-r from-brand-dark to-slate-800 rounded-3xl p-8 md:p-12 text-white mb-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 text-center">
                <div className="text-6xl md:text-7xl font-black text-[#00a859]">5+</div>
                <div className="text-white/70 text-sm font-semibold uppercase tracking-widest mt-1">Years Experience</div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Hands-On Healthcare Digital Marketing Experience</h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  For more than 5 years, Bengal Cyber has been supporting healthcare clients — doctors, hospitals, clinics, and health brands across Bangladesh — with all of these digital marketing needs. We understand the unique trust, compliance, and communication requirements of the healthcare industry. Our team has on-hand experience running campaigns that actually bring patients through the door, not just likes on a post.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["Doctor Personal Branding", "Hospital Social Media", "Patient Education Videos", "Healthcare SEO", "Appointment System Setup", "Medical Graphic Design"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA inside blog */}
          <div className="text-center">
            <p className="text-slate-500 text-lg mb-6">Ready to grow your healthcare practice with digital marketing?</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#00a859] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#00924c] shadow-lg shadow-[#00a859]/30 transition-all hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.1a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 15.5a2 2 0 0 1 .27 1.42z"/></svg>
              Book a Free Healthcare Marketing Consultation
            </Link>
          </div>

        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 bg-gradient-to-br from-brand-primary via-orange-500 to-brand-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
            Ready For Real Growth?
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Want Your Brand to Be Our Next Success Story?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-2xl mx-auto leading-relaxed">
            Let's engineer a high-converting website and viral marketing campaign that scales your revenue and dominates your industry in Bangladesh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-brand-dark text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-2xl shadow-black/30">
              Start Your Project Today
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full text-lg font-bold backdrop-blur-md transition-colors">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
