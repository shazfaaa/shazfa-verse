import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format WIB (UTC+7)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat('id-ID', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#DCEEFF] dark:border-[#2F4860] bg-white dark:bg-[#172431] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand mark & signature */}
          <div className="flex items-center gap-3">
            <span className="font-syne font-extrabold text-lg text-[#2F4860] dark:text-white">
              SHAZFA DELPHINIA
            </span>
            <span className="text-[#7DA7D9]">|</span>
            <span className="text-xs font-mono text-[#2F4860]/70 dark:text-[#DCEEFF]/70">
              UI Designer · Web Dev · IT BA · Bekasi, ID
            </span>
          </div>

          {/* Live Local Time */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#2F4860] dark:text-[#DCEEFF] bg-[#DCEEFF]/60 dark:bg-[#203244] px-3.5 py-1.5 rounded-full border border-[#7DA7D9]/40 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#7DA7D9] animate-pulse" />
            <span>BEKASI, ID (WIB):</span>
            <span className="font-bold text-[#2F4860] dark:text-[#FFF7CC] tabular-nums">
              {currentTime || '08:45:00'}
            </span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-mono text-[#2F4860] dark:text-[#DCEEFF] hover:text-[#7DA7D9] transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <span className="p-1 rounded-full bg-[#DCEEFF] dark:bg-[#2F4860] group-hover:bg-[#7DA7D9] group-hover:text-[#2F4860] transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-[#DCEEFF]/60 dark:border-[#2F4860]/60 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#2F4860]/60 dark:text-[#DCEEFF]/60 gap-2">
          <p>© {new Date().getFullYear()} Shazfa Delphinia Arifinnisa Rasyid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
