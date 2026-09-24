// src/components/projects/ProjectFilterBar.tsx
"use client";

import React from "react";
import { Layers, Code2, Check } from "lucide-react";

export const DOMAINS = [
  { id: "All", name: "All Domains" },
  { id: "Full-Stack", name: "Full-Stack" },
  { id: "Backend Engineering", name: "Backend" },
  { id: "AI/ML", name: "AI & ML" },
  { id: "Cloud & DevOps", name: "Cloud & DevOps" },
];

export const POPULAR_TECHS = [
  "React",
  "Node.js",
  "PostgreSQL",
  "TypeScript",
  "Python",
  "Docker",
  "Gemini API",
];

interface ProjectFilterBarProps {
  selectedDomain: string;
  selectedTechs: string[];
  onSelectDomain: (domain: string) => void;
  onToggleTech: (tech: string) => void;
}

export const ProjectFilterBar: React.FC<ProjectFilterBarProps> = ({
  selectedDomain,
  selectedTechs,
  onSelectDomain,
  onToggleTech,
}) => {
  return (
    <div className="w-full space-y-4 bg-slate-900/60 border border-slate-800 p-4 sm:p-5 rounded-2xl">
      {/* Domain Selection */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>Select Domain</span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {DOMAINS.map((domain) => {
            const isSelected = selectedDomain === domain.id;
            return (
              <button
                key={domain.id}
                onClick={() => onSelectDomain(domain.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all border ${
                  isSelected
                    ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/40 shadow-sm shadow-cyan-500/10"
                    : "bg-slate-800/60 text-slate-400 border-slate-700/60 hover:border-slate-600 hover:text-slate-200"
                }`}
              >
                {isSelected && <Check className="w-3 h-3 text-cyan-400" />}
                {domain.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div className="space-y-2 pt-2 border-t border-slate-800">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          <Code2 className="w-3.5 h-3.5 text-teal-400" />
          <span>Filter by Tech Stack</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {POPULAR_TECHS.map((tech) => {
            const isSelected = selectedTechs.includes(tech);
            return (
              <button
                key={tech}
                onClick={() => onToggleTech(tech)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                  isSelected
                    ? "bg-teal-500/15 text-teal-300 border-teal-500/40"
                    : "bg-slate-800/40 text-slate-400 border-slate-700/50 hover:bg-slate-800 hover:text-slate-300"
                }`}
              >
                {tech}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};