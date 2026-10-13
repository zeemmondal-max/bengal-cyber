"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MdCampaign, MdBrush, MdMovie, MdSupportAgent, MdTrendingUp, MdArrowForward, MdCode } from "react-icons/md";
import Link from "next/link";

const services = [
  {
    id: "web-design",
    title: "Web Design & Development",
    description: "Custom, lightning-fast, and high-converting websites engineered with Next.js, React, and Tailwind. Engineered for peak SEO rankings, mobile responsiveness, and scalable e-commerce in Bangladesh.",
    icon: MdCode,
    image: "/services/web-design.jpg",
    features: ["Custom UI/UX", "Next.js & React", "SEO Optimization", "E-Commerce"],
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    description: "Data-obsessed social media campaigns engineered to capture attention across Facebook, Instagram, and TikTok. We build viral brand authority, community loyalty, and targeted audience engagement.",
    icon: MdCampaign,
    image: "/services/social-media.jpg",
    features: ["Content Strategy", "Community Management", "Influencer Collabs", "Analytics"],
  },
  {
    id: "graphics-design",
    title: "Graphics Design",
    description: "Scroll-stopping brand identities, digital ad creatives, UI/UX designs, and marketing assets tailored to elevate your brand prestige in competitive markets.",
    icon: MdBrush,
    image: "/services/graphics-design.jpg",
    features: ["Brand Identity", "Social Creatives", "UI/UX Graphics", "Print Materials"],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "High-retention video production, cinematic color grading, reels, and motion graphics crafted to hook viewers in the first 3 seconds and drive virality.",
    icon: MdMovie,
    image: "/services/video-editing.jpg",
    features: ["Short-form Reels", "Corporate Videos", "Motion Graphics", "Color Grading"],
  },
  {
    id: "customer-service",
    title: "Customer Service",
    description: "24/7 omnichannel customer support, live chat management, and lead retention systems that turn website visitors into lifelong paying clients.",
    icon: MdSupportAgent,
    image: "/services/customer-service.jpg",
    features: ["24/7 Support", "Ticket Management", "Live Chat", "Retention Strategy"],
  },
  {
    id: "media-buying",
    title: "Media Buying",
    description: "High-ROAS paid advertising campaigns across Meta (Facebook & Instagram) and Google Ads. Precision audience targeting, creative A/B testing, and conversion tracking designed to maximize ad spend.",
    icon: MdTrendingUp,
    image: "/services/media-buying.jpg",
    features: ["Meta & Google Ads", "A/B Testing", "Audience Targeting", "Conversion Tracking"],
  },
];

export default function Services() {
  return (
    <section id="services" className="pt-6 sm:pt-10 pb-24 sm:pb-32 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-4">Core Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">Full-Spectrum Digital Services</h3>
          <p className="text-slate-600 text-lg md:text-xl text-balance">
            A battle-tested arsenal of modern marketing, design, and web disciplines—engineered to scale businesses in Bangladesh and globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const serviceQuery = encodeURIComponent(service.title);
            
            return (
              <motion.a
                id={service.id}
                href={`/contact?service=${serviceQuery}`}
                key={index}
                className="scroll-mt-32 bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-7 relative group overflow-hidden border border-slate-100 shadow-xl shadow-brand-dark/5 hover:shadow-2xl hover:shadow-brand-primary/10 hover:bg-white transition-all duration-500 hover:-translate-y-2 flex flex-col cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Decorative Top Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-orange-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20"></div>
                
                {/* Service Image Banner with floating Icon & Arrow */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-slate-100/80 shadow-inner">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Floating Icon badge bottom left */}
                  <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
                    <div className="w-11 h-11 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center text-brand-primary shadow-lg border border-white/60 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Floating Arrow top right */}
                  <div className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-500 group-hover:text-brand-primary group-hover:bg-white shadow-md border border-white/60 transition-all duration-300">
                    <MdArrowForward className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1 text-sm sm:text-base">
                  {service.description}
                </p>
                
                {/* Features Pill List */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {service.features.map((feature, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-slate-50 text-slate-600 text-xs sm:text-sm font-medium rounded-lg border border-slate-100 group-hover:border-brand-primary/20 transition-colors duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.a>
            );
          })}
          
          {/* Call to action card spanning full width below the 6 services */}
          <motion.div
            className="col-span-1 md:col-span-2 lg:col-span-3 mt-4 bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark rounded-3xl p-8 sm:p-10 relative flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-white/10 overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay group-hover:bg-brand-primary/20 transition-colors duration-500"></div>
            <div className="relative z-10 text-center md:text-left max-w-2xl">
              <span className="text-brand-primary font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 inline-block">Custom Solutions</span>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Don't see exactly what you need?</h4>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">We engineer custom digital solutions, software, and specialized marketing campaigns tailored to your specific business challenges.</p>
            </div>
            <Link href="/contact" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-brand-primary hover:bg-orange-500 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-brand-primary/30 text-nowrap">
              Let's Talk About Your Project
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
