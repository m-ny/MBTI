import React from 'react';
import { motion } from 'framer-motion';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string) => void;
}

export function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-4xl mx-auto p-6"
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <img
          src="https://8568c688ff74a9e443f63133d8b6cf01.cdn.bubble.io/f1734034491095x158398870956559800/Group%201.png"
          alt="Question illustration"
          className="w-full h-64 object-cover"
        />
        
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {question.question}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {(Object.entries(question.answers)).map(([key, answer]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onAnswer(key)}
                className="p-4 text-left rounded-xl border-2 border-transparent 
                         hover:border-blue-500 bg-gradient-to-r from-blue-50 
                         to-indigo-50 hover:from-blue-100 hover:to-indigo-100
                         transition-all duration-200"
              >
                <span className="font-semibold text-lg text-gray-800">
                  {key}.
                </span>
                <span className="ml-2 text-gray-700">{answer.text}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}