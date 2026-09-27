"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdChat, MdClose, MdSend } from "react-icons/md";

type Message = {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  time: string;
};

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to Bengal Cyber 👋 How can we help you grow your business today?",
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      const botMsg: Message = {
        id: Date.now() + 1,
        text: "Thanks for reaching out! Our support team has received your message and will connect with you here shortly. For urgent inquiries, call us at +880 1901-364583.",
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1500);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 w-16 h-16 rounded-full text-white shadow-2xl flex items-center justify-center z-[100] transition-colors duration-300 ${isOpen ? 'bg-slate-800' : 'bg-brand-primary hover:bg-orange-600'}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Live Support Chat"
      >
        {isOpen ? (
          <MdClose className="w-8 h-8" />
        ) : (
          <MdChat className="w-7 h-7" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-28 right-6 md:right-8 w-[350px] sm:w-[380px] h-[550px] max-h-[80vh] bg-white rounded-3xl shadow-2xl z-[90] flex flex-col overflow-hidden border border-slate-100"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-brand-dark to-slate-800 p-5 text-white flex items-center gap-4 shrink-0">
              <div className="relative">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <span className="font-black text-xl text-brand-primary">B</span>
                </div>
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-slate-800 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">Customer Support</h3>
                <p className="text-xs text-brand-primary font-medium tracking-wide">Typically replies instantly</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50 scrollbar-thin scrollbar-thumb-slate-200">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div 
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      msg.sender === 'user' 
                        ? 'bg-brand-primary text-white rounded-tr-sm shadow-md shadow-brand-primary/20' 
                        : 'bg-white border border-slate-100 text-slate-800 rounded-tl-sm shadow-sm'
                    }`}
                  >
                    <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium mt-1 px-1">{msg.time}</span>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex flex-col items-start">
                  <div className="bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1.5">
                    <motion.div className="w-2 h-2 bg-slate-300 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                    <motion.div className="w-2 h-2 bg-slate-300 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                    <motion.div className="w-2 h-2 bg-slate-300 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white border-t border-slate-100 shrink-0">
              <form onSubmit={handleSendMessage} className="flex items-center gap-2 relative">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-slate-50 border-none rounded-full px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium text-slate-700 placeholder-slate-400"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-600 transition-colors shadow-md shadow-brand-primary/20"
                >
                  <MdSend className="w-5 h-5 ml-1" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
