"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-32 px-4 overflow-hidden relative min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto text-center relative z-10 w-full flex flex-col items-center">


        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-dark tracking-tight mb-8 leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Architecting <span className="text-brand-primary">Digital Empires</span> through <br className="hidden md:block" />
          <span className="text-brand-primary">Magnetic Web Design</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-2xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed text-balance font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          We don't just build websites; we engineer revenue-generating ecosystems. From <strong>Viral Social Media Marketing</strong> to conversion-obsessed <strong>Website Design</strong> and aggressive <strong>Digital Marketing</strong> strategies.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Primary Button */}
          <a href="/contact" className="group border-2 border-brand-primary ease-bouncy inline-flex h-16 cursor-pointer items-center rounded-full p-1.5 transition-transform duration-400 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto shadow-xl animate-borderFlash">
            <span className="bg-brand-primary relative overflow-hidden flex h-full w-full items-center justify-between gap-x-6 rounded-full py-2 pr-2 pl-8">
              {/* Shimmer effect inside button */}
              <div className="absolute inset-0 -translate-x-[150%] bg-white/30 skew-x-12 animate-[shimmer_3s_ease-in-out_infinite] pointer-events-none" style={{ animationDelay: '0s' }}></div>
              <span className="text-white font-bold text-lg text-nowrap relative z-10">Start a Project</span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-dark shadow-sm relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="ease-bouncy size-5 stroke-current transition-transform duration-400 group-hover:rotate-45">
                  <path d="M7 17L17 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 7H17V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>
          </a>
          
          {/* Secondary Button */}
          <a href="/services" className="group border-2 border-brand-primary ease-bouncy inline-flex h-16 cursor-pointer items-center rounded-full p-1.5 transition-transform duration-400 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto hover:bg-slate-50 animate-borderFlash" style={{ animationDelay: '0.5s' }}>
            <span className="bg-transparent backdrop-blur-sm relative overflow-hidden flex h-full w-full items-center justify-between gap-x-6 rounded-full py-2 pr-2 pl-8">
              {/* Shimmer effect inside button */}
              <div className="absolute inset-0 -translate-x-[150%] bg-brand-primary/10 skew-x-12 animate-[shimmer_3s_ease-in-out_infinite] pointer-events-none" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-brand-dark font-medium text-lg text-nowrap relative z-10">Explore Services</span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-dark text-white shadow-sm relative z-10">
                <ArrowRight className="ease-bouncy size-5 stroke-current transition-transform duration-400 group-hover:translate-x-1" />
              </span>
            </span>
          </a>
        </motion.div>
        
        {/* Industries Expertise */}
        <motion.div
          className="mt-16 pt-10 border-t border-slate-200/60 w-full max-w-[95%] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-6">Industries We Dominate</p>
          <div className="flex flex-nowrap overflow-x-auto xl:overflow-visible py-8 px-4 justify-start xl:justify-center items-center gap-3 md:gap-4 w-full scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {/* Spacers to prevent shadow clipping on mobile scroll */}
            <div className="w-2 shrink-0 xl:hidden"></div>
            
            {["Medical", "Corporate", "Organic Product", "Fashion & Clothing", "Food", "Personal Branding", "Automobile", "Furniture", "Garments"].map((industry, index) => (
              <a 
                href="#contact-form"
                key={index}
                className="whitespace-nowrap px-4 md:px-5 py-2.5 bg-white shadow-sm border-2 border-brand-primary text-slate-700 rounded-full text-xs md:text-sm font-bold hover:bg-brand-primary hover:text-white hover:shadow-xl hover:shadow-brand-primary/40 hover:-translate-y-1 transition-all duration-300 shrink-0 animate-borderFlash"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {industry}
              </a>
            ))}
            
            {/* Spacers to prevent shadow clipping on mobile scroll */}
            <div className="w-2 shrink-0 xl:hidden"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
