// src/app/page.tsx
import Link from "next/link";
import {
  TrendingUp,
  Brain,
  Code2,
  Compass,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  BarChart3,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      {/* 2. Hero Section (Header removed to fix duplication) */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Crack Your Dream Placement with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              Data-Driven Practice
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Master aptitude concepts, solve high-frequency company coding problems, and track your Online Assessment (OA) selection probabilities in real time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/register"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#00a8cc] hover:bg-[#0092b3] text-white font-medium text-base shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 group"
            >
              Start Preparing Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/login"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-base transition-all flex items-center justify-center"
            >
              Existing User Login
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div>
              <p className="text-2xl font-bold text-white">70%</p>
              <p className="text-xs text-slate-400 mt-1">OA Pattern Match</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-cyan-400">200+</p>
              <p className="text-xs text-slate-400 mt-1">Aptitude & Interview Qs</p>
            </div>
           <div>
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-xs text-slate-400 mt-1">Project Ideas</p>
            </div>
           <div>
              <p className="text-2xl font-bold text-cyan-400">100+</p>
              <p className="text-xs text-slate-400 mt-1">Coding Practice Qs</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Spotlight: Company OA Probability & Analytics */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-800/60 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <BarChart3 className="w-3.5 h-3.5" />
                OA Analytics Engine
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Know Your Selection Odds Before You Sit for the Exam.
              </h2>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                Placemate analyzes historical Online Assessment (OA) patterns across top tech companies to calculate topic frequencies and your dynamic probability of clearing cutoff scores.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Company-wise question frequency heatmaps",
                  "Real-time probability indicator based on topic mastery",
                  "Targeted practice recommendations to bridge your cutoff gaps",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Interactive Mockup Graph */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-base font-semibold text-white">Previous Assessment Analytics</h3>
                 
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                  75% Pass Probability
                </span>
              </div>

              {/* Mock Probability Bar Graph */}
              <div className="space-y-5">
                {[
                  { topic: "Data Structures & Algorithms", probability: 85, tag: "High Weightage", color: "bg-cyan-500" },
                  { topic: "Quantitative Aptitude & Logic", probability: 92, tag: "Must Clear Cutoff", color: "bg-teal-400" },
                  { topic: "SQL & DBMS Concepts", probability: 78, tag: "Frequently Asked", color: "bg-emerald-400" },
                  { topic: "System Design & Core CS", probability: 64, tag: "Needs Focus", color: "bg-amber-400" },
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium text-slate-200">{stat.topic}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-slate-400 text-[11px]">{stat.tag}</span>
                        <span className="font-bold text-white">{stat.probability}%</span>
                      </div>
                    </div>
                    <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${stat.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${stat.probability}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Graph Footer Note */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  Updated dynamically with latest recruitment trends
                </span>
                
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Features Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
            Everything You Need to Get Hired, in One Place
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            No more switching across multiple websites. Placemate unifies every step of your campus recruitment preparation pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Aptitude Hub */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Aptitude Hub</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Targeted quantitative, logical reasoning, and verbal practice modules with formulas and shortcut tricks.
            </p>
          </div>

          {/* Card 2: Coding Practice */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Coding Arena</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Difficulty-tiered problem sets, company-tagged questions, and daily streak tracking to maintain consistency.
            </p>
          </div>

          {/* Card 3: Interview Qs */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Interview Practice</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Domain-filtered technical questions curated from recent campus placement interview rounds around the world.
            </p>
          </div>

          {/* Card 4: Role Roadmaps */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Project Recommedation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Interactive, step-by-step project building roadmaps in domain like Software engineering, Devops, AI/ML and More.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Bottom Call To Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-900/90 border border-cyan-500/30 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none" />

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Ready to Accelerate Your Placement Prep?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base mb-8">
              Join thousands of students using Placemate to practice smarter, track their progress, and secure top offers.
            </p>

            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#00a8cc] hover:bg-[#0092b3] text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 transition-all hover:scale-105"
            >
              Create Free Account
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Placemate Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}