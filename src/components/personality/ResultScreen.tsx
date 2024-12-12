import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CharacterProfile } from './CharacterProfile';
import { TraitCard } from './TraitCard';
import { PersonalityTypeSection } from './PersonalityTypeSection';
import { CharacterArchetype } from '../../types/personality';
import { RefreshCw, Share2 } from 'lucide-react';

interface ResultScreenProps {
  character: CharacterArchetype;
  onReset: () => void;
}

export function ResultScreen({ character, onReset }: ResultScreenProps) {
  useEffect(() => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    const colors = ['#1565C0', '#2196F3', '#0D47A1', '#90CAF9'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <PersonalityTypeSection mbtiType={character.mbtiTypes[0]} />
      
      <CharacterProfile character={character} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {character.traits.map((trait, index) => (
          <TraitCard key={trait.name} trait={trait} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">Strengths</h3>
          <ul className="space-y-2">
            {character.strengths.map((strength, index) => (
              <motion.li
                key={strength}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-gray-600 flex items-center space-x-2"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                <span>{strength}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">Weaknesses</h3>
          <ul className="space-y-2">
            {character.weaknesses.map((weakness, index) => (
              <motion.li
                key={weakness}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-gray-600 flex items-center space-x-2"
              >
                <span className="w-2 h-2 bg-red-400 rounded-full" />
                <span>{weakness}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">Growth Areas</h3>
          <ul className="space-y-2">
            {character.growthAreas.map((area, index) => (
              <motion.li
                key={area}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-gray-600 flex items-center space-x-2"
              >
                <span className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>{area}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="text-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onReset}
          className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full 
                     font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Take Test Again
        </motion.button>

{/*
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-6 py-3 bg-white text-gray-800
                     rounded-full font-semibold shadow-lg hover:shadow-xl 
                     transition-all border-2 border-gray-200"
        >
          <Share2 className="w-5 h-5 mr-2" />
          Share Results
        </motion.button>
        */}
      </div>
    </motion.div>
  );
}