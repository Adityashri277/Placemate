// src/components/projects/ProjectCard.tsx
import React from "react";
import Link from "next/link";
import { Clock, ArrowRight, Code, Sparkles } from "lucide-react";
import { ProjectIdea } from "@/lib/types/projects";

interface ProjectCardProps {
  project: ProjectIdea;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const difficultyStyles = {
    Beginner: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    Intermediate: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    Advanced: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    "Production-Grade": "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  };

  return (
    <div className="group relative flex flex-col justify-between bg-slate-800/80 hover:bg-slate-800 border border-slate-700/70 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 group-hover:bg-cyan-500/10 blur-2xl rounded-full transition-all pointer-events-none" />

      <div>
        {/* Top Badges: Domain & Difficulty */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/80 border border-slate-700 text-xs font-medium text-slate-300">
            <Code className="w-3.5 h-3.5 text-cyan-400" />
            {project.domain}
          </span>
          <span
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
              difficultyStyles[project.difficulty]
            }`}
          >
            {project.difficulty}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-2">
          {project.tagline}
        </p>

        {/* Tech Stack Badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-[11px] font-mono text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Meta Details & Link */}
      <div className="mt-6 pt-4 border-t border-slate-700/50 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span>~{project.estimatedHours} Hours</span>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 hover:underline"
        >
          <span>View Blueprint</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};