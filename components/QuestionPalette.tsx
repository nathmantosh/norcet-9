
import React from 'react';
import { QuestionStatus } from '../types';

interface QuestionPaletteProps {
  statuses: QuestionStatus[];
  currentIndex: number;
  onQuestionSelect: (index: number) => void;
  onSubmit: () => void;
}

const statusStyles: Record<QuestionStatus, string> = {
  [QuestionStatus.NotVisited]: 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300',
  [QuestionStatus.NotAnswered]: 'bg-red-200 dark:bg-red-800/50 text-red-800 dark:text-red-200',
  [QuestionStatus.Answered]: 'bg-green-200 dark:bg-green-800/50 text-green-800 dark:text-green-200',
  [QuestionStatus.MarkedForReview]: 'bg-purple-200 dark:bg-purple-800/50 text-purple-800 dark:text-purple-200',
  [QuestionStatus.AnsweredAndMarked]: 'bg-blue-200 dark:bg-blue-800/50 text-blue-800 dark:text-blue-200',
};

const statusDescriptions: Record<QuestionStatus, string> = {
  [QuestionStatus.Answered]: 'Answered',
  [QuestionStatus.NotAnswered]: 'Not Answered',
  [QuestionStatus.NotVisited]: 'Not Visited',
  [QuestionStatus.MarkedForReview]: 'Marked for Review',
  [QuestionStatus.AnsweredAndMarked]: 'Answered & Marked for Review',
};


const PaletteItem: React.FC<{ status: QuestionStatus; description: string }> = ({ status, description }) => (
    <div className="flex items-center gap-2">
        <div className={`w-5 h-5 rounded-sm ${statusStyles[status]}`}></div>
        <span className="text-sm">{description}</span>
    </div>
);


const QuestionPalette: React.FC<QuestionPaletteProps> = ({ statuses, currentIndex, onQuestionSelect, onSubmit }) => {
  return (
    <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl p-4 flex flex-col h-full border border-slate-200 dark:border-slate-700">
      <h2 className="text-lg font-bold mb-4">Question Palette</h2>
      <div className="grid grid-cols-5 gap-2 mb-4">
        {statuses.map((status, index) => (
          <button
            key={index}
            onClick={() => onQuestionSelect(index)}
            className={`w-10 h-10 flex items-center justify-center rounded font-bold transition
              ${statusStyles[status]}
              ${currentIndex === index ? 'ring-2 ring-offset-2 dark:ring-offset-slate-800 ring-blue-500' : ''}
            `}
          >
            {index + 1}
          </button>
        ))}
      </div>
       <div className="mt-4 space-y-2 text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700 pt-4">
            <PaletteItem status={QuestionStatus.Answered} description="Answered" />
            <PaletteItem status={QuestionStatus.NotAnswered} description="Not Answered" />
            <PaletteItem status={QuestionStatus.MarkedForReview} description="Marked for Review" />
            <PaletteItem status={QuestionStatus.AnsweredAndMarked} description="Answered & Marked" />
            <PaletteItem status={QuestionStatus.NotVisited} description="Not Visited" />
        </div>

      <button
        onClick={onSubmit}
        className="w-full mt-auto bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg text-lg transition shadow-md"
      >
        Submit Exam
      </button>
    </div>
  );
};

export default QuestionPalette;
