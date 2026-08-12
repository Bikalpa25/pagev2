import React from 'react';
import { PortfolioProfile } from '../types';
import { ArrowUp, Mail, Phone, FileText } from 'lucide-react';

interface FooterProps {
  profile: PortfolioProfile;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
                BC
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight uppercase block">{profile.name}</span>
                <span className="text-xs text-slate-400 font-mono">{profile.title}</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-sans">
              {profile.tagline}
            </p>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-2 text-xs text-slate-400 font-mono">
            <div className="font-bold text-white uppercase mb-3 tracking-wider">Navigation</div>
            <div><a href="#about" className="hover:text-white transition-colors">01 / About</a></div>
            <div><a href="#projects" className="hover:text-white transition-colors">02 / Projects</a></div>
            <div><a href="#experience" className="hover:text-white transition-colors">03 / Experience</a></div>
            <div><a href="#skills" className="hover:text-white transition-colors">04 / Skills</a></div>
            <div><a href="#publications" className="hover:text-white transition-colors">05 / Publications</a></div>
            <div><a href="#contact" className="hover:text-white transition-colors">06 / Contact</a></div>
          </div>

          {/* Quick Actions */}
          <div className="md:col-span-3 space-y-3 text-xs font-mono">
            <div className="font-bold text-white uppercase mb-3 tracking-wider">Official Curriculum Vitae</div>
            <button
              onClick={onOpenResume}
              className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer flex items-center gap-2 font-semibold"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>View Full CV (PDF)</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {profile.name}. All Rights Reserved. • Dhulikhel, Nepal
          </div>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors flex items-center gap-2 cursor-pointer font-bold text-xs uppercase"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
