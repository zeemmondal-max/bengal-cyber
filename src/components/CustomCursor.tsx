"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use motion values for better performance than React state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement slightly
  const springX = useSpring(mouseX, { stiffness: 1000, damping: 50, mass: 0.1 });
  const springY = useSpring(mouseY, { stiffness: 1000, damping: 50, mass: 0.1 });

  useEffect(() => {
    setMounted(true);
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updateMousePosition);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: springX,
        y: springY,
        opacity: isVisible ? 1 : 0
      }}
    >
      <div
        className="relative w-6 h-6 -translate-x-[2px] -translate-y-[2px] -rotate-12"
        style={{
          filter: "drop-shadow(1px 1px 0 #000) drop-shadow(-1px -1px 0 #000) drop-shadow(1px -1px 0 #000) drop-shadow(-1px 1px 0 #000) drop-shadow(0 10px 15px rgba(0,0,0,0.3))"
        }}
      >
        {/* The Base Cursor Image */}
        <img 
          src="/cursor.png" 
          alt="" 
          className="w-full h-full object-contain" 
        />
        
        {/* The Animated Glossy Sheen Overlay */}
        <motion.div 
          className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay"
          animate={{ backgroundPosition: ["-100% -100%", "200% 200%", "-100% -100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            WebkitMaskImage: "url('/cursor.png')",
            maskImage: "url('/cursor.png')",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            background: "linear-gradient(135deg, rgba(255,255,255,0) 25%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 75%)",
            backgroundSize: "250% 250%"
          }}
        />
      </div>
    </motion.div>
  );
}
