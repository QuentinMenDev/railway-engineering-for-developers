import React from 'react';
import M9L1 from './M9L1';
import M9L2 from './M9L2';
import M9L3 from './M9L3';

export default function getM9Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm9-l1': return <M9L1 goTo={goTo} />;
    case 'm9-l2': return <M9L2 goTo={goTo} />;
    case 'm9-l3': return <M9L3 goTo={goTo} />;
    default: return null;
  }
}
