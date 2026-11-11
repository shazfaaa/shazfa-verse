import React from 'react';
import { Project } from '../types/portfolio';
import { WEB_DEV_PROJECTS } from '../data/portfolioData';
import { Code, ExternalLink, Github, Terminal, Sparkles, CheckCircle2, ArrowUpRight, Key } from 'lucide-react';

interface PortfolioWebDevProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioWebDev: React.FC<PortfolioWebDevProps> = ({ onSelectProject }) => {
  return (
    <section id="web-development" className="py-20 sm:py-28 relative bg-[#DCEEFF]/25 dark:bg-[#172431]/70 border-y border-[#DCEEFF] dark:border-[#2F4860]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#7DA7D9] mb-2 font-bold">
              <Terminal className="w-3.5 h-3.5" />
              <span>CATEGORY 02 · FULL-STACK &amp; FRONTEND ENGINEERING</span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#2F4860] dark:text-white tracking-tight">
              Portfolio Web Development
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#2F4860]/80 dark:text-[#DCEEFF]/80 max-w-md font-sans-body leading-relaxed">
            Responsive and dynamic web applications built with Laravel, HTML5, CSS3, JavaScript, and Bootstrap. Focused on clean modular structure, relational databases, interactive user experiences, and agile development.
          </p>
        </div>

        {/* Large Grid of Web Development Projects (3 Projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WEB_DEV_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] rounded-3xl p-5 shadow-xs hover:shadow-2xl hover:border-[#7DA7D9] transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Terminal-like Window Header in Ice & Butter theme */}
              <div className="flex items-center justify-between pb-3 border-b border-[#DCEEFF] dark:border-[#2F4860] text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7DA7D9]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFF7CC] border border-[#E2D58E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2F4860]" />
                  <span className="ml-2 text-[11px] text-[#2F4860]/70 dark:text-[#DCEEFF]/70">web-project-0{idx + 1}.tsx</span>
                </div>
                <span className="text-[10px] text-[#2F4860] font-bold bg-[#FFF7CC] px-2 py-0.5 rounded-full border border-[#E7DB99]">
                  ACTIVE
                </span>
              </div>

              {/* Large Image Frame with Dynamic Scale */}
              <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-[#2F4860] my-4 border border-[#DCEEFF] dark:border-[#2F4860]">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Contrast Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F4860]/90 via-[#2F4860]/30 to-transparent" />

                {/* Tech Badges floating */}
                <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
                  {project.tools.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="bg-[#2F4860]/80 backdrop-blur-md text-[#FFF7CC] text-[9px] font-mono px-2 py-0.5 rounded-full border border-[#7DA7D9]/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-2.5 right-2.5 bg-[#FFF7CC] hover:bg-white text-[#2F4860] text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold shadow-md border border-[#E7DB99] flex items-center gap-1 transition-all z-10 cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-[#2F4860]" />
                    <span>Live Demo ↗</span>
                  </a>
                )}

                {/* Hover Reveal Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#2F4860]/40">
                  <span className="px-4 py-2 rounded-full bg-[#FFF7CC] text-[#2F4860] font-syne font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform border border-[#E5D895]">
                    <span>View Code &amp; Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#2F4860]" />
                  </span>
                </div>
              </div>

              {/* Project Body */}
              <div className="space-y-2 flex-1">
                <h3 className="font-syne font-extrabold text-xl text-[#2F4860] dark:text-white group-hover:text-[#7DA7D9] transition-colors">
                  {project.title}
                </h3>
                <p className="font-fraunces italic text-[#7DA7D9] text-xs line-clamp-1">
                  {project.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#2F4860]/80 dark:text-[#DCEEFF]/90 font-sans-body line-clamp-3 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Performance Stats */}
              {project.stats && (
                <div className="grid grid-cols-3 gap-2 my-3 pt-3 border-t border-[#DCEEFF] dark:border-[#2F4860] text-center">
                  {project.stats.map((st) => (
                    <div
                      key={st.label}
                      className="bg-[#DCEEFF]/40 dark:bg-[#2F4860]/60 p-2 sm:p-2.5 rounded-xl border border-[#DCEEFF]/60 dark:border-[#2F4860] flex flex-col justify-center items-center text-center min-h-[64px]"
                    >
                      <p className="font-syne font-extrabold text-[11px] sm:text-xs text-[#2F4860] dark:text-[#FFF7CC] leading-tight break-words max-w-full text-center">
                        {st.value}
                      </p>
                      <p className="text-[9px] sm:text-[10px] font-mono text-[#2F4860]/75 dark:text-[#DCEEFF]/80 mt-1 leading-tight text-center font-medium break-words max-w-full">
                        {st.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Demo Credentials Snippet for Live Testing */}
              {project.demoCredentials && (
                <div className="my-2.5 p-2.5 rounded-xl bg-[#FFF7CC]/80 dark:bg-[#203244] border border-[#E7DB99] dark:border-[#7DA7D9]/40 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-[#2F4860] dark:text-[#FFF7CC] font-bold text-[11px] mb-1">
                    <Key className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>Akses Demo Login (Live):</span>
                  </div>
                  <div className="text-[10px] text-[#2F4860]/85 dark:text-[#DCEEFF]/90 space-y-0.5">
                    <div>• Warga: <span className="font-bold text-[#2F4860] dark:text-white">warga@gmail.com</span> (pwd: <span className="font-bold">password</span>)</div>
                    <div>• Admin: <span className="font-bold text-[#2F4860] dark:text-white">admin@gmail.com</span> (pwd: <span className="font-bold">password</span>)</div>
                  </div>
                </div>
              )}

              {/* Tech Stack Pills & Footer */}
              <div className="pt-3 border-t border-[#DCEEFF] dark:border-[#2F4860] flex items-center justify-between text-xs font-mono">
                <div className="flex gap-1.5 items-center text-[#2F4860]/70 dark:text-[#DCEEFF]/70">
                  <Code className="w-3.5 h-3.5 text-[#7DA7D9]" />
                  <span>{project.role}</span>
                </div>
                <span className="text-[#2F4860] dark:text-[#FFF7CC] font-bold group-hover:translate-x-1 group-hover:text-[#7DA7D9] transition-all flex items-center gap-1">
                  <span>CASE STUDY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#7DA7D9]" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
