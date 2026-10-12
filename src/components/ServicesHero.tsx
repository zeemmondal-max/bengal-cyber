"use client";

import { motion } from "framer-motion";
import {
  MdCode,
  MdCampaign,
  MdBrush,
  MdMovie,
  MdSupportAgent,
  MdTrendingUp,
  MdCheckCircle,
} from "react-icons/md";

const serviceCategories = [
  { id: "web-design", name: "Web Design & Dev", icon: MdCode, tag: "High Speed" },
  { id: "social-media", name: "Social Media Marketing", icon: MdCampaign, tag: "Viral Reach" },
  { id: "media-buying", name: "High-ROAS Media Buying", icon: MdTrendingUp, tag: "Meta & Google" },
  { id: "graphics-design", name: "Brand & Graphics Design", icon: MdBrush, tag: "Prestige UI" },
  { id: "video-editing", name: "Viral Video & Reels", icon: MdMovie, tag: "Top Retention" },
  { id: "customer-service", name: "24/7 Support Systems", icon: MdSupportAgent, tag: "Omnichannel" },
];

export default function ServicesHero() {
  const scrollToService = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-12 sm:pt-28 md:pb-16 text-center relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Lucrative Hero Container */}
        <div className="relative rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden border border-orange-500/25 bg-gradient-to-b from-[#0a0f1d]/95 via-[#0d1629]/95 to-[#080d19]/95 backdrop-blur-2xl shadow-2xl shadow-orange-500/10">
          
          {/* Ambient Lighting Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-48 bg-gradient-to-r from-orange-600/30 via-amber-500/25 to-orange-500/30 blur-[100px] pointer-events-none -z-10" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />

          {/* Subtle Cyber Grid Texture */}
          <div 
            className="absolute inset-0 opacity-[0.07] pointer-events-none -z-10"
            style={{
              backgroundImage: `linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Glowing Top Rim Streak */}
          <div className="absolute top-0 left-10 right-10 h-[1.5px] bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-80" />

          {/* SEO-Friendly Short Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-[1.2] max-w-4xl mx-auto"
          >
            Digital Marketing &{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
              Web Services
            </span>
          </motion.h1>

          {/* Subtitle / Value Proposition */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          >
            Scale your business in Bangladesh with high-converting Website Design, viral Social Media Marketing, and precision Media Buying engineered for maximum ROI.
          </motion.p>

          {/* Quick Jump Filter Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">
              Explore Our Core Disciplines
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {serviceCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => scrollToService(cat.id)}
                    className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.06] hover:bg-orange-500/20 text-slate-200 hover:text-white border border-white/10 hover:border-orange-500/50 transition-all duration-300 cursor-pointer shadow-sm text-xs sm:text-sm font-semibold"
                  >
                    <Icon className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
                    <span>{cat.name}</span>
                    <span className="text-[10px] uppercase font-bold text-orange-400/80 bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20 hidden sm:inline-block">
                      {cat.tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Reassurance Badges */}
          <div className="mt-8 pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400 font-medium border-t border-white/5">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MdCheckCircle className="text-orange-400 w-4 h-4" />
              Tailored Commercial Proposals
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MdCheckCircle className="text-orange-400 w-4 h-4" />
              Zero Lock-In Contracts
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MdCheckCircle className="text-orange-400 w-4 h-4" />
              High-Velocity Delivery
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
