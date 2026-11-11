import React, { useState } from 'react';
import { BlogPost } from '../types/portfolio';
import { BLOG_POSTS } from '../data/portfolioData';
import { BookOpen, Clock, Calendar, ArrowRight, X, Sparkles, Share2, Check } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPost]);

  const handleShare = (post: BlogPost) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="journal" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-pink-600 dark:text-pink-400 mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>DESIGN JOURNAL & REFLECTIONS</span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
              Catatan & Jurnal Visual
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 max-w-md font-sans-body">
            Tulisan reflektif tentang tren desain grafis masa kini, anatomi tipografi Gen Z, dan rahasia proses di balik meja kerja saya.
          </p>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group relative bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-5 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
            >
              {/* Cover Image Frame */}
              <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-800 mb-5">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1 rounded-full border border-white/20">
                  {post.category}
                </span>
              </div>

              {/* Meta row: Date and Reading Time */}
              <div className="space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-stone-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-pink-500" />
                      {post.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-500" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-syne font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-2 font-sans-body line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Tags & Action Link */}
                <div className="mt-4 pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-stone-500 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-pink-600 dark:text-pink-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>BACA</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#FAF8F5] dark:bg-[#0E131F] text-slate-900 dark:text-stone-100 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden my-auto max-h-[92vh] flex flex-col">
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-white/80 dark:bg-stone-900/80 backdrop-blur-md sticky top-0 z-10">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 font-semibold">
                {selectedPost.category}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleShare(selectedPost)}
                  className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500 transition-colors"
                  title="Share / Copy Link"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-2 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-pink-500 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs font-mono text-stone-500">
                  <span>{selectedPost.date}</span>
                  <span>·</span>
                  <span>{selectedPost.readTime}</span>
                </div>
                <h1 className="font-syne font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white tracking-tight leading-tight">
                  {selectedPost.title}
                </h1>
              </div>

              {/* Cover */}
              <div className="rounded-2xl overflow-hidden aspect-16/9 bg-stone-100 dark:bg-stone-800 shadow-md">
                <img
                  src={selectedPost.coverImage}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Prose */}
              <div className="space-y-4 text-stone-700 dark:text-stone-300 text-base sm:text-lg leading-relaxed font-sans-body">
                {selectedPost.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Author badge */}
              <div className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 text-pink-600 font-bold flex items-center justify-center font-syne">
                    SD
                  </div>
                  <div>
                    <p className="font-bold text-sm">Ditulis oleh Shazfa Delphinia</p>
                    <p className="text-xs text-stone-500 font-mono">Visual Designer & Design Writer</p>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded-md text-stone-600 dark:text-stone-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
