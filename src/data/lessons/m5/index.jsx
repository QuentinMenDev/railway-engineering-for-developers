import React from 'react';
import M5L1, { quiz as m5l1Quiz } from './M5L1';
import M5L2, { quiz as m5l2Quiz } from './M5L2';
import M5L3, { quiz as m5l3Quiz } from './M5L3';

export default function getM5Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm5-l1': return <M5L1 goTo={goTo} />;
    case 'm5-l2': return <M5L2 goTo={goTo} />;
    case 'm5-l3': return <M5L3 goTo={goTo} />;
    default: return null;
  }
}

export const quizData = {
  'm5-l1': m5l1Quiz,
  'm5-l2': m5l2Quiz,
  'm5-l3': m5l3Quiz,
};
