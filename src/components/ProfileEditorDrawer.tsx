import React, { useState } from 'react';
import { PortfolioProfile, Project, ExperienceItem, SkillCategory } from '../types';
import { X, Save, Plus, Trash2, Edit2, RotateCcw, Check, Sparkles } from 'lucide-react';
import { defaultProfile } from '../data/portfolioData';

interface ProfileEditorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
  onSaveProfile: (newProfile: PortfolioProfile) => void;
}

export const ProfileEditorDrawer: React.FC<ProfileEditorDrawerProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'bio' | 'projects' | 'skills' | 'experience'>('bio');
  const [editedProfile, setEditedProfile] = useState<PortfolioProfile>({ ...profile });
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    onSaveProfile(editedProfile);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 1500);
  };

  const handleResetToDefault = () => {
    setEditedProfile({ ...defaultProfile });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#121212]/70 backdrop-blur-xs animate-in fade-in duration-200">
      
      {/* Drawer Panel */}
      <div className="w-full max-w-2xl bg-white dark:bg-[#121212] border-l border-[#121212] dark:border-[#333] shadow-2xl h-full flex flex-col justify-between overflow-hidden">
        
        {/* Drawer Header */}
        <div className="p-6 bg-[#F7F7F7] dark:bg-[#181818] border-b border-[#E5E5E5] dark:border-[#2A2A2A] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#121212] dark:bg-white inline-block"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-[#121212] dark:text-white">
              CUSTOMIZE PORTFOLIO DATA
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetToDefault}
              title="Reset to default CV"
              className="p-2 border border-[#E5E5E5] dark:border-[#333] text-xs font-mono text-[#888] hover:text-[#121212] dark:hover:text-white cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onClose}
              className="p-2 text-[#121212] dark:text-white border border-[#E5E5E5] dark:border-[#333] hover:bg-[#121212] hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex border-b border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#121212] overflow-x-auto">
          {[
            { id: 'bio', label: 'BIO & CONTACT' },
            { id: 'projects', label: 'PROJECTS' },
            { id: 'skills', label: 'SKILLS' },
            { id: 'experience', label: 'EXPERIENCE' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-3 text-xs font-bold tracking-wider uppercase border-b-2 cursor-pointer transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-[#121212] dark:border-white text-[#121212] dark:text-white font-black bg-[#F7F7F7] dark:bg-[#181818]'
                  : 'border-transparent text-[#777] dark:text-[#888] hover:text-[#121212]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Drawer Body Forms */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {activeTab === 'bio' && (
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-[#888] mb-1">FULL NAME</label>
                <input
                  type="text"
                  value={editedProfile.name}
                  onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                  className="w-full p-3 bg-[#F7F7F7] dark:bg-[#181818] border border-[#E5E5E5] dark:border-[#333] text-xs font-mono text-[#121212] dark:text-white"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-[#888] mb-1">PROFESSIONAL TITLE</label>
                <input
                  type="text"
                  value={editedProfile.title}
                  onChange={(e) => setEditedProfile({ ...editedProfile, title: e.target.value })}
                  className="w-full p-3 bg-[#F7F7F7] dark:bg-[#181818] border border-[#E5E5E5] dark:border-[#333] text-xs font-mono text-[#121212] dark:text-white"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-[#888] mb-1">HERO TAGLINE</label>
                <input
                  type="text"
                  value={editedProfile.tagline}
                  onChange={(e) => setEditedProfile({ ...editedProfile, tagline: e.target.value })}
                  className="w-full p-3 bg-[#F7F7F7] dark:bg-[#181818] border border-[#E5E5E5] dark:border-[#333] text-xs font-mono text-[#121212] dark:text-white"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-[#888] mb-1">BIOGRAPHY</label>
                <textarea
                  rows={4}
                  value={editedProfile.bio}
                  onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
                  className="w-full p-3 bg-[#F7F7F7] dark:bg-[#181818] border border-[#E5E5E5] dark:border-[#333] text-xs font-mono text-[#121212] dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-[#888] mb-1">EMAIL</label>
                  <input
                    type="email"
                    value={editedProfile.email}
                    onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                    className="w-full p-3 bg-[#F7F7F7] dark:bg-[#181818] border border-[#E5E5E5] dark:border-[#333] text-xs font-mono text-[#121212] dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-[#888] mb-1">PHONE</label>
                  <input
                    type="text"
                    value={editedProfile.phone}
                    onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
                    className="w-full p-3 bg-[#F7F7F7] dark:bg-[#181818] border border-[#E5E5E5] dark:border-[#333] text-xs font-mono text-[#121212] dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-[#888] mb-1">LOCATION</label>
                <input
                  type="text"
                  value={editedProfile.location}
                  onChange={(e) => setEditedProfile({ ...editedProfile, location: e.target.value })}
                  className="w-full p-3 bg-[#F7F7F7] dark:bg-[#181818] border border-[#E5E5E5] dark:border-[#333] text-xs font-mono text-[#121212] dark:text-white"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-[#888] mb-1">PROFILE PICTURE IMAGE URL (AVATAR)</label>
                <input
                  type="text"
                  value={editedProfile.avatarUrl || ''}
                  onChange={(e) => setEditedProfile({ ...editedProfile, avatarUrl: e.target.value })}
                  placeholder="https://..."
                  className="w-full p-3 bg-[#F7F7F7] dark:bg-[#181818] border border-[#E5E5E5] dark:border-[#333] text-xs font-mono text-[#121212] dark:text-white"
                />
                <p className="text-[10px] text-slate-400 mt-1">Paste any direct image URL here to replace the dummy profile photo on the homepage.</p>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-[#E5E5E5]">
                <span className="text-xs font-bold text-[#121212] uppercase font-mono">
                  {editedProfile.projects.length} PROJECTS REGISTERED
                </span>
                <button
                  onClick={() => {
                    const newProj: Project = {
                      id: `proj-${Date.now()}`,
                      title: 'New R&D Prototype',
                      subtitle: 'Experimental engineering design',
                      description: 'Custom mechanical product design and fabrication.',
                      category: 'R&D Engineering',
                      tags: ['3D Printing', 'CAD'],
                      featured: true,
                      coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200',
                      gallery: [],
                      year: '2026'
                    };
                    setEditedProfile({
                      ...editedProfile,
                      projects: [newProj, ...editedProfile.projects]
                    });
                  }}
                  className="px-3 py-1.5 bg-[#121212] text-white text-[10px] font-bold tracking-widest uppercase flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>ADD PROJECT</span>
                </button>
              </div>

              {editedProfile.projects.map((p, pIdx) => (
                <div key={p.id} className="p-4 bg-[#F7F7F7] dark:bg-[#181818] border border-[#E5E5E5] dark:border-[#333] space-y-3">
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value={p.title}
                      onChange={(e) => {
                        const updated = [...editedProfile.projects];
                        updated[pIdx].title = e.target.value;
                        setEditedProfile({ ...editedProfile, projects: updated });
                      }}
                      className="font-bold text-xs bg-white dark:bg-[#121212] p-2 border border-[#DDD] dark:border-[#444] text-[#121212] dark:text-white w-2/3"
                    />

                    <button
                      onClick={() => {
                        const updated = editedProfile.projects.filter((_, idx) => idx !== pIdx);
                        setEditedProfile({ ...editedProfile, projects: updated });
                      }}
                      className="p-1.5 text-red-600 hover:bg-red-100 dark:hover:bg-red-950 transition-colors"
                      title="Delete Project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <input
                    type="text"
                    value={p.subtitle}
                    onChange={(e) => {
                      const updated = [...editedProfile.projects];
                      updated[pIdx].subtitle = e.target.value;
                      setEditedProfile({ ...editedProfile, projects: updated });
                    }}
                    placeholder="Subtitle"
                    className="w-full text-xs font-mono p-2 bg-white dark:bg-[#121212] border border-[#DDD] dark:border-[#444]"
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-4">
              {editedProfile.skillCategories.map((cat, cIdx) => (
                <div key={cIdx} className="p-4 bg-[#F7F7F7] dark:bg-[#181818] border border-[#E5E5E5] dark:border-[#333] space-y-3">
                  <h4 className="font-bold text-xs uppercase text-[#121212] dark:text-white font-mono">{cat.title}</h4>
                  <div className="space-y-2">
                    {cat.skills.map((s, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={s.name}
                          onChange={(e) => {
                            const updatedCats = [...editedProfile.skillCategories];
                            updatedCats[cIdx].skills[sIdx].name = e.target.value;
                            setEditedProfile({ ...editedProfile, skillCategories: updatedCats });
                          }}
                          className="flex-1 p-2 bg-white dark:bg-[#121212] border border-[#DDD] text-xs font-mono"
                        />
                        <input
                          type="number"
                          value={s.level}
                          onChange={(e) => {
                            const updatedCats = [...editedProfile.skillCategories];
                            updatedCats[cIdx].skills[sIdx].level = Number(e.target.value);
                            setEditedProfile({ ...editedProfile, skillCategories: updatedCats });
                          }}
                          className="w-16 p-2 bg-white dark:bg-[#121212] border border-[#DDD] text-xs font-mono text-center"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-4">
              {editedProfile.experience.map((exp, eIdx) => (
                <div key={exp.id} className="p-4 bg-[#F7F7F7] dark:bg-[#181818] border border-[#E5E5E5] dark:border-[#333] space-y-2">
                  <input
                    type="text"
                    value={exp.role}
                    onChange={(e) => {
                      const updated = [...editedProfile.experience];
                      updated[eIdx].role = e.target.value;
                      setEditedProfile({ ...editedProfile, experience: updated });
                    }}
                    className="font-bold text-xs p-2 bg-white dark:bg-[#121212] border border-[#DDD] w-full"
                  />
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => {
                      const updated = [...editedProfile.experience];
                      updated[eIdx].company = e.target.value;
                      setEditedProfile({ ...editedProfile, experience: updated });
                    }}
                    className="text-xs font-mono p-2 bg-white dark:bg-[#121212] border border-[#DDD] w-full"
                  />
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Drawer Footer */}
        <div className="p-6 bg-[#F7F7F7] dark:bg-[#181818] border-t border-[#E5E5E5] dark:border-[#2A2A2A] flex items-center justify-between">
          <span className="text-[10px] font-mono text-[#888]">
            {saveSuccess ? 'SAVED TO LOCAL STATE!' : 'PRESERVED FOR THIS SESSION'}
          </span>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-[#E5E5E5] dark:border-[#333] text-xs font-bold uppercase cursor-pointer"
            >
              CLOSE
            </button>

            <button
              onClick={handleSave}
              className="px-6 py-2 bg-[#121212] text-white dark:bg-white dark:text-[#121212] text-xs font-bold tracking-widest uppercase hover:bg-[#333] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {saveSuccess ? <Check className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4" />}
              <span>{saveSuccess ? 'SAVED!' : 'SAVE CHANGES'}</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
