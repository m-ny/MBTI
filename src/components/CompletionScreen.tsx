import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper } from 'lucide-react';

interface CompletionScreenProps {
  onReset: () => void;
}

export function CompletionScreen({ onReset }: CompletionScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center p-8"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="inline-block mb-6"
      >
        <PartyPopper size={64} className="text-yellow-500" />
      </motion.div>
      
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Test Complete!
      </h1>
      <p className="text-gray-600 mb-8">
        Thank you for completing the personality test!
      </p>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white
                   rounded-full font-semibold shadow-lg hover:shadow-xl
                   transition-all duration-200"
      >
        Take Test Again
      </motion.button>
    </motion.div>
  );
}