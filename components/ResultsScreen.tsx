
import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Question } from '../types';

interface ResultsScreenProps {
  questions: Question[];
  userAnswers: (number | null)[];
  timeTaken: number;
  onRestart: () => void;
}

const ResultCard: React.FC<{ title: string; value: string | number; color: string; }> = ({ title, value, color }) => (
    <div className={`p-4 rounded-lg shadow-md ${color}`}>
        <p className="text-sm text-white/80">{title}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
    </div>
);

const ResultsScreen: React.FC<ResultsScreenProps> = ({ questions, userAnswers, onRestart }) => {
  const { correct, incorrect, unanswered } = useMemo(() => {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    questions.forEach((q, i) => {
      if (userAnswers[i] === null) {
        unanswered++;
      } else if (userAnswers[i] === q.correctAnswerIndex) {
        correct++;
      } else {
        incorrect++;
      }
    });
    return { correct, incorrect, unanswered };
  }, [questions, userAnswers]);

  const score = ((correct / questions.length) * 100).toFixed(2);
  
  const chartData = [
    { name: 'Correct', value: correct },
    { name: 'Incorrect', value: incorrect },
    { name: 'Unanswered', value: unanswered },
  ];
  const COLORS = ['#10B981', '#EF4444', '#6B7280'];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white dark:bg-slate-800 shadow-2xl rounded-2xl p-6 md:p-10 max-w-5xl mx-auto border border-slate-200 dark:border-slate-700 print-container">
      <div className="no-print flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Exam Results</h1>
        <div>
          <button onClick={handlePrint} className="mr-2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition">Print Summary</button>
          <button onClick={onRestart} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">Take Again</button>
        </div>
      </div>
      <div className="print-only hidden text-center mb-6">
         <h1 className="text-2xl font-bold text-slate-800">NORCET 9 Mock Test - Result Summary</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Performance Summary</h2>
          <div className="grid grid-cols-2 gap-4">
            <ResultCard title="Score" value={`${score}%`} color="bg-blue-500" />
            <ResultCard title="Total Questions" value={questions.length} color="bg-slate-500" />
            <ResultCard title="Correct" value={correct} color="bg-green-500" />
            <ResultCard title="Incorrect" value={incorrect} color="bg-red-500" />
          </div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-lg flex items-center justify-center h-64 md:h-auto">
           <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={chartData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Detailed Analysis</h2>
        <div className="space-y-6">
          {questions.map((q, i) => {
            const userAnswer = userAnswers[i];
            const isCorrect = userAnswer === q.correctAnswerIndex;
            const isUnanswered = userAnswer === null;

            let statusColor = 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600';
            if (!isUnanswered) {
              statusColor = isCorrect ? 'bg-green-100 dark:bg-green-900/50 border-green-400 dark:border-green-600' : 'bg-red-100 dark:bg-red-900/50 border-red-400 dark:border-red-600';
            }
            
            return (
              <div key={i} className={`p-4 rounded-lg border-l-4 ${statusColor}`}>
                <p className="font-semibold text-slate-800 dark:text-slate-100">Q{i + 1}: {q.question}</p>
                <div className="mt-3 space-y-2">
                  {q.options.map((option, optIndex) => {
                    const isUserChoice = userAnswer === optIndex;
                    const isCorrectChoice = q.correctAnswerIndex === optIndex;
                    
                    let optionStyle = 'text-slate-700 dark:text-slate-300';
                    let prefix = '○';

                    if (isCorrectChoice) {
                      optionStyle = 'text-green-700 dark:text-green-300 font-bold';
                      prefix = '✓';
                    }
                    if (isUserChoice && !isCorrectChoice) {
                      optionStyle = 'text-red-700 dark:text-red-300 font-bold';
                      prefix = '✗';
                    }
                     if (isUserChoice && isCorrectChoice) {
                       prefix = '✓';
                    }

                    return (
                      <p key={optIndex} className={optionStyle}><span className="mr-2">{prefix}</span>{option}</p>
                    );
                  })}
                </div>
                {!isCorrect && 
                  <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-md border border-blue-200 dark:border-blue-700">
                    <h4 className="font-bold text-blue-800 dark:text-blue-300">Explanation:</h4>
                    <p className="text-blue-700 dark:text-blue-200">{q.explanation}</p>
                  </div>
                }
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;
