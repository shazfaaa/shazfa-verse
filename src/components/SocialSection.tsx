import React, { useState } from 'react';
import { SOCIAL_PROFILES, PERSONAL_INFO } from '../data/portfolioData';
import {
  Instagram,
  Music,
  Linkedin,
  Palette,
  Video,
  Pin,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  MessageCircle,
  Play,
  Volume2
} from 'lucide-react';

export const SocialSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Instagram':
        return <Instagram className="w-5 h-5" />;
      case 'Video':
        return <Video className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'Music':
        return <Music className="w-5 h-5" />;
      case 'Pin':
        return <Pin className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 sm:py-24 relative bg-stone-100/60 dark:bg-stone-900/40 border-y border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-pink-600 dark:text-pink-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STAY CONNECTED · SOCIAL SPHERES</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Connect Across Platforms
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 font-sans-body">
            Ikuti eksperimen visual harian, sketchbook dump, dan obrolan seputar desain grafis di berbagai saluran kreatif saya.
          </p>
        </div>

        {/* 6 Social Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {SOCIAL_PROFILES.map((profile) => (
            <a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-5 shadow-xs hover:shadow-xl hover:border-pink-400 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-slate-900 dark:text-white group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white transition-all">
                    {getIcon(profile.iconName)}
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-base text-slate-900 dark:text-white">
                      {profile.platform}
                    </h3>
                    <p className="text-xs font-mono text-pink-600 dark:text-pink-400 font-semibold">
                      {profile.handle}
                    </p>
                  </div>
                </div>

                <span className="p-1.5 rounded-full bg-stone-100 dark:bg-stone-800 group-hover:bg-pink-500 group-hover:text-white text-stone-400 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              <p className="text-xs text-stone-600 dark:text-stone-400 font-sans-body my-4 line-clamp-2">
                {profile.description}
              </p>

              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-mono">
                <span className="text-stone-400">{profile.followers} Followers / Friends</span>
                <span className="text-slate-900 dark:text-white font-bold group-hover:translate-x-1 transition-transform">
                  Visit ↗
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Quick Communication Bar: Direct Email Copy + WhatsApp Chat + Spotify Music Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
          {/* Email Quick Copy Box */}
          <div className="md:col-span-4 p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col justify-between space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-pink-500" />
              <span className="text-xs font-mono uppercase text-stone-400">Direct Inquiries</span>
            </div>
            <div>
              <p className="font-syne font-bold text-sm sm:text-base text-slate-900 dark:text-white truncate">
                {PERSONAL_INFO.email}
              </p>
              <p className="text-xs text-stone-500 mt-0.5">Respons dalam 24 jam kerja</p>
            </div>
            <button
              onClick={handleCopyEmail}
              className="w-full py-2 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-pink-500 hover:text-white text-stone-700 dark:text-stone-300 text-xs font-mono font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Email Tersalin ke Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Salin Alamat Email</span>
                </>
              )}
            </button>
          </div>

          {/* WhatsApp Direct Chat Button */}
          <div className="md:col-span-4 p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex flex-col justify-between space-y-4">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
              <MessageCircle className="w-4 h-4" />
              <span className="text-xs font-mono uppercase font-bold">Fast WhatsApp Response</span>
            </div>
            <div>
              <p className="font-syne font-bold text-base text-emerald-950 dark:text-emerald-100">
                Obrolan Cepat via WhatsApp
              </p>
              <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80 mt-0.5">
                Konsultasikan kebutuhan desain atau booking slot kalender
              </p>
            </div>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <span>Chat Shazfa di WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Spotify Studio Vibe Widget */}
          <div className="md:col-span-4 p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-emerald-500">
                <Music className="w-4 h-4" />
                <span className="uppercase font-bold">Studio Audio Vibe</span>
              </div>
              <span className="flex items-center gap-1 text-[10px] text-stone-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                LIVE
              </span>
            </div>

            <div>
              <p className="font-syne font-bold text-sm text-slate-900 dark:text-white truncate">
                {PERSONAL_INFO.spotifyTrack.title}
              </p>
              <p className="text-xs text-stone-500 truncate">
                {PERSONAL_INFO.spotifyTrack.artist}
              </p>
            </div>

            {/* Audio Wave Bars Simulation */}
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
              </button>
              <div className="flex items-center gap-1 flex-1 mx-3">
                {[12, 24, 16, 28, 18, 30, 22, 14, 26, 20].map((h, i) => (
                  <span
                    key={i}
                    className={`w-1 rounded-full bg-emerald-500/80 transition-all ${
                      isPlaying ? 'animate-pulse' : 'opacity-40'
                    }`}
                    style={{
                      height: `${isPlaying ? h : 10}px`,
                      animationDelay: `${i * 120}ms`,
                    }}
                  />
                ))}
              </div>
              <span className="text-[10px] font-mono text-stone-400">
                {PERSONAL_INFO.spotifyTrack.progress}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
