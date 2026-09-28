"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MdEmail, MdPhone, MdLocationOn, MdSend } from "react-icons/md";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "General Inquiry",
    message: ""
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const serviceQuery = params.get("service");
      
      if (serviceQuery) {
        // Find if the passed query roughly matches one of our options
        const options = ["General Inquiry", "Web Design & Development", "Social Media Marketing", "Media Buying", "Graphics Design", "Video Editing", "Customer Service"];
        const matched = options.find(opt => opt.toLowerCase() === serviceQuery.toLowerCase());
        
        if (matched) {
          setFormState(prev => ({ ...prev, service: matched }));
        }
      }
    }
  }, []);


  const [file, setFile] = useState<File | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("phone", formState.phone);
    formData.append("subject", formState.service);
    formData.append("message", formState.message);
    formData.append("formType", "Client Inquiry");
    if (file) {
      formData.append("document", file);
    }

    try {
      await fetch("/send-mail.php", {
        method: "POST",
        body: formData,
      });
    } catch (err) {
      console.warn("Mail dispatch notice:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };


  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Spacer */}
      <div className="h-32 bg-brand-dark rounded-b-[3rem]"></div>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">
              Get in Touch • Start Your Project
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight">
              Let's Engineer Your Digital Growth in <span className="text-brand-primary">Bangladesh.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance">
              Ready to scale your business with custom Website Design, viral Social Media Marketing, or high-ROAS Media Buying? Connect with our growth strategists in Gulshan-1, Dhaka.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
            
            {/* Left: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-brand-dark text-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Decor */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              
              <h3 className="text-3xl font-bold mb-8 relative z-10">Contact Information</h3>
              <p className="text-white/70 mb-12 relative z-10 text-lg">
                Whether you have a question about our services, pricing, or just want to say hi, we're always here to help.
              </p>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-primary shrink-0">
                    <MdEmail className="w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <p className="text-sm text-white/50 font-medium uppercase tracking-wider mb-1">Email Us</p>
                    <a href="mailto:hello@bengalcyber.com" className="text-xl font-semibold hover:text-brand-primary transition-colors">hello@bengalcyber.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-primary shrink-0">
                    <MdPhone className="w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <p className="text-sm text-white/50 font-medium uppercase tracking-wider mb-1">Call Us</p>
                    <a href="tel:+8801901364583" className="text-xl font-semibold hover:text-brand-primary transition-colors">01901364583</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-primary shrink-0">
                    <MdLocationOn className="w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <p className="text-sm text-white/50 font-medium uppercase tracking-wider mb-1">Headquarters</p>
                    <p className="text-xl font-semibold leading-tight mb-1">The Business Center<br/>Gulshan 1, Dhaka</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-primary shrink-0">
                    <MdLocationOn className="w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <p className="text-sm text-white/50 font-medium uppercase tracking-wider mb-1">Secondary Office</p>
                    <p className="text-lg font-semibold leading-snug mb-1">Dream Palace: 2, Road 11-12,<br/>AlamNagar Housing, Hemayetpur, Savar</p>
                    <p className="text-white/70 mt-1">Available for client visits & meetings.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between relative z-10">
                <div>
                  <p className="text-xs text-brand-primary font-bold uppercase tracking-wider">Fast Turnaround</p>
                  <p className="text-sm text-white/80 font-medium">Replies within 24 business hours</p>
                </div>
                <a
                  href="https://wa.me/8801901364583"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#25D366] text-white font-bold text-sm rounded-full flex items-center gap-2 hover:bg-[#20ba59] transition-all hover:scale-105 shadow-lg shadow-[#25D366]/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-brand-primary/10 border-4 border-white relative overflow-hidden"
            >
              {/* Decorative floating orb behind form */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-brand-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

              {isSubmitted ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center relative z-10">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-24 h-24 bg-gradient-to-tr from-green-400 to-emerald-500 text-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-500/30"
                  >
                    <MdSend className="w-12 h-12 ml-1" />
                  </motion.div>
                  <h3 className="text-3xl font-black text-brand-dark mb-4 tracking-tight">Message Delivered!</h3>
                  <p className="text-slate-600 text-lg mb-8 max-w-sm">
                    Awesome, {formState.name.split(' ')[0]}! Our team has received your inquiry and will be in touch shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-8 py-4 bg-slate-100 text-brand-dark rounded-full font-bold hover:bg-slate-200 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="mb-8">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-sm tracking-wide mb-3">
                      Request for a meeting or call
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/20 focus:border-brand-primary focus:bg-white transition-all shadow-inner text-brand-dark font-bold"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/20 focus:border-brand-primary focus:bg-white transition-all shadow-inner text-brand-dark font-bold"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-2">Contact Number</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/20 focus:border-brand-primary focus:bg-white transition-all shadow-inner text-brand-dark font-bold"
                        value={formState.phone}
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-2">Subject</label>
                      <div className="relative">
                        <select 
                          className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/20 focus:border-brand-primary focus:bg-white transition-all shadow-inner text-brand-dark font-bold appearance-none cursor-pointer"
                          value={formState.service}
                          onChange={(e) => setFormState({...formState, service: e.target.value})}
                        >
                          <option>General Inquiry</option>
                          <option>Web Design & Development</option>
                          <option>Social Media Marketing</option>
                          <option>Media Buying</option>
                          <option>Graphics Design</option>
                          <option>Video Editing</option>
                          <option>Customer Service</option>
                        </select>
                        <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-slate-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-2">Message</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/20 focus:border-brand-primary focus:bg-white transition-all resize-none shadow-inner text-brand-dark font-bold"
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-2">
                      Attach Document / Brief (Optional - PDF, DOCX, ZIP, Images up to 25MB)
                    </label>
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx,.zip,.rar,.png,.jpg,.jpeg"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl focus:outline-none focus:border-brand-primary file:mr-4 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-brand-primary file:text-white hover:file:bg-orange-600 cursor-pointer text-slate-600 text-sm font-medium transition-all"
                    />
                    {file && (
                      <p className="text-xs text-brand-primary font-bold pl-2">
                        Attached: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                      </p>
                    )}
                  </div>

                  <button 

                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-brand-primary text-white font-black text-xl py-5 rounded-2xl hover:shadow-2xl hover:shadow-brand-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <MdSend className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
