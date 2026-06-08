import React, { useMemo } from 'react';
import { QuestionStatus } from '../types';

interface QuestionPaletteProps {
  statuses: QuestionStatus[];
  currentIndex: number;
  onQuestionSelect: (index: number) => void;
  onSubmit: () => void;
}

const statusStyles: Record<QuestionStatus, string> = {
  [QuestionStatus.NotVisited]: 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600',
  [QuestionStatus.NotAnswered]: 'bg-rose-500 text-white hover:bg-rose-600 shadow-sm border border-rose-600',
  [QuestionStatus.Answered]: 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-sm border border-emerald-600',
  [QuestionStatus.MarkedForReview]: 'bg-violet-500 text-white hover:bg-violet-600 shadow-sm border border-violet-600',
  [QuestionStatus.AnsweredAndMarked]: 'bg-indigo-500 text-white hover:bg-indigo-600 shadow-sm border border-indigo-600 relative',
};

const QuestionPalette: React.FC<QuestionPaletteProps> = ({ statuses, currentIndex, onQuestionSelect, onSubmit }) => {
  const stats = useMemo(() => {
    let answered = 0;
    let notAnswered = 0;
    let marked = 0;
    let answeredMarked = 0;
    let notVisited = 0;

    statuses.forEach(status => {
      if (status === QuestionStatus.Answered) answered++;
      else if (status === QuestionStatus.NotAnswered) notAnswered++;
      else if (status === QuestionStatus.MarkedForReview) marked++;
      else if (status === QuestionStatus.AnsweredAndMarked) answeredMarked++;
      else notVisited++;
    });

    return { answered, notAnswered, marked, answeredMarked, notVisited };
  }, [statuses]);

  return (
    <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl p-5 flex flex-col h-full border border-slate-200 dark:border-slate-700">
      <h2 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-100 flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
        Question Palette
      </h2>

      {/* Summary Stats Panel */}
      <div className="grid grid-cols-2 gap-3 mb-6 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-emerald-500"></div>
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Answered: {stats.answered}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-rose-500"></div>
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Unanswered: {stats.notAnswered}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-violet-500"></div>
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Marked: {stats.marked}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-indigo-500"></div>
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Ans & Marked: {stats.answeredMarked}</span>
        </div>
        <div className="col-span-2 flex items-center gap-2 border-t border-slate-200 dark:border-slate-700/50 pt-2 mt-1">
          <div className="w-3 h-3 rounded bg-slate-200 dark:bg-slate-700"></div>
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Not Visited: {stats.notVisited}</span>
        </div>
      </div>

      {/* Question Numbers Grid */}
      <div className="flex-grow overflow-y-auto max-h-[350px] mb-4 pr-1">
        <div className="grid grid-cols-5 gap-2">
          {statuses.map((status, index) => (
            <button
              key={index}
              onClick={() => onQuestionSelect(index)}
              className={`w-10 h-10 flex items-center justify-center rounded font-bold text-sm transition relative cursor-pointer
                ${statusStyles[status]}
                ${currentIndex === index ? 'ring-2 ring-offset-2 dark:ring-offset-slate-800 ring-blue-500 font-extrabold scale-105' : ''}
              `}
            >
              {index + 1}
              {status === QuestionStatus.AnsweredAndMarked && (
                <span className="absolute bottom-1 right-1 w-2 h-2 bg-emerald-400 border border-white dark:border-slate-800 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onSubmit}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg text-lg transition shadow-md hover:shadow-lg active:scale-95 cursor-pointer mt-4"
      >
        Submit Exam
      </button>
    </div>
  );
};

export default QuestionPalette;
