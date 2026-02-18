import { type ReactNode } from 'react';
import M0L1, { quiz as m0l1Quiz } from './M0L1';
import M0L2, { quiz as m0l2Quiz } from './M0L2';
import M0L3, { quiz as m0l3Quiz } from './M0L3';
import type { GoToFn, QuizDataMap } from '../../../types';

export default function getM0Content(lessonId: string, goTo: GoToFn): ReactNode | null {
  switch (lessonId) {
    case 'm0-l1': return <M0L1 goTo={goTo} />;
    case 'm0-l2': return <M0L2 goTo={goTo} />;
    case 'm0-l3': return <M0L3 goTo={goTo} />;
    default: return null;
  }
}

export const quizData: QuizDataMap = {
  'm0-l1': m0l1Quiz,
  'm0-l2': m0l2Quiz,
  'm0-l3': m0l3Quiz,
};
