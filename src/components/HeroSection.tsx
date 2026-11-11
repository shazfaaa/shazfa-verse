import React from 'react';
import { ArrowDown, Sparkles, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HangingFairyLights } from './HangingFairyLights';

interface HeroSectionProps {
  onHireClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onHireClick }) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden bg-stage-dots">
      {/* Hanging Fairy Lights Garland (from moodboard panel 2) */}
      <HangingFairyLights />

      {/* Ambient Neon & Stage Glow Orbs (from moodboard panel 1 & 4) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[320px] bg-gradient-to-tr from-[#72E2E6]/12 via-[#7DA7D9]/15 to-[#FFF7CC]/10 dark:from-[#72E2E6]/15 dark:via-[#7DA7D9]/12 dark:to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Graphic starbursts in Soft Cobalt & Butter Yellow */}
      <div className="absolute top-20 right-4 sm:right-16 pointer-events-none opacity-30 dark:opacity-40 text-[#7DA7D9] animate-pulse">
        <svg width="180" height="180" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 0 L108 80 L188 88 L116 116 L144 192 L96 128 L36 176 L68 112 L0 88 L80 80 Z" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-6 sm:left-20 pointer-events-none opacity-35 dark:opacity-45 text-[#FFF7CC] animate-star-sway">
        <svg width="110" height="110" viewBox="0 0 200 200" fill="currentColor">
          <polygon points="100,5 125,75 195,100 125,125 100,195 75,125 5,100 75,75" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Big Editorial Typography with Figma Vector Bounding Box + Neon Aura */}
        <div className="relative inline-block border-2 border-dashed border-[#7DA7D9] dark:border-[#72E2E6]/70 p-6 sm:p-10 rounded-3xl bg-white/85 dark:bg-[#162331]/85 backdrop-blur-md shadow-xl shadow-[#7DA7D9]/15 dark:shadow-[#72E2E6]/10 mb-8 hover:border-[#72E2E6] transition-all duration-300">

          {/* Corner vector handles in Soft Cobalt + Clean White */}
          <span className="absolute -top-2 -left-2 w-3.5 h-3.5 bg-[#72E2E6] dark:bg-[#72E2E6] border-2 border-white dark:border-[#162331] shadow-xs rounded-xs" />
          <span className="absolute -top-2 -right-2 w-3.5 h-3.5 bg-[#72E2E6] dark:bg-[#72E2E6] border-2 border-white dark:border-[#162331] shadow-xs rounded-xs" />
          <span className="absolute -bottom-2 -left-2 w-3.5 h-3.5 bg-[#72E2E6] dark:bg-[#72E2E6] border-2 border-white dark:border-[#162331] shadow-xs rounded-xs" />
          <span className="absolute -bottom-2 -right-2 w-3.5 h-3.5 bg-[#72E2E6] dark:bg-[#72E2E6] border-2 border-white dark:border-[#162331] shadow-xs rounded-xs" />
          
          {/* Mid-point vector handles */}
          <span className="absolute top-1/2 -left-2 -translate-y-1/2 w-2.5 h-2.5 bg-[#7DA7D9] border border-white rounded-xs" />
          <span className="absolute top-1/2 -right-2 -translate-y-1/2 w-2.5 h-2.5 bg-[#7DA7D9] border border-white rounded-xs" />
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#7DA7D9] border border-white rounded-xs" />
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#7DA7D9] border border-white rounded-xs" />

          <div className="flex flex-col items-center">
            <span className="font-syne font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#2F4860] dark:text-white uppercase leading-none">
              HEY, IT&apos;S
            </span>
            <span className="font-fraunces italic font-medium text-5xl sm:text-7xl md:text-8xl tracking-wide text-[#7DA7D9] dark:text-[#DCEEFF] uppercase mt-1 sm:mt-3 dark:drop-shadow-[0_0_20px_rgba(114,226,230,0.35)]">
              SHAZFA
            </span>
          </div>
        </div>

        {/* Roles & Location Badges in 5 Ice & Butter Colors */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <span className="px-3.5 py-1 rounded-full bg-[#2F4860] text-[#FFF7CC] font-syne font-bold text-xs shadow-xs border border-[#1F3347]">
            ✦ UI Designer
          </span>
          <span className="text-[#7DA7D9]">·</span>
          <span className="px-3.5 py-1 rounded-full bg-[#7DA7D9] text-[#2F4860] font-syne font-bold text-xs shadow-xs">
            Web Developer
          </span>
          <span className="text-[#7DA7D9]">·</span>
          <span className="px-3.5 py-1 rounded-full bg-[#DCEEFF] text-[#2F4860] font-syne font-bold text-xs shadow-xs border border-[#7DA7D9]/40">
            IT Business Analyst
          </span>
          <span className="text-[#7DA7D9]">·</span>
          <span className="px-3.5 py-1 rounded-full bg-[#FFF7CC] text-[#2F4860] font-mono text-xs font-semibold border border-[#E0D48D]">
            Bekasi, ID
          </span>
        </div>

        {/* Editorial Sub-text */}
        <div className="max-w-2xl mx-auto mb-8 space-y-2">
          <p className="font-fraunces italic text-[#7DA7D9] dark:text-[#FFF7CC] text-sm sm:text-base font-normal">
            &ldquo;Our brightest season begins right now.&rdquo; ✦
          </p>
          <p className="text-[#2F4860]/80 dark:text-[#DCEEFF]/90 text-sm sm:text-base leading-relaxed font-sans-body">
            Hello there! I&apos;m Shazfa—an Information Systems graduate from Universitas Gunadarma combining UI/UX design in Figma, full-stack web development with Laravel, and agile Scrum &amp; UAT testing.
          </p>
        </div>

        {/* Action Buttons in Ice & Butter colors */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2F4860] hover:bg-[#7DA7D9] text-[#FFF7CC] hover:text-[#2F4860] font-syne font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 border border-[#1F3347]"
          >
            <span>GET TO KNOW ME</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onHireClick}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FFF7CC] hover:bg-[#DCEEFF] text-[#2F4860] font-syne font-bold text-xs uppercase tracking-wider transition-all duration-200 border border-[#E0D48D] shadow-xs cursor-pointer active:scale-95"
          >
            <span>LET&apos;S TALK</span>
            <Send className="w-3.5 h-3.5 text-[#2F4860]" />
          </button>
        </div>
      </div>
    </section>
  );
};
