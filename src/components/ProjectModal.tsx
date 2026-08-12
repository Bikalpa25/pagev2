import React, { useState, useEffect } from "react";
import { Project, ProjectMedia } from "../types";
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;
  const [isPaused, setIsPaused] = useState(false);

  const mediaList: ProjectMedia[] =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [
          {
            id: "cover",
            url: project.coverImage,
            caption: project.title,
            type: "image",
          },
        ];

  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [fullscreenMedia, setFullscreenMedia] = useState<ProjectMedia | null>(
    null,
  );
  useEffect(() => {
    if (mediaList.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setActiveMediaIndex((prevIndex) =>
        prevIndex === mediaList.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [mediaList.length, isPaused]);

  const activeMedia = mediaList[activeMediaIndex] || mediaList[0];

  const nextMedia = () => {
    setActiveMediaIndex((prev) => (prev + 1) % mediaList.length);
  };

  const prevMedia = () => {
    setActiveMediaIndex(
      (prev) => (prev - 1 + mediaList.length) % mediaList.length,
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl border border-slate-200 shadow-2xl my-8 overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="text-slate-900 font-bold uppercase">
              {project.category}
            </span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {/* Header Title & Subtitle */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              {project.subtitle}
            </p>
            {project.organization && (
              <div className="mt-2 text-xs font-semibold text-amber-700">
                Partner / Organization: {project.organization}
              </div>
            )}
          </div>

          {/* Media Viewer Box */}
          <div
            className="relative mb-8 bg-slate-900 rounded-xl overflow-hidden border border-slate-200"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative h-[300px] sm:h-[420px] flex items-center justify-center overflow-hidden bg-slate-950">
              <img
                src={activeMedia.url}
                alt={activeMedia.caption || project.title}
                className="max-h-full max-w-full object-contain"
              />

              <button
                onClick={() => setFullscreenMedia(activeMedia)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900/80 text-white hover:bg-white hover:text-slate-900 transition-colors cursor-pointer"
                title="View Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {mediaList.length > 1 && (
                <>
                  <button
                    onClick={prevMedia}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-slate-900/80 text-white hover:bg-white hover:text-slate-900 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextMedia}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-slate-900/80 text-white hover:bg-white hover:text-slate-900 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Caption & Counter Strip */}
            <div className="p-3 bg-slate-900 text-white flex items-center justify-between text-xs font-mono">
              <span className="truncate pr-4 text-slate-300">
                {activeMedia.caption || project.title}
              </span>
              <span className="font-bold text-amber-400 shrink-0">
                {activeMediaIndex + 1} / {mediaList.length}
              </span>
            </div>

            {/* Thumbnail Strip */}
            {mediaList.length > 1 && (
              <div className="flex gap-2 p-3 bg-slate-100 border-t border-slate-200 overflow-x-auto">
                {mediaList.map((m, idx) => (
                  <button
                    key={m.id || idx}
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`relative w-16 h-12 shrink-0 rounded-lg border-2 overflow-hidden cursor-pointer ${
                      activeMediaIndex === idx
                        ? "border-indigo-600 ring-2 ring-indigo-200"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={m.url}
                      alt={m.caption}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mb-8 grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white rounded-lg border border-slate-200/80"
                >
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                    {m.label}
                  </div>
                  <div className="text-sm font-bold text-slate-900 font-mono">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Overview & Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
                Overview
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed font-normal whitespace-pre-line">
                {project.fullDescription || project.description}
              </p>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
                Key Responsibilities
              </h3>
              {project.highlights && project.highlights.length > 0 ? (
                <ul className="space-y-2 text-xs font-medium text-slate-700">
                  {project.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0 mt-1.5"></span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-slate-500">
                  Comprehensive hardware engineering study.
                </p>
              )}
            </div>
          </div>

          {/* Tags & External Link */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                >
                  #{t}
                </span>
              ))}
            </div>

            {project.paperUrl && (
              <a
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Visit Paper / Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Overlay */}
      {fullscreenMedia && (
        <div
          onClick={() => setFullscreenMedia(null)}
          className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-200"
        >
          <button
            onClick={() => setFullscreenMedia(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/20 text-white hover:bg-white hover:text-black transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={fullscreenMedia.url}
            alt={fullscreenMedia.caption}
            className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl rounded-lg"
          />

          <p className="mt-4 text-xs font-mono text-white text-center max-w-lg bg-slate-900/90 px-4 py-2 rounded-lg">
            {fullscreenMedia.caption}
          </p>
        </div>
      )}
    </div>
  );
};
