import { type ReactNode } from 'react';
import M9L1, { quiz as m9l1Quiz } from './M9L1';
import M9L2, { quiz as m9l2Quiz } from './M9L2';
import M9L3, { quiz as m9l3Quiz } from './M9L3';
import type { GoToFn, QuizDataMap } from '../../../types';

export default function getM9Content(lessonId: string, goTo: GoToFn): ReactNode | null {
  switch (lessonId) {
    case 'm9-l1': return <M9L1 goTo={goTo} />;
    case 'm9-l2': return <M9L2 goTo={goTo} />;
    case 'm9-l3': return <M9L3 goTo={goTo} />;
    default: return null;
  }
}

export const quizData: QuizDataMap = {
  'm9-l1': m9l1Quiz,
  'm9-l2': m9l2Quiz,
  'm9-l3': m9l3Quiz,
};
