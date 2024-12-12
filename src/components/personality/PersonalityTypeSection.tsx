import React from 'react';
import { motion } from 'framer-motion';

interface PersonalityTypeSectionProps {
  mbtiType: string;
}

const typeDescriptions: Record<string, string> = {
  E: "Extraversion - Gains energy from social interaction",
  I: "Introversion - Recharges through solitude",
  S: "Sensing - Focuses on concrete facts and details",
  N: "Intuition - Prefers abstract concepts and possibilities",
  T: "Thinking - Makes decisions based on logic",
  F: "Feeling - Decides based on values and emotions",
  J: "Judging - Prefers structure and planning",
  P: "Perceiving - Flexible and spontaneous"
};

export function PersonalityTypeSection({ mbtiType }: PersonalityTypeSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-8 mb-12"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Your Personality Type
      </h2>
      
      <div className="text-7xl font-bold text-center mb-8 text-blue-500">
        {mbtiType}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mbtiType.split('').map((letter, index) => (
          <motion.div
            key={letter}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6"
          >
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-blue-500">{letter}</span>
              <div className="flex-1">
                <p className="text-gray-700 font-medium">
                  {typeDescriptions[letter]}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}