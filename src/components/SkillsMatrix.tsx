import React from 'react';
import { SkillCategory } from '../types';
import { Cpu, Wrench, ShieldCheck, Code2, Award, Zap, Terminal } from 'lucide-react';

interface SkillsMatrixProps {
  skillCategories: SkillCategory[];
}

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ skillCategories }) => {
  return (
    <section id="skills" className="py-20 border-b border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#121212]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Header Title */}
        <div className="mb-12 border-b border-[#E5E5E5] dark:border-[#2A2A2A] pb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-[0.2em] text-[#888] dark:text-[#A0A0A0] uppercase">
              HARDWARE & SOFTWARE CAPABILITIES
            </span>
            <span className="w-8 h-[1px] bg-[#121212] dark:bg-white inline-block"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#121212] dark:text-white uppercase">
            TECHNICAL EXPERTISE MATRIX
          </h2>
        </div>

        {/* CSWA Certification Banner */}
        <div className="mb-10 bg-[#121212] text-white dark:bg-white dark:text-[#121212] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-[#121212] dark:border-white">
          <div className="flex items-center gap-4">
            <div className="p-3 border border-white/30 dark:border-black/30">
              <Award className="w-8 h-8 text-amber-400 dark:text-amber-600" />
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] opacity-70 uppercase font-mono">
                CERTIFIED SOLIDWORKS ASSOCIATE
              </div>
              <h3 className="text-lg font-bold tracking-tight uppercase">
                SOLIDWORKS CSWA CERTIFIED MECHANICAL DESIGNER
              </h3>
              <p className="text-xs opacity-80 mt-1 max-w-xl font-mono">
                Certified proficiency in parametric 3D modeling, assembly design, drafting, surface modeling, and engineering tolerance verification.
              </p>
            </div>
          </div>

          <div className="text-xs font-mono font-bold tracking-widest px-4 py-2 border border-white/30 dark:border-black/30 uppercase">
            VERIFIED CREDENTIAL
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#F7F7F7] dark:bg-[#161616] border border-[#E5E5E5] dark:border-[#2A2A2A] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E5E5E5] dark:border-[#2A2A2A]">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#888] uppercase font-mono">
                    CAT 0{idx + 1}
                  </span>
                  <div className="w-6 h-[1px] bg-[#121212] dark:bg-white"></div>
                </div>

                <h3 className="text-base font-bold tracking-tight text-[#121212] dark:text-white uppercase mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#666] dark:text-[#999] mb-6 font-mono leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills List */}
                <div className="space-y-4">
                  {cat.skills.map((s, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-[#121212] dark:text-white flex items-center gap-1.5">
                          {s.featured && <Zap className="w-3 h-3 text-amber-600 dark:text-amber-400" />}
                          {s.name}
                        </span>
                        {s.categoryBadge && (
                          <span className="text-[9px] font-bold tracking-widest uppercase bg-white dark:bg-[#222] border border-[#E5E5E5] dark:border-[#333] px-1.5 py-0.5 text-[#555] dark:text-[#AAA]">
                            {s.categoryBadge}
                          </span>
                        )}
                      </div>

                      {/* Geometric Progress Bar */}
                      <div className="h-1.5 w-full bg-[#E5E5E5] dark:bg-[#262626] overflow-hidden">
                        <div
                          className="h-full bg-[#121212] dark:bg-white transition-all duration-500"
                          style={{ width: `${s.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E5E5E5] dark:border-[#2A2A2A] text-[10px] font-mono text-[#888] uppercase tracking-widest">
                0{idx + 1} / {cat.skills.length} SPECIALIZATIONS
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
