"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MdArrowForward, MdPlayCircleOutline } from "react-icons/md";

const highlights = [
  {
    id: 1,
    title: "Cancer Answer",
    category: "Medical Video Production",
    media: "/projects/cancer-answer.mp4",
    type: "video",
    gridClass: "md:col-span-8 md:row-span-2 h-[400px] md:h-[600px]",
    color: "from-[#00a859]/80 to-black/90"
  },
  {
    id: 2,
    title: "Eva Iqra Motors",
    category: "Automotive Ads",
    media: "/projects/eva-iqra-motors.jpg",
    type: "image",
    gridClass: "md:col-span-4 md:row-span-1 h-[300px] md:h-[288px]",
    color: "from-[#1877F2]/80 to-black/90"
  },
  {
    id: 3,
    title: "Karizma Care",
    category: "Video Marketing",
    media: "/projects/project1.mp4",
    type: "video",
    gridClass: "md:col-span-4 md:row-span-1 h-[300px] md:h-[288px]",
    color: "from-brand-primary/80 to-black/90"
  },
  {
    id: 4,
    title: "Bengal Glory Ltd",
    category: "Custom Web Development",
    media: "/projects/bengal-glory-mockup.png",
    type: "image",
    gridClass: "md:col-span-12 md:row-span-1 h-[300px] md:h-[300px]",
    color: "from-slate-800/90 to-black/90"
  }
];

export default function ProjectHighlights() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-brand-primary"></div>
              <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-brand-dark tracking-tight mb-4 leading-tight">
              Work that <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">speaks</span> for itself.
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              We don't just build campaigns; we craft digital experiences that dominate markets and accelerate growth.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a 
              href="/portfolio" 
              className="group relative inline-flex items-center gap-2 font-bold text-white bg-brand-dark px-8 py-4 rounded-full overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-brand-dark/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-brand-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              <span className="relative z-10">Explore Our Portfolio</span>
              <MdArrowForward className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          {highlights.map((item, index) => (
            <motion.a
              href="/portfolio"
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className={`group relative block rounded-[2rem] overflow-hidden shadow-lg border border-white/40 cursor-none ${item.gridClass}`}
            >
              {/* Media Background */}
              <div className="absolute inset-0 bg-black">
                {item.type === 'video' ? (
                  <video 
                    src={item.media} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                ) : (
                  <Image 
                    src={item.media} 
                    alt={item.title} 
                    fill 
                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100 bg-white"
                  />
                )}
              </div>
              
              {/* Dynamic Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>
              
              {/* Play Icon for Videos */}
              {item.type === 'video' && (
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 z-20">
                  <MdPlayCircleOutline className="w-8 h-8" />
                </div>
              )}

              {/* Content Reveal */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white font-bold text-xs tracking-wider uppercase mb-3 shadow-sm border border-white/20">
                    {item.category}
                  </div>
                  <h3 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
