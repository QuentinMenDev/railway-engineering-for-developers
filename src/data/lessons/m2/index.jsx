import React from 'react';
import M2L1, { quiz as m2l1Quiz } from './M2L1';
import M2L2, { quiz as m2l2Quiz } from './M2L2';
import M2L3, { quiz as m2l3Quiz } from './M2L3';

export default function getM2Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm2-l1': return <M2L1 goTo={goTo} />;
    case 'm2-l2': return <M2L2 goTo={goTo} />;
    case 'm2-l3': return <M2L3 goTo={goTo} />;
    default: return null;
  }
}

export const quizData = {
  'm2-l1': m2l1Quiz,
  'm2-l2': m2l2Quiz,
  'm2-l3': m2l3Quiz,
};
