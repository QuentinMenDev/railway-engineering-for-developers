import type { ReactNode } from 'react';

// ── Navigation ──────────────────────────────────────────────────────

export type GoToFn = (pageId: string) => void;

// ── Course Structure ────────────────────────────────────────────────

export interface Lesson {
  id: string;
  title: string;
  short: string;
}

export interface CourseModule {
  title: string;
  lessons: Lesson[];
}

export type CourseModulesMap = Record<string, CourseModule>;

// ── Quiz ────────────────────────────────────────────────────────────

export interface QuizQuestion {
  text: string;
  options: string[];
  correct: number;
  explanation: string;
}

export type QuizDataMap = Record<string, QuizQuestion[]>;

// ── Progress ────────────────────────────────────────────────────────

export interface QuizScore {
  score: number;
  total: number;
}

export interface Progress {
  lessons: Record<string, boolean>;
  quizzes: Record<string, QuizScore>;
}

// ── Shared Component Props ──────────────────────────────────────────

export interface LessonProps {
  goTo: GoToFn;
}

export interface ConnectionItem {
  target: string;
  label: string;
  desc: string;
}

export interface CalloutProps {
  type?: 'info' | 'analogy';
  label?: string;
  children: ReactNode;
}

export interface ConnectionsProps {
  items: ConnectionItem[];
  goTo: GoToFn;
}
