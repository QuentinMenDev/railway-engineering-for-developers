import React from 'react';
import getM0Content from './lessons/m0';
import getM1Content from './lessons/m1';
import getM2Content from './lessons/m2';
import getM3Content from './lessons/m3';
import getM4Content from './lessons/m4';
import getM5Content from './lessons/m5';
import getM6Content from './lessons/m6';
import getM7Content from './lessons/m7';
import getM8Content from './lessons/m8';
import getM9Content from './lessons/m9';

// ─── Export ──────────────────────────────────────────────────────────

export default function getLessonContent(lessonId, goTo) {
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
