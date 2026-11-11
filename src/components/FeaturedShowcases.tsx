import React, { useState } from 'react';
import { MarqueeRibbon } from './MarqueeRibbon';
import { Sparkles, Heart, MessageCircle, Send, Bookmark, ZoomIn, Eye, ArrowRight, ExternalLink } from 'lucide-react';
import { Project } from '../types/portfolio';

interface FeaturedShowcasesProps {
  onOpenProject: (projectId: string) => void;
  onOpenImageModal: (title: string, subtitle: string, imageSrc: string) => void;
}

export const FeaturedShowcases: React.FC<FeaturedShowcasesProps> = ({
  onOpenProject,
  onOpenImageModal,
}) => {
  // Instagram mockup state
  const [activeSlide, setActiveSlide] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(482);
  const [saved, setSaved] = useState(false);

  const instagramPosts = [
    {
      id: 'post-1',
      title: 'Mie Kuah Spesial',
      badge: '7K',
      tagline: 'Mie kuah dengan telur renyah & kuah gurih hangat',
      desc: 'Menu comfort food paling dicari saat sore hari gerimis.',
      color: '#4A2E18',
    },
    {
      id: 'post-2',
      title: 'Kalian Tim Mana?',
      badge: 'VOTE',
      tagline: 'Es Teh Manis vs Es Kopi Susu Aren Gula Jawa',
      desc: 'Drop jawaban kalian di kolom komentar bawah ya!',
      color: '#8D5B4C',
    },
    {
      id: 'post-3',
      title: 'Paket Combo Kenyang!',
      badge: '12K',
      tagline: 'Jumbo Mie Goreng Telur + Es Teh Segar',
      desc: 'Hemat banget buat nemenin nugas atau skripsian.',
      color: '#C0392B',
    },
    {
      id: 'post-4',
      title: 'Cappuccino Hangat',
      badge: '7K',
      tagline: 'Espresso blend lokal dengan microfoam creamy',
      desc: 'Aroma biji kopi pilihan langsung dari petani lokal.',
      color: '#5D4037',
    },
  ];

  const handleLike = () => {
    if (liked) {
      setLikesCount((prev) => prev - 1);
      setLiked(false);
    } else {
      setLikesCount((prev) => prev + 1);
      setLiked(true);
    }
  };

  // Sketchbook artworks for "My Random Work"
  const randomArtworks = [
    {
      id: 'sketch-1',
      title: 'Fasad Ruko Vintage',
      medium: 'Pen & Ink on Paper',
      size: 'A5 Sketchbook',
      color: 'bg-stone-100 dark:bg-stone-800',
      description: 'Studi perspektif detail arsitektural toko antik jalanan Braga.',
      tag: 'Pen Sketch',
      img: '/public/assets/aistudio/image_2ebe3b49.png'
    },
    {
      id: 'sketch-2',
      title: 'Lanskap Senja di Perbukitan',
      medium: 'Himi Gouache',
      size: 'A5 Mixed Media',
      color: 'bg-emerald-950/20',
      description: 'Gradasi langit pink-oranye dengan bukit hijau berlapis.',
      tag: 'Gouache',
      img: '/public/assets/aistudio/image_2ebe3b49.png'
    },
    {
      id: 'sketch-3',
      title: 'Still Life Buku & Botol',
      medium: 'Gouache on Black Paper',
      size: '20 x 20 cm',
      color: 'bg-stone-900',
      description: 'Eksplorasi kontras cahaya dramatis pada objek sehari-hari.',
      tag: 'Still Life',
      img: '/public/assets/aistudio/image_2ebe3b49.png'
    },
    {
      id: 'sketch-4',
      title: 'Aliran Sungai Lembah Hijau',
      medium: 'Watercolor & Ink',
      size: 'A5 Cold Press',
      color: 'bg-cyan-950/20',
      description: 'Teknik wet-on-wet untuk menangkap pantulan air dan rumput segar.',
      tag: 'Watercolor',
      img: '/public/assets/aistudio/image_2ebe3b49.png'
    },
    {
      id: 'sketch-5',
      title: 'Kolase Potret Pensil',
      medium: 'Pencil 2B-6B & Cutouts',
      size: 'Spiral Sketchbook',
      color: 'bg-stone-200 dark:bg-stone-800',
      description: 'Kumpulan studi ekspresi wajah dan potongan sketsa karakter manga.',
      tag: 'Character Study',
      img: '/public/assets/aistudio/image_2ebe3b49.png'
    },
  ];

  // Coffee posters
  const coffeePosters = [
    {
      id: 'poster-1',
      brand: 'sora café.',
      title: 'Cold Foam Brew',
      subtitle: 'minimal space, calm energy.',
      accent: 'from-amber-100 to-stone-200',
      tags: ['A2 Screenprint', 'Clean Grid'],
    },
    {
      id: 'poster-2',
      brand: 'slow sips',
      title: 'made for slow moments.',
      subtitle: 'open everyday. 09:00 — 22:00',
      accent: 'from-stone-100 to-amber-50',
      tags: ['Magazine Layout', 'Macro Photography'],
    },
    {
      id: 'poster-3',
      brand: 'latte is made for...',
      title: 'the light latte.',
      subtitle: 'smooth sips in warm sunbeams.',
      accent: 'from-amber-50 to-orange-100',
      tags: ['Editorial Serif', 'Poster Series'],
    },
  ];

  return (
    <section id="showcase" className="relative space-y-24 sm:space-y-32">
      {/* ============================================================== */}
      {/* 1. SOCIAL MEDIA DESIGN: CAFÉ SOERYA DJINGGA (From Image 2)      */}
      {/* ============================================================== */}
      <div className="relative">
        {/* Top Marquee Ribbon */}
        <MarqueeRibbon
          text="about me ✦ about me ✦ about me ✦ about me ✦ about me ✦ about me ✦"
          variant="pink"
          className="mb-12"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-10">
            <span className="text-xs sm:text-sm font-syne font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              re-branding of Cafe Soerya Djingga
            </span>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mt-1">
              <h3 className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#FF5A87] tracking-tight">
                Social Media Design
              </h3>
              <button
                onClick={() => onOpenProject('cafe-soerya-djingga')}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-stone-500 dark:text-stone-400 hover:text-slate-900 dark:hover:text-white group"
              >
                <span>View Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Main Content Split: Phone Mockup + Feed Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive iPhone Frame Mockup */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-[280px] sm:w-[310px] bg-slate-900 dark:bg-black rounded-[48px] p-3 shadow-2xl border-4 border-stone-800 dark:border-stone-700">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-900 border border-stone-800 ml-auto mr-2" />
                </div>

                {/* Inner Screen */}
                <div className="bg-[#FAF8F5] dark:bg-stone-900 rounded-[38px] overflow-hidden pt-8 pb-4 text-slate-900 dark:text-white flex flex-col h-[520px]">
                  {/* Instagram Header */}
                  <div className="px-4 py-2 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-amber-700 flex items-center justify-center text-white text-[10px] font-bold">
                        SD
                      </div>
                      <div>
                        <p className="font-bold text-xs leading-none">soeryadjingga.cafe</p>
                        <p className="text-[9px] text-stone-500">Bandung, Jawa Barat</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-600 font-bold">Follow</span>
                  </div>

                  {/* Active Feed Slide Visual */}
                  <div className="relative flex-1 bg-[#4A2E18] text-white p-4 flex flex-col justify-between overflow-hidden">
                    {/* Background Graphic Mockup */}
                    <div className="absolute inset-0 opacity-20">
                      <img
                        src="/public/assets/aistudio/image_2ebe3b49.png"
                        alt="Feed Artwork"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="relative z-10 flex justify-between items-start">
                      <span className="bg-amber-500 text-stone-950 font-syne font-extrabold text-xs px-2.5 py-1 rounded-full shadow-md">
                        {instagramPosts[activeSlide].badge}
                      </span>
                      <span className="text-[10px] font-mono bg-black/40 px-2 py-0.5 rounded-full">
                        {activeSlide + 1} / {instagramPosts.length}
                      </span>
                    </div>

                    <div className="relative z-10 space-y-1.5 my-auto text-center py-6">
                      <p className="font-fraunces text-2xl font-bold leading-tight text-amber-100">
                        {instagramPosts[activeSlide].title}
                      </p>
                      <p className="text-xs text-amber-200/90 font-sans-body">
                        {instagramPosts[activeSlide].tagline}
                      </p>
                    </div>

                    <div className="relative z-10 text-[10px] text-center text-amber-300 font-mono">
                      ✦ Swipe or tap cards to preview ✦
                    </div>
                  </div>

                  {/* Action Bar (Heart, Comment, Share, Save) */}
                  <div className="px-4 py-2 flex items-center justify-between border-t border-stone-200 dark:border-stone-800">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={handleLike}
                        className="transition-transform active:scale-125 cursor-pointer"
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            liked ? 'text-red-500 fill-red-500' : 'text-stone-700 dark:text-stone-200'
                          }`}
                        />
                      </button>
                      <MessageCircle className="w-5 h-5 text-stone-700 dark:text-stone-200" />
                      <Send className="w-4 h-4 text-stone-700 dark:text-stone-200" />
                    </div>
                    <button onClick={() => setSaved(!saved)} className="cursor-pointer">
                      <Bookmark
                        className={`w-5 h-5 ${
                          saved ? 'text-slate-900 fill-current dark:text-white' : 'text-stone-700 dark:text-stone-200'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Likes count & caption snippet */}
                  <div className="px-4 text-[11px] space-y-0.5">
                    <p className="font-bold">{likesCount.toLocaleString()} suka</p>
                    <p className="text-stone-600 dark:text-stone-400 line-clamp-1">
                      <span className="font-bold text-slate-900 dark:text-white mr-1">soeryadjingga.cafe</span>
                      {instagramPosts[activeSlide].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Grid of 4 Interactive Post Previews */}
            <div className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {instagramPosts.map((post, index) => {
                  const isActive = activeSlide === index;
                  return (
                    <div
                      key={post.id}
                      onClick={() => setActiveSlide(index)}
                      className={`relative aspect-square rounded-2xl p-3 flex flex-col justify-between cursor-pointer transition-all duration-200 border-2 ${
                        isActive
                          ? 'border-pink-500 shadow-lg scale-102 bg-white dark:bg-stone-900'
                          : 'border-stone-200 dark:border-stone-800 bg-[#FAF8F5] dark:bg-stone-900/60 hover:border-pink-300'
                      }`}
                    >
                      {/* Price badge stamp */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-stone-400">#0{index + 1}</span>
                        <span className="w-6 h-6 rounded-full bg-amber-500 text-stone-950 font-bold text-[10px] flex items-center justify-center shadow-xs">
                          {post.badge}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="text-center py-1">
                        <p className="font-syne font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-tight">
                          {post.title}
                        </p>
                        <p className="text-[10px] text-stone-500 dark:text-stone-400 line-clamp-2 mt-1">
                          {post.tagline}
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <span
                          className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-full ${
                            isActive
                              ? 'bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300 font-bold'
                              : 'text-stone-400'
                          }`}
                        >
                          {isActive ? 'Active on Screen' : 'Tap to Preview'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Editorial Description block like in Image 2 */}
              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3">
                <div className="flex items-center gap-2 text-pink-500 font-mono text-xs">
                  <Sparkles className="w-4 h-4" />
                  <span>BRAND AWARENESS & INSTAGRAM PROMOTION CAMPAIGN</span>
                </div>
                <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed font-sans-body">
                  Feed Instagram ini dirancang sebagai promosi online untuk menjangkau audiens Gen Z dan milenial. Pendekatan visual dijaga konsisten dengan palet warna warm coffee, tipografi berkarakter kuat, dan stiker promosi yang langsung terbaca dalam 2 detik pertama di layar ponsel pengguna.
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-between text-xs font-mono text-stone-500 border-t border-stone-100 dark:border-stone-800">
                  <span>portfolio 2024 - 2025</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    18 Post Templates · 24 Stories · Brand Book
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. MY RANDOM WORK: SKETCHBOOK & ART ARCHIVES (From Image 2)    */}
      {/* ============================================================== */}
      <div id="art-lab" className="relative">
        {/* Marquee Ribbon Green */}
        <MarqueeRibbon
          text="re-branding ✦ re-branding ✦ re-branding ✦ re-branding ✦ re-branding ✦ re-branding ✦"
          variant="green"
          className="mb-12"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs sm:text-sm font-syne font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">
                internship project & art archives
              </span>
              <h3 className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#008744] dark:text-emerald-400 tracking-tight mt-1">
                My Random Work
              </h3>
            </div>
            <div className="max-w-md">
              <div className="flex items-center gap-1.5 text-pink-500 mb-1">
                <Sparkles className="w-4 h-4" />
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-sans-body leading-relaxed">
                This is a personal artwork created from my hobby of drawing. I worked on it during my free time to keep my analog intuition fresh and alive.
              </p>
            </div>
          </div>

          {/* 5 Artwork Cards Row as seen in Image 2 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {randomArtworks.map((art) => (
              <div
                key={art.id}
                onClick={() => onOpenImageModal(art.title, art.medium, art.img)}
                className="group relative bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-2.5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
              >
                {/* Visual Art Canvas Frame */}
                <div className="relative aspect-3/4 rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-800 mb-3 border border-stone-200/60 dark:border-stone-700/60">
                  <img
                    src={art.img}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Hover Zoom icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-2 rounded-full bg-white/90 text-slate-900 shadow-lg">
                      <ZoomIn className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Tag pill */}
                  <span className="absolute top-2 left-2 text-[9px] font-mono px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-xs">
                    {art.tag}
                  </span>
                </div>

                {/* Info Text */}
                <div className="space-y-1 px-1">
                  <h4 className="font-syne font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate">
                    {art.title}
                  </h4>
                  <p className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                    {art.medium}
                  </p>
                  <p className="text-[10px] text-stone-500 line-clamp-2">
                    {art.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[10px] font-mono text-stone-400">
                  <span>{art.size}</span>
                  <span className="text-emerald-600 group-hover:translate-x-0.5 transition-transform font-bold">
                    EXPAND ↗
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-6 flex justify-between items-center text-xs font-mono text-stone-400">
            <span>portfolio 2024 - 2025</span>
            <span className="text-stone-500">Curated from 40+ sketchbooks</span>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. COFFEE POSTER: MINIMALIST EDITORIAL (From Image 2)           */}
      {/* ============================================================== */}
      <div className="relative">
        {/* Marquee Ribbon Pink */}
        <MarqueeRibbon
          text="coffee ✦ coffee ✦ coffee ✦ coffee ✦ coffee ✦ coffee ✦ coffee ✦"
          variant="pink"
          className="mb-12"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs sm:text-sm font-syne font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                coffee poster with minimalist style
              </span>
              <h3 className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#FF5A87] tracking-tight mt-1">
                Coffee Poster
              </h3>
            </div>
            <div className="max-w-md">
              <div className="flex items-center gap-1.5 text-emerald-500 mb-1">
                <Sparkles className="w-4 h-4" />
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-sans-body leading-relaxed">
                This is a Coffee Poster designed in a minimalist style. The layout focuses on simplicity, clean typography, and a calm visual tone to highlight the product without unnecessary elements.
              </p>
            </div>
          </div>

          {/* 3 Vertical Editorial Posters from Image 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {coffeePosters.map((poster, idx) => (
              <div
                key={poster.id}
                onClick={() => onOpenProject('sora-cafe-posters')}
                className="group relative bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-4 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Poster Canvas */}
                <div className="relative aspect-3/4 rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700/80 p-6 flex flex-col justify-between">
                  {/* Subtle poster background artwork */}
                  <div className="absolute inset-0 opacity-25 group-hover:opacity-35 transition-opacity">
                    <img
                      src="/public/assets/aistudio/image_2ebe3b49.png"
                      alt={poster.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Poster Header */}
                  <div className="relative z-10">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500">
                      SERIES #0{idx + 1}
                    </span>
                    <h4 className="font-fraunces text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
                      {poster.brand}
                    </h4>
                  </div>

                  {/* Center focus text */}
                  <div className="relative z-10 space-y-1 text-center py-8">
                    <p className="font-syne font-bold text-lg sm:text-xl text-slate-900 dark:text-stone-100 leading-tight">
                      {poster.title}
                    </p>
                    <p className="text-xs font-mono text-stone-500 dark:text-stone-400">
                      {poster.subtitle}
                    </p>
                  </div>

                  {/* Poster Footer */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-stone-500 border-t border-stone-300/60 dark:border-stone-700 pt-3">
                    <span>SORA SPECIALTY</span>
                    <span className="text-pink-600 dark:text-pink-400 font-bold group-hover:translate-x-1 transition-transform">
                      EXPLORE POSTER →
                    </span>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="mt-3 flex items-center justify-between px-1">
                  <div className="flex gap-1.5">
                    {poster.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-stone-500 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Eye className="w-4 h-4 text-stone-400 group-hover:text-pink-500 transition-colors" />
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-6 flex justify-between items-center text-xs font-mono text-stone-400">
            <span>portfolio 2024 - 2025</span>
            <button
              onClick={() => onOpenProject('sora-cafe-posters')}
              className="text-pink-600 dark:text-pink-400 hover:underline flex items-center gap-1"
            >
              <span>View full print specifications</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
