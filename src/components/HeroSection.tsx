import React, { useState } from 'react';
import { PortfolioProfile } from '../types';
import { 
  ArrowRight, 
  MapPin, 
  Copy, 
  Check, 
  FileText,
  Clock,
  Award,
  ShieldCheck,
  Zap,
  Mail,
  Briefcase
} from 'lucide-react';

interface HeroSectionProps {
  profile: PortfolioProfile;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  onOpenResume,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const avatar = profile.avatarUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800';

  return (
    <section id="about" className="pt-28 pb-16 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Main Hero Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Profile Picture & Quick Highlights */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="relative group mb-6">
              {/* Profile Picture Frame */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-slate-200 bg-slate-100 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src={avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Status Indicator Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-xs flex items-center gap-2 whitespace-nowrap">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[11px] font-semibold text-slate-700">Seeking collaborations</span>
              </div>
            </div>

            {/* Quick Metadata Below Image */}
            <div className="w-full space-y-2 pt-2 text-xs font-medium text-slate-500">
              <div className="flex items-center justify-center md:justify-start gap-2 text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-slate-700">
                <Award className="w-3.5 h-3.5 text-slate-400" />
                <span>Kathmandu University</span>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Bio & Action Buttons */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Minimalist Header Pills */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                SolidWorks CSWA
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                NAST Grantee
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                {profile.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-indigo-600">
                {profile.title}
              </p>
            </div>

            {/* Clean Bio */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center md:text-left">
              {profile.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <button
                id="hero-btn-projects"
                onClick={() => scrollToSection('projects')}
                className="px-5 py-2.5 rounded-lg bg-slate-900 text-white font-medium text-xs tracking-wide hover:bg-slate-800 transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="hero-btn-resume"
                onClick={onOpenResume}
                className="px-5 py-2.5 rounded-lg bg-white text-slate-700 border border-slate-200 font-medium text-xs tracking-wide hover:bg-slate-50 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-slate-400" />
                <span>Read CV</span>
              </button>

              <button
                id="hero-btn-copy-email"
                onClick={handleCopyEmail}
                className="px-4 py-2.5 rounded-lg bg-white text-slate-700 border border-slate-200 font-medium text-xs hover:bg-slate-50 transition-colors flex items-center gap-2 cursor-pointer"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Key Metrics / Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-100 text-center md:text-left">
              <div>
                <div className="text-xl font-bold text-slate-900 font-mono">2</div>
                <div className="text-[11px] text-slate-500">Startups Co-founded</div>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900 font-mono">15+</div>
                <div className="text-[11px] text-slate-500">Hardware Products</div>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900 font-mono">3.36</div>
                <div className="text-[11px] text-slate-500">Kathmandu Univ GPA</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
