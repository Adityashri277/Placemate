'use client';

import React, { useState } from 'react';

interface CodingProblem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  acceptance: string;
}

const PROBLEMS: CodingProblem[] = [
  { id: '1', title: 'Two Sum', difficulty: 'Easy', category: 'Arrays & Hashing', acceptance: '49.2%' },
  { id: '2', title: 'Add Two Numbers', difficulty: 'Medium', category: 'Linked Lists', acceptance: '41.5%' },
  { id: '3', title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', category: 'Sliding Window', acceptance: '34.1%' },
  { id: '4', title: 'Median of Two Sorted Arrays', difficulty: 'Hard', category: 'Binary Search', acceptance: '37.8%' },
  { id: '5', title: 'Trapping Rain Water', difficulty: 'Hard', category: 'Two Pointers', acceptance: '60.1%' },
];

export default function CodingArenaPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const filteredProblems = PROBLEMS.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDiff = selectedDifficulty === 'All' || p.difficulty === selectedDifficulty;
    return matchesSearch && matchesDiff;
  });

  const getDifficultyBadge = (difficulty: CodingProblem['difficulty']) => {
    switch (difficulty) {
      case 'Easy':
        return 'border-[rgba(110,231,168,0.4)] bg-[rgba(110,231,168,0.08)] text-[#6EE7A8]';
      case 'Medium':
        return 'border-[rgba(255,191,0,0.4)] bg-[rgba(255,191,0,0.08)] text-[#FFBF00]';
      case 'Hard':
        return 'border-[rgba(255,107,94,0.4)] bg-[rgba(255,107,94,0.08)] text-[#FF6B5E]';
    }
  };

  return (
    <div className="min-h-screen bg-[#050608] text-[#E8EEF5] font-['Space_Grotesk',sans-serif] p-4 sm:p-6 md:p-8 relative selection:bg-[#6EE7A8]/30 selection:text-[#6EE7A8]">
      {/* Background Cyberpunk Grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(110,231,168,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(110,231,168,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 font-['JetBrains_Mono',monospace] text-xs uppercase tracking-[0.16em] text-[#6EE7A8] mb-2">
          <span>DASHBOARD</span>
          <span>/</span>
          <span className="text-[#93A9C7]">CODING ARENA</span>
        </div>

        {/* Page Header */}
        <div className="border-b border-[rgba(110,231,168,0.2)] pb-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#E8EEF5]">
            Coding & Problem Solving
          </h1>
          <p className="text-xs sm:text-sm text-[#93A9C7] mt-1">
            Solve algorithmic problems, optimize time complexity, and master Data Structures.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
          <input
            type="text"
            placeholder="Search problems or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-[rgba(14,16,20,0.8)] border border-[rgba(110,231,168,0.25)] rounded px-4 py-2 text-xs text-[#E8EEF5] placeholder-[#5C7091] focus:outline-none focus:border-[#6EE7A8] font-['JetBrains_Mono',monospace]"
          />

          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="bg-[rgba(14,16,20,0.8)] border border-[rgba(110,231,168,0.25)] rounded px-3 py-2 text-xs text-[#E8EEF5] focus:outline-none focus:border-[#6EE7A8] font-['JetBrains_Mono',monospace]"
          >
            <option value="All">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Problem List Table */}
        <div className="border border-[rgba(110,231,168,0.2)] rounded bg-[rgba(14,16,20,0.6)] backdrop-blur-md overflow-hidden relative">
          <span className="absolute w-2 h-2 top-2 left-2 border-t border-l border-[#6EE7A8]"></span>
          <span className="absolute w-2 h-2 top-2 right-2 border-t border-r border-[#6EE7A8]"></span>
          <span className="absolute w-2 h-2 bottom-2 left-2 border-b border-l border-[#6EE7A8]"></span>
          <span className="absolute w-2 h-2 bottom-2 right-2 border-b border-r border-[#6EE7A8]"></span>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[rgba(110,231,168,0.15)] bg-[rgba(110,231,168,0.05)] font-['JetBrains_Mono',monospace] text-[11px] uppercase tracking-wider text-[#5C7091]">
                  <th className="p-4">#</th>
                  <th className="p-4">Title</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Difficulty</th>
                  <th className="p-4">Acceptance</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(110,231,168,0.1)] text-xs">
                {filteredProblems.map((prob) => (
                  <tr key={prob.id} className="hover:bg-[rgba(110,231,168,0.04)] transition-colors">
                    <td className="p-4 font-['JetBrains_Mono',monospace] text-[#5C7091]">{prob.id}</td>
                    <td className="p-4 font-medium text-[#E8EEF5]">{prob.title}</td>
                    <td className="p-4 font-['JetBrains_Mono',monospace] text-[#93A9C7]">{prob.category}</td>
                    <td className="p-4">
                      <span className={`font-['JetBrains_Mono',monospace] text-[10px] uppercase px-2 py-0.5 rounded border ${getDifficultyBadge(prob.difficulty)}`}>
                        {prob.difficulty}
                      </span>
                    </td>
                    <td className="p-4 font-['JetBrains_Mono',monospace] text-[#93A9C7]">{prob.acceptance}</td>
                    <td className="p-4 text-right">
                      <button className="font-['JetBrains_Mono',monospace] text-xs font-semibold text-[#6EE7A8] hover:underline uppercase">
                        Solve &rarr;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}