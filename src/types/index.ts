export interface Answer {
  text: string;
  score: number;
  MBTI: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
}

export interface Question {
  id: number;
  question: string;
  answers: {
    A: Answer;
    B: Answer;
    C: Answer;
    D: Answer;
  };
}

export type AnswerKey = 'A' | 'B' | 'C' | 'D';
export type UserAnswers = Record<number, AnswerKey>;
export type MBTICategory = 'EI' | 'SN' | 'TF' | 'JP';
export type MBTIScores = Record<MBTICategory, number>;
export type MBTIResult = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';