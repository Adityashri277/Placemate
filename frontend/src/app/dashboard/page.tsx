'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Brain,
  Code2,
  MessageSquare,
  FolderGit2,
  Sparkles,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

const INITIAL_USER = {
  name: 'Aditya Srivastava',
  email: 'aditya@example.com',
};

interface ModuleCard {
  id: string;
  title: string;
  description: string;
  href: string;
  tag: string;
  domainsBadge: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

export default function DashboardPage() {
  const [user] = useState(INITIAL_USER);

  const modules: ModuleCard[] = [
    {
      id: 'aptitude',
      title: 'Aptitude Hub',
      description: 'Master Quantitative, Logical Reasoning, and Verbal Ability modules with formulas and shortcut tricks.',
      href: '/aptitude',
      tag: 'Module 01',
      domainsBadge: '3 Domains',
      iconBg: 'bg-cyan-500/10',
      iconColor: 'text-cyan-400',
      icon: <Brain className="w-6 h-6" />,
    },
    {
      id: 'coding',
      title: 'Coding Arena',
      description: 'Practice algorithmic data structures, high-frequency company problems, and interactive code execution.',
      href: '/coding',
      tag: 'Module 02',
      domainsBadge: '4 Domains',
      iconBg: 'bg-teal-500/10',
      iconColor: 'text-teal-400',
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      id: 'interview',
      title: 'Interview Preparation',
      description: 'Core CS fundamentals, OS, DBMS, System Design, and domain-filtered technical & HR questions.',
      href: '/interview',
      tag: 'Module 03',
      domainsBadge: '6 Domains',
      iconBg: 'bg-emerald-500/10',
      iconColor: 'text-emerald-400',
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      id: 'projects',
      title: 'Projects Recommendations',
      description: 'Showcase full-stack engineering applications, repository architecture, and portfolio links.',
      href: '/projects',
      tag: 'Module 04',
      domainsBadge: '6 Domains',
      iconBg: 'bg-indigo-500/10',
      iconColor: 'text-indigo-400',
      icon: <FolderGit2 className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans selection:bg-cyan-500 selection:text-white relative">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Welcome Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 mb-10 shadow-2xl backdrop-blur-md">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Welcome back, <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-300">{user.name}</span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Select a module below to access specialized preparation environments, practice problem sets, and interview resources.
            </p>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            Preparation Modules
          </h2>
          <span className="text-xs font-medium text-slate-400">
            Select a module to continue practice
          </span>
        </div>

        {/* Main Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((mod) => (
            <Link
              key={mod.id}
              href={mod.href}
              className="group relative bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-slate-700/80 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {mod.tag}
                  </span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                    {mod.domainsBadge}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3.5 rounded-2xl ${mod.iconBg} ${mod.iconColor} group-hover:scale-110 transition-transform`}>
                    {mod.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {mod.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {mod.description}
                </p>
              </div>

              {/* Bottom Action CTA */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-sm font-semibold text-cyan-400 group-hover:text-teal-300 transition-colors">
                <span>Access Module</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </main>
    </div>
  );
}