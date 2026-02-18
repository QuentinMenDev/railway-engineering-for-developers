import React from 'react';
import M7L1 from './M7L1';
import M7L2 from './M7L2';
import M7L3 from './M7L3';

export default function getM7Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm7-l1': return <M7L1 goTo={goTo} />;
    case 'm7-l2': return <M7L2 goTo={goTo} />;
    case 'm7-l3': return <M7L3 goTo={goTo} />;
    default: return null;
  }
}
