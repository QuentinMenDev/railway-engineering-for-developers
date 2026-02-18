import React from 'react';
import M7L1, { quiz as m7l1Quiz } from './M7L1';
import M7L2, { quiz as m7l2Quiz } from './M7L2';
import M7L3, { quiz as m7l3Quiz } from './M7L3';

export default function getM7Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm7-l1': return <M7L1 goTo={goTo} />;
    case 'm7-l2': return <M7L2 goTo={goTo} />;
    case 'm7-l3': return <M7L3 goTo={goTo} />;
    default: return null;
  }
}

export const quizData = {
  'm7-l1': m7l1Quiz,
  'm7-l2': m7l2Quiz,
  'm7-l3': m7l3Quiz,
};
