import React from 'react';
import M8L1, { quiz as m8l1Quiz } from './M8L1';
import M8L2, { quiz as m8l2Quiz } from './M8L2';
import M8L3, { quiz as m8l3Quiz } from './M8L3';

export default function getM8Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm8-l1': return <M8L1 goTo={goTo} />;
    case 'm8-l2': return <M8L2 goTo={goTo} />;
    case 'm8-l3': return <M8L3 goTo={goTo} />;
    default: return null;
  }
}

export const quizData = {
  'm8-l1': m8l1Quiz,
  'm8-l2': m8l2Quiz,
  'm8-l3': m8l3Quiz,
};
