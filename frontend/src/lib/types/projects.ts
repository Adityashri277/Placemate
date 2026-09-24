// src/lib/types/projects.ts

export type ProjectDifficulty =
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "Production-Grade";

export type ProjectDomain =
  | "Full-Stack"
  | "Backend Engineering"
  | "AI/ML"
  | "Cloud & DevOps";

export interface ProjectIdea {
  id: number;
  title: string;
  slug: string;
  tagline: string;
  domain: ProjectDomain;
  difficulty: ProjectDifficulty;
  estimatedHours: number;
  techStack: string[]; // e.g. ["React", "Node.js", "PostgreSQL", "Tailwind CSS"]
  description: string;
  architectureOverview: string; // Markdown or detailed text
  coreFeatures: {
    title: string;
    description: string;
  }[];
  resumeBullets: string[]; // Pre-formatted impact bullets for resumes
  githubTemplateUrl?: string;
}