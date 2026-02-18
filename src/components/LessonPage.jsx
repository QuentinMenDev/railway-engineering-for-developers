import Quiz from './Quiz';
import quizData from '../data/quizData';
import { courseModules, getModuleForLesson } from '../data/courseStructure';

export default function LessonPage({ lessonId, children, goTo, progress, toggleLesson, saveQuiz }) {
  const modId = getModuleForLesson(lessonId);
  const mod = courseModules[modId];
  if (!mod) return null;

  const lessonIdx = mod.lessons.findIndex(l => l.id === lessonId);
  const lesson = mod.lessons[lessonIdx];
  const questions = quizData[lessonId];
  const isComplete = !!progress.lessons[lessonId];

  // Build prev/next
  const allLessons = [];
  Object.values(courseModules).forEach(m => m.lessons.forEach(l => allLessons.push(l.id)));
  const flatIdx = allLessons.indexOf(lessonId);
  const prevId = flatIdx > 0 ? allLessons[flatIdx - 1] : 'index';
  const nextId = flatIdx < allLessons.length - 1 ? allLessons[flatIdx + 1] : 'index';

  // Get prev/next labels
  const getLessonTitle = (id) => {
    for (const m of Object.values(courseModules)) {
      const l = m.lessons.find(l => l.id === id);
      if (l) return l.title;
    }
    return id === 'index' ? 'Index' : id;
  };

  const nextLabel = nextId === 'index' ? 'Back to Index' : getLessonTitle(nextId);
  const prevLabel = prevId === 'index' ? 'Index' : getLessonTitle(prevId);

  return (
    <div className="page-inner page-enter">
      <div className="lesson-header">
        <div className="lesson-breadcrumb">
          <span className="module-link" onClick={() => goTo(mod.lessons[0].id)}>Module {modId.slice(1)}: {mod.title}</span> / Lesson {lesson.short}
        </div>
        <div className="module-number">Lesson {lesson.short}</div>
        <h2>{lesson.title}</h2>
        <div className="lesson-progress-dots">
          {mod.lessons.map((l, i) => (
            <div
              key={l.id}
              className={`lesson-progress-dot${i === lessonIdx ? ' current' : ''}${progress.lessons[l.id] ? ' done' : ''}`}
            />
          ))}
        </div>
        <div className="lesson-step-label">Lesson {lessonIdx + 1} of {mod.lessons.length}</div>
      </div>

      {children}

      {questions && (
        <Quiz
          questions={questions}
          lessonId={lessonId}
          onComplete={(score, total) => saveQuiz(lessonId, score, total)}
        />
      )}

      <div className="page-nav">
        <div className="page-nav-btn" onClick={() => goTo(prevId)}>← {prevLabel}</div>
        <button
          className={`mark-complete-btn${isComplete ? ' completed' : ''}`}
          onClick={() => toggleLesson(lessonId)}
        >
          {isComplete ? '✓ Completed' : 'Mark Complete'}
        </button>
        <div className="page-nav-btn next" onClick={() => goTo(nextId)}>{nextLabel} →</div>
      </div>
    </div>
  );
}
