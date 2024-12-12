import React from 'react';
import { motion } from 'framer-motion';
import { Award, RefreshCcw, Share2 } from 'lucide-react';
import type { MBTIScores } from '../types';

interface ResultScreenProps {
  mbtiType: string;
  scores: MBTIScores;
  onReset: () => void;
}

const typeDescriptions: Record<string, string> = {
  E: "Extraversion: You gain energy from social interaction",
  I: "Introversion: You recharge through solitude",
  S: "Sensing: You focus on concrete facts and details",
  N: "Intuition: You prefer abstract concepts and possibilities",
  T: "Thinking: You make decisions based on logic",
  F: "Feeling: You decide based on values and emotions",
  J: "Judging: You prefer structure and planning",
  P: "Perceiving: You're flexible and spontaneous"
};

export function ResultScreen({ mbtiType, scores, onReset }: ResultScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-4xl mx-auto p-8"
    >
      <div className="text-center mb-8">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2 }}
          className="inline-block mb-4"
        >
          <Award size={64} className="text-indigo-500" />
        </motion.div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Your Personality Type
        </h1>
        <div className="text-6xl font-bold text-transparent bg-clip-text 
                        bg-gradient-to-r from-indigo-500 to-purple-500 mb-4">
          {mbtiType}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {mbtiType.split('').map((letter, index) => (
          <motion.div
            key={letter}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {letter}
            </h2>
            <p className="text-gray-600">
              {typeDescriptions[letter]}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onReset}
          className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full
                     font-semibold flex items-center space-x-2
                     hover:bg-gray-200 transition-colors"
        >
          <RefreshCcw size={20} />
          <span>Retake Test</span>
        </motion.button>
      {/*
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-indigo-500 text-white rounded-full
                     font-semibold flex items-center space-x-2
                     hover:bg-indigo-600 transition-colors"
        >
        </motion.button>
      */}
      </div>
    </motion.div>
  );
}