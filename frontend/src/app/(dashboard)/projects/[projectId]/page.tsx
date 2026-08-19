// src/app/(dashboard)/projects/[projectId]/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Clock,
  Layers,
  Cpu,
  CheckCircle2,
  ExternalLink,
  Terminal,
  Database,
} from "lucide-react";
import { ProjectIdea } from "@/lib/types/projects";

// Sample project detail data
const MOCK_PROJECT_DETAIL: ProjectIdea = {
  id: 1,
  title: "FinAdvisor Chatbot",
  slug: "finadvisor-chatbot",
  tagline:
    "Full-stack AI platform delivering dynamic financial advice using React, Node.js, PostgreSQL, and Gemini API.",
  domain: "Full-Stack",
  difficulty: "Production-Grade",
  estimatedHours: 40,
  techStack: ["React", "Node.js", "PostgreSQL", "Gemini API", "Tailwind CSS"],
  description:
    "FinAdvisor Chatbot is an end-to-end full-stack application designed to answer complex financial queries, analyze user investment profiles, and provide step-by-step budget planning using Google's Gemini API.",
  architectureOverview:
    "1. Client UI Layer: React + Tailwind CSS frontend capturing chat inputs and rendering Markdown responses.\n2. Backend Server: Node.js/Express REST server with custom validation and rate limiting middleware.\n3. AI Engine Integration: Gemini API with structured prompt templates to ensure safe and deterministic advice.\n4. Database Layer: PostgreSQL storing user profiles, chat history tables, and indexed queries for context preservation.",
  coreFeatures: [
    {
      title: "Contextual AI Conversational Interface",
      description:
        "Build a clean chat workspace supporting live streaming responses, code syntax highlighting, and formula blocks.",
    },
    {
      title: "Relational Chat & Portfolio Schema",
      description:
        "Design PostgreSQL tables for Users, Conversations, Messages, and Portfolio Metadata using foreign keys and indexed user queries.",
    },
    {
      title: "Gemini API System Prompting",
      description:
        "Formulate specialized backend prompts constraining AI outputs strictly to verified financial advice formats.",
    },
    {
      title: "Session Persistence & Dynamic Context",
      description:
        "Append previous message context to API requests to allow seamless multi-turn conversations.",
    },
  ],
  resumeBullets: [],
  githubTemplateUrl: "https://github.com",
};

export default function ProjectBlueprintPage() {
  const params = useParams();
  const project = MOCK_PROJECT_DETAIL; // Replace with database query using params.projectId

  const difficultyStyles = {
    Beginner: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    Intermediate: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    Advanced: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    "Production-Grade": "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  };

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto space-y-8">
      {/* Back Link & Header */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:underline font-medium mb-3"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Project Recommendations</span>
        </Link>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
            {project.title} Blueprint
          </h1>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${
              difficultyStyles[project.difficulty]
            }`}
          >
            {project.difficulty}
          </span>
        </div>
        <p className="text-sm text-slate-400 mt-2 leading-relaxed">
          {project.tagline}
        </p>
      </div>

      {/* Quick Meta Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium">Domain</span>
            <p className="text-sm font-semibold text-white">{project.domain}</p>
          </div>
        </div>

        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium">Estimated Build</span>
            <p className="text-sm font-semibold text-white">~{project.estimatedHours} Hours</p>
          </div>
        </div>

        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium">Stack Count</span>
            <p className="text-sm font-semibold text-white">{project.techStack.length} Technologies</p>
          </div>
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div className="space-y-2">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Required Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 font-mono text-xs text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* System Architecture Section */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white font-semibold text-base">
          <Terminal className="w-5 h-5 text-cyan-400" />
          <h3>System Architecture & Data Flow</h3>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-line">
          {project.architectureOverview}
        </div>
      </div>

      {/* Core Features Breakdown */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-white font-semibold text-base">
          <Database className="w-5 h-5 text-teal-400" />
          <h3>Modules & Implementation Steps</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.coreFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-slate-800/70 border border-slate-700/60 rounded-xl p-5 space-y-2"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{feat.title}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub Reference Link */}
      {project.githubTemplateUrl && (
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <a
            href={project.githubTemplateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-semibold transition-all"
          >
            <span>Explore Starter Repository</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </div>
  );
}