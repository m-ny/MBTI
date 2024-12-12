import React from 'react';
import { motion } from 'framer-motion';
import type { PersonalityTrait } from '../../types/personality';

interface TraitCardProps {
  trait: PersonalityTrait;
  index: number;
}

export function TraitCard({ trait, index }: TraitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-lg"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-2">{trait.name}</h3>
      <p className="text-gray-600 mb-4">{trait.description}</p>
      
      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${trait.score}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="absolute top-0 left-0 h-full bg-blue-500"
        />
      </div>
      
      <div className="mt-2 text-right text-sm font-semibold text-gray-700">
        {trait.score}%
      </div>
    </motion.div>
  );
}