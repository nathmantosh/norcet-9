
import React, { useMemo } from 'react';
import { QuestionStatus } from '../types';

interface ConfirmationModalProps {
    onConfirm: () => void;
    onCancel: () => void;
    answers: (number | null)[];
    statuses: QuestionStatus[];
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ onConfirm, onCancel, answers, statuses }) => {

    const summary = useMemo(() => {
        const answered = answers.filter(a => a !== null).length;
        const notAnswered = statuses.filter(s => s === QuestionStatus.NotAnswered || s === QuestionStatus.NotVisited).length;
        const markedForReview = statuses.filter(s => s === QuestionStatus.MarkedForReview || s === QuestionStatus.AnsweredAndMarked).length;
        return { answered, notAnswered, markedForReview, total: statuses.length };
    }, [answers, statuses]);


    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl p-8 max-w-lg w-full transform transition-all">
                <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">Confirm Submission</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Are you sure you want to submit the exam? You will not be able to change your answers after this.
                </p>
                
                <div className="bg-slate-100 dark:bg-slate-700/50 p-4 rounded-lg mb-6 border border-slate-200 dark:border-slate-600">
                    <h3 className="font-semibold mb-3 text-lg">Exam Summary</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <div className="flex justify-between"><span>Total Questions:</span><span className="font-bold">{summary.total}</span></div>
                        <div className="flex justify-between"><span>Answered:</span><span className="font-bold text-green-600 dark:text-green-400">{summary.answered}</span></div>
                        <div className="flex justify-between"><span>Not Answered:</span><span className="font-bold text-red-600 dark:text-red-400">{summary.notAnswered}</span></div>
                        <div className="flex justify-between"><span>Marked for Review:</span><span className="font-bold text-purple-600 dark:text-purple-400">{summary.markedForReview}</span></div>
                    </div>
                </div>

                <div className="flex justify-end gap-4">
                    <button
                        onClick={onCancel}
                        className="bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-800 dark:text-white font-bold py-2 px-6 rounded-lg transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition shadow-md"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
