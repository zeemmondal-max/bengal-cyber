"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdTrendingUp, MdLightbulb, MdPalette, MdHandshake, MdVisibility, MdRocketLaunch, MdCode, MdSecurity, MdPeople, MdSpeed, MdCheckCircle } from "react-icons/md";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Spacer */}
      <div className="h-20 bg-slate-50"></div>
      
      {/* Hero Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4">About Bengal Cyber</h4>
            <h1 className="text-5xl md:text-7xl font-extrabold text-brand-dark mb-8 tracking-tight">Architecting Digital Legacies in Bangladesh</h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-balance">
              We don't just market brands—we engineer digital empires. Combining high-performance Website Design, viral Social Media Marketing, and precision Media Buying to make your business impossible to ignore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story / Who We Are */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-brand-light p-12 flex items-center justify-center group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent mix-blend-multiply transition-opacity duration-500 group-hover:opacity-50"></div>
              <Image src="/logo.png" alt="Bengal Cyber Logo - Leading Web Design & Digital Marketing Agency in Bangladesh" width={400} height={150} className="object-contain relative z-10 filter grayscale brightness-0 opacity-80 group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-brand-dark mb-6">Who We Are</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Born from a passion for storytelling and digital innovation, <strong>Bengal Cyber</strong> has grown into Bangladesh's premier creative and performance marketing agency. We recognized early on that a great product isn't enough on its own—it needs a magnetic voice, an authoritative digital identity, and a conversion-focused strategy to dominate market share.
                </p>
                <p>
                  That's why we specialized our focus into a powerhouse of six core disciplines: <strong>Custom Website Design & Development, Social Media Marketing, Performance Media Buying, Graphics Design, Video Editing, and 24/7 Customer Service.</strong> 
                </p>
                <p>
                  We don't believe in cookie-cutter templates or generic ad campaigns. We dive deep into the DNA of your brand to craft tailored visual identities, scroll-stopping videos, and hyper-targeted ad strategies that drive real, measurable revenue.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-24 bg-brand-light relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h4 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4">Meet the Founder</h4>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">Zeem Mondal</h2>
              <h3 className="text-xl md:text-2xl font-medium text-slate-500 mb-8">Business Consultant & Digital Marketing Expert</h3>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed relative">
                {/* Quote icon watermark */}
                <div className="absolute -top-10 -left-6 text-9xl text-brand-primary/10 font-serif leading-none select-none">"</div>
                
                <p className="relative z-10 font-medium text-brand-dark/80 italic">
                  "Innovation isn't just about adopting new technology—it's about finding creative ways to solve real business problems and build lasting relationships between brands and their audiences."
                </p>
                <p>
                  With over <strong>5 years of hands-on experience</strong> in the dynamic Bangladesh market, Zeem Mondal has established himself as a trusted Business Consultant and Digital Marketing powerhouse. Having successfully partnered with diverse brands across multiple industries, he brings a wealth of localized knowledge combined with global marketing standards.
                </p>
                <p>
                  As a passionately driven entrepreneur and quick learner, Zeem thrives on <strong>Business Innovation</strong>. His journey is defined by rigorous training, proper guidance, and a relentless commitment to mastering the ever-evolving digital landscape. Under his leadership, Bengal Cyber doesn't just execute campaigns; we architect holistic growth strategies that turn ambitious ideas into market-leading realities.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Image styling with soft borders and decorative shadow */}
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-dark/10 border-8 border-white">
                <Image 
                  src="/founder.jpg" 
                  alt="Zeem Mondal - Founder of Bengal Cyber" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
              {/* Decorative accent shape */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-primary rounded-full blur-[80px] -z-10 opacity-50"></div>
            </motion.div>

          </div>
        </div>
      </section>
 
      {/* Leadership Team - Department Heads */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4">Core Management</h4>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">Leadership Team</h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance">
                The powerhouse department heads driving Bengal Cyber's technical innovation, people culture, and operational excellence.
              </p>
            </motion.div>
          </div>

          {/* 3-Column Profile Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Babul Hossen - IT Head */}
            <motion.div
              className="bg-slate-50 rounded-[2.5rem] border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-[4/4.5] overflow-hidden bg-slate-200">
                <Image
                  src="/babul-hossen.jpg"
                  alt="Babul Hossen - IT Head at Bengal Cyber"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3.5 py-1.5 bg-brand-dark/85 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-md border border-white/20">
                    IT & Tech
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <span className="text-brand-primary font-bold text-xs uppercase tracking-widest">Technical Leadership</span>
                  <h3 className="text-2xl font-extrabold text-brand-dark mt-1 mb-1">Babul Hossen</h3>
                  <p className="text-slate-500 font-semibold text-sm mb-4">IT Head</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Leads technical operations, scalable systems architecture, web and app engineering, and robust cybersecurity protocols across client platforms.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs text-slate-600 font-medium">Web Architecture</span>
                  <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs text-slate-600 font-medium">Cybersecurity</span>
                </div>
              </div>
            </motion.div>

            {/* 2. Zereen Mondal - HR Head */}
            <motion.div
              className="bg-slate-50 rounded-[2.5rem] border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative aspect-[4/4.5] overflow-hidden bg-slate-200">
                <Image
                  src="/zereen-mondal.jpg"
                  alt="Zereen Mondal - HR Head at Bengal Cyber"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3.5 py-1.5 bg-brand-primary text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-md">
                    HR & Culture
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <span className="text-brand-primary font-bold text-xs uppercase tracking-widest">People & Culture</span>
                  <h3 className="text-2xl font-extrabold text-brand-dark mt-1 mb-1">Zereen Mondal</h3>
                  <p className="text-slate-500 font-semibold text-sm mb-4">HR Head</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Directs human resources, talent acquisition, professional development, and organizational culture—fostering high morale and creative excellence.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs text-slate-600 font-medium">Talent Strategy</span>
                  <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs text-slate-600 font-medium">Team Wellbeing</span>
                </div>
              </div>
            </motion.div>

            {/* 3. Ismahile Hossain - Operation Head */}
            <motion.div
              className="bg-slate-50 rounded-[2.5rem] border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative aspect-[4/4.5] overflow-hidden bg-slate-200">
                <Image
                  src="/ismahile-hossain.jpg"
                  alt="Ismahile Hossain - Operation Head at Bengal Cyber"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3.5 py-1.5 bg-brand-dark/85 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-md border border-white/20">
                    Operations
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <span className="text-brand-primary font-bold text-xs uppercase tracking-widest">Operations & Delivery</span>
                  <h3 className="text-2xl font-extrabold text-brand-dark mt-1 mb-1">Ismahile Hossain</h3>
                  <p className="text-slate-500 font-semibold text-sm mb-4">Operation Head</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Orchestrates agile project execution, cross-department workflows, delivery schedules, and quality assurance for flawless client delivery.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs text-slate-600 font-medium">Agile Delivery</span>
                  <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs text-slate-600 font-medium">Quality Control</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>
 
      {/* Advisory Panel */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/60">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4">Strategic Governance</h4>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">Advisory Panel</h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance">
                Distinguished mentors and industry leaders guiding Bengal Cyber with seasoned strategic foresight, market governance, and enduring business wisdom.
              </p>
            </motion.div>
          </div>

          {/* Advisors Container */}
          <div className="flex justify-center">
            {/* Advisor: Md Kamruzzaman Didar */}
            <motion.div
              className="w-full max-w-md bg-white rounded-[2.5rem] border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-[4/4.5] overflow-hidden bg-slate-100">
                <Image
                  src="/kamruzzaman-didar.jpg"
                  alt="Md Kamruzzaman Didar - Business Consultant and Development Advisor"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3.5 py-1.5 bg-brand-primary text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-md">
                    Advisor
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-brand-primary font-bold text-xs uppercase tracking-widest">Business & Development</span>
                  <h3 className="text-2xl font-extrabold text-brand-dark mt-1 mb-2">Md Kamruzzaman Didar</h3>
                  <p className="text-slate-500 font-semibold text-sm mb-4">Business Consultant & Development Advisor</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Provides seasoned mentorship and strategic guidance to Bengal Cyber on enterprise business scaling, development strategy, and long-term commercial innovation.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-slate-500">
                  <span>Advisory Council</span>
                  <span className="text-brand-primary font-bold">Bengal Cyber</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-24 bg-brand-dark text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white/5 border border-white/10 p-12 rounded-[2rem] hover:bg-white/10 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mb-8">
                <MdRocketLaunch className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                To empower businesses to dominate the digital age by delivering highly targeted Social Media Marketing and precise Media Buying strategies. We bridge the gap between brands and their audiences through compelling Graphics and captivating Video Editing, ensuring every interaction is backed by world-class Customer Service.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/5 border border-white/10 p-12 rounded-[2rem] hover:bg-white/10 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mb-8">
                <MdVisibility className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                We envision a digital landscape where every brand, no matter its size, has the creative firepower and data-driven insights to become an industry leader. We strive to be the ultimate all-in-one growth partner that transforms your bold ideas into enduring, long-term success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">The Values That Drive Us</h2>
            <p className="text-lg text-slate-600">The core principles that guide our work, our culture, and our commitment to your success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MdLightbulb, title: "Creative Excellence", desc: "We push boundaries in design and video to ensure your brand stands out." },
              { icon: MdTrendingUp, title: "Data-Driven ROI", desc: "Every media buy and marketing campaign is fueled by hard data and analytics." },
              { icon: MdHandshake, title: "True Partnership", desc: "We don't just work for you; we work with you as an extension of your team." },
              { icon: MdPalette, title: "Uncompromising Quality", desc: "From the first pixel to the final customer service ticket, we demand the best." }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-3">{value.title}</h4>
                <p className="text-slate-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
