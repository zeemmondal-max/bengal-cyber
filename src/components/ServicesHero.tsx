"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MdCode,
  MdCampaign,
  MdBrush,
  MdMovie,
  MdSupportAgent,
  MdTrendingUp,
  MdArrowForward,
  MdCheckCircle,
  MdBolt,
  MdAutoGraph,
} from "react-icons/md";
import { Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

const serviceCategories = [
  { id: "web-design", name: "Web Design & Dev", icon: MdCode, tag: "High Speed" },
  { id: "social-media", name: "Social Media Marketing", icon: MdCampaign, tag: "Viral Reach" },
  { id: "media-buying", name: "High-ROAS Media Buying", icon: MdTrendingUp, tag: "Meta & Google" },
  { id: "graphics-design", name: "Brand & Graphics Design", icon: MdBrush, tag: "Prestige UI" },
  { id: "video-editing", name: "Viral Video & Reels", icon: MdMovie, tag: "Top Retention" },
  { id: "customer-service", name: "24/7 Support Systems", icon: MdSupportAgent, tag: "Omnichannel" },
];

const metrics = [
  {
    value: "4.8x - 7.5x",
    label: "Average Ad ROAS",
    highlight: "+280% Revenue Scale",
    icon: MdAutoGraph,
  },
  {
    value: "< 0.8s",
    label: "Web Page Load",
    highlight: "100/100 Core Web Vitals",
    icon: MdBolt,
  },
  {
    value: "50M+",
    label: "Targeted Impressions",
    highlight: "Viral Social Reach",
    icon: MdTrendingUp,
  },
  {
    value: "99.2%",
    label: "Client Retention",
    highlight: "Dedicated Growth Team",
    icon: ShieldCheck,
  },
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
        <div className="relative rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-10 md:p-16 lg:p-20 overflow-hidden border border-orange-500/25 bg-gradient-to-b from-[#0a0f1d]/95 via-[#0d1629]/95 to-[#080d19]/95 backdrop-blur-2xl shadow-2xl shadow-orange-500/10">
          
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

          {/* 1. Lucrative Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/15 via-orange-500/10 to-amber-500/15 border border-orange-500/35 shadow-inner shadow-orange-500/20 mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-primary"></span>
            </span>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-orange-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              Elite Growth Engines · Engineered For Real ROI
            </span>
          </motion.div>

          {/* 2. Lucrative Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.15] max-w-5xl mx-auto"
          >
            We Don't Just Offer Services. <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
              We Build Market Dominance.
            </span>
          </motion.h1>

          {/* 3. Lucrative Subtitle / Value Proposition */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
          >
            Stop wasting budget on disconnected deliverables. Bengal Cyber engineers end-to-end revenue machines—combining conversion-obsessed web architecture, aggressive paid media buying, and viral creative production.
          </motion.p>

          {/* 4. Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-brand-primary to-orange-500 text-white font-extrabold text-base shadow-xl shadow-brand-primary/35 hover:shadow-orange-500/50 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto"
            >
              <span>Claim Your Free Strategy Audit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link 
              href="/portfolio" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-base border border-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-300 w-full sm:w-auto"
            >
              <span>See Client Case Studies</span>
              <span className="text-orange-400 font-bold">↗</span>
            </Link>
          </motion.div>

          {/* 5. Lucrative Proof Metrics Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-14 text-left"
          >
            {metrics.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <div 
                  key={i}
                  className="relative group p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight group-hover:text-orange-400 transition-colors">
                      {metric.value}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-200 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-[11px] sm:text-xs text-orange-400/90 font-medium flex items-center gap-1">
                    <Zap className="w-3 h-3 shrink-0" />
                    <span>{metric.highlight}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* 6. Quick Jump Filter Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
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

          {/* 7. Reassurance Badges */}
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
