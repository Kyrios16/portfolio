export interface Experience {
  company: string;
  position: string;
  period: string;
  location?: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: "web" | "backend" | "devops" | "mobile";
  image?: string;
  github?: string;
  liveDemo?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Achievement {
  label: string;
  value: string;
  description: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  yearsExperience: string;
  currentFocus: string;
  philosophy: string;
  strengths: string[];
  location: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}
