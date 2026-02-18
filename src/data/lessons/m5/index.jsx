import React from 'react';
import M5L1 from './M5L1';
import M5L2 from './M5L2';
import M5L3 from './M5L3';

export default function getM5Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm5-l1': return <M5L1 goTo={goTo} />;
    case 'm5-l2': return <M5L2 goTo={goTo} />;
    case 'm5-l3': return <M5L3 goTo={goTo} />;
    default: return null;
  }
}
