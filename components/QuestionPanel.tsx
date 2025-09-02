
import React from 'react';
import { Question } from '../types';

interface QuestionPanelProps {
  question: Question;
  questionNumber: number;
  selectedAnswer: number | null;
  onSelectAnswer: (optionIndex: number) => void;
}

const QuestionPanel: React.FC<QuestionPanelProps> = ({
  question,
  questionNumber,
  selectedAnswer,
  onSelectAnswer,
}) => {
  return (
    <div className="p-6 flex-grow overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
        Question {questionNumber}
      </h2>
      <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">{question.question}</p>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition
              ${
                selectedAnswer === index
                  ? 'bg-blue-100 dark:bg-blue-900/50 border-blue-500'
                  : 'bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500'
              }
            `}
          >
            <input
              type="radio"
              name={`question-${questionNumber}`}
              checked={selectedAnswer === index}
              onChange={() => onSelectAnswer(index)}
              className="w-5 h-5 accent-blue-600"
            />
            <span className="ml-4 text-md text-slate-800 dark:text-slate-200">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionPanel;
