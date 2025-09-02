
export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export enum AppState {
  Welcome,
  InProgress,
  Completed,
}

export enum QuestionStatus {
  NotVisited,
  NotAnswered,
  Answered,
  MarkedForReview,
  AnsweredAndMarked,
}
