import type { ReactNode } from 'react';
import type { GoToFn, QuizDataMap } from '../types';
import getM0Content, { quizData as m0Quiz } from './lessons/m0';
import getM1Content, { quizData as m1Quiz } from './lessons/m1';
import getM2Content, { quizData as m2Quiz } from './lessons/m2';
import getM3Content, { quizData as m3Quiz } from './lessons/m3';
import getM4Content, { quizData as m4Quiz } from './lessons/m4';
import getM5Content, { quizData as m5Quiz } from './lessons/m5';
import getM6Content, { quizData as m6Quiz } from './lessons/m6';
import getM7Content, { quizData as m7Quiz } from './lessons/m7';
import getM8Content, { quizData as m8Quiz } from './lessons/m8';
import getM9Content, { quizData as m9Quiz } from './lessons/m9';

// ─── Quiz data (aggregated from each lesson file) ───────────────────

export const quizData: QuizDataMap = { ...m0Quiz, ...m1Quiz, ...m2Quiz, ...m3Quiz, ...m4Quiz, ...m5Quiz, ...m6Quiz, ...m7Quiz, ...m8Quiz, ...m9Quiz };

// ─── Lesson content ─────────────────────────────────────────────────

export default function getLessonContent(lessonId: string, goTo: GoToFn): ReactNode {
  const m0 = getM0Content(lessonId, goTo);
  if (m0) return m0;
  const m1 = getM1Content(lessonId, goTo);
  if (m1) return m1;
  const m2 = getM2Content(lessonId, goTo);
  if (m2) return m2;
  const m3 = getM3Content(lessonId, goTo);
  if (m3) return m3;
  const m4 = getM4Content(lessonId, goTo);
  if (m4) return m4;
  const m5 = getM5Content(lessonId, goTo);
  if (m5) return m5;
  const m6 = getM6Content(lessonId, goTo);
  if (m6) return m6;
  const m7 = getM7Content(lessonId, goTo);
  if (m7) return m7;
  const m8 = getM8Content(lessonId, goTo);
  if (m8) return m8;
  const m9 = getM9Content(lessonId, goTo);
  if (m9) return m9;
  return <p>Content coming soon.</p>;
}
