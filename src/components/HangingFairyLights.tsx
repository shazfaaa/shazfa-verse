import React from 'react';

export const HangingFairyLights: React.FC = () => {
  // 12 hanging star lights inspired by the dreamy icy bus stop canopy in the moodboard
  const lights = [
    { left: '4%', height: 'h-14 sm:h-20', delay: '0s', star: '★', size: 'text-sm sm:text-base', color: 'text-[#FFF7CC]' },
    { left: '12%', height: 'h-8 sm:h-12', delay: '0.4s', star: '✦', size: 'text-xs sm:text-sm', color: 'text-[#72E2E6]' },
    { left: '21%', height: 'h-16 sm:h-24', delay: '0.9s', star: '★', size: 'text-base sm:text-lg', color: 'text-[#FFF7CC]' },
    { left: '30%', height: 'h-10 sm:h-14', delay: '1.3s', star: '✧', size: 'text-xs sm:text-sm', color: 'text-[#DCEEFF]' },
    { left: '39%', height: 'h-12 sm:h-18', delay: '0.2s', star: '★', size: 'text-sm sm:text-base', color: 'text-[#7DA7D9]' },
    { left: '48%', height: 'h-7 sm:h-10', delay: '0.7s', star: '✦', size: 'text-xs', color: 'text-[#FFF7CC]' },
    { left: '57%', height: 'h-14 sm:h-22', delay: '1.1s', star: '★', size: 'text-base sm:text-lg', color: 'text-[#72E2E6]' },
    { left: '66%', height: 'h-9 sm:h-13', delay: '0.5s', star: '✧', size: 'text-xs sm:text-sm', color: 'text-[#FFF7CC]' },
    { left: '75%', height: 'h-16 sm:h-24', delay: '1.4s', star: '★', size: 'text-sm sm:text-base', color: 'text-[#DCEEFF]' },
    { left: '84%', height: 'h-11 sm:h-16', delay: '0.3s', star: '✦', size: 'text-xs sm:text-sm', color: 'text-[#7DA7D9]' },
    { left: '92%', height: 'h-13 sm:h-20', delay: '0.8s', star: '★', size: 'text-base sm:text-lg', color: 'text-[#FFF7CC]' },
  ];

  return (
    <div className="absolute top-0 left-0 right-0 h-28 pointer-events-none overflow-hidden z-20 select-none">
      {/* Translucent wire / line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#7DA7D9]/40 to-transparent dark:via-[#72E2E6]/30" />

      {lights.map((l, idx) => (
        <div
          key={idx}
          className="absolute top-0 flex flex-col items-center animate-star-sway"
          style={{ left: l.left, animationDelay: l.delay }}
        >
          {/* Vertical hanging thread */}
          <div className={`${l.height} w-px bg-gradient-to-b from-[#7DA7D9]/40 to-[#FFF7CC]/70 dark:from-[#72E2E6]/30 dark:to-[#FFF7CC]/80`} />
          {/* Glowing star bulb */}
          <div className={`-mt-1 ${l.size} ${l.color} animate-fairy-shimmer leading-none drop-shadow-sm`}>
            {l.star}
          </div>
        </div>
      ))}
    </div>
  );
};
