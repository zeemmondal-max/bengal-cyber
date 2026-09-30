"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Backdrop when menu is open */}
      {isNavVisible && (
        <div 
          className="fixed inset-0 bg-black/25 backdrop-blur-[2px] md:hidden z-40 pointer-events-auto"
          onClick={() => setIsNavVisible(false)}
        />
      )}

      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-end md:items-center pointer-events-none">
        
        {/* Trigger Area (Water Drop) */}
        <div 
          className={`absolute top-0 right-4 sm:right-6 md:right-auto md:left-1/2 md:-translate-x-1/2 w-28 md:w-64 h-16 flex justify-center items-start cursor-pointer group z-[60] ${isNavVisible ? 'pointer-events-none' : 'pointer-events-auto'}`}
          onMouseEnter={() => setIsNavVisible(true)}
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          <motion.div 
            animate={{ scale: isNavVisible ? 0 : 1, opacity: isNavVisible ? 0 : 1, y: isNavVisible ? -20 : 0 }}
            className="relative mt-2 flex items-center justify-center transition-all duration-300 animate-bounce"
          >
            <div className="absolute w-6 h-6 bg-brand-primary/40 rounded-full animate-ping" />
            <div className="relative w-3.5 h-3.5 bg-brand-primary rounded-full rounded-br-none rotate-45 group-hover:scale-125 transition-transform duration-300 shadow-md shadow-brand-primary/20" />
          </motion.div>
        </div>

        {/* The Dynamic Island Dropdown Panel */}
        <motion.div 
          initial={{ y: "-75%" }}
          animate={{ y: isNavVisible ? 0 : "-75%" }}
          transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.8 }}
          onMouseEnter={() => setIsNavVisible(true)}
          onMouseLeave={() => setIsNavVisible(false)}
          className="w-full flex justify-end md:justify-center pointer-events-auto absolute top-0 px-3 sm:px-4 md:px-0"
        >
          <nav className={`relative bg-brand-dark/70 backdrop-blur-xl text-white p-3.5 sm:p-4 md:p-6 rounded-b-[2rem] md:rounded-b-[2.5rem] w-auto max-w-[94vw] sm:max-w-md md:max-w-fit transition-shadow duration-500 ${isNavVisible ? 'shadow-2xl shadow-brand-primary/40' : 'shadow-lg shadow-brand-primary/30'}`}>

          
          {/* Animated Orange Wave Shadow when Menu Bar is Hidden */}
          <motion.div
            initial={false}
            animate={{
              opacity: isNavVisible ? 0 : 1,
            }}
            transition={{ duration: 0.35 }}
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[115%] h-12 pointer-events-none overflow-visible flex flex-col items-center justify-start -z-10"
          >
            {/* Ambient Pulsing Glow Wave */}
            <motion.div
              animate={{
                scaleX: [0.92, 1.15, 0.95, 1.18, 0.92],
                scaleY: [0.85, 1.35, 0.9, 1.3, 0.85],
                opacity: [0.55, 0.95, 0.6, 0.9, 0.55],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-1 w-3/4 h-8 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 rounded-full blur-xl"
            />

            {/* Ripple Wave Arc 1 */}
            <motion.div
              animate={{
                scaleX: [0.85, 1.28],
                scaleY: [0.7, 1.55],
                y: [0, 16],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute top-0 w-3/4 h-5 border-b-2 border-orange-400/80 rounded-b-[2.5rem] blur-[2px]"
            />

            {/* Ripple Wave Arc 2 */}
            <motion.div
              animate={{
                scaleX: [0.85, 1.28],
                scaleY: [0.7, 1.55],
                y: [0, 16],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1.1,
              }}
              className="absolute top-0 w-3/4 h-5 border-b-2 border-amber-400/70 rounded-b-[2.5rem] blur-[2px]"
            />

            {/* Traveling Sine Wave Light Ribbon */}
            <div className="absolute -top-1.5 w-full max-w-sm sm:max-w-md h-6 overflow-hidden pointer-events-none">
              <motion.div
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-[200%] h-full flex"
              >
                <svg
                  viewBox="0 0 800 30"
                  className="w-1/2 h-full"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M 0 10 Q 100 0, 200 10 T 400 10 T 600 10 T 800 10"
                    stroke="url(#orangeWaveGrad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="filter drop-shadow-[0_2px_8px_rgba(249,115,22,0.9)]"
                  />
                  <defs>
                    <linearGradient id="orangeWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ea580c" stopOpacity="0.2" />
                      <stop offset="30%" stopColor="#f97316" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#fde047" stopOpacity="1" />
                      <stop offset="70%" stopColor="#f97316" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#ea580c" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  viewBox="0 0 800 30"
                  className="w-1/2 h-full"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M 0 10 Q 100 0, 200 10 T 400 10 T 600 10 T 800 10"
                    stroke="url(#orangeWaveGrad2)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="filter drop-shadow-[0_2px_8px_rgba(249,115,22,0.9)]"
                  />
                  <defs>
                    <linearGradient id="orangeWaveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ea580c" stopOpacity="0.2" />
                      <stop offset="30%" stopColor="#f97316" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#fde047" stopOpacity="1" />
                      <stop offset="70%" stopColor="#f97316" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#ea580c" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Inverse Curve Fillets (Desktop Only) - Using CSS Mask to support glass effect */}
          <div 
            className="hidden md:block absolute top-0 -left-6 w-6 h-6 bg-brand-dark/70 backdrop-blur-xl" 
            style={{ 
              WebkitMaskImage: 'radial-gradient(circle at bottom left, transparent 24px, black 24.2px)', 
              maskImage: 'radial-gradient(circle at bottom left, transparent 24px, black 24.2px)' 
            }}
          />
          <div 
            className="hidden md:block absolute top-0 -right-6 w-6 h-6 bg-brand-dark/70 backdrop-blur-xl" 
            style={{ 
              WebkitMaskImage: 'radial-gradient(circle at bottom right, transparent 24px, black 24.2px)', 
              maskImage: 'radial-gradient(circle at bottom right, transparent 24px, black 24.2px)' 
            }}
          />

          {/* Middle Row: Pill Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2.5 md:gap-3 max-w-full">
            <a 
              href="/" 
              className={`px-3.5 py-1.5 sm:px-5 md:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm flex items-center transition-all ${pathname === "/" ? "bg-white text-brand-dark font-bold shadow-md hover:scale-105" : "bg-white/10 text-white font-medium hover:bg-white/20"}`}
            >
              Home
            </a>
            <a 
              href="/services" 
              className={`px-3.5 py-1.5 sm:px-5 md:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm flex items-center transition-all ${pathname === "/services" ? "bg-white text-brand-dark font-bold shadow-md hover:scale-105" : "bg-white/10 text-white font-medium hover:bg-white/20"}`}
            >
              Services
            </a>
            <a 
              href="/portfolio" 
              className={`px-3.5 py-1.5 sm:px-5 md:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm flex items-center transition-all ${pathname === "/portfolio" ? "bg-white text-brand-dark font-bold shadow-md hover:scale-105" : "bg-white/10 text-white font-medium hover:bg-white/20"}`}
            >
              Portfolio
            </a>
            <a 
              href="/about" 
              className={`px-3.5 py-1.5 sm:px-5 md:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm flex items-center transition-all ${pathname === "/about" ? "bg-white text-brand-dark font-bold shadow-md hover:scale-105" : "bg-white/10 text-white font-medium hover:bg-white/20"}`}
            >
              About Us
            </a>
            <a 
              href="/career" 
              className={`px-3.5 py-1.5 sm:px-5 md:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm flex items-center transition-all ${pathname === "/career" ? "bg-white text-brand-dark font-bold shadow-md hover:scale-105" : "bg-white/10 text-white font-medium hover:bg-white/20"}`}
            >
              Career
            </a>
            <a 
              href="/contact" 
              className={`px-4 py-1.5 sm:px-5 md:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm flex items-center transition-all ${pathname === "/contact" ? "bg-brand-primary text-white font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 hover:bg-orange-600" : "bg-brand-primary text-white font-medium hover:bg-orange-600 shadow-lg shadow-brand-primary/20"}`}
            >
              Get in Touch
            </a>
          </div>

        </nav>
      </motion.div>
    </div>
    </>
  );
}

