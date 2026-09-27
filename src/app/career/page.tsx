"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaClock, 
  FaMoneyBillWave, 
  FaCheckCircle, 
  FaRocket, 
  FaUsers, 
  FaLaptopCode, 
  FaGraduationCap, 
  FaCoffee, 
  FaChevronDown, 
  FaChevronUp,
  FaPaperPlane, 
  FaWhatsapp, 
  FaEnvelope, 
  FaArrowRight,
  FaBuilding,
  FaHeadset,
  FaChartLine,
  FaHandshake
} from "react-icons/fa";

interface JobCircular {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  deadline: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
}

const CIRCULARS: JobCircular[] = [
  {
    id: "sales-associate-parttime",
    title: "Sales Associate (Part-Time)",
    department: "Sales & Client Acquisition",
    location: "Dhaka (Flexible Field & Remote)",
    type: "Part-Time",
    experience: "Freshers / University Students (No prior experience required)",
    salary: "BDT 5,000 / month + Travel Allowance (TA) + Attractive Sales Commission",
    deadline: "Open until filled",
    summary: "A flexible part-time sales role ideal for energetic university students and freshers. Connect with local business owners, brands, and retail shops across Dhaka, pitch Bengal Cyber's digital marketing and web solutions, schedule meetings, and earn fixed salary + TA + lucrative sales commissions on closed deals.",
    responsibilities: [
      "Identify prospective clients, retail brands, e-commerce shops, and local business owners across Dhaka.",
      "Reach out to potential clients via phone calls, social media channels, WhatsApp, and in-person visits.",
      "Introduce Bengal Cyber's services (Website Development, Social Media Marketing, Meta Ads, Graphic Design, and Video Production).",
      "Schedule client consultation meetings and coordinate with senior sales leads to present proposals.",
      "Follow up with prospective clients to help convert leads into successful closed sales.",
      "Maintain a weekly record of contacted leads, meeting outcomes, and commission reports."
    ],
    requirements: [
      "Active university/college students or fresh graduates looking for an ambitious, flexible part-time income.",
      "Energetic, polite, and persuasive communication skills in Bengali; basic conversational English.",
      "Comfortable reaching out to business owners, networking on social media, and attending client meetings.",
      "High drive, self-motivation, and passion to earn attractive commissions on closed sales.",
      "No prior corporate experience required; hands-on sales training and presentation guidance will be provided."
    ],
    skills: [
      "Part-Time Sales",
      "Lead Outreach",
      "Client Communication",
      "Networking",
      "Social Selling",
      "Deal Closing Support",
      "Travel Allowance (TA)"
    ]
  },
  {
    id: "marketing-sales-executive",
    title: "Marketing & Sales Executive (Field Level)",
    department: "Marketing & Business Development",
    location: "Dhaka (Field Visits & Gulshan 1 Hub)",
    type: "Full-Time (Field Level)",
    experience: "1+ Years preferred (Freshers with strong sales hunger welcome)",
    salary: "BDT 18,000 - 20,000 / month (based on experience) + Attractive Commission on successful sales",
    deadline: "Open until filled",
    summary: "A high-impact field-level role for an energetic closer. Conduct direct client visits, attend scheduled and direct in-person meetings with business owners, retail brands, and corporate clients across Dhaka, present Bengal Cyber's digital services, and successfully convert prospects into closed sales.",
    responsibilities: [
      "Conduct regular field visits to meet prospective corporate clients, retail brands, and business owners across Dhaka.",
      "Attend scheduled client meetings to deliver compelling presentations on Bengal Cyber's services (Website Development, Social Media Marketing, Meta Ads, Graphic Design, and Video Production).",
      "Identify client needs, consult on digital growth strategies, and propose tailored marketing packages.",
      "Negotiate deal terms, handle objections effectively, and convert prospective leads into paying clients.",
      "Maintain post-sale client relationships to ensure smooth onboarding, customer satisfaction, and repeat business/upsells.",
      "Prepare and submit daily meeting activity logs, sales pipeline updates, and monthly target reports to management."
    ],
    requirements: [
      "Demonstrated experience or strong natural talent for field sales, direct marketing, or B2B sales meetings.",
      "Outstanding communication, presentation, persuasion, and deal-closing skills in Bengali (conversational English is a plus).",
      "High energy, proactive mindset, and agility to travel within Dhaka city for daily client meetings and field prospecting.",
      "Strong self-motivation, goal-driven attitude, resilience, and passion to earn high commission through successful sales.",
      "Professional demeanor, smart grooming, punctuality, and excellent relationship-building abilities.",
      "Educational Background: Minimum Bachelor's / HSC / running students with exceptional sales drive and closing skills."
    ],
    skills: [
      "Field Sales",
      "Client Meetings",
      "Sales Conversion",
      "B2B Sales",
      "Deal Closing",
      "Negotiation",
      "Lead Generation",
      "Relationship Management"
    ]
  },
  {
    id: "customer-service-officer",
    title: "Customer Service Officer",
    department: "Customer Support & Operations",
    location: "The Business Center, Gulshan 1, Dhaka",
    type: "Full-Time",
    experience: "Freshers / 6 Months+ (Freshers are encouraged to apply)",
    salary: "BDT 12,000 - 15,000 / month",
    deadline: "Open until filled",
    summary: "Deliver outstanding customer experiences by handling incoming client and customer inquiries across phone calls, WhatsApp Business, and Facebook Page Messenger, recording orders, and resolving queries with patience and professionalism.",
    responsibilities: [
      "Manage incoming customer communications across Facebook Page Messenger, WhatsApp Business, Phone Calls, and Website Live Chat.",
      "Respond promptly, courteously, and accurately to customer inquiries regarding services, products, pricing, and campaign updates.",
      "Process customer orders, verify customer contact details, and record order details into Google Sheets and CRM databases.",
      "Coordinate with internal operations, marketing, and delivery teams to ensure timely order dispatch and resolve customer concerns.",
      "Collect customer feedback and report common questions or issues to the team lead for continuous improvement.",
      "Maintain a polite, positive, and empathetic tone in all interactions representing Bengal Cyber."
    ],
    requirements: [
      "Educational Background: Minimum HSC completed / Bachelor's degree / Running university students who can commit to full-time working hours.",
      "Fluent and polite verbal communication in Bengali; basic written communication in English.",
      "Fast typing speed and comfort with Bengali (Avro/Bijoy) and English typing on computers and smartphones.",
      "Active knowledge and familiarity with Facebook Pages Inbox, WhatsApp Business, and Google Sheets.",
      "Strong patience, problem-solving mindset, punctuality, and a customer-first attitude.",
      "Freshers with high enthusiasm, dedication, and eagerness to grow are strongly welcome to apply."
    ],
    skills: [
      "Customer Care",
      "Facebook Page Inbox",
      "WhatsApp Business",
      "Bengali Communication",
      "Order Confirmation",
      "Google Sheets",
      "Problem Solving"
    ]
  }
];

