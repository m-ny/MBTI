import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-8 text-center"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="inline-block mb-6"
      >
        <Brain size={64} className="text-blue-500" />
      </motion.div>

      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        MBTI Personality Assessment
      </h1>
      
      <p className="text-lg text-gray-600 mb-6">
        Discover your personality type through this scientifically designed assessment.
        
        The test takes about 2-5 minutes to complete.
      </p>

      <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-3">
          What to Expect
        </h2>
        <ul className="text-left text-gray-600 space-y-2 mb-4">
          <li>• Multiple choice questions</li>
          <li>• No right or wrong answers</li>
          <li>• Answer based on your natural tendencies</li>
          <li>• Detailed personality insights upon completion</li>
        </ul>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="px-8 py-3 bg-blue-500 text-white
             rounded-full font-semibold shadow-lg hover:shadow-xl
             transition-all duration-200"
      >
        Begin Assessment
      </motion.button>

      <p className="mt-6 text-sm text-gray-600">
        Made with ❤️ by Dropout Boulevard
      </p>
      <p className="mt-2 text-sm">
          <a 
            href="https://github.com/mannymarciano/MBTI" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            View on GitHub
          </a>
      </p>

      
    </motion.div>
  );
}
