import React, { useState, useEffect } from 'react';
import { PortfolioProfile } from '../types';
import { 
  FileText, 
  Menu, 
  X,
  Edit3,
  Award
} from 'lucide-react';

interface HeaderNavProps {
  profile: PortfolioProfile;
  onOpenResume: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  profile,
  onOpenResume,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'projects', 'experience', 'skills', 'publications', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-18 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <button
          id="nav-logo"
          onClick={() => scrollToSection('about')}
          className="flex items-center gap-3.5 group cursor-pointer text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-sm group-hover:bg-indigo-600 transition-colors">
            BC
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-slate-900 flex items-center gap-1.5">
              {profile.name}
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" title="Seeking collaborations"></span>
            </span>
            <span className="text-xs font-medium text-slate-500">
              Mechanical Engineer
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1 bg-slate-100/80 p-1.5 rounded-xl border border-slate-200/60 text-xs font-semibold">
          {[
            { id: 'about', label: 'About' },
            { id: 'projects', label: 'Projects' },
            { id: 'experience', label: 'Experience' },
            { id: 'skills', label: 'Skills' },
            { id: 'publications', label: 'Publications' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 py-1.5 rounded-lg cursor-pointer transition-all ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          
          {/* Read Resume / CV */}
          <button
            id="btn-nav-resume"
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV / Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="btn-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg border border-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-dropdown-menu" className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-2 shadow-lg">
          {[
            { id: 'about', label: 'About' },
            { id: 'projects', label: 'Projects' },
            { id: 'experience', label: 'Experience & Education' },
            { id: 'skills', label: 'Technical Skills' },
            { id: 'publications', label: 'Publications' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-link-${item.id}`}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeSection === item.id
                  ? 'bg-slate-100 text-slate-900 font-bold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full text-center py-2.5 text-xs font-semibold rounded-lg bg-slate-900 text-white"
            >
              View Full CV (PDF)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
