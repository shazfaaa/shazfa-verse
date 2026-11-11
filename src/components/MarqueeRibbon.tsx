import React from 'react';

interface MarqueeRibbonProps {
  items?: string[];
  text?: string;
  repeatCount?: number;
  direction?: 'normal' | 'reverse';
  speed?: 'normal' | 'fast';
  variant?: 'navy' | 'cobalt' | 'butter' | 'ice' | 'white' | 'pink' | 'green' | 'dark' | 'cream' | 'subtle';
  className?: string;
}

export const MarqueeRibbon: React.FC<MarqueeRibbonProps> = ({
  items,
  text = 'THIS MOMENT, FEELS SO WONDERFUL ✦ WE MAY ACT A LITTLE STIFF, DOWN TO OUR AWKWARD GREETING ✦ OUR FIRST ENCOUNTER, YOU AND I ✦ THIS THING BETWEEN US, BEAUTIFUL ✦ TOMORROW, AND THE DAY AFTER TOMORROW ✦ REMEMBER, FOREVER, THIS DAZZLING MOMENT',
  repeatCount = 12,
  direction = 'normal',
  speed = 'normal',
  variant = 'cobalt',
  className = '',
}) => {
  const content = items ? items.join(' ✦ ') : text;
  const repeated = Array.from({ length: repeatCount }, () => content).join(' ✦ ');

  // 5 "Ice & Butter" Color Palette System:
  // Deep Navy (#2F4860) · Soft Cobalt (#7DA7D9) · Butter Yellow (#FFF7CC) · Ice Blue (#DCEEFF) · Clean White (#FFFFFF)
  const variantStyles: Record<string, string> = {
    navy: 'bg-[#2F4860] text-[#FFF7CC] font-syne font-semibold tracking-wider text-xs sm:text-sm py-2 sm:py-2.5 border-y border-[#1F3347] shadow-xs',
    cobalt: 'bg-[#7DA7D9] text-[#2F4860] font-syne font-bold tracking-wider text-xs sm:text-sm py-2 sm:py-2.5 border-y border-[#5E8EC9] shadow-xs',
    butter: 'bg-[#FFF7CC] text-[#2F4860] font-syne font-bold tracking-wider text-xs sm:text-sm py-2 sm:py-2.5 border-y border-[#E9DF9E] shadow-xs',
    ice: 'bg-[#DCEEFF] text-[#2F4860] font-syne font-bold tracking-wider text-xs sm:text-sm py-2 sm:py-2.5 border-y border-[#BEDDFB] shadow-xs',
    white: 'bg-white dark:bg-[#1E2E3D] text-[#2F4860] dark:text-[#DCEEFF] font-mono text-xs py-2 border-y border-[#DCEEFF] dark:border-[#2F4860]',
    // Backwards-compatible aliases mapped to Ice & Butter:
    pink: 'bg-[#7DA7D9] text-[#2F4860] font-syne font-bold tracking-wider text-xs sm:text-sm py-2 sm:py-2.5 border-y border-[#5E8EC9] shadow-xs',
    green: 'bg-[#DCEEFF] text-[#2F4860] font-syne font-bold tracking-wider text-xs sm:text-sm py-2 sm:py-2.5 border-y border-[#BEDDFB] shadow-xs',
    dark: 'bg-[#2F4860] text-[#FFF7CC] font-syne font-semibold tracking-wider text-xs sm:text-sm py-2 sm:py-2.5 border-y border-[#1F3347] shadow-xs',
    cream: 'bg-[#FFF7CC] text-[#2F4860] font-syne font-bold tracking-wider text-xs sm:text-sm py-2 sm:py-2.5 border-y border-[#E9DF9E] shadow-xs',
    subtle: 'bg-[#DCEEFF]/40 text-[#2F4860] dark:text-[#DCEEFF] font-mono text-xs py-2 border-y border-[#DCEEFF] dark:border-[#2F4860]',
  };

  const animClass = direction === 'reverse' ? 'animate-marquee-reverse' : speed === 'fast' ? 'animate-marquee-fast' : 'animate-marquee';

  return (
    <div className={`overflow-hidden select-none whitespace-nowrap ${variantStyles[variant]} ${className}`}>
      <div className={animClass}>
        <span className="inline-block px-4">{repeated}</span>
        <span className="inline-block px-4">{repeated}</span>
      </div>
    </div>
  );
};
