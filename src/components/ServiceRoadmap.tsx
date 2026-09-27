"use client";

import { motion } from "framer-motion";
import { MdSearch, MdBrush, MdRocketLaunch, MdTrendingUp } from "react-icons/md";

const steps = [
  {
    id: "01",
    title: "Discovery & Strategy",
    description: "We start by deeply analyzing your brand, target audience, and market competitors. We then craft a data-backed blueprint designed specifically to achieve your business goals.",
    icon: MdSearch,
  },
  {
    id: "02",
    title: "Creative Production",
    description: "Our designers and video editors get to work, crafting thumb-stopping visual assets, compelling graphics, and high-quality content that speaks directly to your audience.",
    icon: MdBrush,
  },
  {
    id: "03",
    title: "Campaign Execution",
    description: "We launch your media buying and social media campaigns using the approved assets. Our team handles the heavy lifting, ensuring your ads and posts are deployed flawlessly.",
    icon: MdRocketLaunch,
  },
  {
    id: "04",
    title: "Analysis & Optimization",
    description: "We continuously monitor campaign performance, tracking conversions and engagement. We A/B test and optimize in real-time to maximize your ROI and scale what works.",
    icon: MdTrendingUp,
  },
];

export default function ServiceRoadmap() {
  return (
    <section className="py-32 bg-transparent relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-4">Our Process</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">The Road to Success</h3>
          <p className="text-slate-600 text-lg md:text-xl text-balance">
            A proven, four-step methodology to transform your brand's digital presence and accelerate measurable growth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 rounded-full hidden sm:block"></div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={step.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  
                  {/* Content Box */}
                  <div className={`flex-1 w-full ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white/70 backdrop-blur-md border border-slate-100/50 p-8 md:p-10 rounded-[2rem] shadow-xl shadow-brand-dark/5 hover:shadow-2xl hover:shadow-brand-primary/10 transition-shadow duration-300 relative group overflow-hidden">
                      <div className="absolute top-0 right-0 p-6 text-9xl font-black text-slate-900/5 -z-10 group-hover:scale-110 transition-transform duration-500">
                        {step.id}
                      </div>
                      <h4 className="text-2xl font-bold text-brand-dark mb-4">{step.title}</h4>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden sm:flex absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-brand-primary rounded-full items-center justify-center z-10 shadow-lg shadow-brand-primary/20">
                    <Icon className="w-7 h-7 text-brand-primary" />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
