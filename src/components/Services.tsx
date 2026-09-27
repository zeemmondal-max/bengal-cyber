"use client";

import { motion } from "framer-motion";
import { MdCampaign, MdBrush, MdMovie, MdSupportAgent, MdTrendingUp, MdArrowForward, MdCode } from "react-icons/md";

const services = [
  {
    id: "web-design",
    title: "Web Design & Development",
    description: "Custom, lightning-fast, and high-converting websites engineered with Next.js, React, and Tailwind. Engineered for peak SEO rankings, mobile responsiveness, and scalable e-commerce in Bangladesh.",
    icon: MdCode,
    features: ["Custom UI/UX", "Next.js & React", "SEO Optimization", "E-Commerce"],
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    description: "Data-obsessed social media campaigns engineered to capture attention across Facebook, Instagram, and TikTok. We build viral brand authority, community loyalty, and targeted audience engagement.",
    icon: MdCampaign,
    features: ["Content Strategy", "Community Management", "Influencer Collabs", "Analytics"],
  },
  {
    id: "graphics-design",
    title: "Graphics Design",
    description: "Scroll-stopping brand identities, digital ad creatives, UI/UX designs, and marketing assets tailored to elevate your brand prestige in competitive markets.",
    icon: MdBrush,
    features: ["Brand Identity", "Social Creatives", "UI/UX Graphics", "Print Materials"],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "High-retention video production, cinematic color grading, reels, and motion graphics crafted to hook viewers in the first 3 seconds and drive virality.",
    icon: MdMovie,
    features: ["Short-form Reels", "Corporate Videos", "Motion Graphics", "Color Grading"],
  },
  {
    id: "customer-service",
    title: "Customer Service",
    description: "24/7 omnichannel customer support, live chat management, and lead retention systems that turn website visitors into lifelong paying clients.",
    icon: MdSupportAgent,
    features: ["24/7 Support", "Ticket Management", "Live Chat", "Retention Strategy"],
  },
  {
    id: "media-buying",
    title: "Media Buying",
    description: "High-ROAS paid advertising campaigns across Meta (Facebook & Instagram) and Google Ads. Precision audience targeting, creative A/B testing, and conversion tracking designed to maximize ad spend.",
    icon: MdTrendingUp,
    features: ["Meta & Google Ads", "A/B Testing", "Audience Targeting", "Conversion Tracking"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
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
                className="scroll-mt-32 bg-white/70 backdrop-blur-md rounded-3xl p-8 relative group overflow-hidden border border-slate-100/50 shadow-xl shadow-brand-dark/5 hover:shadow-2xl hover:shadow-brand-primary/10 hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 flex flex-col cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Decorative Top Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-orange-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-brand-primary group-hover:border-brand-primary/30 transition-colors duration-500">
                    <MdArrowForward className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-brand-dark mb-4">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>
                
                {/* Features Pill List */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-sm font-medium rounded-lg border border-slate-100 group-hover:border-brand-primary/20 transition-colors duration-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.a>
            );
          })}
          
          {/* Call to action card in the 6th empty slot */}
          <motion.div
            className="bg-brand-dark rounded-3xl p-8 relative flex flex-col justify-center items-center text-center shadow-lg border border-white/10 overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay group-hover:bg-brand-primary/40 transition-colors duration-500"></div>
            <h4 className="text-2xl font-bold text-white mb-4 relative z-10">Don't see what you need?</h4>
            <p className="text-white/70 mb-8 relative z-10">We create custom digital solutions tailored to your specific business challenges.</p>
            <a href="/contact" className="relative z-10 inline-flex items-center justify-center px-6 py-3 bg-brand-primary text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-xl shadow-brand-primary/30">
              Let's Talk
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
