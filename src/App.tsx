import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { StartScreen } from './components/StartScreen';
import { QuestionCard } from './components/QuestionCard';
import { ResultScreen } from './components/personality/ResultScreen';
import { ProgressBar } from './components/ProgressBar';
import { usePersonalityTest } from './hooks/usePersonalityTest';
import { getCharacterArchetype } from './utils/personalityUtils';

export function App() {
  const {
    started,
    currentQuestion,
    progress,
    isComplete,
    mbtiType,
    scores,
    handleStart,
    handleAnswer,
    resetTest
  } = usePersonalityTest();

  const character = mbtiType ? getCharacterArchetype(mbtiType) : null;

  return (
    <div className="min-h-screen bg-[#F4FAFF] py-8 px-4">
      <AnimatePresence mode="wait">
        {!started ? (
          <StartScreen onStart={handleStart} />
        ) : isComplete && character ? (
          <ResultScreen
            character={character}
            onReset={resetTest}
          />
        ) : (
          <>
            <ProgressBar progress={progress} />
            <QuestionCard
              key={currentQuestion.id}
              question={currentQuestion}
              onAnswer={handleAnswer}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}