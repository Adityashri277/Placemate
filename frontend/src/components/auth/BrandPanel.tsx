// src/components/auth/BrandPanel.tsx
"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Brain, BarChart3, Code2, Compass } from "lucide-react";

const FEATURES = [
  {
    id: "aptitude",
    tag: "Aptitude Hub",
    icon: Brain,
    accentColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    glowColor: "shadow-cyan-500/10",
    headline: "Learn, Practice, and Master Aptitude",
    description:
      "Structured topic-wise aptitude modules, shortcut formulas, and practice sets tailored for campus placement tests.",
  },
  {
    id: "analytics",
    tag: "Interview Preparation",
    icon: BarChart3,
    accentColor: "text-teal-400 bg-teal-500/10 border-teal-500/30",
    glowColor: "shadow-teal-500/10",
    headline: "Domain-Specific Interview Questions",
    description:
      "Domain-filtered technical questions curated from recent campus placement interview rounds around the world.",
  },
  {
    id: "coding",
    tag: "Coding Arena",
    icon: Code2,
    accentColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    glowColor: "shadow-emerald-500/10",
    headline: "Targeted Problem Solving",
    description:
      "Difficulty-tiered DSA sets, daily streak tracking, and recent company-tagged coding challenges to build consistency.",
  },
  {
    id: "roadmaps",
    tag: "Project Recommendations",
    icon: Compass,
    accentColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
    glowColor: "shadow-indigo-500/10",
    headline: "Master the Art of Building",
    description:
      "Interactive, step-by-step project building roadmaps in domain like Software engineering, Devops, AI/ML and More.",
  },
];

export const BrandPanel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide every 5 seconds unless user pauses/interacts
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FEATURES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % FEATURES.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + FEATURES.length) % FEATURES.length);
  };

  const currentFeature = FEATURES[currentIndex];
  const IconComponent = currentFeature.icon;

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-[#131c2e] via-[#0f172a] to-[#0a1120] border border-slate-800/80 rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between overflow-hidden min-h-[580px] shadow-inner">
      
      {/* Background Ambient Glows for Contrast */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-60 h-60 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />

      {/* Top Headline */}
      <div className="relative z-10 max-w-md">
        <h2 className="text-2xl lg:text-3xl font-semibold text-white leading-snug tracking-tight drop-shadow-sm">
          We are Revolutionizing the way, how to prepare, practice, and crack placements.
        </h2>
      </div>

      {/* Center Graphic Artwork */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-64 h-64 border-[12px] border-cyan-500/20 rounded-3xl transform -rotate-12 flex items-center justify-center shadow-2xl backdrop-blur-sm">
          <div className="w-40 h-40 border-[8px] border-teal-400/25 rounded-2xl transform rotate-45" />
        </div>
      </div>

      {/* Floating Interactive Feature Card */}
      <div 
        className={`relative z-10 bg-slate-800/90 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-6 text-white shadow-2xl transition-all duration-300 ${currentFeature.glowColor}`}
        onMouseEnter={() => setIsAutoPlaying(false)}
      >
        {/* Card Header: Tag & Navigation Controls */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700/50">
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold tracking-wide transition-all ${currentFeature.accentColor}`}>
              <IconComponent className="w-3.5 h-3.5" />
              {currentFeature.tag}
            </span>
          </div>

          {/* Controls + Slide Counter */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-slate-400 tracking-wider">
              0{currentIndex + 1} / 0{FEATURES.length}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous feature"
                className="w-8 h-8 rounded-full border border-slate-600/80 bg-slate-900/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 hover:border-slate-500 transition-all active:scale-95"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next feature"
                className="w-8 h-8 rounded-full border border-slate-600/80 bg-slate-900/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 hover:border-slate-500 transition-all active:scale-95"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Feature Content */}
        <div className="space-y-1.5 min-h-[72px] transition-opacity duration-200">
          <h3 className="text-sm font-semibold text-white flex items-center gap-2">
            {currentFeature.headline}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-normal">
            {currentFeature.description}
          </p>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-4 pt-2">
          {FEATURES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-6 bg-cyan-400"
                  : "w-1.5 bg-slate-600 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
};