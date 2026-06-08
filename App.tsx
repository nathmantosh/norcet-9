
import React, { useState, useCallback, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import ExamScreen from './components/ExamScreen';
import ResultsScreen from './components/ResultsScreen';
import { AppState } from './types';
import { MOCK_QUESTIONS } from './constants';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.Welcome);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [timeTaken, setTimeTaken] = useState<number>(0);

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const startExam = useCallback(() => {
    setUserAnswers(new Array(MOCK_QUESTIONS.length).fill(null));
    setAppState(AppState.InProgress);
  }, []);

  const finishExam = useCallback((finalAnswers: (number | null)[], totalTime: number) => {
    setUserAnswers(finalAnswers);
    const elapsedTime = totalTime - 0; // if there was a starting time
    setTimeTaken(elapsedTime);
    setAppState(AppState.Completed);
  }, []);
  
  const restartExam = useCallback(() => {
    setAppState(AppState.Welcome);
    setUserAnswers([]);
    setTimeTaken(0);
  }, []);

  const renderContent = () => {
    switch (appState) {
      case AppState.InProgress:
        return <ExamScreen questions={MOCK_QUESTIONS} onFinish={finishExam} />;
      case AppState.Completed:
        return <ResultsScreen questions={MOCK_QUESTIONS} userAnswers={userAnswers} timeTaken={timeTaken} onRestart={restartExam} />;
      case AppState.Welcome:
      default:
        return <WelcomeScreen onStart={startExam} totalQuestions={MOCK_QUESTIONS.length} />;
    }
  };

  return (
    <main className="bg-slate-100 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200 flex flex-col items-center justify-center p-4">
      {/* Floating Theme Toggle */}
      <button 
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 p-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
        aria-label="Toggle Theme"
      >
        {theme === 'light' ? (
          <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
        )}
      </button>
      <div className="w-full max-w-7xl mx-auto">
        {renderContent()}
      </div>
    </main>
  );
};

export default App;
