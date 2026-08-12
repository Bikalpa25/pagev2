import React, { useState } from "react";
import { Project, ProjectCategory } from "../types";
import {
  ArrowUpRight,
  Image as ImageIcon,
  Film,
  Tag,
  Sparkles,
  Layers,
} from "lucide-react";

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");

  const categories: ProjectCategory[] = [
    "All",
    "Sustainable Materials & Recycling",
    "Medical & Surgical Devices",
    "IoT & Machine Learning",
    "Automation & Manufacturing",
    "R&D Engineering",
  ];

  const projectList = Array.isArray(projects) ? projects : [];

  const filteredProjects =
    selectedCategory === "All"
      ? projectList
      : projectList.filter((p) => p && p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="mb-10 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase font-mono">
              Selected Works & Case Studies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            Engineering Projects Showcase
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-2xl">
            Explore hardware prototypes, medical devices, IoT machinery
            condition monitoring, and digital plastic recycling systems.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const galleryCount = project.gallery?.length || 1;
            const hasGif = project.gallery?.some((m) => m.type === "gif");

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:border-slate-400 hover:shadow-xl transition-all cursor-pointer"
              >
                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between text-xs font-mono font-semibold text-slate-400 mb-4">
                    <span>{project.category}</span>
                    <span className="text-slate-900 font-bold bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {project.year}
                    </span>
                  </div>

                  {/* Image Preview Container */}
                  <div className="relative aspect-video w-full rounded-xl bg-slate-900 mb-5 overflow-hidden border border-slate-200/60">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Media Count Badge */}
                    <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider flex items-center gap-1.5 backdrop-blur-xs">
                      {hasGif ? (
                        <Film className="w-3 h-3 text-amber-400" />
                      ) : (
                        <ImageIcon className="w-3 h-3 text-indigo-400" />
                      )}
                      <span>{galleryCount} Gallery Items</span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>

                  {project.organization && (
                    <div className="text-xs font-medium text-amber-700 mb-3">
                      {project.organization}
                    </div>
                  )}

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Tags & Action */}
                <div className="pt-4 border-t border-slate-100">
                  {/* Metric Pill if available */}
                  {project.metrics && project.metrics[0] && (
                    <div className="flex items-center justify-between text-xs font-mono mb-3 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <span className="text-slate-500 uppercase text-[10px]">
                        {project.metrics[0].label}:
                      </span>
                      <span className="font-bold text-slate-900">
                        {project.metrics[0].value}
                      </span>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] text-slate-400 font-mono px-1 py-0.5">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center justify-between text-xs font-bold tracking-wider text-slate-900 uppercase font-mono group-hover:text-indigo-600 transition-colors">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
