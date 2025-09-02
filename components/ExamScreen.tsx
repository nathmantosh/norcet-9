
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Question, QuestionStatus } from '../types';
import Timer from './Timer';
import QuestionPalette from './QuestionPalette';
import QuestionPanel from './QuestionPanel';
import ConfirmationModal from './ConfirmationModal';
import { EXAM_DURATION_MINUTES } from '../constants';

interface ExamScreenProps {
  questions: Question[];
  onFinish: (answers: (number | null)[], timeTaken: number) => void;
}

const ExamScreen: React.FC<ExamScreenProps> = ({ questions, onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => new Array(questions.length).fill(null));
  const [statuses, setStatuses] = useState<QuestionStatus[]>(() => 
    new Array(questions.length).fill(QuestionStatus.NotVisited)
  );
  const [isConfirming, setIsConfirming] = useState(false);
  
  const totalTime = useMemo(() => EXAM_DURATION_MINUTES * 60, []);

  const updateStatus = useCallback((index: number, newStatus?: QuestionStatus) => {
    setStatuses(prev => {
      const newStatuses = [...prev];
      if (newStatus) {
        newStatuses[index] = newStatus;
      } else {
        const isAnswered = answers[index] !== null;
        const isMarked = prev[index] === QuestionStatus.MarkedForReview || prev[index] === QuestionStatus.AnsweredAndMarked;

        if (isAnswered && isMarked) newStatuses[index] = QuestionStatus.AnsweredAndMarked;
        else if (isAnswered) newStatuses[index] = QuestionStatus.Answered;
        else if (isMarked) newStatuses[index] = QuestionStatus.MarkedForReview;
        else newStatuses[index] = QuestionStatus.NotAnswered;
      }
      return newStatuses;
    });
  }, [answers]);

  useEffect(() => {
    const newStatuses = [...statuses];
    newStatuses[0] = QuestionStatus.NotAnswered;
    setStatuses(newStatuses);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTimeUp = useCallback(() => {
    onFinish(answers, totalTime);
  }, [onFinish, answers, totalTime]);

  const selectAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
    
    const currentStatus = statuses[currentQuestionIndex];
    if (currentStatus === QuestionStatus.MarkedForReview || currentStatus === QuestionStatus.AnsweredAndMarked) {
      updateStatus(currentQuestionIndex, QuestionStatus.AnsweredAndMarked);
    } else {
      updateStatus(currentQuestionIndex, QuestionStatus.Answered);
    }
  };

  const clearAnswer = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = null;
    setAnswers(newAnswers);
    const currentStatus = statuses[currentQuestionIndex];
    if (currentStatus === QuestionStatus.MarkedForReview || currentStatus === QuestionStatus.AnsweredAndMarked) {
        updateStatus(currentQuestionIndex, QuestionStatus.MarkedForReview);
    } else {
        updateStatus(currentQuestionIndex, QuestionStatus.NotAnswered);
    }
  };

  const markForReview = () => {
    const currentStatus = statuses[currentQuestionIndex];
    if (currentStatus === QuestionStatus.MarkedForReview || currentStatus === QuestionStatus.AnsweredAndMarked) {
      // Unmark
      if(answers[currentQuestionIndex] !== null) {
        updateStatus(currentQuestionIndex, QuestionStatus.Answered);
      } else {
        updateStatus(currentQuestionIndex, QuestionStatus.NotAnswered);
      }
    } else {
      // Mark
      if (answers[currentQuestionIndex] !== null) {
        updateStatus(currentQuestionIndex, QuestionStatus.AnsweredAndMarked);
      } else {
        updateStatus(currentQuestionIndex, QuestionStatus.MarkedForReview);
      }
    }
  };

  const goToQuestion = useCallback((index: number) => {
    if (index >= 0 && index < questions.length) {
      if (statuses[index] === QuestionStatus.NotVisited) {
        updateStatus(index, QuestionStatus.NotAnswered);
      }
      setCurrentQuestionIndex(index);
    }
  }, [questions.length, statuses, updateStatus]);

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      goToQuestion(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      goToQuestion(currentQuestionIndex - 1);
    }
  };
  
  const submitExam = () => {
    onFinish(answers, totalTime);
    setIsConfirming(false);
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-2rem)]">
      {isConfirming && (
          <ConfirmationModal 
              onConfirm={submitExam}
              onCancel={() => setIsConfirming(false)}
              answers={answers}
              statuses={statuses}
          />
      )}
      <div className="flex-grow flex flex-col bg-white dark:bg-slate-800 shadow-xl rounded-xl border border-slate-200 dark:border-slate-700">
        <header className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">NORCET 9 Mock Exam</h1>
          <Timer duration={totalTime} onTimeUp={handleTimeUp} />
        </header>
        <QuestionPanel
          question={questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          selectedAnswer={answers[currentQuestionIndex]}
          onSelectAnswer={selectAnswer}
        />
        <footer className="p-4 border-t border-slate-200 dark:border-slate-700 mt-auto flex flex-wrap gap-2 justify-between items-center">
            <div className="flex flex-wrap gap-2">
                <button onClick={markForReview} className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition">
                {statuses[currentQuestionIndex] === QuestionStatus.MarkedForReview || statuses[currentQuestionIndex] === QuestionStatus.AnsweredAndMarked ? 'Unmark Review' : 'Mark for Review'}
                </button>
                 <button onClick={clearAnswer} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition">
                    Clear Response
                </button>
            </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={prevQuestion} disabled={currentQuestionIndex === 0} className="bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500 text-slate-800 dark:text-white font-bold py-2 px-4 rounded transition disabled:opacity-50 disabled:cursor-not-allowed">
              Previous
            </button>
            <button onClick={nextQuestion} disabled={currentQuestionIndex === questions.length - 1} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition disabled:opacity-50 disabled:cursor-not-allowed">
              Save & Next
            </button>
          </div>
        </footer>
      </div>
      <aside className="lg:w-80 flex-shrink-0">
        <QuestionPalette
          statuses={statuses}
          currentIndex={currentQuestionIndex}
          onQuestionSelect={goToQuestion}
          onSubmit={() => setIsConfirming(true)}
        />
      </aside>
    </div>
  );
};

export default ExamScreen;
