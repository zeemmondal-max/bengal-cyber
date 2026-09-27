"use client";

import { motion } from "framer-motion";
import { MdTrendingUp, MdStorefront, MdRocketLaunch, MdInsights, MdPublic } from "react-icons/md";

export default function BangladeshMarket() {
  const features = [
    {
      title: "Digital Marketing in Bangladesh",
      description: "With over 130 million internet users, Bangladesh is rapidly evolving into a mobile-first digital frontier. We craft data-driven, culturally resonant campaigns that capture local attention and drive massive engagement across all major platforms.",
      icon: MdTrendingUp,
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
    {
      title: "SME Empowerment",
      description: "Small and Medium Enterprises are the heartbeat of our economy. We provide cost-effective, highly scalable digital solutions to help traditional local businesses transition online, compete with larger brands, and dominate their niche.",
      icon: MdStorefront,
      color: "text-brand-primary",
      bg: "bg-orange-50",
      border: "border-orange-100"
    },
    {
      title: "Startup Ecosystem Growth",
      description: "As Dhaka's tech scene explodes, startups need aggressive growth strategies. We act as dedicated growth partners, deploying viral social media marketing and high-ROI media buying to help you scale fast and secure investor confidence.",
      icon: MdRocketLaunch,
      color: "text-purple-500",
      bg: "bg-purple-50",
      border: "border-purple-100"
    }
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Context & Headline */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-8 border border-brand-primary/20 backdrop-blur-md">
              <MdPublic className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">
              Rewriting the rules of <span className="text-brand-primary">Digital Marketing</span> in Bangladesh.
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">
              We understand the unique pulse of the local market. From emerging tech startups to established family SMEs, our digital strategies are engineered specifically for the behaviors, trends, and opportunities within Bangladesh.
            </p>
            
            <div className="flex items-center space-x-4 bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-white">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-primary shrink-0 border border-brand-primary/10">
                <MdInsights className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-slate-700">
                <span className="block font-bold text-brand-dark text-base">Local Insights, Global Standards</span>
                Tailored strategies for the BD consumer.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Features List */}
          <div className="lg:col-span-7 space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={index}
                  className={`bg-white/70 backdrop-blur-md rounded-[2rem] p-8 md:p-10 border border-white shadow-xl hover:bg-white transition-all duration-300 group relative overflow-hidden`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full ${feature.bg} -z-10 group-hover:scale-150 transition-transform duration-700`}></div>
                  
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${feature.bg} ${feature.color} border border-white/50 shadow-sm`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-brand-dark mb-3">{feature.title}</h3>
                      <p className="text-slate-700 leading-relaxed text-lg font-medium">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
