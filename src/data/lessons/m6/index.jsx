import React from 'react';
import M6L1 from './M6L1';
import M6L2 from './M6L2';
import M6L3 from './M6L3';

export default function getM6Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm6-l1': return <M6L1 goTo={goTo} />;
    case 'm6-l2': return <M6L2 goTo={goTo} />;
    case 'm6-l3': return <M6L3 goTo={goTo} />;
    default: return null;
  }
}