const PERKS = [
  {
    icon: <FaMoneyBillWave className="w-6 h-6 text-brand-primary" />,
    title: "Competitive Base Pay & Sales Commissions",
    desc: "Fixed monthly salary with timely payment, lucrative sales commissions on successful deals, and two full festival bonuses."
  },
  {
    icon: <FaRocket className="w-6 h-6 text-brand-primary" />,
    title: "Rapid Career Growth & Promotion",
    desc: "We promote based on dedication and performance. Opportunity to step up into Team Lead, Senior Sales, or Management roles."
  },
  {
    icon: <FaHandshake className="w-6 h-6 text-brand-primary" />,
    title: "Field Support & Travel Allowance",
    desc: "Meeting support and travel assistance provided for client visits across commercial hubs in Dhaka."
  },
  {
    icon: <FaGraduationCap className="w-6 h-6 text-brand-primary" />,
    title: "Training & Real-World Mentorship",
    desc: "Full hands-on onboarding, sales presentation coaching, and direct guidance from seasoned agency founders."
  },
  {
    icon: <FaBuilding className="w-6 h-6 text-brand-primary" />,
    title: "Gulshan-1 & Savar Office Hubs",
    desc: "Modern office environments located at The Business Center, Gulshan-1, and Dream Palace, Hemayetpur, Savar."
  },
  {
    icon: <FaCoffee className="w-6 h-6 text-brand-primary" />,
    title: "Daily Refreshments & Tea/Coffee",
    desc: "Unlimited tea, coffee, evening snacks, and a warm, friendly, collaborative team atmosphere."
  }
];

