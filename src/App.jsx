import { useState, useCallback, useEffect } from 'react';
import './styles/theme.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import IndexPage from './components/IndexPage';
import LessonPage from './components/LessonPage';
import { useProgress } from './hooks/useProgress';
import { resolvePageId } from './data/courseStructure';
import getLessonContent from './data/lessonContent';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.slice(1);
    return hash || 'index';
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { progress, toggleLesson, saveQuiz, isModuleComplete, pct, totalDone, totalItems } = useProgress();

  const goTo = useCallback((pageId) => {
    const resolved = resolvePageId(pageId);
    setCurrentPage(resolved);
    window.location.hash = resolved;
    setSidebarOpen(false);
    // Scroll the .main container (not window, since body is overflow:hidden)
    setTimeout(() => {
      const mainEl = document.querySelector('.main');
      if (mainEl) mainEl.scrollTo(0, 0);
    }, 0);
  }, []);

  // Listen for hash changes (back/forward)
  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash) setCurrentPage(resolvePageId(hash));
      else setCurrentPage('index');
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') {
        const prevBtn = document.querySelector('.page-nav-btn:not(.next)');
        if (prevBtn) prevBtn.click();
      } else if (e.key === 'ArrowRight') {
        const nextBtn = document.querySelector('.page-nav-btn.next');
        if (nextBtn) nextBtn.click();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const renderPage = () => {
    if (currentPage === 'index') {
      return <IndexPage goTo={goTo} />;
    }

    // Course lessons
    const lessonContent = getLessonContent(currentPage, goTo);
    if (lessonContent) {
      return (
        <LessonPage
          lessonId={currentPage}
          goTo={goTo}
          progress={progress}
          toggleLesson={toggleLesson}
          saveQuiz={saveQuiz}
        >
          {lessonContent}
        </LessonPage>
      );
    }

    return <div className="page-inner"><p>Page not found.</p></div>;
  };

  return (
    <>
      <Header onToggleSidebar={() => setSidebarOpen(o => !o)} />
      <div className="layout">
        <Sidebar
          currentPage={currentPage}
          goTo={goTo}
          progress={progress}
          isModuleComplete={isModuleComplete}
          pct={pct}
          totalDone={totalDone}
          totalItems={totalItems}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="main">
          {renderPage()}
        </main>
      </div>
      {sidebarOpen && <div className="overlay show" onClick={() => setSidebarOpen(false)} />}
    </>
  );
}
