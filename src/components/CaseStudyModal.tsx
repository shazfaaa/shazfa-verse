import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types/portfolio';
import {
  X,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  Palette,
  Calendar,
  UserCheck,
  ExternalLink,
  Maximize2,
  Github,
  Globe,
  Key,
  Copy,
  Check,
  Shield,
  User,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string>(project?.coverImage || '');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId((prev) => (prev === id ? null : prev));
    }, 2000);
  };

  useEffect(() => {
    if (project?.coverImage) {
      setSelectedImage(project.coverImage);
    }
  }, [project?.id, project?.coverImage]);

  useEffect(() => {
    if (!project) {
      document.body.style.overflow = 'unset';
      return;
    }

    // Scroll back to top whenever the modal is opened or project changed
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
      if (e.key === 'ArrowRight') {
        const next = PROJECTS[(currentIndex + 1) % PROJECTS.length];
        onSelectProject(next);
      }
      if (e.key === 'ArrowLeft') {
        const prev = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
        onSelectProject(prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project?.id, onClose, onSelectProject]);

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#1A2837] text-[#2F4860] dark:text-[#DCEEFF] rounded-3xl shadow-2xl border-2 border-[#DCEEFF] dark:border-[#2F4860] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 border-b border-[#DCEEFF] dark:border-[#2F4860] flex items-center justify-between bg-white/95 dark:bg-[#1A2837]/95 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FFF7CC] text-[#2F4860] font-bold border border-[#E7DB99]">
              {project.categoryLabel}
            </span>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#DCEEFF] dark:bg-[#203244] text-[#2F4860] dark:text-[#FFF7CC] font-bold">
              {project.year}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Quick Prev / Next Switchers */}
            <button
              onClick={() => onSelectProject(prevProject)}
              title="Previous Project (Arrow Left)"
              className="p-2 rounded-full hover:bg-[#DCEEFF]/50 dark:hover:bg-[#2F4860] text-[#2F4860] dark:text-[#DCEEFF] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-[#2F4860]/50 dark:text-[#DCEEFF]/50 px-1">
              {currentIndex + 1}/{PROJECTS.length}
            </span>
            <button
              onClick={() => onSelectProject(nextProject)}
              title="Next Project (Arrow Right)"
              className="p-2 rounded-full hover:bg-[#DCEEFF]/50 dark:hover:bg-[#2F4860] text-[#2F4860] dark:text-[#DCEEFF] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            {/* Close Button */}
            <button
              onClick={onClose}
              title="Close (Esc)"
              className="p-2 rounded-full bg-[#DCEEFF] dark:bg-[#2F4860] hover:bg-[#7DA7D9] hover:text-[#2F4860] text-[#2F4860] dark:text-[#DCEEFF] transition-colors ml-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div ref={scrollContainerRef} className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-6 sm:space-y-8 flex-1">
          
          {/* Main Title Lockup */}
          <div className="space-y-2">
            <h2 className="font-syne font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#2F4860] dark:text-white tracking-tight leading-tight">
              {project.title}
            </h2>
            <p className="font-fraunces text-base sm:text-lg text-[#7DA7D9] italic">
              {project.subtitle}
            </p>
          </div>

          {/* Quick Metadata Grid (Client, Timeline, Role, Tools) - No Truncations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-[#DCEEFF]/30 dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860] text-xs font-mono">
            <div className="flex flex-col justify-start">
              <span className="text-[#2F4860]/70 dark:text-[#DCEEFF]/70 flex items-center gap-1 font-semibold text-[11px]">
                <UserCheck className="w-3.5 h-3.5 text-[#7DA7D9] shrink-0" /> Client
              </span>
              <p className="font-bold text-[#2F4860] dark:text-white mt-1 text-xs leading-snug break-words">
                {project.client}
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <span className="text-[#2F4860]/70 dark:text-[#DCEEFF]/70 flex items-center gap-1 font-semibold text-[11px]">
                <Calendar className="w-3.5 h-3.5 text-[#7DA7D9] shrink-0" /> Timeline
              </span>
              <p className="font-bold text-[#2F4860] dark:text-white mt-1 text-xs leading-snug break-words">
                {project.year}
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <span className="text-[#2F4860]/70 dark:text-[#DCEEFF]/70 flex items-center gap-1 font-semibold text-[11px]">
                <Layers className="w-3.5 h-3.5 text-[#7DA7D9] shrink-0" /> Role
              </span>
              <p className="font-bold text-[#2F4860] dark:text-white mt-1 text-xs leading-snug break-words">
                {project.role}
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <span className="text-[#2F4860]/70 dark:text-[#DCEEFF]/70 flex items-center gap-1 font-semibold text-[11px]">
                <Palette className="w-3.5 h-3.5 text-[#7DA7D9] shrink-0" /> Tools &amp; Methods
              </span>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-1.5 py-0.5 rounded bg-white/80 dark:bg-[#162331] text-[10px] text-[#2F4860] dark:text-[#FFF7CC] border border-[#DCEEFF] dark:border-[#2F4860] font-semibold break-words"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Impact Stats Strip - No Truncation, Centered & Fully Legible */}
          {project.stats && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {project.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-3.5 sm:p-4 rounded-2xl bg-[#DCEEFF]/40 dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860] text-center flex flex-col justify-center items-center shadow-2xs"
                >
                  <p className="font-syne font-extrabold text-sm sm:text-base md:text-lg text-[#2F4860] dark:text-[#FFF7CC] tracking-tight leading-snug break-words max-w-full text-center">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-xs font-mono uppercase text-[#2F4860]/70 dark:text-[#DCEEFF]/70 mt-1 font-semibold leading-normal break-words max-w-full text-center">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Dedicated Live Demo Credentials Card (RUNA & Live Web Apps) */}
          {project.demoCredentials && (
            <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#FFF7CC]/90 via-[#FFF7CC]/50 to-white dark:from-[#203244] dark:to-[#172534] border-2 border-[#E7DB99] dark:border-[#7DA7D9]/50 shadow-md space-y-3.5">
              <div className="flex items-center justify-between flex-wrap gap-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#2F4860] dark:bg-[#72E2E6] text-[#FFF7CC] dark:text-[#162331] shadow-xs">
                    <Key className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-syne font-extrabold text-sm sm:text-base text-[#2F4860] dark:text-white flex items-center gap-2">
                      <span>Kredensial Akses Demo (Live Website)</span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                        Live Ready
                      </span>
                    </h4>
                    <p className="text-[11px] font-mono text-[#2F4860]/80 dark:text-[#DCEEFF]/80">
                      Gunakan akun berikut untuk login dan mencoba fitur di sistem live
                    </p>
                  </div>
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Buka Halaman Login</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Accounts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.demoCredentials.accounts.map((acc) => {
                  const isAdmin = acc.role.toLowerCase().includes('admin');
                  return (
                    <div
                      key={acc.role}
                      className="p-3.5 rounded-2xl bg-white/95 dark:bg-[#162331] border border-[#E7DB99] dark:border-[#2F4860] flex flex-col justify-between gap-2.5 shadow-2xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-xs font-syne font-bold text-[#2F4860] dark:text-[#FFF7CC]">
                          {isAdmin ? (
                            <Shield className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                          ) : (
                            <User className="w-4 h-4 text-blue-600 dark:text-[#72E2E6] shrink-0" />
                          )}
                          <span>Akses {acc.role}</span>
                        </span>
                        {acc.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#DCEEFF] dark:bg-[#203244] text-[#2F4860] dark:text-[#FFF7CC] font-semibold border border-[#DCEEFF] dark:border-[#2F4860]">
                            {acc.badge}
                          </span>
                        )}
                      </div>

                      <div className="space-y-1.5 font-mono text-xs">
                        {/* Email */}
                        <div className="flex items-center justify-between bg-[#F8FAFC] dark:bg-[#1A2837] px-2.5 py-1.5 rounded-xl border border-[#E2E8F0] dark:border-[#2F4860]">
                          <span className="text-[#2F4860]/70 dark:text-[#DCEEFF]/70 text-[11px] font-semibold">Email:</span>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-[#2F4860] dark:text-white select-all">
                              {acc.email}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleCopy(acc.email, `email-${acc.role}`)}
                              title="Salin Email"
                              className="p-1 rounded-md hover:bg-[#DCEEFF] dark:hover:bg-[#2F4860] text-[#2F4860] dark:text-[#DCEEFF] transition-colors cursor-pointer"
                            >
                              {copiedId === `email-${acc.role}` ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Password */}
                        <div className="flex items-center justify-between bg-[#F8FAFC] dark:bg-[#1A2837] px-2.5 py-1.5 rounded-xl border border-[#E2E8F0] dark:border-[#2F4860]">
                          <span className="text-[#2F4860]/70 dark:text-[#DCEEFF]/70 text-[11px] font-semibold">Password:</span>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-[#2F4860] dark:text-white select-all">
                              {project.demoCredentials?.password}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleCopy(project.demoCredentials!.password, `pwd-${acc.role}`)}
                              title="Salin Password"
                              className="p-1 rounded-md hover:bg-[#DCEEFF] dark:hover:bg-[#2F4860] text-[#2F4860] dark:text-[#DCEEFF] transition-colors cursor-pointer"
                            >
                              {copiedId === `pwd-${acc.role}` ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Visual Showcase: Interactive Figma Canvas OR Static Showcase */}
          <div className="space-y-3">
            {project.figmaEmbedUrl ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2 pb-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-[#2F4860] dark:text-[#FFF7CC] uppercase">
                      Interactive Figma Canvas
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.id === 'arise-generation-girl' && (
                      <a
                        href="/public/assets/aistudio/Final_Project_311daccb.png"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860] text-[#2F4860] dark:text-[#FFF7CC] text-xs font-mono hover:bg-[#FFF7CC] hover:text-[#2F4860] transition-colors"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View Artboard ↗</span>
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-bold transition-all shadow-xs cursor-pointer"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Visit Live Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {(project.figmaShareUrl || project.figmaEmbedUrl) && (
                      <a
                        href={project.figmaShareUrl || project.figmaEmbedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#2F4860] hover:bg-[#1F3347] dark:bg-[#72E2E6] dark:hover:bg-[#5bc8cc] text-[#FFF7CC] dark:text-[#162331] text-xs font-mono font-bold transition-all shadow-xs"
                      >
                        <span>Open in Figma</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border-2 border-[#DCEEFF] dark:border-[#2F4860] bg-white dark:bg-black/50 shadow-md">
                  <div className="w-full h-[420px] sm:h-[500px]">
                    <iframe
                      src={project.figmaEmbedUrl}
                      title={`${project.title} Figma Embed`}
                      className="w-full h-full border-0"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex items-center justify-between flex-wrap gap-2 pb-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-mono font-bold text-[#2F4860] dark:text-[#FFF7CC] uppercase">
                        Live Web Deployment
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860] text-[#2F4860] dark:text-[#FFF7CC] text-xs font-mono hover:bg-[#FFF7CC] hover:text-[#2F4860] transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#2F4860] hover:bg-[#1F3347] dark:bg-[#72E2E6] dark:hover:bg-[#5bc8cc] text-[#FFF7CC] dark:text-[#162331] text-xs font-mono font-bold transition-all shadow-xs"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>Visit Live Website</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                )}

                <div className="relative group rounded-2xl overflow-hidden bg-[#162331] border border-[#DCEEFF] dark:border-[#2F4860] shadow-md">
                  <img
                    src={selectedImage || project.coverImage}
                    alt={project.title}
                    className="w-full h-auto max-h-[500px] object-contain mx-auto transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <a
                    href={project.liveUrl || selectedImage || project.coverImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2F4860]/90 hover:bg-[#2F4860] text-[#FFF7CC] text-xs font-mono backdrop-blur-md border border-[#7DA7D9]/40 shadow-md transition-all cursor-pointer opacity-90 hover:opacity-100"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{project.liveUrl ? 'Visit Live Website ↗' : 'Full Screen Image ↗'}</span>
                  </a>
                </div>

                {project.galleryImages && project.galleryImages.length > 1 && (
                  <div className="flex items-center gap-2.5 pt-1 overflow-x-auto pb-1">
                    <span className="text-[11px] font-mono text-[#7DA7D9] uppercase font-bold shrink-0">
                      Views ({project.galleryImages.length}):
                    </span>
                    {project.galleryImages.map((img, i) => {
                      const isActive = (selectedImage || project.coverImage) === img;
                      const label = project.galleryLabels?.[i] || ['Overview', 'Detail View', 'Mockup', 'Asset'][i] || `View ${i + 1}`;
                      return (
                        <button
                          key={img}
                          onClick={() => setSelectedImage(img)}
                          className={`group/thumb flex items-center gap-1.5 px-2.5 py-1 rounded-xl border transition-all shrink-0 cursor-pointer text-xs font-mono ${
                            isActive
                              ? 'bg-[#2F4860] text-[#FFF7CC] border-[#7DA7D9] shadow-xs'
                              : 'bg-white/80 dark:bg-[#203244]/80 text-[#2F4860] dark:text-[#DCEEFF] border-[#DCEEFF] dark:border-[#2F4860] hover:bg-[#DCEEFF]/40'
                          }`}
                        >
                          <img
                            src={img}
                            alt=""
                            className="w-5 h-5 rounded-md object-cover border border-black/10"
                          />
                          <span>{label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Narrative Story: Overview & Creative Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-[#DCEEFF]/20 dark:bg-[#203244]/60 border border-[#DCEEFF] dark:border-[#2F4860] space-y-3">
              <h3 className="font-syne font-bold text-lg flex items-center gap-2 text-[#2F4860] dark:text-white">
                <Sparkles className="w-4 h-4 text-[#7DA7D9]" />
                <span>The Story &amp; Context</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#2F4860]/85 dark:text-[#DCEEFF]/90 leading-relaxed font-sans-body">
                {project.overview}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#DCEEFF]/20 dark:bg-[#203244]/60 border border-[#DCEEFF] dark:border-[#2F4860] space-y-3">
              <h3 className="font-syne font-bold text-lg flex items-center gap-2 text-[#2F4860] dark:text-[#FFF7CC]">
                <span>The Creative Challenge</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#2F4860]/85 dark:text-[#DCEEFF]/90 leading-relaxed font-sans-body">
                {project.challenge}
              </p>
            </div>
          </div>

          {/* Solution & Deliverables */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860] space-y-4">
            <h3 className="font-syne font-bold text-lg text-[#7DA7D9]">
              The Design Solution
            </h3>
            <p className="text-xs sm:text-sm text-[#2F4860]/85 dark:text-[#DCEEFF]/90 leading-relaxed font-sans-body">
              {project.solution}
            </p>

            <div className="pt-4 border-t border-[#DCEEFF] dark:border-[#2F4860]">
              <p className="text-xs font-mono uppercase text-[#7DA7D9] font-bold mb-3">Key Deliverables</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-[#2F4860]/85 dark:text-[#DCEEFF]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#7DA7D9] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Methodologies & Frameworks (clean, without Key Documentation Artifacts) */}
          {project.methodologies && project.methodologies.length > 0 && (
            <div className="p-5 rounded-2xl bg-white dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860]">
              <p className="text-xs font-mono uppercase text-[#7DA7D9] font-bold mb-2">Methodologies &amp; Frameworks</p>
              <div className="flex flex-wrap gap-1.5">
                {project.methodologies.map((m) => (
                  <span key={m} className="px-2.5 py-1 rounded-md bg-[#DCEEFF] dark:bg-[#2F4860] text-[#2F4860] dark:text-[#FFF7CC] text-xs font-mono font-semibold">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Color Palette Swatches (if applicable) */}
          {project.colorPalette && project.colorPalette.length > 0 && (
            <div className="p-4 rounded-2xl bg-white dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860]">
              <p className="text-xs font-mono uppercase text-[#7DA7D9] font-bold mb-3">Curated Color System</p>
              <div className="flex flex-wrap items-center gap-3">
                {project.colorPalette.map((color) => (
                  <div key={color} className="flex items-center gap-2 bg-[#DCEEFF]/40 dark:bg-[#2F4860] px-3 py-1.5 rounded-xl border border-[#DCEEFF] dark:border-[#2F4860]">
                    <div
                      className="w-5 h-5 rounded-md border border-black/10 shadow-xs"
                      style={{ backgroundColor: color }}
                    />
                    <span className="font-mono text-xs text-[#2F4860] dark:text-[#DCEEFF] font-semibold">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-5 border-t border-[#DCEEFF] dark:border-[#2F4860] bg-white/95 dark:bg-[#1A2837]/95 flex items-center justify-between text-xs font-mono">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="flex items-center gap-1 text-[#2F4860]/80 dark:text-[#DCEEFF]/80 hover:text-[#7DA7D9] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Prev: {prevProject.title}</span>
            <span className="sm:hidden">Prev</span>
          </button>

          <span className="text-[#2F4860]/60 dark:text-[#DCEEFF]/60 font-semibold">
            {currentIndex + 1} / {PROJECTS.length}
          </span>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="flex items-center gap-1 text-[#2F4860]/80 dark:text-[#DCEEFF]/80 hover:text-[#7DA7D9] transition-colors cursor-pointer"
          >
            <span className="hidden sm:inline">Next: {nextProject.title}</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
