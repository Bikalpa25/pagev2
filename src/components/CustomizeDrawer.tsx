import React, { useState } from 'react';
import { PortfolioProfile } from '../types';
import { presetProfiles } from '../data/portfolioData';
import { X, Save, RotateCcw, Sparkles, User, Briefcase, Mail, MapPin, Check } from 'lucide-react';

interface CustomizeDrawerProps {
  profile: PortfolioProfile;
  onUpdateProfile: (updated: PortfolioProfile) => void;
  onResetProfile: () => void;
  onClose: () => void;
}

export const CustomizeDrawer: React.FC<CustomizeDrawerProps> = ({
  profile,
  onUpdateProfile,
  onResetProfile,
  onClose
}) => {
  const [formData, setFormData] = useState<PortfolioProfile>({ ...profile });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleChange = (field: keyof PortfolioProfile, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  const handleSelectPreset = (presetProfile: PortfolioProfile) => {
    setFormData({ ...presetProfile });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-md h-full bg-white dark:bg-[#121212] border-l border-[#E5E5E5] dark:border-[#2A2A2A] shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E5E5E5] dark:border-[#2A2A2A] bg-[#F7F7F7] dark:bg-[#181818]">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#888] uppercase font-mono">
              PROFILE CUSTOMIZER
            </span>
            <h3 className="text-lg font-bold uppercase text-[#121212] dark:text-white">
              EDIT CV & PORTFOLIO DATA
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#555] dark:text-[#AAA] hover:text-[#121212] dark:hover:text-white border border-[#E5E5E5] dark:border-[#333] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 font-mono text-xs">
          
          {savedSuccess && (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Profile updated successfully!</span>
            </div>
          )}

          {/* Quick Presets */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-wider uppercase text-[#888] block">
              QUICK PRESETS
            </label>
            <div className="space-y-1.5">
              {presetProfiles.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectPreset(p.profile)}
                  className="w-full text-left p-2.5 bg-[#F7F7F7] dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333] hover:border-[#121212] dark:hover:border-white transition-colors cursor-pointer text-xs font-bold"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Form Fields */}
          <form id="customize-form" onSubmit={handleSubmit} className="space-y-4 pt-2 border-t border-[#E5E5E5] dark:border-[#2A2A2A]">
            
            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-wider uppercase text-[#555] dark:text-[#AAA]">
                FULL NAME
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full p-2.5 bg-[#F7F7F7] dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333] text-[#121212] dark:text-white focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-wider uppercase text-[#555] dark:text-[#AAA]">
                ENGINEERING TITLE
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className="w-full p-2.5 bg-[#F7F7F7] dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333] text-[#121212] dark:text-white focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-wider uppercase text-[#555] dark:text-[#AAA]">
                HERO TAGLINE
              </label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => handleChange('tagline', e.target.value)}
                className="w-full p-2.5 bg-[#F7F7F7] dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333] text-[#121212] dark:text-white focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-wider uppercase text-[#555] dark:text-[#AAA]">
                SHORT BIO
              </label>
              <textarea
                rows={4}
                value={formData.bio}
                onChange={(e) => handleChange('bio', e.target.value)}
                className="w-full p-2.5 bg-[#F7F7F7] dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333] text-[#121212] dark:text-white focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-wider uppercase text-[#555] dark:text-[#AAA]">
                EMAIL
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full p-2.5 bg-[#F7F7F7] dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333] text-[#121212] dark:text-white focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-wider uppercase text-[#555] dark:text-[#AAA]">
                PHONE / WHATSAPP
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full p-2.5 bg-[#F7F7F7] dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333] text-[#121212] dark:text-white focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-wider uppercase text-[#555] dark:text-[#AAA]">
                LOCATION
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="w-full p-2.5 bg-[#F7F7F7] dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333] text-[#121212] dark:text-white focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-wider uppercase text-[#555] dark:text-[#AAA]">
                AVAILABILITY TEXT
              </label>
              <input
                type="text"
                value={formData.availabilityText}
                onChange={(e) => handleChange('availabilityText', e.target.value)}
                className="w-full p-2.5 bg-[#F7F7F7] dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333] text-[#121212] dark:text-white focus:outline-none"
              />
            </div>

          </form>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-[#E5E5E5] dark:border-[#2A2A2A] bg-[#F7F7F7] dark:bg-[#181818] flex items-center gap-3">
          <button
            type="button"
            onClick={onResetProfile}
            className="flex-1 py-3 border border-[#E5E5E5] dark:border-[#333] text-[#555] dark:text-[#AAA] hover:text-[#121212] dark:hover:text-white text-xs font-bold font-mono uppercase cursor-pointer"
          >
            RESET TO DEFAULT
          </button>

          <button
            type="submit"
            form="customize-form"
            className="flex-1 py-3 bg-[#121212] text-white dark:bg-white dark:text-[#121212] text-xs font-bold font-mono uppercase cursor-pointer hover:opacity-90 transition-opacity"
          >
            SAVE CHANGES
          </button>
        </div>

      </div>
    </div>
  );
};
