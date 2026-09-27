"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { name: "FBCCI", src: "/logos/fbcci.png" },
  { name: "BASIS", src: "/logos/basis.jpg" },
  { name: "ICT Division", src: "/logos/ict.png" },
  { name: "SME Foundation", src: "/logos/sme.jpg" },
];

export default function LogoTicker() {
  // We duplicate the logos array a few times so the marquee is long enough to loop seamlessly
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-10 bg-white/40 backdrop-blur-md border-y border-white/50 overflow-hidden relative flex flex-col items-center shadow-sm z-10">
      <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Proud Members & Recognitions</h2>
      
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-full">
        <motion.div 
          className="flex flex-nowrap items-center gap-16 pr-16 md:gap-24 md:pr-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {marqueeLogos.map((logo, index) => (
            <div key={index} className="relative w-32 h-16 md:w-40 md:h-20 shrink-0 flex items-center justify-center">
              <Image 
                src={logo.src} 
                alt={logo.name} 
                fill
                className="object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
