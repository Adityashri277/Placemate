// src/components/aptitude/AptitudePagination.tsx
"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AptitudePaginationProps {
  currentPage: number; // 1 to 5
  totalPages: number; // default 5
  onPageChange: (page: number) => void;
}

export const AptitudePagination: React.FC<AptitudePaginationProps> = ({
  currentPage,
  totalPages = 5,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
      <div className="text-xs text-slate-400">
        Showing Page <span className="font-semibold text-cyan-400">{currentPage}</span> of{" "}
        <span className="font-semibold text-white">{totalPages}</span> (10 Questions / Page)
      </div>

      <div className="flex items-center gap-1.5">
        {/* Previous Page Button */}
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="p-2 rounded-xl bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Mini Page Numbers (1 to 5) */}
        {pages.map((page) => {
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-9 h-9 rounded-xl text-xs font-mono font-semibold transition-all border ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-sm shadow-cyan-500/10"
                  : "bg-slate-800/60 text-slate-400 border-slate-700/50 hover:bg-slate-800 hover:text-slate-200"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next Page Button */}
        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="p-2 rounded-xl bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};