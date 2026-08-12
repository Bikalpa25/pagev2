import React, { useState } from 'react';
import { Project, ProjectMedia } from '../types';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Image as ImageIcon, 
  Film, 
  Plus, 
  Layers,
  Sparkles,
  Info
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenUploadForProject: (projectId: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenUploadForProject
}) => {
  if (!project) return null;

  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const galleryList = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [{ id: 'default-cover', url: project.coverImage, caption: project.title, type: 'image' as const }];

  const currentMedia: ProjectMedia = galleryList[activeMediaIndex] || galleryList[0];

  const handleNextMedia = () => {
    setActiveMediaIndex((prev) => (prev + 1) % galleryList.length);
  };

  const handlePrevMedia = () => {
    setActiveMediaIndex((prev) => (prev - 1 + galleryList.length) % galleryList.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-[#121212] border border-[#E5E5E5] dark:border-[#2A2A2A] shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E5E5] dark:border-[#2A2A2A] bg-[#F7F7F7] dark:bg-[#181818]">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#888] dark:text-[#A0A0A0] uppercase font-mono">
              {project.category}
            </span>
            <span className="text-[#CCC] dark:text-[#444]">•</span>
            <span className="text-xs font-mono font-bold text-[#121212] dark:text-white">
              {project.year}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenUploadForProject(project.id)}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-wider uppercase border border-[#121212] dark:border-white text-[#121212] dark:text-white hover:bg-[#121212] hover:text-white dark:hover:bg-white dark:hover:text-[#121212] transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Pictures / GIFs</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#555] dark:text-[#AAA] hover:text-[#121212] dark:hover:text-white border border-[#E5E5E5] dark:border-[#333] cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Content & Gallery */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Title & Organization */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#121212] dark:text-white">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-amber-700 dark:text-amber-400 font-serif">
              {project.organization ? `${project.organization} — ` : ''}{project.subtitle}
            </p>
          </div>

          {/* Media Lightbox Viewer (Pictures, GIFs, CADs) */}
          <div className="space-y-3">
            <div className="relative aspect-video bg-[#0A0A0A] border border-[#E5E5E5] dark:border-[#2A2A2A] flex items-center justify-center overflow-hidden group">
              <img
                src={currentMedia.url}
                alt={currentMedia.caption}
                className="w-full h-full object-contain"
              />

              {/* Media Type Badge */}
              <div className="absolute top-4 left-4 bg-black/80 text-white px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase font-mono border border-white/20 flex items-center gap-1.5">
                {currentMedia.type === 'gif' ? (
                  <>
                    <Film className="w-3 h-3 text-amber-400" />
                    <span>ANIMATED GIF</span>
                  </>
                ) : (
                  <>
                    <ImageIcon className="w-3 h-3 text-blue-400" />
                    <span>IMAGE / PHOTO</span>
                  </>
                )}
              </div>

              {/* Carousel Arrows if multiple media */}
              {galleryList.length > 1 && (
                <>
                  <button
                    onClick={handlePrevMedia}
                    className="absolute left-4 p-2 bg-black/70 hover:bg-black text-white border border-white/20 transition-all cursor-pointer opacity-80 hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNextMedia}
                    className="absolute right-4 p-2 bg-black/70 hover:bg-black text-white border border-white/20 transition-all cursor-pointer opacity-80 hover:opacity-100"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Gallery Counter */}
              <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2.5 py-1 text-[10px] font-mono tracking-wider">
                {activeMediaIndex + 1} / {galleryList.length}
              </div>
            </div>

            {/* Caption & Thumbnail Navigation */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F7F7F7] dark:bg-[#181818] p-3 border border-[#E5E5E5] dark:border-[#2A2A2A]">
              <p className="text-xs text-[#555] dark:text-[#AAA] font-mono italic">
                "{currentMedia.caption || project.subtitle}"
              </p>

              {/* Thumbnail Strip */}
              {galleryList.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                  {galleryList.map((m, idx) => (
                    <button
                      key={m.id || idx}
                      onClick={() => setActiveMediaIndex(idx)}
                      className={`relative w-12 h-10 border overflow-hidden cursor-pointer flex-shrink-0 transition-all ${
                        activeMediaIndex === idx 
                          ? 'border-[#121212] dark:border-white ring-1 ring-[#121212] dark:ring-white scale-105' 
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={m.url} alt={m.caption} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Metrics Grid Callout */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-y border-[#E5E5E5] dark:border-[#2A2A2A] py-6">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-4 bg-[#F7F7F7] dark:bg-[#181818] border border-[#E5E5E5] dark:border-[#2A2A2A]">
                  <div className="text-xl font-bold font-mono text-[#121212] dark:text-white">
                    {metric.value}
                  </div>
                  <div className="text-[11px] font-bold tracking-wider text-[#888] uppercase mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Narrative */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#888] uppercase font-mono">
              PROJECT OVERVIEW & R&D METHODOLOGY
            </h3>
            <p className="text-sm text-[#444] dark:text-[#CCC] leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Engineering Highlights / Key Responsibilities */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold tracking-[0.2em] text-[#888] uppercase font-mono">
                KEY RESPONSIBILITIES
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#333] dark:text-[#DDD]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Tags */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-[11px] font-mono font-medium bg-[#F7F7F7] dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333] text-[#444] dark:text-[#BBB]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#E5E5E5] dark:border-[#2A2A2A] bg-[#F7F7F7] dark:bg-[#181818]">
          <div className="text-xs text-[#777] font-mono">
            {project.role ? `Role: ${project.role}` : 'Engineering R&D'}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenUploadForProject(project.id)}
              className="px-4 py-2 text-xs font-bold tracking-wider uppercase bg-[#121212] text-white dark:bg-white dark:text-[#121212] hover:opacity-90 transition-opacity cursor-pointer"
            >
              + Upload Photos/GIFs
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold tracking-wider uppercase border border-[#E5E5E5] dark:border-[#333] text-[#555] dark:text-[#AAA] hover:text-[#121212] dark:hover:text-white cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
