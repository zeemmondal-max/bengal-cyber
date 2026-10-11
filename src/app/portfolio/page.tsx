import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Client Case Studies & Portfolio | Web Design & Marketing | Bengal Cyber",
  description: "Explore real client transformations by Bengal Cyber: Custom Website Design, viral Social Media Marketing, High-ROAS Meta Ads, and Video Production across Bangladesh.",
  keywords: [
    "Bengal Cyber Portfolio",
    "Digital Marketing Case Studies Bangladesh",
    "Website Design Portfolio Dhaka",
    "Facebook Ads Success Stories Bangladesh",
    "Medical Branding Bangladesh",
    "E-Commerce Web Development Dhaka",
    "Corporate Website Portfolio",
    "Creative Video Editing Bangladesh",
    "Top Marketing Agency Portfolio"
  ],
  alternates: {
    canonical: "https://bengalcyber.com/portfolio",
  },
  openGraph: {
    title: "Client Case Studies & Proven Results | Bengal Cyber",
    description: "Discover how Bengal Cyber scales brands across Bangladesh with high-converting Website Design, viral Social Media Marketing, and precision Media Buying.",
    url: "https://bengalcyber.com/portfolio",
    siteName: "Bengal Cyber",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bengal Cyber Portfolio | Web Design & Digital Marketing Results",
    description: "Real client results in Web Development, Meta Ads, Video Production, and Brand Scaling in Bangladesh.",
  },
};

export default function ProjectsPage() {
  const portfolioJsonLd = {
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
            "name": "Portfolio",
            "item": "https://bengalcyber.com/portfolio"
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": "https://bengalcyber.com/portfolio/#webpage",
        "url": "https://bengalcyber.com/portfolio",
        "name": "Client Case Studies & Portfolio | Bengal Cyber",
        "description": "Explore real client transformations by Bengal Cyber: Custom Website Design, viral Social Media Marketing, High-ROAS Meta Ads, and Video Production across Bangladesh.",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "CreativeWork",
                "name": "Karizma Care - Bangladesh's First Seaweed Mermaid Soap",
                "headline": "Product Launch & Video Marketing Campaign",
                "creator": {
                  "@type": "Organization",
                  "name": "Bengal Cyber"
                },
                "genre": "Video Marketing & Product Launch"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "CreativeWork",
                "name": "Athena's Furniture BD",
                "headline": "Social Media Management & Meta Ads",
                "creator": {
                  "@type": "Organization",
                  "name": "Bengal Cyber"
                },
                "genre": "Media Buying & Furniture Brand Growth"
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "CreativeWork",
                "name": "TIANAS BD",
                "headline": "Ad Campaigns & E-Commerce Marketing Strategy",
                "creator": {
                  "@type": "Organization",
                  "name": "Bengal Cyber"
                },
                "genre": "Digital Marketing & Fashion Retargeting"
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@type": "CreativeWork",
                "name": "Bengal Glory Ltd",
                "headline": "Full-Stack Custom Corporate Web Development & SEO",
                "creator": {
                  "@type": "Organization",
                  "name": "Bengal Cyber"
                },
                "genre": "Web Design & Development"
              }
            },
            {
              "@type": "ListItem",
              "position": 5,
              "item": {
                "@type": "CreativeWork",
                "name": "Cancer Answer",
                "headline": "Doctor Personal Branding & Medical Video Production",
                "creator": {
                  "@type": "Organization",
                  "name": "Bengal Cyber"
                },
                "genre": "Healthcare Marketing & Medical Video Editing"
              }
            },
            {
              "@type": "ListItem",
              "position": 6,
              "item": {
                "@type": "CreativeWork",
                "name": "Eva Iqra Motors",
                "headline": "Automotive Lead Generation & Facebook Ad Campaigns",
                "creator": {
                  "@type": "Organization",
                  "name": "Bengal Cyber"
                },
                "genre": "Automotive Social Media Marketing"
              }
            }
          ]
        }
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
      
      {/* Spacer to account for fixed navbar */}
      <div className="h-20 bg-transparent"></div>
      
      {/* Page Header */}
      <section className="py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">
            Proven Results & Client Transformations
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight">
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
                controls
                muted
                loop
                playsInline
                preload="metadata"
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
                controls
                muted
                loop
                playsInline
                preload="metadata"
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
                className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm z-20">
                Automotive Ads
              </div>
            </div>

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
            <a href="/contact" className="inline-flex items-center justify-center bg-brand-dark text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-2xl shadow-black/30">
              Start Your Project Today
            </a>
            <a href="/services" className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full text-lg font-bold backdrop-blur-md transition-colors">
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
