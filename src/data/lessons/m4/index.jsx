import React from 'react';
import M4L1 from './M4L1';
import M4L2 from './M4L2';
import M4L3 from './M4L3';
import M4L4 from './M4L4';

export default function getM4Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm4-l1': return <M4L1 goTo={goTo} />;
    case 'm4-l2': return <M4L2 goTo={goTo} />;
    case 'm4-l3': return <M4L3 goTo={goTo} />;
    case 'm4-l4': return <M4L4 goTo={goTo} />;
    default: return null;
  }
}
