import React, { useState } from 'react';
import { Sparkles, GraduationCap } from 'lucide-react';
import { AboutMusicPlayer } from './AboutMusicPlayer';

export const AboutSection: React.FC = () => {
  const [activeStar, setActiveStar] = useState<string | null>(null);

  const corePillars = [
    {
      title: 'IT Business Analyst',
      subtitle: 'Scrum & Feature Quality',
      tag: 'AGILE & VALIDATION',
      description: 'Collaborating in Scrum sprint cycles, formulating actionable user stories, and conducting rigorous User Acceptance Testing (UAT) to ensure features meet real business needs.',
      badge: 'Scrum · UAT Validation',
      accentBg: 'bg-[#2F4860]',
      accentText: 'text-[#FFF7CC]',
      borderColor: 'border-[#1F3347]',
    },
    {
      title: 'UI/UX Design',
      subtitle: 'User Flows & Prototyping',
      tag: 'VISUAL INTERFACE',
      description: 'Designing intuitive user interfaces in Figma, establishing scalable component design systems, and building interactive mobile prototypes with delightful micro-interactions.',
      badge: 'Figma · Design Systems',
      accentBg: 'bg-[#7DA7D9]',
      accentText: 'text-[#2F4860]',
      borderColor: 'border-[#5F8EC9]',
    },
    {
      title: 'Web Development',
      subtitle: 'Full-Stack Implementation',
      tag: 'WEB ENGINEERING',
      description: 'Developing responsive, clean web applications utilizing Laravel, HTML5, CSS3, and JavaScript backed by structured relational databases (MySQL).',
      badge: 'Laravel · HTML · CSS · JS',
      accentBg: 'bg-[#FFF7CC]',
      accentText: 'text-[#2F4860]',
      borderColor: 'border-[#E5D895]',
    },
  ];

  const softwareStars = [
    { id: 'Fg', name: 'Figma', level: 'UI/UX Design & Prototyping', fill: '#2F4860', text: '#FFF7CC', stroke: '#1F3347' },
    { id: 'Lv', name: 'Laravel (PHP)', level: 'Web System Development', fill: '#7DA7D9', text: '#2F4860', stroke: '#5F8EC9' },
    { id: 'Web', name: 'HTML, CSS & JS', level: 'BNSP Certified Junior Web Programmer', fill: '#FFF7CC', text: '#2F4860', stroke: '#E5D895' },
    { id: 'SQL', name: 'MySQL', level: 'Database Management', fill: '#DCEEFF', text: '#2F4860', stroke: '#BDDAF7' },
    { id: 'Agile', name: 'Scrum & UAT', level: 'Agile Workflow & Testing', fill: '#2F4860', text: '#DCEEFF', stroke: '#1F3347' },
  ];

  const personalSkills = [
    { name: 'Analytical Thinking', bg: 'bg-[#2F4860] text-[#FFF7CC]' },
    { name: 'Problem-Solving', bg: 'bg-[#7DA7D9] text-[#2F4860]' },
    { name: 'Leadership', bg: 'bg-[#DCEEFF] text-[#2F4860]' },
    { name: 'Project Coordination', bg: 'bg-[#FFF7CC] text-[#2F4860] border border-[#E5D895]' },
    { name: 'Communication (English & Indonesian)', bg: 'bg-[#2F4860] text-white' },
    { name: 'Teamwork & Collaboration', bg: 'bg-[#7DA7D9] text-[#2F4860]' },
    { name: 'Time Management', bg: 'bg-[#DCEEFF] text-[#2F4860]' },
    { name: 'Adaptability & Fast Learning', bg: 'bg-[#FFF7CC] text-[#2F4860] border border-[#E5D895]' },
    { name: 'Business Operations & Planning', bg: 'bg-[#2F4860] text-[#FFF7CC]' },
  ];

  const education = {
    institution: 'Universitas Gunadarma',
    faculty: 'Fakultas Ilmu Komputer & Teknologi Informasi',
    major: 'Bachelor of Information System (S.Kom) — 3.71 / 4.00 GPA',
    period: 'Sep 2022 — Aug 2026',
    status: 'BNSP Certified Web Programmer 🎓',
    location: 'Depok, Indonesia',
  };

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Ambient Floating Star & Glow Background in Ice & Butter */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft glowing Ice Blue and Butter Yellow gradient blobs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#DCEEFF]/60 dark:bg-[#7DA7D9]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#FFF7CC]/60 dark:bg-[#FFF7CC]/10 rounded-full blur-3xl" />

        {/* Floating Sparkling Starbursts in palette colors */}
        <span className="absolute top-12 left-10 text-[#7DA7D9] opacity-70 animate-pulse text-2xl">✦</span>
        <span className="absolute top-48 right-16 text-[#2F4860] dark:text-[#FFF7CC] opacity-70 text-xl">★</span>
        <span className="absolute bottom-24 left-1/3 text-[#FFF7CC] opacity-80 text-3xl">⋆</span>
        <span className="absolute top-1/2 right-1/4 text-[#7DA7D9] opacity-70 text-lg">✦</span>
        <span className="absolute bottom-12 right-12 text-[#2F4860] dark:text-[#DCEEFF] opacity-70 text-xl">★</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Scrapbook Sheet in Clean White & Ice Blue Border */}
        <div className="relative bg-white dark:bg-[#1A2837] rounded-3xl p-6 sm:p-12 md:p-16 border-2 border-[#DCEEFF] dark:border-[#2F4860] shadow-2xl shadow-[#7DA7D9]/10">
          
          {/* Subtle paper grain texture pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none rounded-3xl bg-[radial-gradient(#2F4860_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Top Right "About Me" Sticker Badge in Deep Navy + Butter Yellow */}
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#2F4860] text-[#FFF7CC] font-syne font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-transform border border-[#1F3347]">
              <Sparkles className="w-3.5 h-3.5 text-[#FFF7CC]" />
              <span>about me</span>
            </span>
          </div>

          {/* ========================================================== */}
          {/* TOP SECTION: Typography Name, Bio, Tags, and Philosophy    */}
          {/* ========================================================== */}
          <div className="mb-14 space-y-8">
            
            {/* Name Lockup on Top */}
            <div className="relative pt-2">
              {/* Speech Bubble: "Hello there, I'm" in Ice Blue */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#7DA7D9]/60 bg-[#DCEEFF] dark:bg-[#2F4860] text-[#2F4860] dark:text-[#FFF7CC] font-mono text-xs mb-3 shadow-2xs font-semibold">
                <span>Hello there, I&apos;m</span>
                <span className="text-[#7DA7D9]">✨</span>
              </div>

              {/* Big Artistic Name: "Shazfa Delphinia" */}
              <div className="leading-none select-none">
                <div className="flex items-baseline">
                  <span className="font-fraunces italic font-light text-6xl sm:text-7xl md:text-8xl text-[#7DA7D9] dark:text-[#DCEEFF] -mr-2">
                    S
                  </span>
                  <span className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl text-[#2F4860] dark:text-white tracking-tight">
                    hazfa
                  </span>
                </div>
                <div className="font-fraunces italic font-medium text-4xl sm:text-5xl md:text-6xl text-[#2F4860] dark:text-[#7DA7D9] ml-8 -mt-2">
                  Delphinia
                </div>
              </div>
            </div>

            {/* Row 1: Bio Text on Left, Photo Card on Right */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 lg:gap-12 items-start pt-1">
              
              {/* Left: Bio Paragraphs */}
              <div className="sm:col-span-7 lg:col-span-7 space-y-4">
                <div className="space-y-4 text-[#2F4860]/90 dark:text-[#DCEEFF]/90 text-sm sm:text-base leading-relaxed font-sans-body text-justify">
                  <p>
                    Hi, I’m <strong className="font-semibold text-[#2F4860] dark:text-white">Shazfa Delphinia Arifinnisa Rasyid</strong>! ✦ I’m an <strong className="font-semibold text-[#2F4860] dark:text-white">Information Systems fresh graduate from Universitas Gunadarma (GPA 3.71/4.00)</strong>, passionate about combining creative UI design, reliable web development, and user-centered system thinking.
                  </p>
                  <p>
                    For me, building great digital products starts with <strong className="font-semibold text-[#2F4860] dark:text-white">understanding real user and business needs</strong>. With my Information Systems background, I work collaboratively through the <strong className="font-semibold text-[#2F4860] dark:text-white">Scrum framework</strong> and conduct rigorous <strong className="font-semibold text-[#2F4860] dark:text-white">User Acceptance Testing (UAT)</strong> to ensure software features are functional, reliable, and ready for release.
                  </p>
                  <p>
                    I translate those verified needs into intuitive <strong className="font-semibold text-[#2F4860] dark:text-white">UI/UX designs</strong> in Figma, and build responsive web applications using <strong className="font-semibold text-[#2F4860] dark:text-white">Laravel, HTML, CSS, and JavaScript</strong>. I am also <strong className="font-semibold text-[#2F4860] dark:text-white">proficient in English</strong> (both verbal and written communication) for smooth cross-functional and global collaboration.
                  </p>
                </div>
              </div>

              {/* Right: Unique Scrapbook Polaroid Photo Card */}
              <div className="sm:col-span-5 lg:col-span-5 flex justify-center sm:justify-end">
                <div className="relative group w-full max-w-[300px] sm:max-w-[320px] lg:max-w-[340px]">
                  
                  {/* Decorative Offset Backdrop Frame (Physical Scrapbook Layer) */}
                  <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-3xl bg-[#7DA7D9]/25 dark:bg-[#7DA7D9]/15 border-2 border-dashed border-[#7DA7D9]/50 -rotate-2 group-hover:-rotate-3 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300 ease-out pointer-events-none" />

                  {/* Cute Scrapbook Paperclip on Top Left */}
                  <div className="absolute -top-3 left-4 z-40 w-4 h-9 rounded-full border-2 border-[#7DA7D9] bg-white/40 dark:bg-[#2F4860]/50 backdrop-blur-xs shadow-xs pointer-events-none rotate-12 flex flex-col items-center justify-between py-1">
                    <div className="w-1.5 h-3 rounded-full border border-[#2F4860]/50" />
                  </div>

                  {/* Main Polaroid Frame Card */}
                  <div className="relative bg-white dark:bg-[#162331] p-4 pb-5 rounded-3xl border-2 border-[#DCEEFF] dark:border-[#72E2E6]/40 shadow-xl shadow-[#7DA7D9]/15 dark:shadow-[0_0_25px_rgba(114,226,230,0.14)] rotate-1 group-hover:rotate-0 group-hover:scale-[1.01] transition-all duration-300 ease-out">
                    
                    {/* Butter Yellow Washi Tape at Top (Clean with cute stars, no 'authentic profile' text) */}
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 px-5 py-1 bg-[#FFF7CC] border border-[#E6DB97] shadow-xs text-[#2F4860] text-[11px] font-mono font-bold tracking-widest -rotate-2 flex items-center gap-2 select-none rounded-xs">
                      <span className="text-[#72E2E6]">✦</span>
                      <span>★</span>
                      <span className="text-[#72E2E6]">✦</span>
                    </div>

                    {/* Corner Sparkle Badge Pins */}
                    <div className="absolute -top-2.5 -right-2.5 z-30 w-7 h-7 rounded-full bg-[#FFF7CC] border-2 border-[#2F4860] flex items-center justify-center text-xs shadow-sm font-bold text-[#2F4860] select-none hover:rotate-12 transition-transform">
                      ★
                    </div>
                    <div className="absolute -bottom-2 -left-2 z-30 w-7 h-7 rounded-full bg-[#72E2E6] border-2 border-white dark:border-[#162331] flex items-center justify-center text-xs shadow-sm text-[#162331] font-bold select-none hover:-rotate-12 transition-transform shadow-[0_0_10px_rgba(114,226,230,0.5)]">
                      ✦
                    </div>

                    {/* Extra Cute Decor: Floating Sparkle Stars around the card */}
                    <span className="absolute -top-5 right-8 text-[#FFF7CC] text-lg select-none pointer-events-none drop-shadow-xs animate-pulse">
                      ✧
                    </span>
                    <span className="absolute top-1/2 -left-3 text-[#72E2E6] text-sm select-none pointer-events-none">
                      ✦
                    </span>
                    <span className="absolute -bottom-3 right-10 text-[#FFF7CC] text-base select-none pointer-events-none">
                      ★
                    </span>

                    {/* Photo Container with subtle inner border & tag (Square 1:1 Aspect Ratio) */}
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#2F4860] border border-[#DCEEFF] dark:border-[#72E2E6]/30">
                      
                      {/* Scrapbook Photo Mount Corners (Vintage Album Style from moodboard) */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#FFF7CC] z-20 pointer-events-none rounded-tl-sm" />
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#FFF7CC] z-20 pointer-events-none rounded-tr-sm" />
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#72E2E6] z-20 pointer-events-none rounded-bl-sm" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#72E2E6] z-20 pointer-events-none rounded-br-sm" />

                      <img
                        src="/public/assets/aistudio/Profile_Picture_af29983e.png"
                        alt="Shazfa Delphinia Arifinnisa Rasyid"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes('Profile_Picture_af29983e.png')) return;
                          if (!target.src.startsWith('/assets')) {
                            target.src = '/assets/aistudio/Profile_Picture_af29983e.png';
                          }
                        }}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      />

                      {/* Gradient Overlay for subtle polish */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2F4860]/55 via-transparent to-transparent pointer-events-none" />

                      {/* On-Photo Stamp Pill: Clean S.Kom graduate tag, NO GPA */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full bg-[#162331]/85 backdrop-blur-md text-[#FFF7CC] text-[10px] font-mono font-semibold border border-[#72E2E6]/40 shadow-sm flex items-center gap-1">
                          <span>✨</span>
                          <span>S.Kom · Information Systems</span>
                        </span>
                        <span className="w-5 h-5 rounded-full bg-[#FFF7CC]/90 text-[#2F4860] flex items-center justify-center text-[10px] font-bold shadow-xs">
                          ✦
                        </span>
                      </div>
                    </div>

                    {/* Polaroid Handwritten/Editorial Caption Footer (No 2025) */}
                    <div className="pt-3.5 px-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-syne font-bold text-sm text-[#2F4860] dark:text-white tracking-tight">
                          Shazfa Delphinia A. R.
                        </p>
                        <div className="flex items-center gap-1 text-[#72E2E6] text-xs">
                          <span>✨</span>
                          <span>✦</span>
                        </div>
                      </div>
                      <p className="text-[11px] font-mono text-[#7DA7D9] dark:text-[#DCEEFF]/80 leading-tight">
                        S1 Information Systems · Universitas Gunadarma
                      </p>
                      
                      {/* Secondary Mini Washi Tape on Bottom-Right with Barcode Ticket Motif */}
                      <div className="flex items-center justify-between pt-1.5">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#2F4860]/70 dark:text-[#FFF7CC]/80">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#72E2E6] animate-pulse shadow-[0_0_6px_rgba(114,226,230,0.8)]" />
                          <span>Ready to collaborate</span>
                        </div>
                        <div className="px-2 py-0.5 rounded-xs bg-[#DCEEFF] dark:bg-[#1A2A3A] border border-[#BDDAF7] dark:border-[#72E2E6]/30 text-[#2F4860] dark:text-[#FFF7CC] text-[9px] font-mono font-semibold -rotate-2 select-none shadow-2xs flex items-center gap-1">
                          <span className="opacity-70 text-[8px]">||| || |</span>
                          <span>✦ @shaz.faa</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Row 2: Quote & Music Player Perfectly Aligned (Sejajar) with Ample Breathing Space */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-8 sm:mt-10 pt-2">
              
              {/* Left Column: TWS English Lyric Quote Card */}
              <div className="sm:col-span-7 lg:col-span-7 flex flex-col justify-center">
                <div className="p-4 sm:p-5 rounded-3xl bg-[#DCEEFF]/40 dark:bg-[#162331]/85 backdrop-blur-md border border-[#DCEEFF] dark:border-[#72E2E6]/35 space-y-2 h-full flex flex-col justify-center shadow-xs dark:shadow-[0_0_20px_rgba(114,226,230,0.08)]">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#7DA7D9] dark:text-[#72E2E6] font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <span>✨</span>
                      <span>TWS &middot; Sparkling Blue</span>
                    </span>
                    <span>✦ plot twist</span>
                  </div>
                  <p className="font-fraunces italic text-sm sm:text-base text-[#2F4860] dark:text-white leading-relaxed">
                    &ldquo;Even when the first step doesn&apos;t go as planned, every moment brings us closer to something bright and meaningful.&rdquo; ✦
                  </p>
                </div>
              </div>

              {/* Right Column: TWS Music Player (Aligned perfectly with Quote Card) */}
              <div className="sm:col-span-5 lg:col-span-5 flex justify-center sm:justify-end">
                <div className="w-full max-w-[300px] sm:max-w-[320px] lg:max-w-[340px] h-full flex flex-col justify-center">
                  <AboutMusicPlayer />
                </div>
              </div>

            </div>

          </div>

          {/* ========================================================== */}
          {/* BOTTOM SECTION: 3 Core Pillars, Education, Skills          */}
          {/* ========================================================== */}
          <div className="pt-10 border-t-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-12">
            
            {/* 1. 3 Core Pillars Row */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[#7DA7D9] font-serif text-xl">✦</span>
                <h3 className="font-fraunces text-2xl sm:text-3xl text-[#2F4860] dark:text-white font-semibold">
                  3 Core Pillars
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {corePillars.map((pillar, idx) => (
                  <div
                    key={pillar.title}
                    className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#203244] border-2 border-[#DCEEFF] dark:border-[#2F4860] shadow-sm flex flex-col justify-between space-y-4 hover:border-[#7DA7D9] hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider ${pillar.accentBg} ${pillar.accentText} border ${pillar.borderColor}`}>
                          0{idx + 1} · {pillar.tag}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-syne font-bold text-lg text-[#2F4860] dark:text-white">
                          {pillar.title}
                        </h4>
                        <p className="font-fraunces italic text-xs text-[#7DA7D9] mt-0.5">
                          {pillar.subtitle}
                        </p>
                      </div>
                      <p className="text-xs sm:text-sm font-sans-body text-[#2F4860]/80 dark:text-[#DCEEFF]/90 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#DCEEFF] dark:border-[#2F4860] flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#7DA7D9] dark:text-[#FFF7CC]">
                        {pillar.badge}
                      </span>
                      <span className="text-xs text-[#7DA7D9]">✦</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Education Row (Only 1 Gundar Card) */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[#7DA7D9] font-serif text-xl">✦</span>
                <h3 className="font-fraunces text-2xl sm:text-3xl text-[#2F4860] dark:text-white font-semibold">
                  Education
                </h3>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#203244] border-2 border-[#DCEEFF] dark:border-[#2F4860] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 hover:border-[#7DA7D9] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#DCEEFF] dark:bg-[#2F4860] text-[#2F4860] dark:text-[#FFF7CC] border border-[#7DA7D9]/40 flex items-center justify-center shrink-0 font-syne font-bold text-base shadow-xs">
                    <GraduationCap className="w-6 h-6 text-[#7DA7D9]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-syne font-bold text-lg sm:text-xl text-[#2F4860] dark:text-white">
                      {education.institution}
                    </h4>
                    <p className="text-xs sm:text-sm font-sans-body text-[#2F4860]/90 dark:text-[#DCEEFF]/90 font-medium">
                      {education.major}
                    </p>
                    <p className="text-xs font-mono text-[#2F4860]/60 dark:text-[#DCEEFF]/60">
                      {education.faculty} · {education.location}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2.5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#DCEEFF] dark:border-[#2F4860]">
                  <span className="text-xs font-mono font-semibold text-[#2F4860] bg-[#FFF7CC] px-3.5 py-1 rounded-full border border-[#E7DB99] shadow-2xs">
                    {education.period}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#2F4860] dark:text-[#FFF7CC] bg-[#DCEEFF] dark:bg-[#2F4860] px-3.5 py-1 rounded-full border border-[#7DA7D9]/40">
                    {education.status}
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Skills Split: Software Skills (Stars) & Personal Skills (Pills) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Software Skills in Ice & Butter Star Badges */}
              <div className="md:col-span-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#7DA7D9] font-serif text-xl">✦</span>
                  <h3 className="font-fraunces text-2xl sm:text-3xl text-[#2F4860] dark:text-white font-semibold">
                    Software Skills
                  </h3>
                </div>

                <p className="text-xs font-mono text-[#2F4860]/70 dark:text-[#DCEEFF]/70">
                  Tap / hover star to inspect tool mastery:
                </p>

                {/* Star shaped icons row */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                  {softwareStars.map((sw) => {
                    const isHovered = activeStar === sw.id;
                    return (
                      <div
                        key={sw.id}
                        onMouseEnter={() => setActiveStar(sw.id)}
                        onMouseLeave={() => setActiveStar(null)}
                        className="relative group cursor-pointer"
                      >
                        {/* 5-pointed Star SVG Container styled in Ice & Butter */}
                        <div
                          className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-all duration-300 ${
                            isHovered
                              ? 'scale-115 rotate-12 drop-shadow-xl'
                              : 'hover:scale-105 drop-shadow-md'
                          }`}
                        >
                          <svg
                            viewBox="0 0 100 100"
                            className="w-full h-full transition-transform"
                            fill={sw.fill}
                            stroke={sw.stroke}
                            strokeWidth="2"
                          >
                            <polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36" />
                          </svg>

                          {/* Tool Acronym inside the star */}
                          <span
                            className="absolute inset-0 flex items-center justify-center font-syne font-extrabold text-xs sm:text-sm tracking-tight drop-shadow-xs"
                            style={{ color: sw.text }}
                          >
                            {sw.id}
                          </span>
                        </div>

                        {/* Tooltip on hover */}
                        <div
                          className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#2F4860] text-white text-[10px] font-mono px-2.5 py-1 rounded shadow-lg transition-all duration-200 pointer-events-none z-30 border border-[#7DA7D9] ${
                            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                          }`}
                        >
                          {sw.name} · {sw.level}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Personal Skills (Pill badges styled with the 5 palette colors) */}
              <div className="md:col-span-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#7DA7D9] font-serif text-xl">✦</span>
                  <h3 className="font-fraunces text-2xl sm:text-3xl text-[#2F4860] dark:text-white font-semibold">
                    Personal Skills
                  </h3>
                </div>

                <p className="text-xs font-mono text-[#2F4860]/70 dark:text-[#DCEEFF]/70">
                  Core competencies &amp; creative workflows:
                </p>

                {/* Pill Badges Grid in Ice & Butter Styling */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {personalSkills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold shadow-xs transition-all hover:scale-105 cursor-default select-none ${skill.bg}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
