// src/components/aptitude/CategoryCard.tsx
import React from "react";
import Link from "next/link";
import {
  Calculator,
  BrainCircuit,
  BookOpen,
  PieChart,
  ArrowRight,
  Layers,
  HelpCircle,
} from "lucide-react";
import { AptitudeCategory } from "@/lib/data/aptitudeCatalog";

const ICON_MAP = {
  Calculator: Calculator,
  BrainCircuit: BrainCircuit,
  BookOpen: BookOpen,
  PieChart: PieChart,
};

interface CategoryCardProps {
  category: AptitudeCategory;
  selectedCompany?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  selectedCompany = "all",
}) => {
  const IconComponent = ICON_MAP[category.iconName] || Calculator;

  return (
    <Link
      href={`/aptitude/${category.slug}?company=${selectedCompany}`}
      className="group relative block bg-slate-800/80 hover:bg-slate-800 border border-slate-700/70 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1 overflow-hidden"
    >
      {/* Accent Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 group-hover:bg-cyan-500/10 blur-2xl rounded-full transition-all pointer-events-none" />

      {/* Header Icon + Arrow */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
          <IconComponent className="w-6 h-6" />
        </div>
        <div className="w-8 h-8 rounded-full border border-slate-700 group-hover:border-cyan-500/40 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 transition-colors">
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>

      {/* Category Info */}
      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
        {category.name}
      </h3>
      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
        {category.description}
      </p>

      {/* Footer Meta Details */}
      <div className="mt-6 pt-4 border-t border-slate-700/50 flex items-center gap-4 text-xs font-medium text-slate-400">
        <div className="flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>{category.topicCount} Topics</span>
        </div>
        <div className="flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-teal-400" />
          <span>{category.questionCount}+ Questions</span>
        </div>
      </div>
    </Link>
  );
};