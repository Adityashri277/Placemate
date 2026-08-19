'use client';

import React, { useState } from 'react';
import { Question } from '@/lib/types/aptitude';

interface PracticeQuestionCardProps {
  question: Question;
  questionNumber?: number;
}

export const PracticeQuestionCard: React.FC<PracticeQuestionCardProps> = ({
  question,
  questionNumber
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const handleSelectOption = (index: number) => {
    if (selectedOption !== null) return; // Lock options after first selection
    setSelectedOption(index);
    setShowAnswer(true); // Instantly reveal evaluation and explanation
  };

  const handleReset = () => {
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <div className="rounded-lg border border-gray-700 bg-gray-900 p-6 shadow-md transition-all">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
          {questionNumber ? `Question ${questionNumber}` : 'Practice Question'}
        </span>
        <div className="flex items-center gap-3">
          <span className="rounded bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-300">
            {question.categoryId}
          </span>
          {selectedOption !== null && (
            <button
              onClick={handleReset}
              className="text-xs text-gray-400 hover:text-blue-400 underline uppercase tracking-wider transition-colors"
            >
              Retry
            </button>
          )}
        </div>
      </div>

      <h3 className="mb-4 text-base font-medium text-white">{question.questionText}</h3>

      <div className="mb-6 space-y-2">
        {question.options.map((option, index) => {
          let optionStyle = 'border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-750 cursor-pointer';
          let feedbackBadge = null;

          if (selectedOption !== null) {
            if (index === question.correctAnswerIndex) {
              optionStyle = 'border-green-500 bg-green-950/40 text-green-200 font-medium cursor-default';
              feedbackBadge = <span className="ml-auto text-xs font-semibold text-green-400">✓ Correct</span>;
            } else if (index === selectedOption && index !== question.correctAnswerIndex) {
              optionStyle = 'border-red-500 bg-red-950/40 text-red-200 cursor-default';
              feedbackBadge = <span className="ml-auto text-xs font-semibold text-red-400">✗ Incorrect</span>;
            } else {
              optionStyle = 'border-gray-700 bg-gray-800/50 text-gray-400 cursor-default opacity-75';
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleSelectOption(index)}
              disabled={selectedOption !== null}
              className={`flex w-full items-center rounded-md border p-3 text-left text-sm transition-all ${optionStyle}`}
            >
              <span className="mr-3 font-semibold text-gray-400">
                {String.fromCharCode(65 + index)}.
              </span>
              <span className="flex-1">{option}</span>
              {feedbackBadge}
            </button>
          );
        })}
      </div>

      {/* Answer and Explanation revealed automatically on selection */}
      {showAnswer && (
        <div className="space-y-4 pt-4 border-t border-gray-800">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-green-400">
              Correct Answer: Option {String.fromCharCode(65 + question.correctAnswerIndex)} (
              {question.options[question.correctAnswerIndex]})
            </span>
          </div>

          {question.explanation && (
            <div className="rounded-md bg-gray-800/80 p-3 text-xs text-gray-300 border border-gray-700">
              <span className="font-semibold text-white">Explanation: </span>
              {question.explanation}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PracticeQuestionCard;