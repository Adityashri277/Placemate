export type AptitudeCategory = 'quantitative' | 'logical' | 'verbal';

export interface Question {
  id: string;
  topicId: string;
  categoryId: AptitudeCategory;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
}

export interface Topic {
  id: string;
  title: string;
  categoryId: AptitudeCategory;
  description: string;
  questionCount: number;
}

export interface CategoryInfo {
  id: AptitudeCategory;
  title: string;
  description: string;
  topics: Topic[];
}

export interface AptitudeFilterOptions {
  categoryId?: AptitudeCategory;
  topicId?: string;
  searchQuery?: string;
}