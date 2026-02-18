import { useState, useCallback, useMemo } from 'react';
import type { QuizQuestion } from '../types';

interface SavedQuizState {
  answers: Record<number, number>;
  checked: Record<number, boolean>;
  shuffleOrders: number[][];
}

interface ShuffledQuestion {
  text: string;
  explanation: string;
  options: string[];
  correct: number;
}

const QUIZ_STORAGE_KEY = 'railway-course-quiz-responses';

function loadSavedResponses(lessonId: string): SavedQuizState | null {
  try {
    const all = JSON.parse(localStorage.getItem(QUIZ_STORAGE_KEY) ?? '{}') as Record<string, SavedQuizState>;
    return all[lessonId] || null;
  } catch { return null; }
}

function saveResponses(lessonId: string, data: SavedQuizState): void {
  try {
    const all = JSON.parse(localStorage.getItem(QUIZ_STORAGE_KEY) ?? '{}') as Record<string, SavedQuizState>;
    all[lessonId] = data;
    localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(all));
  } catch { /* ignore */ }
}

function clearResponses(lessonId: string): void {
  try {
    const all = JSON.parse(localStorage.getItem(QUIZ_STORAGE_KEY) ?? '{}') as Record<string, SavedQuizState>;
    delete all[lessonId];
    localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(all));
  } catch { /* ignore */ }
}

// Fisher-Yates shuffle returning a new array
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i]!;
    a[i] = a[j]!;
    a[j] = tmp;
  }
  return a;
}

function buildShuffledQuestions(questions: QuizQuestion[], shuffleOrders: number[][]): ShuffledQuestion[] {
  return questions.map((q, i) => {
    const indices = shuffleOrders[i] ?? [];
    return {
      text: q.text,
      explanation: q.explanation,
      options: indices.map(idx => q.options[idx] ?? ''),
      correct: indices.indexOf(q.correct),
    };
  });
}

export default function Quiz({ questions, lessonId, onComplete }: { questions: QuizQuestion[]; lessonId: string; onComplete?: (score: number, total: number) => void }) {
  // Load saved state (includes shuffle order for consistency)
  const saved = useMemo(() => loadSavedResponses(lessonId), [lessonId]);

  // Generate or restore shuffle orders (one per question)
  const [shuffleOrders, setShuffleOrders] = useState<number[][]>(() => {
    if (saved?.shuffleOrders) return saved.shuffleOrders;
    return questions.map(q => shuffle(q.options.map((_, i) => i)));
  });

  const shuffledQuestions = useMemo(
    () => buildShuffledQuestions(questions, shuffleOrders),
    [questions, shuffleOrders]
  );

  const [answers, setAnswers] = useState<Record<number, number>>(() => saved?.answers || {});
  const [checked, setChecked] = useState<Record<number, boolean>>(() => saved?.checked || {});
  const [resetCount, setResetCount] = useState<number>(0);

  const select = useCallback((qIdx: number, optIdx: number) => {
    if (checked[qIdx]) return;
    setAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  }, [checked]);

  const check = useCallback((qIdx: number) => {
    setChecked(prev => {
      const next = { ...prev, [qIdx]: true };

      // Persist to localStorage (include shuffle order so reload is consistent)
      const currentAnswers = { ...answers };
      saveResponses(lessonId, { answers: currentAnswers, checked: next, shuffleOrders });

      // Check if all answered
      if (Object.keys(next).length === shuffledQuestions.length && onComplete) {
        let score = 0;
        shuffledQuestions.forEach((q, i) => {
          if (answers[i] === q.correct) score++;
        });
        setTimeout(() => onComplete(score, shuffledQuestions.length), 0);
      }
      return next;
    });
  }, [answers, shuffledQuestions, onComplete, lessonId, shuffleOrders]);

  const reset = useCallback(() => {
    const newOrders = questions.map(q => shuffle(q.options.map((_, i) => i)));
    setShuffleOrders(newOrders);
    setAnswers({});
    setChecked({});
    clearResponses(lessonId);
    setResetCount(c => c + 1);
  }, [lessonId, questions]);

  const allDone = Object.keys(checked).length === shuffledQuestions.length;
  const score = allDone ? shuffledQuestions.filter((q, i) => answers[i] === q.correct).length : null;

  return (
    <div className="quiz-section">
      <div className="quiz-header">
        <h3>Knowledge Check</h3>
        {(Object.keys(checked).length > 0) && (
          <button className="quiz-reset-btn" onClick={reset}>Reset Quiz</button>
        )}
      </div>
      {shuffledQuestions.map((q, qIdx) => {
        const selected = answers[qIdx];
        const isChecked = checked[qIdx];
        const isCorrect = isChecked && selected === q.correct;

        return (
          <div key={`${qIdx}-${resetCount}`} className="quiz-question">
            <div className="quiz-question-number">Question {qIdx + 1} of {shuffledQuestions.length}</div>
            <div className="quiz-question-text">{q.text}</div>
            <div className="quiz-options">
              {q.options.map((opt, oIdx) => {
                let cls = 'quiz-option';
                if (!isChecked && selected === oIdx) cls += ' selected';
                if (isChecked && selected === oIdx && oIdx === q.correct) cls += ' correct';
                if (isChecked && selected === oIdx && oIdx !== q.correct) cls += ' incorrect';
                if (isChecked && oIdx === q.correct && selected !== oIdx) cls += ' show-correct';
                return (
                  <div key={oIdx} className={cls} onClick={() => select(qIdx, oIdx)}>
                    <span className="quiz-option-radio"></span>
                    <span>{opt}</span>
                  </div>
                );
              })}
            </div>
            <button
              className="quiz-check-btn"
              disabled={selected === undefined || isChecked}
              onClick={() => check(qIdx)}
            >
              Check Answer
            </button>
            {isChecked && (
              <div className={`quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                <strong>{isCorrect ? 'Correct!' : 'Not quite.'}</strong> {q.explanation}
              </div>
            )}
          </div>
        );
      })}
      {allDone && (
        <div className="quiz-score" style={{ display: 'block' }}>
          <div className="quiz-score-value">{score} / {shuffledQuestions.length}</div>
          <div className="quiz-score-label">questions correct</div>
        </div>
      )}
    </div>
  );
}
