"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdAdd, MdRemove, MdHelpOutline } from "react-icons/md";

const faqs = [
  {
    question: "Why choose Bengal Cyber for Website Design & Digital Marketing in Bangladesh?",
    answer: "Bengal Cyber doesn't deliver generic templates or low-engagement ads. We combine high-performance web engineering (Next.js, Tailwind, cutting-edge UI/UX) with data-backed media buying and viral social media marketing. Our strategies are specifically tailored to dominate the competitive Bangladesh market while meeting international standards of conversion and brand authority."
  },
  {
    question: "How do your Social Media Marketing and Media Buying services drive real ROI?",
    answer: "We focus on bottom-line revenue, not vanity metrics. Through granular audience segmentation on Meta (Facebook & Instagram) and Google, advanced A/B creative testing, and high-conversion ad copy, we ensure your ad budget achieves lower Customer Acquisition Cost (CAC) and maximum Return on Ad Spend (ROAS)."
  },
  {
    question: "What technology stack do you use for Web Design & Development?",
    answer: "We engineer lightning-fast, SEO-optimized web platforms using React, Next.js, TypeScript, and modern headless architectures. Every website we build features sub-second load times, mobile-first responsiveness, rigorous on-page SEO, and secure e-commerce integrations tailored for both local payment gateways (bKash, Nagad, SSLCommerz) and international processors."
  },
  {
    question: "How long does a typical website or marketing campaign take to launch?",
    answer: "Custom website design and development typically ranges from 2 to 4 weeks depending on feature complexity and e-commerce scale. For social media marketing and media buying campaigns, our onboarding, strategy blueprint, and initial creative production take approximately 3 to 5 business days before live deployment."
  },
  {
    question: "Can Bengal Cyber manage our customer service alongside marketing?",
    answer: "Yes. In fact, integrating Customer Support with marketing is one of our key competitive advantages. Our 24/7 dedicated support specialists handle live chat, Facebook Messenger inquiries, WhatsApp leads, and ticket escalations so you never lose a paying customer after running ad campaigns."
  }
];

export default function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-transparent relative z-10" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">
            <MdHelpOutline className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight mb-4">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-lg text-slate-600 text-balance">
            Everything you need to know about our digital marketing, web development, and brand growth services in Bangladesh.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 md:p-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg md:text-xl font-bold text-brand-dark leading-snug">
                    {faq.question}
                  </h3>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? <MdRemove className="w-5 h-5" /> : <MdAdd className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-slate-600 text-base md:text-lg leading-relaxed border-t border-slate-100/60 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
