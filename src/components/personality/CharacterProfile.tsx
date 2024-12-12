import React from 'react';
import { motion } from 'framer-motion';
import type { CharacterArchetype } from '../../types/personality';

interface CharacterProfileProps {
  character: CharacterArchetype;
}

export function CharacterProfile({ character }: CharacterProfileProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center mb-12"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="relative w-48 h-48 mx-auto mb-6"
      >
        <img
          src={character.imageUrl}
          alt={character.name}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.h2
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="text-4xl font-bold text-gray-800 mb-4"
      >
        {character.name}
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-gray-600 max-w-2xl mx-auto"
      >
        {character.description}
      </motion.p>
    </motion.div>
  );
}