export type ThemeMode = 'light' | 'dark' | 'paper' | 'blueprint';

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'website' | 'phone';
  url: string;
  username: string;
}

export interface ProjectMedia {
  id: string;
  url: string;
  caption: string;
  type: 'image' | 'gif' | 'cad';
  isCover?: boolean;
}

export type ProjectCategory = 
  | 'All'
  | 'Sustainable Materials & Recycling'
  | 'Medical & Surgical Devices'
  | 'IoT & Machine Learning'
  | 'Automation & Manufacturing'
  | 'R&D Engineering';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  organization?: string;
  role?: string;
  description: string;
  fullDescription?: string;
  category: 'Sustainable Materials & Recycling' | 'Medical & Surgical Devices' | 'IoT & Machine Learning' | 'Automation & Manufacturing' | 'R&D Engineering';
  tags: string[];
  featured: boolean;
  coverImage: string;
  gallery: ProjectMedia[];
  demoUrl?: string;
  githubUrl?: string;
  paperUrl?: string;
  metrics?: { label: string; value: string }[];
  highlights?: string[];
  year: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 1 - 100
    categoryBadge?: string;
    featured?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Co-founder' | 'Research' | 'Internship' | 'Leadership';
  summary: string;
  highlights: string[];
  skillsUsed: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  description?: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string;
  journal: string;
  date: string;
  doiOrLink?: string;
  citation?: string;
}

export interface PortfolioProfile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  timezone: string;
  availableForWork: boolean;
  availabilityText: string;
  email: string;
  phone: string;
  website: string;
  avatarUrl: string;
  resumeUrl?: string;
  socials: SocialLink[];
  projects: Project[];
  skillCategories: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
  publications: PublicationItem[];
  stats: { label: string; value: string }[];
}
