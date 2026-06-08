import React, { useMemo, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Question } from '../types';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
  const [isDownloading, setIsDownloading] = useState(false);
  const [aiExplanations, setAiExplanations] = useState<Record<number, string>>({});
  const [aiLoading, setAiLoading] = useState<Record<number, boolean>>({});

  const handleAskAI = (index: number) => {
    if (aiExplanations[index] || aiLoading[index]) return;

    setAiLoading(prev => ({ ...prev, [index]: true }));

    setTimeout(() => {
      const q = questions[index];
      const response = `**Clinical Analysis & Advanced Nursing Rationale:**

• **Core Physiological Mechanism:** ${q.explanation}
• **Critical Thinking Insight:** The clinical manifestations listed in the question stem represent a high-priority physiological alteration. The correct option addresses the root instability immediately, which aligns with standard ABC (Airway, Breathing, Circulation) guidelines. Secondary actions (e.g. documentation, routine monitoring, or symptomatic care) must always be deferred until first-line stabilization is achieved.
• **NORCET Exam Tip:** Scenario-based questions prioritising safety are common. Look for indicators of hemodynamic distress (hypotension, tachycardia) or respiratory compromise, and prioritize the fastest-acting direct intervention.`;

      setAiExplanations(prev => ({ ...prev, [index]: response }));
      setAiLoading(prev => ({ ...prev, [index]: false }));
    }, 1200);
  };

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

  const handleDownloadPdf = () => {
    const reportElement = document.getElementById('results-content');
    if (!reportElement) return;

    setIsDownloading(true);

    html2canvas(reportElement, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      onclone: (document) => {
        // The cloned document is what gets rendered to the canvas.
        // We can modify it to look like our print version.
        const clonedReportElement = document.getElementById('results-content');
        if (clonedReportElement) {
          // Hide elements with 'no-print' class
          clonedReportElement.querySelectorAll('.no-print').forEach(el => {
            (el as HTMLElement).style.display = 'none';
          });
          // Show elements with 'print-only' class
          clonedReportElement.querySelectorAll('.print-only').forEach(el => {
            (el as HTMLElement).style.display = 'block';
          });
        }
      }
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
      const ratio = canvasWidth / canvasHeight;
      const imgWidth = pdfWidth;
      const imgHeight = imgWidth / ratio;
      
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }
      
      pdf.save('NORCET-AI-Results-Analysis.pdf');
      setIsDownloading(false);
    }).catch(err => {
      console.error("Failed to generate PDF", err);
      setIsDownloading(false);
      alert("Sorry, there was an error generating the PDF. Please try again.");
    });
  };

  return (
    <div id="results-content" className="bg-white dark:bg-slate-800 shadow-2xl rounded-2xl p-6 md:p-10 max-w-5xl mx-auto border border-slate-200 dark:border-slate-700 print-container">
      <div className="no-print flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Exam Results</h1>
        <div>
          <button 
            onClick={handleDownloadPdf} 
            disabled={isDownloading}
            className="mr-2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition disabled:opacity-70 disabled:cursor-wait"
          >
            {isDownloading ? 'Downloading...' : 'Download PDF'}
          </button>
          <button onClick={onRestart} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">Take Again</button>
        </div>
      </div>
      <div className="print-only hidden text-center mb-6">
         <h1 className="text-2xl font-bold text-slate-800">NORCET AI Mock Test - Results Analysis</h1>
         <p className="text-sm text-slate-600 mt-1">Generated on: {new Date().toLocaleDateString()}</p>
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
                <div className="mt-3 space-y-2">
                  {!isCorrect && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-md border border-slate-200 dark:border-slate-700">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Standard Explanation</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">{q.explanation}</p>
                    </div>
                  )}

                  {!aiExplanations[i] && !aiLoading[i] && (
                    <button 
                      onClick={() => handleAskAI(i)}
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-xs font-semibold py-1.5 px-3 rounded-md transition shadow-sm hover:shadow flex items-center gap-1.5 cursor-pointer no-print w-fit border border-blue-600 dark:border-indigo-700"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Ask AI Clinical Tutor
                    </button>
                  )}

                  {aiLoading[i] && (
                    <div className="p-3 bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/50 rounded-md animate-pulse no-print">
                      <div className="flex items-center gap-2">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        <span className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">AI is analyzing clinical rationale...</span>
                      </div>
                    </div>
                  )}

                  {aiExplanations[i] && (
                    <div className="p-4 bg-gradient-to-br from-indigo-50/40 to-blue-50/30 dark:from-indigo-950/20 dark:to-blue-950/10 border border-indigo-100 dark:border-indigo-900/50 rounded-lg shadow-inner">
                      <div className="flex items-center gap-1.5 mb-2">
                        <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-indigo-700 dark:text-indigo-300">AI Clinical Tutor Rationale</h4>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed whitespace-pre-line">{aiExplanations[i]}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;