import React from 'react';
import { Project } from '../types/portfolio';
import { IT_BA_PROJECTS } from '../data/portfolioData';
import { FileText, GitBranch, Briefcase, CheckCircle2, TrendingUp, Sparkles, ArrowUpRight, ShieldCheck, Key } from 'lucide-react';

interface PortfolioITBAProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioITBA: React.FC<PortfolioITBAProps> = ({ onSelectProject }) => {
  return (
    <section id="it-business-analyst" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#7DA7D9] mb-2 font-bold">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CATEGORY 03 · BUSINESS PROCESS &amp; REQUIREMENTS ENGINEERING</span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#2F4860] dark:text-white tracking-tight">
              Portfolio IT Business Analyst
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#2F4860]/80 dark:text-[#DCEEFF]/80 max-w-md font-sans-body leading-relaxed">
            Aligning user needs and business requirements through the Scrum agile framework, clear user stories, and rigorous User Acceptance Testing (UAT).
          </p>
        </div>

        {/* Showcase Container for IT Business Analyst Project */}
        <div className="max-w-4xl mx-auto">
          {IT_BA_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-2xl hover:border-[#7DA7D9] transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Header Stamp */}
              <div className="flex items-center justify-between pb-3 border-b border-[#DCEEFF] dark:border-[#2F4860] text-xs font-mono">
                <span className="font-bold text-[#7DA7D9] dark:text-[#FFF7CC] flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>IT BA CASE STUDY #0{idx + 1}</span>
                </span>
                <span className="text-[#2F4860]/60 dark:text-[#DCEEFF]/60">{project.year}</span>
              </div>

              {/* Large Image Frame (BPMN / System Diagram Mockup) */}
              <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-[#2F4860] my-4 border border-[#DCEEFF] dark:border-[#2F4860]">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Contrast Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F4860]/90 via-[#2F4860]/35 to-transparent" />

                {/* Client Badge */}
                <div className="absolute top-2.5 left-2.5 bg-[#2F4860]/80 backdrop-blur-md text-[#FFF7CC] text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-[#7DA7D9]/40">
                  {project.categoryLabel}
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

                {/* Key Impact Highlight on Image */}
                {project.stats && (
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#2F4860]/90 backdrop-blur-md rounded-xl p-2.5 border border-[#7DA7D9]/40 text-white flex items-center justify-between text-xs">
                    <div>
                      <p className="text-[9px] text-[#FFF7CC] font-mono">Key Business Impact</p>
                      <p className="font-syne font-bold text-xs">{project.stats[0]?.value}</p>
                    </div>
                    <span className="text-[10px] font-mono text-[#DCEEFF]">
                      {project.stats[0]?.label}
                    </span>
                  </div>
                )}
              </div>

              {/* Content Description */}
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

              {/* Methodologies & BA Deliverables Tag Cloud */}
              {project.methodologies && (
                <div className="my-4 pt-3 border-t border-[#DCEEFF] dark:border-[#2F4860]">
                  <p className="text-[10px] font-mono uppercase text-[#2F4860]/70 dark:text-[#DCEEFF]/70 mb-1.5 flex items-center gap-1 font-semibold">
                    <GitBranch className="w-3 h-3 text-[#7DA7D9]" />
                    <span>Methodology &amp; Standards:</span>
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.methodologies.map((m) => (
                      <span
                        key={m}
                        className="bg-[#DCEEFF] dark:bg-[#2F4860] text-[#2F4860] dark:text-[#FFF7CC] text-[10px] font-mono px-2 py-0.5 rounded-md font-semibold"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
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

              {/* Tools & CTA Footer */}
              <div className="pt-3 border-t border-[#DCEEFF] dark:border-[#2F4860] flex items-center justify-between text-xs font-mono">
                <span className="text-[#2F4860]/60 dark:text-[#DCEEFF]/60">{project.client}</span>
                <span className="text-[#2F4860] dark:text-[#FFF7CC] font-bold group-hover:translate-x-1 group-hover:text-[#7DA7D9] transition-all flex items-center gap-1">
                  <span>VIEW UAT &amp; CASE STUDY</span>
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
