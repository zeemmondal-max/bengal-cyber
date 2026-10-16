"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MdGavel, 
  MdSecurity, 
  MdTrendingUp, 
  MdAccountBalance, 
  MdReceiptLong, 
  MdBrush, 
  MdRule, 
  MdHandshake, 
  MdSupportAgent, 
  MdOutlinePolicy, 
  MdWarning, 
  MdCheckCircle, 
  MdArrowForward,
  MdPrint,
  MdLock,
  MdSchedule,
  MdEmail,
  MdPhone,
  MdLocationOn
} from "react-icons/md";
import { useState } from "react";

export default function TermsContent() {
  const [activeSection, setActiveSection] = useState<string>("intro");

  const tableOfContents = [
    { id: "intro", title: "1. Acceptance of Terms", icon: MdGavel },
    { id: "services", title: "2. Scope of Services", icon: MdTrendingUp },
    { id: "compliance", title: "3. Bangladesh Legal Framework", icon: MdSecurity },
    { id: "client-obligations", title: "4. Client Obligations & Assets", icon: MdRule },
    { id: "ad-spend", title: "5. Media Buying & NBR VAT", icon: MdAccountBalance },
    { id: "payments", title: "6. Payment Terms & Invoicing", icon: MdReceiptLong },
    { id: "ip-rights", title: "7. Intellectual Property & Rights", icon: MdBrush },
    { id: "revisions", title: "8. Revisions & Scope Policy", icon: MdSchedule },
    { id: "hosting", title: "9. Web Hosting & Technical SLAs", icon: MdSupportAgent },
    { id: "privacy-confidentiality", title: "10. Confidentiality & Privacy", icon: MdLock },
    { id: "liability", title: "11. Limitation of Liability", icon: MdWarning },
    { id: "termination", title: "12. Termination & Cancellation", icon: MdOutlinePolicy },
    { id: "disputes", title: "13. Dispute Resolution & Law", icon: MdHandshake },
    { id: "contact", title: "14. Official Legal Contact", icon: MdEmail },
  ];

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <Navbar />

      {/* Top Header Spacer on desktop */}
      <div className="hidden lg:block h-20 bg-slate-50"></div>

      {/* Hero Header Section */}
      <section className="pt-6 pb-12 sm:pt-10 sm:pb-16 md:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-wider mb-4">
                <MdGavel className="w-4 h-4" />
                Legal Governance & Agency Guidelines
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight">
                Terms & Conditions
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Official service agreement, operational policies, and compliance guidelines governing all client partnerships with Bengal Cyber in Bangladesh.
              </p>
            </div>

            {/* Quick Metadata Box & Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end gap-3 shrink-0">
              <div className="text-xs text-slate-500 font-medium space-y-1 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
                <div><span className="font-semibold text-slate-700">Effective Date:</span> October 2026</div>
                <div><span className="font-semibold text-slate-700">Jurisdiction:</span> Dhaka, Bangladesh</div>
                <div><span className="font-semibold text-slate-700">Version:</span> 2.4 (Enterprise Standard)</div>
              </div>
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-brand-primary text-white text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                <MdPrint className="w-4 h-4" />
                <span>Print / Save PDF</span>
              </button>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="mt-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3">
            <MdWarning className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              <span className="font-bold">Important Notice for All Clients:</span> By engaging Bengal Cyber for Digital Marketing, Media Buying, Website Design, Video Editing, or Creative Services, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms & Conditions and the applicable laws of Bangladesh.
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Sidebar */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Sticky Table of Contents (Desktop) */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-28 bg-slate-50 rounded-3xl p-5 border border-slate-200 shadow-sm space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto">
                <div className="text-xs font-extrabold uppercase tracking-widest text-slate-400 px-3 py-2">
                  Table of Contents
                </div>
                <nav className="space-y-1">
                  {tableOfContents.map((item) => {
                    const Icon = item.icon;
                    const isSelected = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                          isSelected
                            ? "bg-brand-primary text-white shadow-md shadow-brand-primary/25"
                            : "text-slate-600 hover:bg-slate-200/60 hover:text-slate-900"
                        }`}
                      >
                        <Icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-white" : "text-brand-primary"}`} />
                        <span className="truncate">{item.title}</span>
                      </button>
                    );
                  })}
                </nav>

                <div className="pt-4 mt-4 border-t border-slate-200 text-[11px] text-slate-500 text-center leading-relaxed">
                  Need a customized Enterprise Master Service Agreement (MSA)?
                  <Link href="/contact" className="block text-brand-primary font-bold hover:underline mt-1">
                    Contact Legal Team →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Mobile Horizontal Quick Jump Pills */}
            <div className="lg:hidden col-span-1 overflow-x-auto pb-2 -mt-4 mb-4 flex gap-2 no-scrollbar">
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-brand-primary hover:text-white border border-slate-200 text-xs font-semibold whitespace-nowrap transition-colors"
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Main Legal Clauses Area */}
            <div className="lg:col-span-8 space-y-12 text-slate-700 leading-relaxed text-sm sm:text-base">

              {/* 1. Introduction & Acceptance */}
              <div id="intro" className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-wider mb-2">
                  <MdGavel className="w-5 h-5" />
                  <span>Section 1</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">
                  Acceptance of Terms & Preamble
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>
                    These Terms and Conditions (&ldquo;Agreement&rdquo;, &ldquo;Terms&rdquo;) constitute a legally binding contract between <strong className="text-slate-900">Bengal Cyber</strong> (&ldquo;Agency&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), having offices located in Gulshan 1, Dhaka and Savar, Dhaka, Bangladesh, and the individual, business, or corporate entity (&ldquo;Client&rdquo;, &ldquo;you&rdquo;, or &ldquo;your&rdquo;) accessing or commissioning our digital marketing, software development, creative design, and consulting services.
                  </p>
                  <p>
                    By engaging Bengal Cyber through a signed Service Level Agreement (SLA), Statement of Work (SOW), formal invoice settlement, verbal confirmation confirmed via written channels (email/WhatsApp), or by accessing any deliverables produced by our agency, you explicitly agree to comply with and be bound by all terms articulated herein.
                  </p>
                  <p>
                    If you are entering into this Agreement on behalf of a corporate entity, private limited company, or partnership registered in Bangladesh or abroad, you warrant and represent that you possess full legal authorization to bind said entity to these Terms.
                  </p>
                </div>
              </div>

              {/* 2. Scope of Services */}
              <div id="services" className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-wider mb-2">
                  <MdTrendingUp className="w-5 h-5" />
                  <span>Section 2</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">
                  Scope of Agency Services
                </h2>
                <p className="text-slate-600 mb-6">
                  Bengal Cyber is a specialized performance growth agency operating in Bangladesh. The exact scope, timeline, and deliverables for each project are governed by the respective Statement of Work (SOW) or invoice and may comprise one or more of the following core disciplines:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                      <MdCheckCircle className="text-brand-primary shrink-0" />
                      Performance Media Buying
                    </h4>
                    <p className="text-slate-600">
                      Paid ad campaign architecture, audience research, pixel/CAPI setups, retargeting funnels, and ad spend scaling across Meta (Facebook & Instagram), Google Ads, YouTube, and TikTok.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                      <MdCheckCircle className="text-brand-primary shrink-0" />
                      Website Design & Engineering
                    </h4>
                    <p className="text-slate-600">
                      Custom, high-converting Next.js / React web development, e-commerce stores, responsive UI/UX architecture, speed optimization, and SEO-ready code.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                      <MdCheckCircle className="text-brand-primary shrink-0" />
                      Social Media Marketing (SMM)
                    </h4>
                    <p className="text-slate-600">
                      Content calendars, copywriting, creative viral storytelling, social calendar management, community moderation, and brand positioning across Bangladeshi audiences.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                      <MdCheckCircle className="text-brand-primary shrink-0" />
                      Creative Graphics & Video Production
                    </h4>
                    <p className="text-slate-600">
                      Brand identity, logo engineering, promotional posters, product packaging designs, and high-retention video editing (Reels, TikToks, commercials, motion graphics).
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                      <MdCheckCircle className="text-brand-primary shrink-0" />
                      SEO & Search Visibility
                    </h4>
                    <p className="text-slate-600">
                      Technical audit, on-page optimization, content strategy, keyword indexing, and local SEO in Dhaka, Chittagong, and major Bangladeshi commercial hubs.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                      <MdCheckCircle className="text-brand-primary shrink-0" />
                      Customer Service & Lead Moderation
                    </h4>
                    <p className="text-slate-600">
                      24/7 or shift-based inbox response, comment management, order verification, and lead pipeline handling tailored for Bangladeshi e-commerce and B2B sectors.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Bangladesh Legal Framework */}
              <div id="compliance" className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-wider mb-2">
                  <MdSecurity className="w-5 h-5" />
                  <span>Section 3</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">
                  Regulatory Compliance & Bangladesh Legal Framework
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>
                    All advertising campaigns, web content, digital media buying, and client communications engineered by Bengal Cyber strictly comply with the legislative statutory statutes of the People&rsquo;s Republic of Bangladesh, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                    <li><strong className="text-slate-900">Information and Communication Technology (ICT) Act, 2006</strong> (as amended in 2013) and contemporary Cyber Security / Digital Security frameworks.</li>
                    <li><strong className="text-slate-900">The Contract Act, 1872</strong> governing business agreements, consideration, mutual consent, and performance obligations.</li>
                    <li><strong className="text-slate-900">Consumer Rights Protection Act, 2009</strong> strictly barring deceptive marketing, exaggerated false claims, bait-and-switch advertising, and unverified product certifications.</li>
                    <li><strong className="text-slate-900">Digital Commerce Operation Guidelines 2021</strong> issued by the Ministry of Commerce (MoC), Bangladesh, for e-commerce clients regarding transparent pricing, return policies, delivery commitments, and merchant disclosures.</li>
                    <li><strong className="text-slate-900">Bangladesh Bank Foreign Exchange Guidelines</strong> governing international advertising currency expenditures, card endorsements, and cross-border remittance compliance.</li>
                  </ul>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600">
                    <strong className="text-slate-900">Zero Tolerance for Prohibited Verticals:</strong> Bengal Cyber strictly refuses service to, and will immediately terminate agreements with, any entity attempting to promote Ponzi/MLM schemes, illegal gambling/betting portals, counterfeit merchandise, unapproved pharmaceuticals/drugs (without Directorate General of Drug Administration - DGDA clearance), adult content, or hate speech violating Bangladesh public morality laws.
                  </div>
                </div>
              </div>

              {/* 4. Client Obligations & Asset Handover */}
              <div id="client-obligations" className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-wider mb-2">
                  <MdRule className="w-5 h-5" />
                  <span>Section 4</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">
                  Client Obligations, Approvals & Asset Handover
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>
                    To ensure campaigns and web projects launch without delays, the Client agrees to fulfill the following operational responsibilities:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">A</div>
                      <p className="text-sm">
                        <strong className="text-slate-900">Platform Access Rights:</strong> The Client must grant verified Partner or Admin access to their Meta Business Suite / Business Manager, Google Ad Account, TikTok Ads Manager, Google Tag Manager, Domain Registrar (DNS), and hosting cPanel as required for campaign setup and pixel tracking.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">B</div>
                      <p className="text-sm">
                        <strong className="text-slate-900">Asset Quality & Licensing:</strong> The Client warrants that all product photos, logos, trademarks, video footage, and text supplied to Bengal Cyber are either owned by the Client or legally licensed. The Client shall defend and indemnify Bengal Cyber against any copyright infringement claims arising from client-provided materials.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">C</div>
                      <p className="text-sm">
                        <strong className="text-slate-900">Review & Approval SLAs:</strong> The Client agrees to review creative proofs, website staging links, or campaign copies within three (3) to five (5) business days. Delays in client feedback shall proportionally adjust projected delivery timelines without penalty to the Agency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Media Buying, Ad Spend & NBR VAT */}
              <div id="ad-spend" className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-wider mb-2">
                  <MdAccountBalance className="w-5 h-5" />
                  <span>Section 5</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">
                  Media Buying, Ad Spend & NBR Tax / VAT Regulations
                </h2>
                <div className="space-y-4 text-slate-600">
                  <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-xs sm:text-sm text-slate-800 space-y-2">
                    <p className="font-bold text-orange-950 flex items-center gap-2">
                      <MdWarning className="text-brand-primary w-4 h-4" />
                      Ad Spend Budget Independence
                    </p>
                    <p>
                      All paid advertising budgets (&ldquo;Ad Spend&rdquo;) are paid directly to advertising platforms (Meta, Google, TikTok) and are 100% separate from Bengal Cyber&rsquo;s agency service management retainers.
                    </p>
                  </div>

                  <p>
                    <strong className="text-slate-900">Dual-Currency & Card Endorsement:</strong> Under Bangladesh Bank regulations, digital advertising payments remitted abroad require a dual-currency credit card endorsed against a valid Bangladeshi passport. Clients may fund ad spend using their own endorsed cards or opt for agency-facilitated media buying with verified bank clearance.
                  </p>

                  <p>
                    <strong className="text-slate-900">15% VAT on Digital Advertisements (NBR):</strong> The National Board of Revenue (NBR) of Bangladesh levies a statutory 15% Value Added Tax (VAT) on digital advertising purchases rendered by foreign platforms (Meta, Google). The Client is strictly responsible for all statutory VAT and Advance Income Tax (AIT) deductions applicable under Bangladesh tax law.
                  </p>

                  <p>
                    <strong className="text-slate-900">Platform Autonomy & Algorithmic Volatility:</strong> While Bengal Cyber follows advertising best practices and Meta/Google Ad Policies religiously, advertising platforms utilize automated AI algorithms. Bengal Cyber is not liable for account reviews, algorithmic fluctuations, CPM spikes, or platform-side ad rejections triggered by client product categories or historical ad account status. We provide expert dispute appeal assistance in good faith.
                  </p>
                </div>
              </div>

              {/* 6. Payment Terms & Invoicing */}
              <div id="payments" className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-wider mb-2">
                  <MdReceiptLong className="w-5 h-5" />
                  <span>Section 6</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">
                  Payment Terms, Retainers & Invoicing
                </h2>
                <div className="space-y-4 text-slate-600">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-2">Monthly Retainer Engagements</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Monthly Social Media Marketing, Performance Media Buying, and Lead Moderation services are billed in advance on the 1st of each calendar month. Invoices carry a strict five (5) business day payment grace period.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-2">Milestone Web & Branding Projects</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Fixed-scope website design and software projects follow a phased milestone model: <strong>50% mobilization deposit</strong> prior to kickoff, <strong>30% upon staging review</strong>, and <strong>20% final balance</strong> prior to deployment and DNS propagation.
                      </p>
                    </div>
                  </div>

                  <p>
                    <strong className="text-slate-900">Accepted Payment Channels:</strong> We accept official payments in Bangladeshi Taka (BDT) via Corporate Bank Transfer (BEFTN, RTGS, NPSB), Account Payee Cheques, and verified bKash/Nagad Merchant channels. For international corporate clients, USD/EUR payments are accepted via International SWIFT Bank Wire.
                  </p>

                  <p>
                    <strong className="text-slate-900">Late Payment & Campaign Pause:</strong> If an invoice remains unsettled past seven (7) business days from the due date, Bengal Cyber reserves the contractual right to pause active paid campaigns, suspend staging environments, and temporarily hold creative output until the account is brought into good standing.
                  </p>
                </div>
              </div>

              {/* 7. Intellectual Property & Rights */}
              <div id="ip-rights" className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-wider mb-2">
                  <MdBrush className="w-5 h-5" />
                  <span>Section 7</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">
                  Intellectual Property & Deliverable Ownership
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>
                    <strong className="text-slate-900">Transfer of Final Deliverables:</strong> Upon 100% receipt of all agreed fees and invoices, full intellectual property rights, commercial licenses, and source files for approved deliverables (custom website source code, published social posters, final edited videos, approved logos) transfer exclusively to the Client.
                  </p>

                  <p>
                    <strong className="text-slate-900">Agency Proprietary Assets:</strong> Bengal Cyber retains all rights, title, and ownership in proprietary coding frameworks, internal boilerplate architectures, design system foundations, media buying spreadsheets, pitch decks, and unselected draft concepts.
                  </p>

                  <p>
                    <strong className="text-slate-900">Portfolio & Case Study Showcase:</strong> Unless explicitly restricted by an executed Non-Disclosure Agreement (NDA), Bengal Cyber reserves the standard right to showcase public marketing graphics, website design screenshots, campaign performance metrics (with confidential financial identifiers masked), and brand credits in our agency portfolio, awards submissions, and promotional materials.
                  </p>
                </div>
              </div>

              {/* 8. Revisions & Scope Policy */}
              <div id="revisions" className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-wider mb-2">
                  <MdSchedule className="w-5 h-5" />
                  <span>Section 8</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">
                  Revisions & Scope Governance
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>
                    Every design asset, video reel, and web page design delivered by Bengal Cyber includes up to <strong className="text-slate-900">two (2) rounds of constructive revisions</strong> within the initial project brief specifications.
                  </p>
                  <p>
                    <strong className="text-slate-900">Scope Creep & Add-On Features:</strong> Any major alterations after concept sign-off, radical pivot in brand direction, or request for features not listed in the signed SOW (e.g. adding unexpected multi-vendor payment gateways, complex third-party ERP integrations, or shooting extra unbudgeted video footage) will be formally quoted as billable add-ons.
                  </p>
                </div>
              </div>

              {/* 9. Web Hosting & Technical SLAs */}
              <div id="hosting" className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-wider mb-2">
                  <MdSupportAgent className="w-5 h-5" />
                  <span>Section 9</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">
                  Website Hosting, Security & Technical SLAs
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>
                    <strong className="text-slate-900">Deployment & 30-Day Warranty:</strong> Bengal Cyber delivers websites built to rigorous modern engineering standards (Next.js, React, Tailwind CSS). Every custom web project includes a complimentary thirty (30) day warranty post-launch to resolve any reproducible bugs, broken layout links, or rendering defects at no additional cost.
                  </p>

                  <p>
                    <strong className="text-slate-900">Third-Party Hosting & API Disclaimers:</strong> While we configure hosting, cPanel, SSL certificates, and DNS records according to industry best practices, Bengal Cyber does not own or operate third-party server infrastructure (such as AWS, Cloudflare, cPanel hosting providers, or Bangladeshi SMS gateways). We are not liable for outages, server crashes, or API latency originating from third-party hosting companies.
                  </p>

                  <p>
                    <strong className="text-slate-900">Ongoing Maintenance:</strong> Long-term version upgrades, server security hardening, regular database backups, and content updates require an active Monthly Maintenance SLA with Bengal Cyber.
                  </p>
                </div>
              </div>

              {/* 10. Confidentiality & Data Privacy */}
              <div id="privacy-confidentiality" className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-wider mb-2">
                  <MdLock className="w-5 h-5" />
                  <span>Section 10</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">
                  Confidentiality, Non-Disclosure & Data Protection
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>
                    Both Bengal Cyber and the Client agree to treat all proprietary commercial, technological, financial, and consumer data exchanged during the engagement as strictly confidential.
                  </p>
                  <p>
                    <strong className="text-slate-900">Lead & Customer Data Security:</strong> Bengal Cyber enforces strict access controls. We will never sell, lease, disclose, or transfer your customer contact lists, e-commerce buyer leads, CRM databases, or custom audience pixel data to any competitor or outside party.
                  </p>
                </div>
              </div>

              {/* 11. Limitation of Liability */}
              <div id="liability" className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-wider mb-2">
                  <MdWarning className="w-5 h-5" />
                  <span>Section 11</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">
                  Limitation of Liability & No Commercial Guarantees
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>
                    <strong className="text-slate-900">Commercial Outcome Disclaimer:</strong> Digital marketing and advertising optimize brand exposure, targeting precision, customer acquisition funnels, and click-through rates. However, overall commercial success, profit margins, and sales conversions ultimately depend on the Client&rsquo;s product pricing, product quality, market demand, customer service speed, and supply chain fulfillment. Bengal Cyber explicitly disclaims any warranties of specific financial profit or revenue targets.
                  </p>

                  <p>
                    <strong className="text-slate-900">Cap on Damages:</strong> To the maximum extent permitted under Bangladesh law, Bengal Cyber&rsquo;s cumulative aggregate liability arising from any cause of action, negligence, or breach of contract shall be strictly capped at the total service fees actually paid by the Client to Bengal Cyber during the three (3) calendar months immediately preceding the incident.
                  </p>

                  <p>
                    Under no circumstances shall either party be held liable for indirect, incidental, punitive, or consequential damages (including loss of business opportunity or loss of anticipated profits).
                  </p>
                </div>
              </div>

              {/* 12. Termination & Cancellation */}
              <div id="termination" className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-wider mb-2">
                  <MdOutlinePolicy className="w-5 h-5" />
                  <span>Section 12</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">
                  Termination & Cancellation Policy
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>
                    <strong className="text-slate-900">Monthly Retainers:</strong> Either party may cancel an ongoing monthly retainer service by submitting a written notice at least thirty (30) days in advance via official corporate email.
                  </p>
                  <p>
                    <strong className="text-slate-900">Immediate Termination for Cause:</strong> Bengal Cyber may terminate any agreement immediately without notice if the Client engages in fraudulent business activity, promotes illegal contraband violating Bangladesh law, fails to cure overdue invoices within fourteen (14) days, or exhibits abusive behavior toward agency personnel.
                  </p>
                  <p>
                    <strong className="text-slate-900">Handover on Exit:</strong> Upon formal termination and settlement of all outstanding invoices, Bengal Cyber will execute a clean handover of all client-owned ad accounts, creative deliverables, source codes, and credentials within five (5) business days.
                  </p>
                </div>
              </div>

              {/* 13. Dispute Resolution & Governing Law */}
              <div id="disputes" className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-wider mb-2">
                  <MdHandshake className="w-5 h-5" />
                  <span>Section 13</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">
                  Dispute Resolution, Arbitration & Governing Law
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>
                    <strong className="text-slate-900">Governing Law:</strong> This Agreement shall be construed, interpreted, and governed in accordance with the substantive laws of the <strong className="text-slate-900">People&rsquo;s Republic of Bangladesh</strong>.
                  </p>

                  <p>
                    <strong className="text-slate-900">Amicable Consultation:</strong> In the event of any operational or contractual dispute, both parties commit to engaging in good-faith executive negotiations for thirty (30) calendar days prior to initiating formal legal proceedings.
                  </p>

                  <p>
                    <strong className="text-slate-900">Arbitration & Jurisdiction:</strong> If amicable settlement fails, the dispute shall be resolved through arbitration pursuant to the <em>Arbitration Act, 2001 of Bangladesh</em>. The seat and venue of arbitration shall be Dhaka, Bangladesh, conducted in the English or Bengali language. The civil courts located in Dhaka, Bangladesh, shall possess exclusive legal jurisdiction.
                  </p>
                </div>
              </div>

              {/* 14. Official Contact Information */}
              <div id="contact" className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0a0f1d] via-[#0d1629] to-[#080d19] text-white border border-orange-500/30 shadow-2xl">
                <div className="flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-wider mb-2">
                  <MdEmail className="w-5 h-5" />
                  <span>Section 14</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Official Legal & Compliance Inquiries
                </h2>
                <p className="text-slate-300 text-sm mb-6">
                  For formal legal correspondence, contracts, enterprise agreements, or compliance inquiries, please contact Bengal Cyber&rsquo;s executive management team through our official corporate channels:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm mb-6">
                  <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 space-y-1.5">
                    <div className="flex items-center gap-2 text-brand-primary font-bold">
                      <MdLocationOn className="w-4 h-4" />
                      <span>Headquarters</span>
                    </div>
                    <p className="text-slate-300">The Business Center</p>
                    <p className="text-slate-400 text-xs">Gulshan 1, Dhaka 1212, Bangladesh</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 space-y-1.5">
                    <div className="flex items-center gap-2 text-brand-primary font-bold">
                      <MdLocationOn className="w-4 h-4" />
                      <span>Secondary Office</span>
                    </div>
                    <p className="text-slate-300">Dream Palace: 2, Road 11-12</p>
                    <p className="text-slate-400 text-xs">AlamNagar Housing, Hemayetpur, Savar, Dhaka</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 space-y-1.5">
                    <div className="flex items-center gap-2 text-brand-primary font-bold">
                      <MdPhone className="w-4 h-4" />
                      <span>Phone & WhatsApp</span>
                    </div>
                    <p className="text-slate-300 font-medium">+880 1901-364583</p>
                    <p className="text-slate-400 text-xs">Mon - Sat: 10:00 AM - 8:00 PM (BST)</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 space-y-1.5">
                    <div className="flex items-center gap-2 text-brand-primary font-bold">
                      <MdEmail className="w-4 h-4" />
                      <span>Email Correspondence</span>
                    </div>
                    <p className="text-slate-300 font-medium">contact@bengalcyber.com</p>
                    <p className="text-slate-400 text-xs">Response SLA: Within 24 Business Hours</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-400">
                    Ready to scale your business with full legal assurance?
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-primary hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-brand-primary/30"
                  >
                    <span>Initiate Project Consultation</span>
                    <MdArrowForward className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
