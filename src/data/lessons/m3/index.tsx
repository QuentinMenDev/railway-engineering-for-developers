import { type ReactNode } from 'react';
import M3L1, { quiz as m3l1Quiz } from './M3L1';
import M3L2, { quiz as m3l2Quiz } from './M3L2';
import M3L3, { quiz as m3l3Quiz } from './M3L3';
import type { GoToFn, QuizDataMap } from '../../../types';

export default function getM3Content(lessonId: string, goTo: GoToFn): ReactNode | null {
  switch (lessonId) {
    case 'm3-l1': return <M3L1 goTo={goTo} />;
    case 'm3-l2': return <M3L2 goTo={goTo} />;
    case 'm3-l3': return <M3L3 goTo={goTo} />;
    default: return null;
  }
}

export const quizData: QuizDataMap = {
  'm3-l1': m3l1Quiz,
  'm3-l2': m3l2Quiz,
  'm3-l3': m3l3Quiz,
};
