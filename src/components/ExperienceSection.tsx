import React, { useState } from 'react';
import { PortfolioProfile } from '../types';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck,
  Building2,
  Calendar,
  Sparkles
} from 'lucide-react';

interface ExperienceSectionProps {
  profile: PortfolioProfile;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ profile }) => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  const experienceList = profile?.experience || [];

  return (
    <section id="experience" className="py-20 border-b border-slate-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-100 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase font-mono">
                Career & Research Chronology
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
              Experience Timeline
            </h2>
            <p className="text-slate-500 text-sm mt-1 max-w-xl">
              Chronological track of R&D engineering leadership, startup ventures, academic research, and medical fabrication.
            </p>
          </div>

          {/* Tab Toggle */}
          <div className="inline-flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 shrink-0">
            <button
              id="exp-tab-work"
              onClick={() => setActiveTab('work')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'work'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Work & Research</span>
            </button>

            <button
              id="exp-tab-edu"
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education & License</span>
            </button>
          </div>
        </div>

        {/* Work & Research Timeline Tab */}
        {activeTab === 'work' ? (
          <div className="relative">
            
            {/* Timeline Vertical Rail Line */}
            <div className="hidden sm:block absolute left-36 md:left-44 top-3 bottom-6 w-0.5 bg-indigo-100"></div>

            <div className="space-y-10 sm:space-y-12">
              {experienceList.map((exp, idx) => {
                const isPresent = exp.period.toLowerCase().includes('present') || exp.period.toLowerCase().includes('ongoing');

                return (
                  <div key={exp.id || idx} className="relative group flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
                    
                    {/* Left Column: Date & Badge (Width-constrained on desktop) */}
                    <div className="sm:w-36 md:w-44 shrink-0 text-left sm:text-right pt-0.5">
                      <div className="inline-flex sm:flex flex-wrap sm:flex-col items-start sm:items-end gap-1.5">
                        <span className="text-xs font-bold font-mono text-slate-900 bg-slate-100 sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-md border sm:border-0 border-slate-200">
                          {exp.period}
                        </span>

                        <span className="text-[10px] font-bold font-mono text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100/80 uppercase">
                          {exp.type}
                        </span>

                        {isPresent && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                            Active
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Node Dot on Rail Line */}
                    <div className="hidden sm:flex absolute left-36 md:left-44 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-indigo-600 items-center justify-center z-10 group-hover:scale-125 transition-transform shadow-xs">
                      <div className={`w-2 h-2 rounded-full ${isPresent ? 'bg-emerald-600' : 'bg-indigo-600'}`}></div>
                    </div>

                    {/* Right Column: Experience Card */}
                    <div className="flex-1 bg-slate-50/80 hover:bg-slate-50 rounded-2xl border border-slate-200/80 p-6 sm:p-7 hover:border-indigo-200 hover:shadow-sm transition-all">
                      
                      {/* Role Title */}
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {exp.role}
                      </h3>

                      {/* Company Name & Location */}
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-amber-900 mt-1 mb-4">
                        <span className="flex items-center gap-1.5 font-bold">
                          <Building2 className="w-4 h-4 text-amber-700" />
                          {exp.company}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="flex items-center gap-1 text-slate-500 font-mono font-normal">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {exp.summary}
                      </p>

                      {/* Highlights */}
                      {exp.highlights && exp.highlights.length > 0 && (
                        <div className="space-y-2 mb-5 bg-white p-4 rounded-xl border border-slate-200/60 shadow-2xs">
                          <div className="text-[10px] font-bold text-slate-400 uppercase font-mono tracking-wider mb-1">
                            Key Accomplishments
                          </div>
                          {exp.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skillsUsed.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono text-slate-600 bg-white px-2.5 py-0.5 rounded-md border border-slate-200"
                          >
                            #{skill}
                          </span>
                        ))}
                      </div>

                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        ) : (
          /* Education & Certification Tab */
          <div className="relative">
            
            <div className="hidden sm:block absolute left-36 md:left-44 top-3 bottom-6 w-0.5 bg-indigo-100"></div>

            <div className="space-y-10 sm:space-y-12">
              {(profile?.education || []).map((edu, idx) => (
                <div key={edu.id || idx} className="relative group flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
                  
                  {/* Left Column Date */}
                  <div className="sm:w-36 md:w-44 shrink-0 text-left sm:text-right pt-0.5">
                    <div className="inline-flex sm:flex flex-col items-start sm:items-end gap-1">
                      <span className="text-xs font-bold font-mono text-slate-900 bg-slate-100 sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-md border sm:border-0 border-slate-200">
                        {edu.period}
                      </span>
                      {edu.gpa && (
                        <span className="text-[10px] font-bold font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          {edu.gpa}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Node Dot */}
                  <div className="hidden sm:flex absolute left-36 md:left-44 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-indigo-600 items-center justify-center z-10 group-hover:scale-125 transition-transform shadow-xs">
                    <GraduationCap className="w-3 h-3 text-indigo-600" />
                  </div>

                  {/* Right Content Card */}
                  <div className="flex-1 bg-slate-50/80 hover:bg-slate-50 rounded-2xl border border-slate-200/80 p-6 sm:p-7 hover:border-indigo-200 transition-all">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                      {edu.degree}
                    </h3>
                    <div className="text-xs font-semibold text-amber-800 mb-3">
                      {edu.institution}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            {/* CSWA Certification Box */}
            <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-slate-800">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold font-mono text-amber-400 uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Dassault Systèmes Official License</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  SolidWorks CSWA Certified
                </h3>
                <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                  Certified SOLIDWORKS Associate in Mechanical Design. Expert in 3D parametric part modeling, complex assembly layout, engineering drawing creation, and FEA stress simulation.
                </p>
              </div>

              <div className="shrink-0 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-center">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Verification</div>
                <div className="text-xs font-bold text-white font-mono mt-0.5">CSWA License Verified</div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

