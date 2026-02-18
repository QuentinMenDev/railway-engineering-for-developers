import React from 'react';
import M0L1 from './M0L1';
import M0L2 from './M0L2';
import M0L3 from './M0L3';

export default function getM0Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm0-l1': return <M0L1 goTo={goTo} />;
    case 'm0-l2': return <M0L2 goTo={goTo} />;
    case 'm0-l3': return <M0L3 goTo={goTo} />;
    default: return null;
  }
}
