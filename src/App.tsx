import React, { useState, useEffect } from "react";
import { PortfolioProfile, Project } from "./types";
import { defaultProfile } from "./data/portfolioData";
import { HeaderNav } from "./components/HeaderNav";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ProjectModal } from "./components/ProjectModal";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { PublicationsSection } from "./components/PublicationsSection";
import { ContactSection } from "./components/ContactSection";
import { ResumeModal } from "./components/ResumeModal";
import { Footer } from "./components/Footer";

export function App() {
  const [profile, setProfile] = useState<PortfolioProfile>(() => {
    const saved = localStorage.getItem("bikalpa_portfolio_profile");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") {
          return {
            ...defaultProfile,
            ...parsed,
            title: defaultProfile.title,
            projects: defaultProfile.projects,
            skillCategories: Array.isArray(parsed.skillCategories)
              ? parsed.skillCategories
              : defaultProfile.skillCategories,
            experience:
              Array.isArray(parsed.experience) &&
              parsed.experience.length >= defaultProfile.experience.length
                ? parsed.experience
                : defaultProfile.experience,
            education: Array.isArray(parsed.education)
              ? parsed.education
              : defaultProfile.education,
            publications: Array.isArray(parsed.publications)
              ? parsed.publications
              : defaultProfile.publications,
          };
        }
      } catch (e) {
        return defaultProfile;
      }
    }
    return defaultProfile;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Always force clean light theme
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    root.classList.remove("dark");
    body.classList.remove("dark", "theme-paper", "theme-blueprint");
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAFAFA] text-slate-800 antialiased selection:bg-slate-900 selection:text-white">
      {/* Navigation Header */}
      <HeaderNav profile={profile} onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Selected Projects & R&D Showcase */}
        <ProjectsSection
          projects={profile.projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Career Chronology & Work Experience */}
        <ExperienceSection profile={profile} />

        {/* Technical Competencies & Skills */}
        <SkillsSection profile={profile} />

        {/* Peer-Reviewed Journal Publications */}
        <PublicationsSection profile={profile} />

        {/* Direct Contact & Inquiries */}
        <ContactSection profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} onOpenResume={() => setIsResumeOpen(true)} />

      {/* Modals & Drawers */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
      />
    </div>
  );
}

export default App;
