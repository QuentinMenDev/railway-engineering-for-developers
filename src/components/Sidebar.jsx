import { useState, useEffect } from 'react';
import { courseModules, getModuleForLesson } from '../data/courseStructure';

export default function Sidebar({ currentPage, goTo, progress, isModuleComplete, pct, totalDone, totalItems, isOpen, onClose }) {
  const [expanded, setExpanded] = useState(() => {
    const mod = getModuleForLesson(currentPage);
    const initial = {};
    if (mod) initial[mod] = true;
    else initial['m0'] = true;
    return initial;
  });

  const toggle = (modId) => {
    setExpanded(prev => ({ ...prev, [modId]: !prev[modId] }));
  };

  const activeModId = getModuleForLesson(currentPage);

  // Auto-expand when navigating to a new module
  useEffect(() => {
    if (activeModId) {
      setExpanded(prev => ({ ...prev, [activeModId]: true }));
    }
  }, [activeModId]);

  return (
    <nav className={`sidebar${isOpen ? ' open' : ''}`}>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="progress-label">{totalDone} / {totalItems} items completed</div>

      <div className="nav-section-label">Curriculum</div>
      <div
        className={`nav-item${currentPage === 'index' ? ' active' : ''}`}
        onClick={() => { goTo('index'); onClose(); }}
      >
        <span className="nav-number">⌂</span>
        <span className="nav-label">Overview & Index</span>
      </div>

      <div className="nav-section-label">Modules</div>
      {Object.entries(courseModules).map(([modId, mod]) => {
        const done = mod.lessons.filter(l => progress.lessons[l.id]).length;
        const isExp = expanded[modId];
        const modComplete = isModuleComplete(modId);
        return (
          <div key={modId} className={`nav-group${isExp ? ' expanded' : ''}`}>
            <div
              className={`nav-group-header${activeModId === modId ? ' active' : ''}${modComplete ? ' module-completed' : ''}`}
              onClick={() => toggle(modId)}
            >
              <span className="nav-number">{modId.slice(1)}</span>
              <span className="nav-label">{mod.title}</span>
              <span className="nav-group-progress">{done}/{mod.lessons.length}</span>
              <span className="nav-group-chevron">&#9662;</span>
            </div>
            <div className="nav-group-lessons">
              {mod.lessons.map(l => (
                <div
                  key={l.id}
                  className={`nav-item nav-lesson${currentPage === l.id ? ' active' : ''}${progress.lessons[l.id] ? ' completed' : ''}`}
                  onClick={() => { goTo(l.id); onClose(); }}
                >
                  <span className="nav-lesson-dot"></span>
                  <span className="nav-label">{l.short} {l.title}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}

    </nav>
  );
}
