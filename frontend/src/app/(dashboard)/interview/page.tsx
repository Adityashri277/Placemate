'use client';

import React, { useState, useMemo } from 'react';
import { INTERVIEW_CATALOG } from './../../../lib/data/interviewCatalog';

export interface InterviewQuestion {
  id: string;
  code: string;
  question: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  subtopic: string;
  answer: string;
  tags: string[];
  codeSnippet?: string;
}

// Updated Categories containing all new domains
const CATALOG_CATEGORIES = [
  'Cybersecurity',
  'DevOps & Automation',
  'Software Engineering Core',
  'AI & Machine Learning',
  'Cloud Computing',
  'Application Security',
];

const CATEGORIES = ['All', ...CATALOG_CATEGORIES];

const DIFFICULTIES = ['ALL', 'BEGINNER', 'INTERMEDIATE', 'ADVANCED'];

const QUESTIONS_DATA: InterviewQuestion[] = INTERVIEW_CATALOG
  .filter((category) => CATALOG_CATEGORIES.includes(category.name))
  .flatMap((category) =>
    category.topics.flatMap((topic) =>
      topic.questions.map((question) => ({
        id: question.id,
        code: question.id.toUpperCase(),
        question: question.question,
        difficulty: question.difficulty,
        category: category.name,
        subtopic: topic.name,
        answer: question.answer,
        tags: question.tags ?? [],
        codeSnippet: question.codeSnippet,
      }))
    )
  );


function FullWidthQuestionItem({
  question,
  index,
}: {
  question: InterviewQuestion;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const getDifficultyBadge = (diff: InterviewQuestion['difficulty']) => {
    switch (diff) {
      case 'Easy':
        return {
          label: '• BEGINNER',
          style: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
        };
      case 'Medium':
        return {
          label: '• INTERMEDIATE',
          style: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
        };
      case 'Hard':
        return {
          label: '• ADVANCED',
          style: 'border-rose-500/30 bg-rose-500/10 text-rose-400',
        };
    }
  };

  const badge = getDifficultyBadge(question.difficulty);

  return (
    <div className="group relative bg-[#0b0f17]/90 backdrop-blur-md border border-slate-800/90 rounded-lg p-5 sm:p-6 w-full transition-all duration-300 hover:border-slate-700 hover:shadow-[0_0_24px_rgba(56,189,248,0.06)]">
      {/* 4 Outer Corner Brackets */}
      <span className="absolute w-2 h-2 top-2 left-2 border-t border-l border-slate-700 transition-colors group-hover:border-[#38BDF8]"></span>
      <span className="absolute w-2 h-2 top-2 right-2 border-t border-r border-slate-700 transition-colors group-hover:border-[#38BDF8]"></span>
      <span className="absolute w-2 h-2 bottom-2 left-2 border-b border-l border-slate-700 transition-colors group-hover:border-[#38BDF8]"></span>
      <span className="absolute w-2 h-2 bottom-2 right-2 border-b border-r border-slate-700 transition-colors group-hover:border-[#38BDF8]"></span>

      {/* Item Top Metadata */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <span className="font-mono text-xs font-semibold text-[#38BDF8]">
            Q{index + 1}.
          </span>

          <span className="font-mono text-[11px] text-slate-400 bg-[#121824] px-2 py-0.5 rounded border border-slate-800">
            {question.category}
          </span>
         
        </div>
        <span
          className={`font-mono text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded border ${badge.style}`}
        >
          {badge.label}
        </span>
      </div>

      {/* Question Title */}
      <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-[#38BDF8] transition-colors mb-3 leading-snug">
        {question.question}
      </h3>

      {/* Concept Tags */}
      <div className="flex flex-wrap items-center gap-1.5 mb-4">
        <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 mr-1">
          Tags:
        </span>
        {question.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11px] text-slate-300 bg-[#121824] border border-slate-800 px-2.5 py-0.5 rounded"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Expandable Solution Drawer */}
      <div className="pt-3 border-t border-slate-800/80">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left font-mono text-xs text-[#38BDF8] hover:text-[#7dd3fc] flex items-center justify-between transition-colors cursor-pointer"
        >
          <span className="uppercase tracking-wider">
            {isOpen ? 'Hide Solution' : 'View Detailed Solution'}
          </span>
          <span className="text-slate-500 text-[11px]">
            {isOpen ? 'collapse ↑' : 'click to view →'}
          </span>
        </button>

        {isOpen && (
          <div className="mt-4 pt-3 border-t border-slate-800/60 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3">
            <p className="whitespace-pre-line font-normal text-slate-300">
              {question.answer}
            </p>

            {question.codeSnippet && (
              <div className="mt-3">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-1.5">
                  IMPLEMENTATION / CODE SNIPPET
                </span>
                <pre className="p-3.5 rounded bg-[#05070c] border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed">
                  <code>{question.codeSnippet}</code>
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function DashboardInterviewPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('ALL');

  const filteredQuestions = useMemo(() => {
    return QUESTIONS_DATA.filter((q) => {
      const matchCat = selectedCategory === 'All' || q.category === selectedCategory;
      let matchDiff = true;

      if (selectedDifficulty === 'BEGINNER') matchDiff = q.difficulty === 'Easy';
      if (selectedDifficulty === 'INTERMEDIATE') matchDiff = q.difficulty === 'Medium';
      if (selectedDifficulty === 'ADVANCED') matchDiff = q.difficulty === 'Hard';

      return matchCat && matchDiff;
    });
  }, [selectedCategory, selectedDifficulty]);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans p-4 sm:p-6 md:p-8 relative selection:bg-[#38BDF8]/20 selection:text-[#38BDF8]">
      {/* Subtle Grid Background */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-8 border-b border-slate-800/80 pb-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Interview <span className="text-[#38BDF8]">Preparation</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Curated technical interview questions across core domain tracks, security architectures, and system concepts.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-md font-mono text-xs transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#38BDF8] text-[#07090e] font-semibold shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                  : 'bg-[#0e131f] text-slate-400 hover:text-slate-100 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category Description & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pt-1">
          

          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 mr-1">
              Filter Level:
            </span>
            {DIFFICULTIES.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedDifficulty(level)}
                className={`px-3 py-1 rounded-full font-mono text-[11px] uppercase transition-all cursor-pointer ${
                  selectedDifficulty === level
                    ? 'bg-white text-[#07090e] font-semibold'
                    : 'bg-[#0e131f] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Question Cards List */}
        <div className="flex flex-col gap-4">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((q, idx) => (
              <FullWidthQuestionItem key={q.id} question={q} index={idx} />
            ))
          ) : (
            <div className="py-16 text-center border border-dashed border-slate-800 rounded-lg">
              <p className="font-mono text-sm text-slate-500">
                No questions found for the selected category and filter level.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}