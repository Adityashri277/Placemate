import { CATEGORIES, QUESTIONS_BANK, APTITUDE_SUBTOPICS } from '../data/aptitudeCatalog';
import { AptitudeFilterOptions, CategoryInfo, Question, Topic } from '../types/aptitude';

export function getCategories(): CategoryInfo[] {
  return CATEGORIES;
}

export function getTopicsByCategory(categoryId: string): Topic[] {
  const category = CATEGORIES.find((cat) => cat.id === categoryId);
  return category ? category.topics : [];
}

export function getQuestions(filters?: AptitudeFilterOptions): Question[] {
  return QUESTIONS_BANK.filter((question) => {
    if (filters?.categoryId && question.categoryId !== filters.categoryId) {
      return false;
    }
    if (filters?.topicId && question.topicId !== filters.topicId) {
      return false;
    }
    if (filters?.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const matchesQuery =
        question.questionText.toLowerCase().includes(query) ||
        question.options.some((opt) => opt.toLowerCase().includes(query));
      if (!matchesQuery) return false;
    }
    return true;
  });
}

export async function getQuestionsBySubtopic(
  subtopicSlug: string,
  page: number = 1,
  pageSize: number = 10
): Promise<{ questions: Question[]; total: number }> {
  const filteredQuestions = QUESTIONS_BANK.filter(
    (q) => q.topicId === subtopicSlug
  );

  const startIndex = (page - 1) * pageSize;
  const paginatedQuestions = filteredQuestions.slice(startIndex, startIndex + pageSize);

  return {
    questions: paginatedQuestions,
    total: filteredQuestions.length
  };
}

export function getQuestionById(id: string): Question | undefined {
  return QUESTIONS_BANK.find((q) => q.id === id);
}

export class AptitudeService {
  static getCategories = getCategories;
  static getTopicsByCategory = getTopicsByCategory;
  static getQuestions = getQuestions;
  static getQuestionsBySubtopic = getQuestionsBySubtopic;
  static getQuestionById = getQuestionById;
}