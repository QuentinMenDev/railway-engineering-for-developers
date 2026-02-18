import { type ReactNode } from 'react';
import M6L1, { quiz as m6l1Quiz } from './M6L1';
import M6L2, { quiz as m6l2Quiz } from './M6L2';
import M6L3, { quiz as m6l3Quiz } from './M6L3';
import type { GoToFn, QuizDataMap } from '../../../types';

export default function getM6Content(lessonId: string, goTo: GoToFn): ReactNode | null {
  switch (lessonId) {
    case 'm6-l1': return <M6L1 goTo={goTo} />;
    case 'm6-l2': return <M6L2 goTo={goTo} />;
    case 'm6-l3': return <M6L3 goTo={goTo} />;
    default: return null;
  }
}

export const quizData: QuizDataMap = {
  'm6-l1': m6l1Quiz,
  'm6-l2': m6l2Quiz,
  'm6-l3': m6l3Quiz,
};
