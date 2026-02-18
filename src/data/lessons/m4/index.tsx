import { type ReactNode } from 'react';
import M4L1, { quiz as m4l1Quiz } from './M4L1';
import M4L2, { quiz as m4l2Quiz } from './M4L2';
import M4L3, { quiz as m4l3Quiz } from './M4L3';
import M4L4, { quiz as m4l4Quiz } from './M4L4';
import type { GoToFn, QuizDataMap } from '../../../types';

export default function getM4Content(lessonId: string, goTo: GoToFn): ReactNode | null {
  switch (lessonId) {
    case 'm4-l1': return <M4L1 goTo={goTo} />;
    case 'm4-l2': return <M4L2 goTo={goTo} />;
    case 'm4-l3': return <M4L3 goTo={goTo} />;
    case 'm4-l4': return <M4L4 goTo={goTo} />;
    default: return null;
  }
}

export const quizData: QuizDataMap = {
  'm4-l1': m4l1Quiz,
  'm4-l2': m4l2Quiz,
  'm4-l3': m4l3Quiz,
  'm4-l4': m4l4Quiz,
};
