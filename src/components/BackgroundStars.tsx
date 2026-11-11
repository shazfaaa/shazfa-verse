import React from 'react';

interface StarConfig {
  top: string;
  left: string;
  size: string;
  color: string;
  darkColor: string;
  type: 'confetti-star' | 'sparkle' | 'tiny-burst' | 'doodle-star';
  animation: string;
  rotation?: string;
  opacity: number;
}

export const BackgroundStars: React.FC = () => {
  // Starry confetti shower & fairy lights inspired by moodboard panel 4 (concert sky) & panel 3 (doodles)
  const stars: StarConfig[] = [
    // Hero Region (0% - 15%)
    { top: '3%', left: '7%', size: 'text-2xl', color: 'text-[#72E2E6]', darkColor: 'dark:text-[#72E2E6]', type: 'confetti-star', animation: 'animate-star-confetti', rotation: '-rotate-12', opacity: 0.8 },
    { top: '5%', left: '89%', size: 'text-xl', color: 'text-[#FFF7CC]', darkColor: 'dark:text-[#FFF7CC]', type: 'sparkle', animation: 'animate-cute-twinkle', rotation: 'rotate-6', opacity: 0.9 },
    { top: '8%', left: '20%', size: 'text-sm', color: 'text-[#DCEEFF]', darkColor: 'dark:text-[#DCEEFF]', type: 'tiny-burst', animation: 'animate-pulse', rotation: 'rotate-45', opacity: 0.75 },
    { top: '11%', left: '94%', size: 'text-3xl', color: 'text-[#7DA7D9]', darkColor: 'dark:text-[#8AB9E6]', type: 'doodle-star', animation: 'animate-star-sway', rotation: 'rotate-12', opacity: 0.85 },
    { top: '14%', left: '4%', size: 'text-2xl', color: 'text-[#FFF7CC]', darkColor: 'dark:text-[#FFF7CC]', type: 'confetti-star', animation: 'animate-star-confetti', rotation: '-rotate-6', opacity: 0.85 },

    // About Region (15% - 30%)
    { top: '18%', left: '92%', size: 'text-2xl', color: 'text-[#72E2E6]', darkColor: 'dark:text-[#72E2E6]', type: 'sparkle', animation: 'animate-cute-twinkle', rotation: 'rotate-12', opacity: 0.8 },
    { top: '21%', left: '11%', size: 'text-lg', color: 'text-[#7DA7D9]', darkColor: 'dark:text-[#FFF7CC]', type: 'tiny-burst', animation: 'animate-pulse', rotation: '-rotate-12', opacity: 0.7 },
    { top: '24%', left: '84%', size: 'text-3xl', color: 'text-[#DCEEFF]', darkColor: 'dark:text-[#DCEEFF]', type: 'confetti-star', animation: 'animate-star-confetti', rotation: 'rotate-45', opacity: 0.85 },
    { top: '27%', left: '5%', size: 'text-2xl', color: 'text-[#FFF7CC]', darkColor: 'dark:text-[#FFF7CC]', type: 'doodle-star', animation: 'animate-star-sway', rotation: '-rotate-6', opacity: 0.9 },
    { top: '29%', left: '95%', size: 'text-xl', color: 'text-[#7DA7D9]', darkColor: 'dark:text-[#72E2E6]', type: 'sparkle', animation: 'animate-cute-twinkle', rotation: 'rotate-12', opacity: 0.75 },

    // UI Design Region (30% - 45%)
    { top: '33%', left: '14%', size: 'text-3xl', color: 'text-[#FFF7CC]', darkColor: 'dark:text-[#FFF7CC]', type: 'confetti-star', animation: 'animate-star-confetti', rotation: '-rotate-12', opacity: 0.85 },
    { top: '36%', left: '88%', size: 'text-xl', color: 'text-[#72E2E6]', darkColor: 'dark:text-[#72E2E6]', type: 'tiny-burst', animation: 'animate-pulse', rotation: 'rotate-6', opacity: 0.75 },
    { top: '39%', left: '4%', size: 'text-2xl', color: 'text-[#DCEEFF]', darkColor: 'dark:text-[#7DA7D9]', type: 'sparkle', animation: 'animate-cute-twinkle', rotation: 'rotate-45', opacity: 0.8 },
    { top: '42%', left: '92%', size: 'text-3xl', color: 'text-[#FFF7CC]', darkColor: 'dark:text-[#FFF7CC]', type: 'doodle-star', animation: 'animate-star-sway', rotation: '-rotate-45', opacity: 0.85 },
    { top: '44%', left: '18%', size: 'text-xl', color: 'text-[#7DA7D9]', darkColor: 'dark:text-[#FFF7CC]', type: 'confetti-star', animation: 'animate-star-confetti', rotation: 'rotate-12', opacity: 0.8 },

    // Web Dev Region (45% - 60%)
    { top: '49%', left: '90%', size: 'text-2xl', color: 'text-[#DCEEFF]', darkColor: 'dark:text-[#72E2E6]', type: 'sparkle', animation: 'animate-cute-twinkle', rotation: 'rotate-6', opacity: 0.8 },
    { top: '52%', left: '6%', size: 'text-3xl', color: 'text-[#FFF7CC]', darkColor: 'dark:text-[#FFF7CC]', type: 'confetti-star', animation: 'animate-star-confetti', rotation: '-rotate-12', opacity: 0.9 },
    { top: '55%', left: '82%', size: 'text-xl', color: 'text-[#7DA7D9]', darkColor: 'dark:text-[#8AB9E6]', type: 'tiny-burst', animation: 'animate-pulse', rotation: 'rotate-45', opacity: 0.7 },
    { top: '58%', left: '13%', size: 'text-2xl', color: 'text-[#72E2E6]', darkColor: 'dark:text-[#DCEEFF]', type: 'doodle-star', animation: 'animate-star-sway', rotation: '-rotate-6', opacity: 0.8 },
    { top: '61%', left: '94%', size: 'text-3xl', color: 'text-[#FFF7CC]', darkColor: 'dark:text-[#FFF7CC]', type: 'confetti-star', animation: 'animate-star-confetti', rotation: 'rotate-12', opacity: 0.85 },

    // IT BA Region (60% - 75%)
    { top: '64%', left: '5%', size: 'text-xl', color: 'text-[#7DA7D9]', darkColor: 'dark:text-[#72E2E6]', type: 'sparkle', animation: 'animate-cute-twinkle', rotation: 'rotate-6', opacity: 0.8 },
    { top: '67%', left: '89%', size: 'text-3xl', color: 'text-[#DCEEFF]', darkColor: 'dark:text-[#DCEEFF]', type: 'confetti-star', animation: 'animate-star-confetti', rotation: '-rotate-45', opacity: 0.85 },
    { top: '70%', left: '15%', size: 'text-2xl', color: 'text-[#FFF7CC]', darkColor: 'dark:text-[#FFF7CC]', type: 'doodle-star', animation: 'animate-star-sway', rotation: 'rotate-12', opacity: 0.85 },
    { top: '73%', left: '95%', size: 'text-lg', color: 'text-[#72E2E6]', darkColor: 'dark:text-[#FFF7CC]', type: 'tiny-burst', animation: 'animate-pulse', rotation: '-rotate-12', opacity: 0.7 },
    { top: '76%', left: '8%', size: 'text-3xl', color: 'text-[#FFF7CC]', darkColor: 'dark:text-[#FFF7CC]', type: 'confetti-star', animation: 'animate-star-confetti', rotation: 'rotate-6', opacity: 0.9 },

    // Contact Region (75% - 90%)
    { top: '79%', left: '86%', size: 'text-2xl', color: 'text-[#7DA7D9]', darkColor: 'dark:text-[#8AB9E6]', type: 'sparkle', animation: 'animate-cute-twinkle', rotation: '-rotate-12', opacity: 0.8 },
    { top: '82%', left: '3%', size: 'text-xl', color: 'text-[#DCEEFF]', darkColor: 'dark:text-[#72E2E6]', type: 'tiny-burst', animation: 'animate-pulse', rotation: 'rotate-45', opacity: 0.7 },
    { top: '85%', left: '92%', size: 'text-3xl', color: 'text-[#FFF7CC]', darkColor: 'dark:text-[#FFF7CC]', type: 'confetti-star', animation: 'animate-star-confetti', rotation: 'rotate-12', opacity: 0.9 },
    { top: '88%', left: '10%', size: 'text-2xl', color: 'text-[#72E2E6]', darkColor: 'dark:text-[#DCEEFF]', type: 'doodle-star', animation: 'animate-star-sway', rotation: '-rotate-6', opacity: 0.85 },
    { top: '91%', left: '88%', size: 'text-xl', color: 'text-[#FFF7CC]', darkColor: 'dark:text-[#FFF7CC]', type: 'sparkle', animation: 'animate-cute-twinkle', rotation: 'rotate-45', opacity: 0.85 },

    // Footer Region (90% - 99%)
    { top: '94%', left: '6%', size: 'text-3xl', color: 'text-[#7DA7D9]', darkColor: 'dark:text-[#7DA7D9]', type: 'confetti-star', animation: 'animate-star-confetti', rotation: '-rotate-12', opacity: 0.85 },
    { top: '96%', left: '93%', size: 'text-xl', color: 'text-[#FFF7CC]', darkColor: 'dark:text-[#FFF7CC]', type: 'sparkle', animation: 'animate-cute-twinkle', rotation: 'rotate-6', opacity: 0.8 },
    { top: '98%', left: '14%', size: 'text-2xl', color: 'text-[#DCEEFF]', darkColor: 'dark:text-[#72E2E6]', type: 'doodle-star', animation: 'animate-star-sway', rotation: 'rotate-12', opacity: 0.8 },
    { top: '99%', left: '83%', size: 'text-2xl', color: 'text-[#FFF7CC]', darkColor: 'dark:text-[#FFF7CC]', type: 'confetti-star', animation: 'animate-star-confetti', rotation: '-rotate-45', opacity: 0.85 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star, idx) => (
        <div
          key={idx}
          className={`absolute ${star.animation} ${star.rotation || ''} select-none`}
          style={{
            top: star.top,
            left: star.left,
            opacity: star.opacity,
          }}
        >
          {star.type === 'confetti-star' && (
            <span className={`${star.size} ${star.color} ${star.darkColor} font-serif leading-none drop-shadow-[0_0_8px_rgba(255,247,204,0.35)]`}>
              ★
            </span>
          )}
          {star.type === 'sparkle' && (
            <span className={`${star.size} ${star.color} ${star.darkColor} leading-none drop-shadow-[0_0_6px_rgba(114,226,230,0.4)]`}>
              ✦
            </span>
          )}
          {star.type === 'tiny-burst' && (
            <span className={`${star.size} ${star.color} ${star.darkColor} leading-none`}>
              ✧
            </span>
          )}
          {star.type === 'doodle-star' && (
            <svg
              className={`w-5 h-5 sm:w-6 sm:h-6 ${star.color} ${star.darkColor} drop-shadow-xs`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};
