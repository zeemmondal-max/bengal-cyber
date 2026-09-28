"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MdSend, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function HomeContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "General Inquiry",
    message: ""
  });

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
    formData.append("formType", "Homepage Inquiry");
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
    <section id="contact-form" className="py-24 bg-brand-dark relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/10 to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Copy */}
          <motion.div 
            className="lg:col-span-5 text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-brand-primary"></div>
              <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">Let's Connect</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Ready to scale your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Business?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-12 leading-relaxed">
              Drop us a line to discuss how Bengal Cyber can engineer your digital growth, manage your media campaigns, and boost your sales.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-primary shrink-0 backdrop-blur-sm">
                  <MdEmail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Email Us</p>
                  <p className="font-medium">hello@bengalcyber.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-primary shrink-0 backdrop-blur-sm">
                  <MdPhone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Call / WhatsApp</p>
                  <p className="font-medium">+880 1901-364583</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-primary shrink-0 backdrop-blur-sm mt-1">
                  <MdLocationOn className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Principal Office</p>
                  <p className="font-medium text-white">The Business Center, Gulshan 1, Dhaka</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-primary shrink-0 backdrop-blur-sm mt-1">
                  <MdLocationOn className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Secondary Office</p>
                  <p className="font-medium text-white text-sm leading-snug">Dream Palace: 2, Road 11-12, AlamNagar Housing, Hemayetpur, Savar</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <motion.div 
              className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
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
                    Awesome, {formState.name.split(' ')[0]}! Our team will review your inquiry and be in touch shortly.
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
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-2">Interested In</label>
                      <div className="relative">
                        <select 
                          className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/20 focus:border-brand-primary focus:bg-white transition-all shadow-inner text-brand-dark font-bold appearance-none cursor-pointer"
                          value={formState.service}
                          onChange={(e) => setFormState({...formState, service: e.target.value})}
                        >
                          <option>General Inquiry</option>
                          <option>Social Media Marketing</option>
                          <option>Graphics Design</option>
                          <option>Video Editing</option>
                          <option>Media Buying</option>
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
      </div>
    </section>
  );
}
