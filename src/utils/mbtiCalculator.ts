import type { UserAnswers, MBTIScores, MBTIResult } from '../types';
import { questions } from '../data/questions';

export function calculateMBTIScores(userAnswers: UserAnswers): MBTIScores {
  const scores: MBTIScores = {
    EI: 0, // Extraversion (positive) vs Introversion (negative) 0.97
    SN: 0, // Sensing (negative) vs Intuition (positive) -1.887
    TF: 0, // Thinking (negative) vs Feeling (positive) -0.84
    JP: 0  // Judging (negative) vs Perceiving (positive) 4.55
  };

  // Process each answer
  Object.entries(userAnswers).forEach(([questionId, answer]) => {
    const question = questions.find(q => q.id === parseInt(questionId));
    if (!question) return;

    const answerData = question.answers[answer];
    const score = answerData.score;
    
    // Apply the score to the appropriate dimension
    switch (answerData.MBTI) {
      case 'E': scores.EI += score; break;
      case 'I': scores.EI -= score; break;
      case 'S': scores.SN -= score; break;
      case 'N': scores.SN += score; break;
      case 'T': scores.TF -= score; break;
      case 'F': scores.TF += score; break;
      case 'J': scores.JP -= score; break;
      case 'P': scores.JP += score; break;
    }
  });

  return scores;
}

export function determineMBTIType(scores: MBTIScores): string {
  // Determine each dimension based on the final scores
  const dimensions: MBTIResult[] = [
    Math.abs(scores.EI) < 1 ? (Math.random() < 0.5 ? 'E' : 'I') : (scores.EI > 0 ? 'E' : 'I'),
    Math.abs(scores.SN) < 1 ? (Math.random() < 0.5 ? 'S' : 'N') : (scores.SN > 0 ? 'N' : 'S'),
    Math.abs(scores.TF) < 1 ? (Math.random() < 0.5 ? 'T' : 'F') : (scores.TF > 0 ? 'F' : 'T'),
    Math.abs(scores.JP) < 1 ? (Math.random() < 0.5 ? 'J' : 'P') : (scores.JP > 0 ? 'P' : 'J')
  ];

  return dimensions.join('');
}