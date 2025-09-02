
import React, { useState, useCallback } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import ExamScreen from './components/ExamScreen';
import ResultsScreen from './components/ResultsScreen';
import { AppState, Question } from './types';
import { MOCK_QUESTIONS } from './constants';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.Welcome);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [timeTaken, setTimeTaken] = useState<number>(0);

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
      <div className="w-full max-w-7xl mx-auto">
        {renderContent()}
      </div>
    </main>
  );
};

export default App;
