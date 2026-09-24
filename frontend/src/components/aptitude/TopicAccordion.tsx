'use client';

import React, { useState } from 'react';
import { AptitudeCategory, CategoryInfo, Topic } from '@/lib/types/aptitude';

interface TopicAccordionProps {
  categories: CategoryInfo[];
  selectedCategory?: AptitudeCategory;
  selectedTopicId?: string;
  onSelectTopic: (topicId: string, categoryId: AptitudeCategory) => void;
}

export const TopicAccordion: React.FC<TopicAccordionProps> = ({
  categories,
  selectedCategory,
  selectedTopicId,
  onSelectTopic
}) => {
  const [openCategory, setOpenCategory] = useState<string | null>(
    selectedCategory || categories[0]?.id || null
  );

  const toggleCategory = (categoryId: string) => {
    setOpenCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  return (
    <div className="w-full space-y-3">
      {categories.map((category) => {
        const isOpen = openCategory === category.id;

        return (
          <div
            key={category.id}
            className="rounded-lg border border-gray-800 bg-gray-900 overflow-hidden"
          >
            <button
              onClick={() => toggleCategory(category.id)}
              className="flex w-full items-center justify-between p-4 text-left font-medium text-white hover:bg-gray-800/50 transition-colors"
            >
              <div>
                <h4 className="text-base font-semibold text-white">{category.title}</h4>
                <p className="text-xs text-gray-400">{category.description}</p>
              </div>
              <span className="text-gray-400 text-lg font-bold">{isOpen ? '−' : '+'}</span>
            </button>

            {isOpen && (
              <div className="border-t border-gray-800 bg-gray-950 p-2 space-y-1">
                {category.topics.map((topic: Topic) => {
                  const isSelected = selectedTopicId === topic.id;

                  return (
                    <button
                      key={topic.id}
                      onClick={() => onSelectTopic(topic.id, category.id)}
                      className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
                        isSelected
                          ? 'bg-blue-600 text-white font-medium'
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      <span>{topic.title}</span>
                      <span
                        className={`text-xs rounded-full px-2 py-0.5 ${
                          isSelected ? 'bg-blue-800 text-white' : 'bg-gray-800 text-gray-400'
                        }`}
                      >
                        {topic.questionCount}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TopicAccordion;