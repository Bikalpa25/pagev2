import React from 'react';
import { PortfolioProfile } from '../types';
import { 
  Cpu, 
  Wrench, 
  Award, 
  Code2, 
  Printer, 
  Box, 
  Activity, 
  CheckCircle2,
  Settings,
  Flame,
  Binary
} from 'lucide-react';

interface SkillsSectionProps {
  profile: PortfolioProfile;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ profile }) => {
  // Category icon selector
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Printer className="w-4 h-4 text-indigo-600" />;
      case 1:
        return <Box className="w-4 h-4 text-indigo-600" />;
      case 2:
        return <Cpu className="w-4 h-4 text-indigo-600" />;
      default:
        return <Wrench className="w-4 h-4 text-indigo-600" />;
    }
  };

  // Helper for skill-specific icons
  const getSkillIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('cswa') || lower.includes('certif')) return <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />;
    if (lower.includes('3d print') || lower.includes('fdm') || lower.includes('sla')) return <Printer className="w-3.5 h-3.5 text-indigo-600 shrink-0" />;
    if (lower.includes('solidworks') || lower.includes('fusion') || lower.includes('rhino') || lower.includes('cad')) return <Box className="w-3.5 h-3.5 text-slate-700 shrink-0" />;
    if (lower.includes('cnc') || lower.includes('milling') || lower.includes('lathe') || lower.includes('drill')) return <Settings className="w-3.5 h-3.5 text-slate-700 shrink-0" />;
    if (lower.includes('extrusion') || lower.includes('heatpress') || lower.includes('plastic')) return <Flame className="w-3.5 h-3.5 text-indigo-600 shrink-0" />;
    if (lower.includes('python') || lower.includes('c++') || lower.includes('c / c++') || lower.includes('code')) return <Code2 className="w-3.5 h-3.5 text-slate-800 shrink-0" />;
    if (lower.includes('esp32') || lower.includes('arduino') || lower.includes('iot')) return <Cpu className="w-3.5 h-3.5 text-indigo-600 shrink-0" />;
    if (lower.includes('machine learning') || lower.includes('ml') || lower.includes('anomaly')) return <Activity className="w-3.5 h-3.5 text-indigo-600 shrink-0" />;
    if (lower.includes('matlab') || lower.includes('ansys')) return <Binary className="w-3.5 h-3.5 text-slate-700 shrink-0" />;
    return <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />;
  };

  const categories = profile?.skillCategories || [];

  return (
    <section id="skills" className="py-12 sm:py-16 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-mono font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-2 py-0.5 rounded-md">
                Technical Competencies
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
              Technical Skills & Tools
            </h2>
          </div>

          {/* Quick Highlight Pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200/80 text-amber-900 rounded-lg font-semibold shadow-2xs">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              SolidWorks CSWA Certified (ID: C-LEHGTUYDWK)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-200/80 text-indigo-900 rounded-lg font-semibold shadow-2xs">
              <Printer className="w-3.5 h-3.5 text-indigo-600" />
              Additive & Extrusion Specialist
            </span>
          </div>
        </div>

        {/* Compact 3-Column Grid of Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-white border border-slate-200 rounded-lg shadow-2xs">
                      {getCategoryIcon(idx)}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                {/* Compact Skills List as Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => {
                    const isCertified = skill.name.toLowerCase().includes('cswa') || (skill.categoryBadge && skill.categoryBadge.toLowerCase().includes('certif'));
                    
                    return (
                      <div
                        key={sIdx}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          isCertified 
                            ? 'bg-amber-50 border-amber-300 text-amber-950 font-semibold shadow-2xs' 
                            : 'bg-white border-slate-200 text-slate-800 shadow-2xs hover:border-indigo-300'
                        }`}
                      >
                        {getSkillIcon(skill.name)}
                        <span>{skill.name}</span>
                        {skill.categoryBadge && (
                          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                            isCertified 
                              ? 'bg-amber-200/70 text-amber-900' 
                              : 'bg-slate-100 text-slate-600'
                          }`}>
                            {skill.categoryBadge}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

