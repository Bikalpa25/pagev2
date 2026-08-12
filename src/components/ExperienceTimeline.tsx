import React from 'react';
import { ExperienceItem, EducationItem, PublicationItem } from '../types';
import { Briefcase, GraduationCap, BookOpen, ExternalLink, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
  education: EducationItem[];
  publications: PublicationItem[];
  onOpenResume: () => void;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
  education,
  publications,
  onOpenResume
}) => {
  return (
    <section id="experience" className="py-20 border-b border-[#E5E5E5] dark:border-[#2A2A2A] bg-[#F7F7F7] dark:bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#E5E5E5] dark:border-[#2A2A2A] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold tracking-[0.2em] text-[#888] dark:text-[#A0A0A0] uppercase">
                CAREER & RESEARCH HISTORY
              </span>
              <span className="w-8 h-[1px] bg-[#121212] dark:bg-white inline-block"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#121212] dark:text-white uppercase">
              WORK EXPERIENCE & ACADEMIA
            </h2>
          </div>

          <button
            onClick={onOpenResume}
            className="px-5 py-2.5 text-xs font-bold tracking-widest uppercase bg-[#121212] text-white dark:bg-white dark:text-[#121212] hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>DOWNLOAD COMPLETE CV</span>
          </button>
        </div>

        {/* 2-Column Main Section: Left = Work Experience, Right = Education & Publications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-sm font-bold tracking-[0.2em] text-[#121212] dark:text-white uppercase font-mono border-b border-[#E5E5E5] dark:border-[#2A2A2A] pb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>PROFESSIONAL & STARTUP POSITIONS</span>
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={exp.id || idx}
                  className="bg-white dark:bg-[#121212] border border-[#E5E5E5] dark:border-[#2A2A2A] p-6 space-y-4"
                >
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-start justify-between gap-2 border-b border-[#E5E5E5] dark:border-[#2A2A2A] pb-3">
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#888] uppercase font-mono">
                        {exp.type}
                      </span>
                      <h4 className="text-lg font-bold text-[#121212] dark:text-white uppercase">
                        {exp.role}
                      </h4>
                      <div className="text-xs font-serif italic text-amber-700 dark:text-amber-400">
                        {exp.company}
                      </div>
                    </div>

                    <div className="text-right font-mono text-xs text-[#666] dark:text-[#AAA]">
                      <div className="font-bold text-[#121212] dark:text-white">{exp.period}</div>
                      <div className="text-[10px] text-[#888]">{exp.location}</div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-[#555] dark:text-[#B0B0B0] leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="space-y-1.5 pt-1">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-[#333] dark:text-[#CCC]">
                          <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Skills used */}
                  {exp.skillsUsed && exp.skillsUsed.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.skillsUsed.map((sk, skIdx) => (
                        <span
                          key={skIdx}
                          className="text-[9px] font-mono bg-[#F7F7F7] dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333] px-2 py-0.5 text-[#666] dark:text-[#AAA]"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Publications */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Academic Education */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold tracking-[0.2em] text-[#121212] dark:text-white uppercase font-mono border-b border-[#E5E5E5] dark:border-[#2A2A2A] pb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>ACADEMIC DEGREES</span>
              </h3>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div
                    key={edu.id || idx}
                    className="bg-white dark:bg-[#121212] border border-[#E5E5E5] dark:border-[#2A2A2A] p-6 space-y-2"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold tracking-widest text-amber-600 dark:text-amber-400 uppercase font-mono">
                        {edu.period}
                      </span>
                      {edu.gpa && (
                        <span className="text-[10px] font-mono font-bold bg-[#121212] text-white dark:bg-white dark:text-[#121212] px-2 py-0.5">
                          {edu.gpa}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-[#121212] dark:text-white uppercase">
                      {edu.degree}
                    </h4>

                    <div className="text-xs font-serif italic text-[#555] dark:text-[#AAA]">
                      {edu.institution}
                    </div>

                    {edu.description && (
                      <p className="text-xs text-[#666] dark:text-[#999] pt-2 border-t border-[#E5E5E5]/60 dark:border-[#262626] leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Research Publications Section */}
            <div id="publications" className="space-y-6">
              <h3 className="text-sm font-bold tracking-[0.2em] text-[#121212] dark:text-white uppercase font-mono border-b border-[#E5E5E5] dark:border-[#2A2A2A] pb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>JOURNAL PUBLICATIONS</span>
              </h3>

              <div className="space-y-4">
                {publications.map((pub, idx) => (
                  <div
                    key={pub.id || idx}
                    className="bg-[#121212] text-white dark:bg-white dark:text-[#121212] p-6 space-y-3 border border-[#121212] dark:border-white"
                  >
                    <div className="text-[10px] font-bold tracking-widest opacity-70 font-mono uppercase">
                      PEER REVIEWED • {pub.date}
                    </div>

                    <h4 className="text-sm font-bold leading-snug">
                      "{pub.title}"
                    </h4>

                    <div className="text-xs opacity-80 font-serif italic">
                      Authors: {pub.authors}
                    </div>

                    <div className="text-xs font-mono opacity-90 pt-2 border-t border-white/20 dark:border-black/20">
                      {pub.journal} ({pub.citation})
                    </div>

                    {pub.doiOrLink && (
                      <a
                        href={pub.doiOrLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold underline hover:opacity-80 pt-1 cursor-pointer"
                      >
                        <span>View Journal Article</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
