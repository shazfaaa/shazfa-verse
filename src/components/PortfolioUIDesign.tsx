import React from 'react';
import { Project } from '../types/portfolio';
import { UI_DESIGN_PROJECTS } from '../data/portfolioData';
import { Sparkles, ArrowUpRight, Smartphone, Layers, Eye, Palette } from 'lucide-react';

interface PortfolioUIDesignProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioUIDesign: React.FC<PortfolioUIDesignProps> = ({ onSelectProject }) => {
  return (
    <section id="works" className="py-20 sm:py-28 relative scroll-mt-12">
      <div id="ui-design" className="scroll-mt-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#7DA7D9] mb-2 font-bold">
              <Smartphone className="w-3.5 h-3.5" />
              <span>CATEGORY 01 · USER INTERFACE &amp; INTERACTION</span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#2F4860] dark:text-white tracking-tight">
              Portfolio UI Design
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#2F4860]/80 dark:text-[#DCEEFF]/80 max-w-md font-sans-body leading-relaxed">
            User-centered mobile interfaces, design systems, and micro-interactions crafted with expressive typography, fluid flows, and sparkling aesthetic energy.
          </p>
        </div>

        {/* Big Interactive Grid of UI Design Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {UI_DESIGN_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] rounded-3xl p-5 sm:p-7 shadow-xs hover:shadow-2xl hover:border-[#7DA7D9] transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Top Meta Tag Row */}
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="font-bold text-[#7DA7D9] dark:text-[#FFF7CC] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>UI DESIGN #{String(idx + 1).padStart(2, '0')}</span>
                </span>
                <span className="text-[#2F4860]/60 dark:text-[#DCEEFF]/60">{project.year}</span>
              </div>

              {/* Large Image Showcase with Dynamic Zoom & Overlay */}
              <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-[#2F4860] mb-6 border border-[#DCEEFF] dark:border-[#2F4860]">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Contrast Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F4860]/90 via-[#2F4860]/30 to-transparent" />

                {/* Badges on Image in Ice & Butter styling */}
                <div className="absolute top-3 left-3 bg-[#2F4860]/80 backdrop-blur-md text-[#FFF7CC] text-[10px] font-mono px-3 py-1 rounded-full border border-[#7DA7D9]/40">
                  {project.categoryLabel}
                </div>

                {project.figmaEmbedUrl && (
                  <div className="absolute top-3 right-3 bg-[#FFF7CC] text-[#2F4860] text-[10px] font-mono px-2.5 py-1 rounded-full font-bold shadow-md border border-[#E7DB99] flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#2F4860]" />
                    <span>Figma Live ↗</span>
                  </div>
                )}

                {/* Client Tag bottom left of image */}
                <div className="absolute bottom-3 left-3 text-white text-xs font-mono">
                  <p className="text-[10px] text-[#FFF7CC]">Client / Product</p>
                  <p className="font-bold font-syne">{project.client}</p>
                </div>

                {/* Hover Quick Action Button */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#FFF7CC] text-[#2F4860] font-syne font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <span>Inspect UI</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Project Content Description */}
              <div className="space-y-2 flex-1">
                <h3 className="font-syne font-extrabold text-2xl text-[#2F4860] dark:text-white group-hover:text-[#7DA7D9] transition-colors">
                  {project.title}
                </h3>
                <p className="font-fraunces italic text-[#7DA7D9] text-xs sm:text-sm">
                  {project.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#2F4860]/80 dark:text-[#DCEEFF]/90 font-sans-body line-clamp-3 leading-relaxed pt-1">
                  {project.summary}
                </p>
              </div>

              {/* Stats Strip */}
              {project.stats && (
                <div className="grid grid-cols-3 gap-2 my-3 pt-3 border-t border-[#DCEEFF] dark:border-[#2F4860] text-center">
                  {project.stats.map((st) => (
                    <div
                      key={st.label}
                      className="bg-[#DCEEFF]/40 dark:bg-[#203244]/60 p-2 sm:p-2.5 rounded-xl border border-[#DCEEFF]/60 dark:border-[#2F4860] flex flex-col justify-center items-center text-center min-h-[64px]"
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

              {/* Tools & CTA Footer */}
              <div className="pt-3 border-t border-[#DCEEFF] dark:border-[#2F4860] flex items-center justify-between text-xs font-mono">
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="bg-[#DCEEFF] dark:bg-[#2F4860] text-[#2F4860] dark:text-[#FFF7CC] px-2 py-0.5 rounded-md text-[10px] font-semibold"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <span className="text-[#2F4860] dark:text-[#FFF7CC] font-bold group-hover:translate-x-1 group-hover:text-[#7DA7D9] transition-all flex items-center gap-1">
                  <span>VIEW CASE STUDY</span>
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
