import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X, Sparkles, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onHireClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onHireClick }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'My Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-[#111A24]/85 backdrop-blur-md border-b border-[#DCEEFF]/90 dark:border-[#72E2E6]/25 py-3 shadow-sm dark:shadow-[0_4px_20px_rgba(114,226,230,0.08)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark on Left */}
          <a
            href="#"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 text-[#2F4860] dark:text-white"
          >
            <div className="w-8 h-8 rounded-lg bg-[#DCEEFF] dark:bg-[#1A2A3A] text-[#2F4860] dark:text-[#FFF7CC] border border-[#7DA7D9]/40 dark:border-[#72E2E6]/40 flex items-center justify-center font-bold text-sm tracking-tighter group-hover:rotate-12 transition-all shadow-2xs group-hover:shadow-[0_0_12px_rgba(114,226,230,0.4)]">
              <Sparkles className="w-4 h-4 text-[#7DA7D9] dark:text-[#72E2E6]" />
            </div>
            <span className="font-syne font-extrabold text-lg sm:text-xl tracking-tight uppercase">
              PORTFOLIO<span className="text-[#72E2E6] font-serif italic text-xl">.</span>
            </span>
          </a>

          {/* Right Group: Nav Links (Right-aligned) + Theme Switch + Let's Collab CTA */}
          <div className="flex items-center gap-6 sm:gap-7">
            {/* Zone 2: Nav Links placed to the right */}
            <nav className="hidden md:flex items-center gap-6 sm:gap-7 text-sm font-semibold text-[#2F4860]/80 dark:text-[#DCEEFF]/90 font-sans-body">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative py-1 hover:text-[#7DA7D9] dark:hover:text-[#FFF7CC] transition-colors whitespace-nowrap shrink-0 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#7DA7D9] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Subtle separator between nav links and actions on desktop */}
            <div className="hidden md:block h-4 w-px bg-[#DCEEFF] dark:bg-[#2F4860]" />

            {/* Zone 3: Theme switch & Primary CTA */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-2 rounded-full text-[#2F4860] dark:text-[#DCEEFF] hover:bg-[#DCEEFF]/50 dark:hover:bg-[#2F4860] transition-all duration-200 cursor-pointer"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[#FFF7CC]" />
                ) : (
                  <Moon className="w-4 h-4 text-[#2F4860]" />
                )}
              </button>

              {/* Hire Me CTA */}
              <button
                onClick={onHireClick}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-[#2F4860] text-white hover:bg-[#7DA7D9] hover:text-[#2F4860] dark:bg-[#FFF7CC] dark:text-[#2F4860] dark:hover:bg-[#DCEEFF] transition-all duration-200 shadow-sm whitespace-nowrap cursor-pointer active:scale-95"
              >
                <span>Let&apos;s Collab</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile menu hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="md:hidden p-2 rounded-lg text-[#2F4860] dark:text-[#DCEEFF] hover:bg-[#DCEEFF]/40 dark:hover:bg-[#2F4860]"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#172431] border-b border-[#DCEEFF] dark:border-[#2F4860] px-6 py-4 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-[#2F4860] dark:text-[#DCEEFF] hover:text-[#7DA7D9] py-1.5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onHireClick();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold rounded-full bg-[#2F4860] text-white dark:bg-[#FFF7CC] dark:text-[#2F4860]"
            >
              Let&apos;s Collab
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
