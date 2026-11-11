import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Sparkles,
  MessageCircle,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Instagram,
  Linkedin,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean & Compact */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#7DA7D9] dark:text-[#72E2E6] font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIRECT COMMUNICATION</span>
          </div>
          <h2 className="font-syne font-extrabold text-2xl sm:text-4xl text-[#2F4860] dark:text-white tracking-tight">
            My Contact
          </h2>
        </div>

        {/* 4 Compact Direct Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          
          {/* 1. Instagram */}
          <a
            href={PERSONAL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white dark:bg-[#162331] border-2 border-[#DCEEFF] dark:border-[#2F4860] hover:border-[#7DA7D9] rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#2F4860] text-[#FFF7CC] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="p-1.5 rounded-full bg-[#DCEEFF] dark:bg-[#203244] text-[#2F4860] dark:text-[#FFF7CC] group-hover:bg-[#7DA7D9] group-hover:text-[#2F4860] transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div className="space-y-0.5">
              <h3 className="font-syne font-bold text-base text-[#2F4860] dark:text-white">
                Instagram
              </h3>
              <p className="font-mono text-xs text-[#7DA7D9] dark:text-[#FFF7CC] font-bold truncate">
                @shaz.faa
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#DCEEFF] dark:border-[#2F4860] flex items-center justify-between text-xs font-mono text-[#2F4860]/70 dark:text-[#DCEEFF]/70">
              <span>Follow</span>
              <span className="font-bold text-[#2F4860] dark:text-[#FFF7CC] group-hover:text-[#7DA7D9] transition-colors">Visit ↗</span>
            </div>
          </a>

          {/* 2. Email */}
          <div className="group relative bg-white dark:bg-[#162331] border-2 border-[#DCEEFF] dark:border-[#2F4860] hover:border-[#7DA7D9] rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#7DA7D9] text-[#2F4860] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-1.5 rounded-full bg-[#DCEEFF] dark:bg-[#203244] hover:bg-[#FFF7CC] hover:text-[#2F4860] transition-colors text-[#2F4860] dark:text-[#DCEEFF] cursor-pointer"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <div className="space-y-0.5">
              <h3 className="font-syne font-bold text-base text-[#2F4860] dark:text-white">
                Email
              </h3>
              <p className="font-mono text-xs text-[#2F4860] dark:text-[#FFF7CC] font-bold truncate">
                {PERSONAL_INFO.email}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#DCEEFF] dark:border-[#2F4860] flex items-center justify-between text-xs font-mono">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-bold text-[#2F4860] dark:text-[#FFF7CC] hover:text-[#7DA7D9] transition-colors"
              >
                Send ↗
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-[#7DA7D9] hover:text-[#2F4860] dark:hover:text-white font-semibold cursor-pointer"
              >
                {copiedEmail ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* 3. LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white dark:bg-[#162331] border-2 border-[#DCEEFF] dark:border-[#2F4860] hover:border-[#7DA7D9] rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#2F4860] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="p-1.5 rounded-full bg-[#DCEEFF] dark:bg-[#203244] text-[#2F4860] dark:text-[#FFF7CC] group-hover:bg-[#7DA7D9] group-hover:text-[#2F4860] transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div className="space-y-0.5">
              <h3 className="font-syne font-bold text-base text-[#2F4860] dark:text-white">
                LinkedIn
              </h3>
              <p className="font-mono text-xs text-[#7DA7D9] dark:text-[#FFF7CC] font-bold truncate">
                in/shazfadelphinia
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#DCEEFF] dark:border-[#2F4860] flex items-center justify-between text-xs font-mono text-[#2F4860]/70 dark:text-[#DCEEFF]/70">
              <span>Network</span>
              <span className="font-bold text-[#2F4860] dark:text-[#FFF7CC] group-hover:text-[#7DA7D9] transition-colors">Connect ↗</span>
            </div>
          </a>

          {/* 4. WhatsApp */}
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#FFF7CC] dark:bg-[#162331] border-2 border-[#E7DB99] dark:border-[#2F4860] hover:border-[#7DA7D9] rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#2F4860] text-[#FFF7CC] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="p-1.5 rounded-full bg-white dark:bg-[#203244] text-[#2F4860] dark:text-[#FFF7CC] group-hover:bg-[#7DA7D9] group-hover:text-[#2F4860] transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div className="space-y-0.5">
              <h3 className="font-syne font-bold text-base text-[#2F4860] dark:text-white">
                WhatsApp
              </h3>
              <p className="font-mono text-xs text-[#2F4860] dark:text-[#FFF7CC] font-bold truncate">
                +62 811-9841-903
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E7DB99] dark:border-[#2F4860] flex items-center justify-between text-xs font-mono text-[#2F4860]/70 dark:text-[#DCEEFF]/70">
              <span>Direct</span>
              <span className="font-bold text-[#2F4860] dark:text-[#FFF7CC] group-hover:text-[#7DA7D9] transition-colors">Chat ↗</span>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};

