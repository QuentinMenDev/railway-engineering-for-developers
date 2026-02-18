import { useState, useCallback, useMemo } from 'react';

const QUIZ_STORAGE_KEY = 'railway-course-quiz-responses';

function loadSavedResponses(lessonId) {
  try {
    const all = JSON.parse(localStorage.getItem(QUIZ_STORAGE_KEY)) || {};
    return all[lessonId] || null;
  } catch { return null; }
}

function saveResponses(lessonId, data) {
  try {
    const all = JSON.parse(localStorage.getItem(QUIZ_STORAGE_KEY)) || {};
    all[lessonId] = data;
    localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(all));
  } catch { /* ignore */ }
}

function clearResponses(lessonId) {
  try {
    const all = JSON.parse(localStorage.getItem(QUIZ_STORAGE_KEY)) || {};
    delete all[lessonId];
    localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(all));
  } catch { /* ignore */ }
}

// Fisher-Yates shuffle returning a new array
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildShuffledQuestions(questions, shuffleOrders) {
  return questions.map((q, i) => {
    const indices = shuffleOrders[i];
    return {
      text: q.text,
      explanation: q.explanation,
      options: indices.map(idx => q.options[idx]),
      correct: indices.indexOf(q.correct),
    };
  });
}

export default function Quiz({ questions, lessonId, onComplete }) {
  // Load saved state (includes shuffle order for consistency)
  const saved = useMemo(() => loadSavedResponses(lessonId), [lessonId]);

  // Generate or restore shuffle orders (one per question)
  const [shuffleOrders, setShuffleOrders] = useState(() => {
    if (saved?.shuffleOrders) return saved.shuffleOrders;
    return questions.map(q => shuffle(q.options.map((_, i) => i)));
  });

  const shuffledQuestions = useMemo(
    () => buildShuffledQuestions(questions, shuffleOrders),
    [questions, shuffleOrders]
  );

  const [answers, setAnswers] = useState(() => saved?.answers || {});
  const [checked, setChecked] = useState(() => saved?.checked || {});
  const [resetCount, setResetCount] = useState(0);

  const select = useCallback((qIdx, optIdx) => {
    if (checked[qIdx]) return;
    setAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  }, [checked]);

  const check = useCallback((qIdx) => {
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
