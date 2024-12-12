import { useState, useEffect } from 'react';
import { questions } from '../data/questions';
import { calculateMBTIScores, determineMBTIType } from '../utils/mbtiCalculator';
import type { UserAnswers, MBTIScores } from '../types';

const STORAGE_KEY = 'mbti_test_answers';

export function usePersonalityTest() {
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  });
  const [scores, setScores] = useState<MBTIScores | null>(null);
  const [mbtiType, setMbtiType] = useState<string | null>(null);

  // Persist answers to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userAnswers));
  }, [userAnswers]);

  const handleStart = () => {
    setStarted(true);
    // Clear previous answers when starting a new test
    localStorage.removeItem(STORAGE_KEY);
    setUserAnswers({});
    setScores(null);
    setMbtiType(null);
  };

  const handleAnswer = (answer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const finalScores = calculateMBTIScores(userAnswers);
      setScores(finalScores);
      const type = determineMBTIType(finalScores);
      setMbtiType(type);
    }
  };

  const resetTest = () => {
    setStarted(false);
    setCurrentQuestionIndex(0);
    localStorage.removeItem(STORAGE_KEY);
    setUserAnswers({});
    setScores(null);
    setMbtiType(null);
  };

  return {
    started,
    currentQuestion: questions[currentQuestionIndex],
    progress: (currentQuestionIndex / questions.length) * 100,
    isComplete: mbtiType !== null,
    mbtiType,
    scores,
    handleStart,
    handleAnswer,
    resetTest
  };
}