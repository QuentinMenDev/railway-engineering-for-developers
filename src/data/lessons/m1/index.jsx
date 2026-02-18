import React from 'react';
import M1L1, { quiz as m1l1Quiz } from './M1L1';
import M1L2, { quiz as m1l2Quiz } from './M1L2';
import M1L3, { quiz as m1l3Quiz } from './M1L3';
import M1L4, { quiz as m1l4Quiz } from './M1L4';

export default function getM1Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm1-l1': return <M1L1 goTo={goTo} />;
    case 'm1-l2': return <M1L2 goTo={goTo} />;
    case 'm1-l3': return <M1L3 goTo={goTo} />;
    case 'm1-l4': return <M1L4 goTo={goTo} />;
    default: return null;
  }
}

export const quizData = {
  'm1-l1': m1l1Quiz,
  'm1-l2': m1l2Quiz,
  'm1-l3': m1l3Quiz,
  'm1-l4': m1l4Quiz,
};
