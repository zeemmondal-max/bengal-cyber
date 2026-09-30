"use client";

import { motion } from "framer-motion";
import { MdChat } from "react-icons/md";

export default function LiveChat() {
  const whatsappUrl = "https://wa.me/8801901364583?text=Hello%20Bengal%20Cyber%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 rounded-full text-white shadow-2xl flex items-center justify-center z-[100] bg-brand-primary hover:bg-orange-600 transition-colors duration-300 group"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}

      title="Send message to WhatsApp (+880 1901-364583)"
      aria-label="Send message to WhatsApp"
    >
      <MdChat className="w-7 h-7 text-white transition-transform duration-200 group-hover:scale-110" />
      
      {/* Active Online Indicator */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
      </span>
    </motion.a>
  );
}
