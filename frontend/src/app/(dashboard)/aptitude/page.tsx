'use client';

import React, { useState, useMemo } from 'react';
import PracticeQuestionCard from '@/components/aptitude/PracticeQuestionCard';
import TopicAccordion from '@/components/aptitude/TopicAccordion';
import { AptitudeService } from '@/lib/services/aptitudeservice';
import { AptitudeCategory } from '@/lib/types/aptitude';

export default function AptitudePage() {
  const categories = useMemo(() => AptitudeService.getCategories(), []);
  
  // Default selection to the first topic of the first category
  const [selectedCategory, setSelectedCategory] = useState<AptitudeCategory>(
    categories[0]?.id || 'quantitative'
  );
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    categories[0]?.topics[0]?.id || 'quant-time-work'
  );

  const handleSelectTopic = (topicId: string, categoryId: AptitudeCategory) => {
    setSelectedTopicId(topicId);
    setSelectedCategory(categoryId);
  };

  // Fetch questions based on active filters
  const activeQuestions = useMemo(() => {
    return AptitudeService.getQuestions({
      categoryId: selectedCategory,
      topicId: selectedTopicId,
    });
  }, [selectedCategory, selectedTopicId]);

  // Find current topic and category details for header display
  const currentCategoryObj = useMemo(() => {
    return categories.find(c => c.id === selectedCategory) || categories[0];
  }, [categories, selectedCategory]);

  const currentTopicObj = useMemo(() => {
    return currentCategoryObj?.topics.find(t => t.id === selectedTopicId) || currentCategoryObj?.topics[0];
  }, [currentCategoryObj, selectedTopicId]);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans relative selection:bg-[#38BDF8]/20 selection:text-[#38BDF8]">
      {/* Subtle Background Grid Pattern */}
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

    

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 relative z-10">

        {/* Heading Section */}
        <div className="mb-8 border-b border-slate-800/80 pb-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 mb-2">
            Aptitude <span className="text-[#38BDF8]">Modules</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            Select a module to load its curated question set. Click any option to mark your attempt, then reveal the worked answer beneath.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
          {/* Sidebar Navigation */}
          <aside className="lg:sticky lg:top-24 flex flex-col gap-4">
           
            <TopicAccordion
              categories={categories}
              selectedCategory={selectedCategory}
              selectedTopicId={selectedTopicId}
              onSelectTopic={handleSelectTopic}
            />
          </aside>

          {/* Main Question Practice Area */}
          <div className="min-w-0">
            {/* Active Module Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-5 border-b border-slate-800/80 mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 mb-1 capitalize">
                  {currentTopicObj?.name || selectedTopicId.replace(/^(quant-|log-|verb-)/, '').replace(/-/g, ' ')}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 max-w-lg leading-normal">
                  {currentTopicObj?.desc || 'Practice curated questions to sharpen your reasoning ability.'}
                </p>
              </div>
              <div className="font-mono text-xs font-semibold text-[#38BDF8] tracking-wide flex items-center gap-2 whitespace-nowrap bg-[#0b0f17] border border-slate-800 px-3 py-1.5 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_8px_rgba(56,189,248,0.5)]"></span>
                {activeQuestions.length} Questions Available
              </div>
            </div>

            {/* MCQ Question List */}
            <div className="space-y-6">
              {activeQuestions.length > 0 ? (
                activeQuestions.map((q, idx) => (
                  <PracticeQuestionCard
                    key={q.id}
                    question={q}
                    questionNumber={idx + 1}
                  />
                ))
              ) : (
                <div className="border border-dashed border-slate-800 rounded-lg bg-[#0b0f17]/90 p-12 text-center text-slate-500 font-mono text-xs sm:text-sm">
                  No questions found for this topic. Select another category from the sidebar.
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}