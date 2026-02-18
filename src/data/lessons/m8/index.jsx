import React from 'react';
import M8L1 from './M8L1';
import M8L2 from './M8L2';
import M8L3 from './M8L3';

export default function getM8Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm8-l1': return <M8L1 goTo={goTo} />;
    case 'm8-l2': return <M8L2 goTo={goTo} />;
    case 'm8-l3': return <M8L3 goTo={goTo} />;
    default: return null;
  }
}