export default function CareerPage() {
  const [expandedJobId, setExpandedJobId] = useState<string | null>("sales-associate-parttime");

  // Form State - strictly empty initially so no text is inside any box
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    portfolio: "",
    expectedSalary: "",
    coverNote: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleJob = (id: string) => {
    setExpandedJobId(prev => prev === id ? null : id);
  };

  const handleApplyClick = (jobTitle?: string) => {
    if (jobTitle) {
      setFormData(prev => ({ ...prev, role: jobTitle }));
    }
    const formElement = document.getElementById("apply-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 bg-brand-dark text-white rounded-b-[3.5rem] overflow-hidden">
        {/* Glow gradients */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-brand-primary text-xs sm:text-sm font-bold uppercase tracking-widest mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              NOW HIRING • GULSHAN-1 & FIELD SALES, DHAKA
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight mb-6">
              Start Your Career at <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                Bengal Cyber
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              We are actively hiring for <strong>Marketing &amp; Sales Executive (Field Level)</strong>, <strong>Sales Associate (Part-Time)</strong>, and <strong>Customer Service Officer</strong>. We offer competitive base salaries, attractive sales commissions, travel allowances, and fast-track career growth!
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <a 
                href="#open-circulars"
                className="px-8 py-4 rounded-full bg-brand-primary text-white font-bold text-base shadow-xl shadow-brand-primary/30 hover:bg-orange-600 hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>View Open Circulars</span>
                <FaArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#why-bengal-cyber"
                className="px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-base hover:bg-white/20 transition-all border border-white/15"
              >
                Life at Bengal Cyber
              </a>
            </div>
          </motion.div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 pt-12 border-t border-white/10">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">50+</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1 uppercase tracking-wider">Brands Scaled</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-primary">3 Positions</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1 uppercase tracking-wider">Active Circulars</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">Gulshan &amp; Savar</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1 uppercase tracking-wider">Hubs &amp; Field</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">Full &amp; Part-Time</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1 uppercase tracking-wider">Flexible Roles</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Bengal Cyber & Life Here */}
      <section id="why-bengal-cyber" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">
                About Our Company
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mb-6">
                A Creative & Performance Marketing Agency in Gulshan-1
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
                Founded by Business Consultant and Digital Marketing Strategist <strong>Zeem Mondal</strong>, Bengal Cyber has grown into one of Dhaka’s most innovative digital agencies. Located at <strong>The Business Center in Gulshan 1</strong>, we specialize in high-converting media buying, creative video storytelling, web design, and dedicated customer experience solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-base">
                We believe exceptional work begins with great people. At Bengal Cyber, every team member gets hands-on guidance, respect, and room to grow. Whether you are meeting business executives in the field or assisting clients through our customer service desk, your contributions directly fuel our growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-brand-primary flex items-center justify-center font-bold shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Headquarters</h4>
                    <p className="text-xs text-slate-500">The Business Center, Gulshan 1, Dhaka</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">
                    <FaBuilding />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Secondary Office</h4>
                    <p className="text-xs text-slate-500">Dream Palace: 2, Road 11-12, Hemayetpur, Savar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Culture Manifesto Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl bg-gradient-to-br from-brand-dark via-slate-900 to-black p-8 sm:p-10 text-white shadow-2xl overflow-hidden border border-white/10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-bold tracking-widest text-brand-primary uppercase">Culture Manifesto</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs text-gray-300 font-medium">Bengal Cyber Way</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold mb-6">Our 4 Core Work Principles</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 text-brand-primary flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base">Results & Target Focus</h4>
                        <p className="text-sm text-gray-400 mt-1">We celebrate high closers and proactive problem-solvers who turn opportunities into success.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 text-brand-primary flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base">Client-First Empathy</h4>
                        <p className="text-sm text-gray-400 mt-1">We listen intently to client challenges and recommend digital solutions that bring real ROI.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 text-brand-primary flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base">Continuous Learning & Coaching</h4>
                        <p className="text-sm text-gray-400 mt-1">We mentor you on negotiation, presentation, and objection handling from day one.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 text-brand-primary flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base">Generous Rewards</h4>
                        <p className="text-sm text-gray-400 mt-1">Lucrative sales commission structures where your earning potential directly reflects your sales drive.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Perks & Benefits Grid */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-3">
              Perks & Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              Why You&apos;ll Love Working Here
            </h2>
            <p className="text-gray-500 mt-3 text-base">
              We ensure our team members have the tools, guidance, and compensation they need to thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PERKS.map((perk, index) => (
              <div 
                key={index}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-primary/30 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                    {perk.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{perk.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Open Circulars Section */}
      <section id="open-circulars" className="py-24 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-3">
              Current Openings • 3 Active Circulars
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              Explore Open Job Circulars
            </h2>
            <p className="text-slate-500 mt-2 text-base max-w-2xl mx-auto">
              We are currently accepting applications for <strong>Marketing &amp; Sales Executive</strong>, <strong>Sales Associate (Part-Time)</strong>, and <strong>Customer Service Officer</strong>.
            </p>
          </div>

          {/* Job Circulars List */}
          <div className="space-y-6">
            {CIRCULARS.map((job) => {
              const isExpanded = expandedJobId === job.id;

              return (
                <div 
                  key={job.id}
                  className="rounded-3xl bg-white border-2 border-brand-primary/20 shadow-xl overflow-hidden"
                >
                  {/* Card Header Summary */}
                  <div 
                    onClick={() => toggleJob(job.id)}
                    className="p-6 sm:p-10 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-brand-primary">
                          {job.department}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 font-semibold bg-slate-100 px-3 py-1 rounded-full">
                          <FaMapMarkerAlt className="text-brand-primary" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 font-semibold bg-slate-100 px-3 py-1 rounded-full">
                          <FaClock className="text-brand-primary" />
                          {job.type}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                        {job.title}
                      </h3>

                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-50 border border-orange-200/80 text-orange-800 font-bold text-sm sm:text-base mb-4">
                        <FaMoneyBillWave className="text-brand-primary w-4 h-4" />
                        <span>Salary: {job.salary}</span>
                      </div>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                        {job.summary}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-5">
                        {job.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx}
                            className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleApplyClick(job.title);
                        }}
                        className="px-8 py-3.5 rounded-full bg-brand-primary text-white font-bold text-base hover:bg-orange-600 shadow-lg shadow-brand-primary/25 hover:scale-105 transition-all cursor-pointer"
                      >
                        Apply Now
                      </button>
                      <button
                        type="button"
                        aria-label="Toggle details"
                        className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition-colors"
                      >
                        {isExpanded ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-slate-100 bg-slate-50/70 p-6 sm:p-10"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          {/* Responsibilities */}
                          <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-brand-primary" />
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-3 text-sm text-slate-600">
                              {job.responsibilities.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                  <FaCheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Requirements */}
                          <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-brand-primary" />
                              Candidate Requirements
                            </h4>
                            <ul className="space-y-3 text-sm text-slate-600">
                              {job.requirements.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                  <FaCheckCircle className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Compensation and Meta footer */}
                        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Salary & Compensation</div>
                            <div className="text-base sm:text-lg font-extrabold text-brand-dark mt-0.5">{job.salary}</div>
                            <div className="text-xs text-slate-500 mt-1">Experience: {job.experience} • Deadline: {job.deadline}</div>
                          </div>

                          <button
                            onClick={() => handleApplyClick(job.title)}
                            className="px-8 py-3.5 rounded-full bg-brand-primary text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-primary/25 hover:bg-orange-600 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
                          >
                            <span>Apply for {job.title}</span>
                            <FaArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Direct WhatsApp / Email Help Banner */}
          <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 to-brand-dark text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="px-3 py-1 rounded-full bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wider inline-block mb-3">
                Quick Application & Support
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
                Have Questions or Want to Send Your CV Directly?
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                You can submit via the form below, or send your CV directly to our WhatsApp or recruitment email.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a 
                href="https://wa.me/8801901364583?text=Hi%20Bengal%20Cyber%20team,%20I%20am%20interested%20in%20career%20opportunities!"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp HR</span>
              </a>
              <a 
                href="mailto:hello@bengalcyber.com?subject=Job%20Application%20-%20Bengal%20Cyber"
                className="px-6 py-3.5 rounded-full bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-all flex items-center justify-center gap-2 border border-white/20"
              >
                <FaEnvelope className="w-4 h-4" />
                <span>Email CV</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Online Application Form Section */}
      <section id="apply-section" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-3">
              Application Portal
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              Submit Your Application
            </h2>
            <p className="text-gray-500 mt-2 text-base">
              Submit your information below. Our recruitment team reviews every application and will get in touch promptly.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-xl shadow-slate-200/50">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <FaCheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                  Application Received!
                </h3>
                <p className="text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you for applying for the <strong>{formData.role || "position"}</strong> at Bengal Cyber. Our recruitment team will review your application and contact you soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 rounded-full bg-brand-primary text-white font-bold text-sm hover:bg-orange-600 transition-all shadow-md cursor-pointer"
                >
                  Submit Another Response
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input 
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Position Applied For
                    </label>
                    <input 
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Google Drive CV / Resume Link *
                    </label>
                    <input 
                      type="url"
                      required
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm"
                    />
                    <p className="text-[11px] text-slate-400 mt-1">Please ensure your Google Drive link has public view access.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Expected Salary (BDT)
                    </label>
                    <input 
                      type="text"
                      value={formData.expectedSalary}
                      onChange={(e) => setFormData({ ...formData, expectedSalary: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Why Are You Interested in this Role? (Short Note)
                  </label>
                  <textarea 
                    rows={4}
                    value={formData.coverNote}
                    onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm"
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-brand-primary text-white font-bold text-base shadow-xl shadow-brand-primary/30 hover:bg-orange-600 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-4 h-4" />
                        <span>Submit Job Application</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-3">
                    Your information is protected and used strictly for Bengal Cyber hiring.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
