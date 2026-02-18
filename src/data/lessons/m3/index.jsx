import React from 'react';
import M3L1 from './M3L1';
import M3L2 from './M3L2';
import M3L3 from './M3L3';

export default function getM3Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm3-l1': return <M3L1 goTo={goTo} />;
    case 'm3-l2': return <M3L2 goTo={goTo} />;
    case 'm3-l3': return <M3L3 goTo={goTo} />;
    default: return null;
  }
}
