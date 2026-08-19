"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, BookOpen } from "lucide-react";
import { TopicAccordion } from "@/components/aptitude/TopicAccordion";
import { PracticeQuestionCard } from "@/components/aptitude/PracticeQuestionCard";
import { AptitudePagination } from "@/components/aptitude/AptitudePagination";
import { APTITUDE_SUBTOPICS } from "@/lib/data/aptitudeCatalog";
import { getQuestionsBySubtopic } from "@/lib/services/aptitudeservice";
import { Question } from "@/lib/types/aptitude";

// Sanitized map excluding DI completely
const CATEGORY_ALIAS_MAP: Record<string, string> = {
  quant: "quantitative",
  quantitative: "quantitative",
  logical: "logical",
  verbal: "verbal",
};

export default function CategoryPracticePage() {
  const params = useParams();
  const rawCategory = (params.category as string)?.toLowerCase() || "quantitative";
  const categoryKey = CATEGORY_ALIAS_MAP[rawCategory] || rawCategory;

  const displayTitle = categoryKey
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const subtopics = APTITUDE_SUBTOPICS[categoryKey] || [];

  const [activeTopicSlug, setActiveTopicSlug] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Sync active topic when URL category changes
  useEffect(() => {
    if (subtopics.length > 0) {
      setActiveTopicSlug(subtopics[0].slug);
      setCurrentPage(1);
    }
  }, [categoryKey]);

  useEffect(() => {
    if (!activeTopicSlug) return;

    async function loadQuestions() {
      setLoading(true);
      const res = await getQuestionsBySubtopic(activeTopicSlug, currentPage);
      setQuestions(res.questions || []);
      setLoading(false);
    }

    loadQuestions();
  }, [activeTopicSlug, currentPage]);

  const handleTopicChange = (slug: string) => {
    setActiveTopicSlug(slug);
    setCurrentPage(1);
  };

  if (subtopics.length === 0) {
    return (
      <div className="min-h-screen p-10 text-center">
        <h2 className="text-xl text-white">Section not found.</h2>
        <Link href="/aptitude" className="mt-4 inline-block text-cyan-400 hover:underline">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen max-w-7xl space-y-8 p-6 lg:p-10">
      {/* Header */}
      <div>
        <Link
          href="/aptitude"
          className="mb-3 inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:underline"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Aptitude Dashboard</span>
        </Link>
        <h1 className="text-2xl font-bold tracking-tight text-white lg:text-3xl">
          {displayTitle} Section
        </h1>
        <p className="mt-1 text-xs text-slate-400 sm:text-sm">
          Master every topic with curated placement questions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Sidebar: Sub-Topics */}
        <div className="space-y-4 lg:col-span-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Sub-Topics ({subtopics.length})
            </h3>
          </div>
          <div className="space-y-3">
            {subtopics.map((topic) => (
              <TopicAccordion
                key={topic.id}
                topic={{
                  ...topic,
                  questionCount: topic.totalQuestions,
                }}
                isActive={activeTopicSlug === topic.slug}
                onSelectTopic={() => handleTopicChange(topic.slug)}
              />
            ))}
          </div>
        </div>

        {/* Right Content: Question Feed Section */}
        <div className="space-y-6 lg:col-span-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-semibold text-white">
                Active Practice Questions
              </h3>
              <p className="text-xs text-slate-400">Page {currentPage}</p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs text-slate-400">
              <BookOpen className="h-3.5 w-3.5 text-cyan-400" />
              <span>Interactive Practice Mode</span>
            </span>
          </div>

          {loading ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/30 py-20 text-center text-sm text-slate-400">
              Loading questions...
            </div>
          ) : (
            <div className="space-y-6">
              {questions.map((question, idx) => (
                <PracticeQuestionCard
                  key={question.id}
                  question={question}
                  questionNumber={(currentPage - 1) * 10 + idx + 1}
                />
              ))}
            </div>
          )}

          <div className="pt-4">
            <AptitudePagination
              currentPage={currentPage}
              totalPages={2}
              onPageChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}