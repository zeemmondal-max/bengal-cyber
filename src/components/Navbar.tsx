"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "/about" },
    { name: "Career", href: "/career" },
    { name: "Get in Touch", href: "/contact", isCta: true },
  ];

  return (
    <>
      {/* ========================================================= */}
      {/* 1. MOBILE RESPONSIVE MENU BAR (RIGHT SIDE DOCKED)         */}
      {/* Positioned vertically centered on the right edge (< md)    */}
      {/* ========================================================= */}
      <div className="md:hidden">
        {/* Full Backdrop Overlay when Mobile Menu is Open */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-[3px] z-[70] pointer-events-auto"
              onClick={() => setIsMobileOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Floating Mobile Trigger Tab (Visible on Right Edge when Menu is Closed) */}
        <AnimatePresence>
          {!isMobileOpen && (
            <motion.button
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 30, opacity: 0 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileOpen(true)}
              className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] flex flex-col items-center justify-center bg-brand-dark/90 backdrop-blur-xl border-l-2 border-y-2 border-orange-500/50 rounded-l-2xl py-3 px-2 shadow-2xl shadow-brand-primary/40 cursor-pointer group pointer-events-auto"
              aria-label="Open Navigation Menu"
            >
              {/* Droplet with Ping and Bounce */}
              <div className="relative flex items-center justify-center my-1">
                <div className="absolute w-6 h-6 bg-brand-primary/40 rounded-full animate-ping pointer-events-none" />
                <div className="relative w-3.5 h-3.5 bg-brand-primary rounded-full rounded-br-none rotate-45 shadow-md shadow-brand-primary/40 animate-bounce" />
              </div>

              {/* Vertical Text Indicator */}
              <span className="text-[9px] font-extrabold tracking-widest text-orange-400 rotate-90 my-3.5 select-none uppercase">
                MENU
              </span>

              {/* Glowing Pulse Dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Mobile Slide-Out Menu Island Panel (Right Side Docked) */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ x: 200, opacity: 0, scale: 0.92 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: 200, opacity: 0, scale: 0.92 }}
              transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.8 }}
              className="fixed right-3 top-1/2 -translate-y-1/2 z-[80] w-[270px] max-w-[85vw] pointer-events-auto"
            >
              <div className="relative bg-brand-dark/95 backdrop-blur-2xl text-white p-5 rounded-3xl border border-orange-500/40 shadow-2xl shadow-brand-primary/50 flex flex-col gap-3 overflow-hidden">
                
                {/* Traveling Sine Wave Light Ribbon (Top of Island) */}
                <div className="absolute top-0 left-0 right-0 h-4 overflow-hidden pointer-events-none">
                  <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                    className="w-[200%] h-full flex"
                  >
                    <svg viewBox="0 0 800 30" className="w-1/2 h-full" preserveAspectRatio="none" fill="none">
                      <path
                        d="M 0 10 Q 100 0, 200 10 T 400 10 T 600 10 T 800 10"
                        stroke="url(#mobileWaveGrad)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        className="filter drop-shadow-[0_2px_8px_rgba(249,115,22,0.9)]"
                      />
                      <defs>
                        <linearGradient id="mobileWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#ea580c" stopOpacity="0.2" />
                          <stop offset="30%" stopColor="#f97316" stopOpacity="0.9" />
                          <stop offset="50%" stopColor="#fde047" stopOpacity="1" />
                          <stop offset="70%" stopColor="#f97316" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#ea580c" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg viewBox="0 0 800 30" className="w-1/2 h-full" preserveAspectRatio="none" fill="none">
                      <path
                        d="M 0 10 Q 100 0, 200 10 T 400 10 T 600 10 T 800 10"
                        stroke="url(#mobileWaveGrad2)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        className="filter drop-shadow-[0_2px_8px_rgba(249,115,22,0.9)]"
                      />
                      <defs>
                        <linearGradient id="mobileWaveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
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

                {/* Ambient Glow behind the card */}
                <motion.div
                  animate={{
                    scaleX: [0.95, 1.1, 0.95],
                    opacity: [0.6, 0.9, 0.6],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 rounded-full blur-xl pointer-events-none -z-10"
                />

                {/* Header with Droplet and Close Button */}
                <div className="flex items-center justify-between pt-1 pb-1 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-5 h-5 bg-brand-primary/40 rounded-full animate-ping" />
                      <div className="relative w-3 h-3 bg-brand-primary rounded-full rounded-br-none rotate-45 shadow-sm shadow-brand-primary/40" />
                    </div>
                    <span className="text-xs font-bold tracking-wider text-white uppercase">
                      Navigation
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                    aria-label="Close Menu"
                  >
                    ✕
                  </button>
                </div>

                {/* Vertical Links List */}
                <div className="flex flex-col gap-2 pt-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    if (link.isCta) {
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsMobileOpen(false)}
                          className={`mt-1 px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center justify-between transition-all ${
                            isActive
                              ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/30 ring-2 ring-white/50"
                              : "bg-brand-primary text-white shadow-lg shadow-brand-primary/20 hover:bg-orange-600"
                          }`}
                        >
                          <span>{link.name}</span>
                          <span className="text-sm">→</span>
                        </a>
                      );
                    }
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileOpen(false)}
                        className={`px-4 py-2.5 rounded-2xl text-xs font-medium flex items-center justify-between transition-all ${
                          isActive
                            ? "bg-white text-brand-dark font-bold shadow-md"
                            : "bg-white/5 text-white/90 hover:bg-white/15 border border-white/5"
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />}
                      </a>
                    );
                  })}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ========================================================= */}
      {/* 2. DESKTOP NAVBAR (CENTERED DYNAMIC ISLAND AT TOP)         */}
      {/* Preserves 100% of desktop original layout & animations     */}
      {/* ========================================================= */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 z-50 flex-col items-center pointer-events-none">
        {/* Trigger Area (Water Drop) */}
        <div 
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-64 h-16 flex justify-center items-start cursor-pointer group z-[60] ${isNavVisible ? 'pointer-events-none' : 'pointer-events-auto'}`}
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
          className="w-full flex justify-center pointer-events-auto absolute top-0"
        >
          <nav className={`relative bg-brand-dark/70 backdrop-blur-xl text-white p-4 md:p-6 rounded-b-[2.5rem] w-auto max-w-fit transition-shadow duration-500 ${isNavVisible ? 'shadow-2xl shadow-brand-primary/40' : 'shadow-lg shadow-brand-primary/30'}`}>
          
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
                      stroke="url(#orangeWaveGradDesktop)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      className="filter drop-shadow-[0_2px_8px_rgba(249,115,22,0.9)]"
                    />
                    <defs>
                      <linearGradient id="orangeWaveGradDesktop" x1="0%" y1="0%" x2="100%" y2="0%">
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
                      stroke="url(#orangeWaveGradDesktop2)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      className="filter drop-shadow-[0_2px_8px_rgba(249,115,22,0.9)]"
                    />
                    <defs>
                      <linearGradient id="orangeWaveGradDesktop2" x1="0%" y1="0%" x2="100%" y2="0%">
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
            
            {/* Inverse Curve Fillets (Desktop Only) */}
            <div 
              className="absolute top-0 -left-6 w-6 h-6 bg-brand-dark/70 backdrop-blur-xl" 
              style={{ 
                WebkitMaskImage: 'radial-gradient(circle at bottom left, transparent 24px, black 24.2px)', 
                maskImage: 'radial-gradient(circle at bottom left, transparent 24px, black 24.2px)' 
              }}
            />
            <div 
              className="absolute top-0 -right-6 w-6 h-6 bg-brand-dark/70 backdrop-blur-xl" 
              style={{ 
                WebkitMaskImage: 'radial-gradient(circle at bottom right, transparent 24px, black 24.2px)', 
                maskImage: 'radial-gradient(circle at bottom right, transparent 24px, black 24.2px)' 
              }}
            />

            {/* Middle Row: Pill Tabs */}
            <div className="flex items-center gap-2.5 md:gap-3 max-w-full">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                if (link.isCta) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`px-5 md:px-6 py-2.5 rounded-full text-sm flex items-center transition-all ${
                        isActive
                          ? "bg-brand-primary text-white font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 hover:bg-orange-600"
                          : "bg-brand-primary text-white font-medium hover:bg-orange-600 shadow-lg shadow-brand-primary/20"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                }
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`px-5 md:px-6 py-2.5 rounded-full text-sm flex items-center transition-all ${
                      isActive
                        ? "bg-white text-brand-dark font-bold shadow-md hover:scale-105"
                        : "bg-white/10 text-white font-medium hover:bg-white/20"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

          </nav>
        </motion.div>
      </div>
    </>
  );
}
