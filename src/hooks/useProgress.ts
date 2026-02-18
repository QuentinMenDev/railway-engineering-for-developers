import { useState, useCallback } from 'react';
import { getAllLessonIds, courseModules } from '../data/courseStructure';
import type { Progress } from '../types';

const STORAGE_KEY = 'railway-course-progress-v2';
const allLessonIds = getAllLessonIds();

function loadInitial(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw) as Progress;
      if (saved) return saved;
    }
    const old = JSON.parse(localStorage.getItem('railway-curriculum-progress') || '{}') as Record<string, boolean>;
    if (old && Object.keys(old).length > 0) {
      const progress: Progress = { lessons: {}, quizzes: {} };
      Object.entries(courseModules).forEach(([_modId, mod]) => {
        if (old[_modId]) mod.lessons.forEach(l => { progress.lessons[l.id] = true; });
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      return progress;
    }
  } catch { /* ignore */ }
  return { lessons: {}, quizzes: {} };
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(loadInitial);

  const toggleLesson = useCallback((id: string) => {
    setProgress(prev => {
      const next: Progress = { ...prev, lessons: { ...prev.lessons, [id]: !prev.lessons[id] } };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* ignore */ }
      return next;
    });
  }, []);

  const saveQuiz = useCallback((lessonId: string, score: number, total: number) => {
    setProgress(prev => {
      const next: Progress = { ...prev, quizzes: { ...prev.quizzes, [lessonId]: { score, total } } };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* ignore */ }
      return next;
    });
  }, []);

  const isModuleComplete = useCallback((modId: string) => {
    const mod = courseModules[modId];
    if (!mod) return false;
    return mod.lessons.every(l => progress.lessons[l.id]);
  }, [progress]);

  const lessonsDone = allLessonIds.filter(id => progress.lessons[id]).length;
  const totalItems = allLessonIds.length;
  const pct = totalItems > 0 ? Math.round((lessonsDone / totalItems) * 100) : 0;

  return { progress, toggleLesson, saveQuiz, isModuleComplete, pct, totalDone: lessonsDone, totalItems };
}
