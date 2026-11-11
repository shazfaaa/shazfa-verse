import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';
import { Sparkles, ArrowUpRight, Filter, LayoutGrid, Rows3 } from 'lucide-react';

interface WorksSectionProps {
  onSelectProject: (project: Project) => void;
}

export const WorksSection: React.FC<WorksSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'editorial'>('grid');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Works' },
    { id: 'web-dev', label: 'Web Development' },
    { id: 'ui-design', label: 'UI / UX Design' },
    { id: 'it-ba', label: 'IT Business Analyst' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="works" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-pink-600 dark:text-pink-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED ARCHIVES 2024 — 2025</span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
              Galeri Proyek & Eksplorasi
            </h2>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-stone-100 dark:bg-stone-800/80 p-1 rounded-xl border border-stone-200 dark:border-stone-700">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-stone-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-stone-500 hover:text-slate-900 dark:hover:text-white'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('editorial')}
              className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                viewMode === 'editorial'
                  ? 'bg-white dark:bg-stone-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-stone-500 hover:text-slate-900 dark:hover:text-white'
              }`}
              title="Editorial List View"
            >
              <Rows3 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <div className="flex items-center gap-2 text-xs font-mono text-stone-400 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>FILTER:</span>
          </div>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-syne font-semibold transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md scale-102'
                    : 'bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-800 hover:border-pink-400'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* GRID VIEW: Large Interactive Cards with Dynamic Hover Effects  */}
        {/* ============================================================== */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-4 sm:p-5 shadow-xs hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Image Container with Dynamic Scale & Gradient */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-800 mb-4">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glassmorphic Badge */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1 rounded-full border border-white/20">
                    {project.categoryLabel}
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-3 right-3 bg-white/90 dark:bg-stone-900/90 text-slate-900 dark:text-white text-[11px] font-mono px-2.5 py-0.5 rounded-md shadow-xs">
                    {project.year}
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-5 py-2.5 rounded-full bg-white text-slate-900 font-syne font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <span>Buka Studi Kasus</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Project Metadata & Content */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-stone-500">
                    <span>Klien: {project.client}</span>
                    <span className="text-pink-600 dark:text-pink-400 font-bold">{project.role}</span>
                  </div>

                  <h3 className="font-syne font-extrabold text-xl text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-sans-body line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Tools & Metric Pills */}
                <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[11px] font-mono text-stone-400">
                  <div className="flex gap-1.5">
                    {project.tools.slice(0, 2).map((tool) => (
                      <span
                        key={tool}
                        className="bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 px-2 py-0.5 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 2 && (
                      <span className="text-stone-400">+{project.tools.length - 2}</span>
                    )}
                  </div>
                  <span className="text-stone-900 dark:text-white font-bold group-hover:translate-x-1 transition-transform">
                    LIHAT DETAIL →
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ============================================================== */}
        {/* EDITORIAL LIST VIEW: Elegant Horizontal Magazine Spreads      */}
        {/* ============================================================== */}
        {viewMode === 'editorial' && (
          <div className="space-y-4">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-pink-400 transition-all duration-200 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-stone-400 pt-1">
                    0{idx + 1}.
                  </span>
                  <div>
                    <span className="text-xs font-mono text-pink-600 dark:text-pink-400">
                      {project.categoryLabel} · {project.year}
                    </span>
                    <h3 className="font-fraunces text-2xl font-bold text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 max-w-xl mt-1">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 shrink-0 self-end md:self-center">
                  <div className="text-right hidden sm:block">
                    <p className="text-xs font-mono text-stone-400">Client</p>
                    <p className="text-xs font-bold text-slate-800 dark:text-stone-200">{project.client}</p>
                  </div>
                  <span className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 group-hover:bg-pink-500 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
