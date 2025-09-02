
import React from 'react';
import { EXAM_DURATION_MINUTES } from '../constants';

interface WelcomeScreenProps {
  onStart: () => void;
  totalQuestions: number;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, totalQuestions }) => {
  return (
    <div className="bg-white dark:bg-slate-800 shadow-2xl rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto border border-slate-200 dark:border-slate-700">
      <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-4">
        NORCET 9 AI Mock Test
      </h1>
      <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
        Prepare yourself for the nursing officer exam with a realistic simulation.
      </p>
      
      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-6 text-left mb-8 border border-slate-200 dark:border-slate-700">
        <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">Instructions</h2>
        <ul className="list-disc list-inside space-y-3 text-slate-600 dark:text-slate-300">
          <li>This exam consists of <span className="font-bold text-blue-500 dark:text-blue-400">{totalQuestions} multiple-choice questions</span>.</li>
          <li>You will have <span className="font-bold text-blue-500 dark:text-blue-400">{EXAM_DURATION_MINUTES} minutes</span> to complete the exam.</li>
          <li>You can navigate between questions using the 'Next' and 'Previous' buttons.</li>
          <li>Use the question palette on the right to jump to any question.</li>
          <li>You can 'Mark for Review' if you are unsure about an answer and wish to return to it later.</li>
          <li>Your test will be automatically submitted when the timer runs out.</li>
          <li>Click 'Start Exam' when you are ready to begin. Good luck!</li>
        </ul>
      </div>

      <button
        onClick={onStart}
        className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-lg text-xl transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg"
      >
        Start Exam
      </button>
    </div>
  );
};

export default WelcomeScreen;
