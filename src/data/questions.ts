import type { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    question: "Do you believe in absolute truth, or is everything subjective?",
    answers: {
      A: { text: "There is no absolute truth; it's all fragments of perception.", score: 1, MBTI: "N" },
      B: { text: "It is out there, but only by careful navigation can we detect the truth.", score: 2, MBTI: "S" },
      C: { text: "Absolute truth exists, but it’s often obscured by noise.", score: 2, MBTI: "S" },
      D: { text: "Everything is subjective; truth is what you make of it.", score: 1, MBTI: "N" }
    }
  },
  {
    id: 2,
    question: "How important is personal freedom to you?",
    answers: {
      A: { text: "Extremely important; it’s the essence of living fully in the present.", score: 1, MBTI: "N" },
      B: { text: "I can take any risk if it means I get my things done.", score: 2, MBTI: "S" },
      C: { text: "It’s all I care about.", score: 1, MBTI: "N" },
      D: { text: "Important, but I may give it up for the greater good.", score: 2, MBTI: "S" }
    }
  },
  {
    id: 3,
    question: "For dinner, if you have the choice between 4 options but can only pick one, you:",
    answers: {
      A: { text: "Spend 20 minutes analyzing your options.", score: 2, MBTI: "T" },
      B: { text: "Choose one randomly and deal with the regret later.", score: 1, MBTI: "F" },
      C: { text: "Ask for a 'taste test' of all 4 and call it research.", score: 2, MBTI: "T" },
      D: { text: "Ask if you can have all 4 in one cup.", score: 1, MBTI: "F" }
    }
  },
  {
    id: 4,
    question: "If you see a 'DO NOT TOUCH!' button, you:",
    answers: {
      A: { text: "Touch it instantly just to see what happens.", score: 1, MBTI: "P" },
      B: { text: "Read the sign twice and walk away.", score: 2, MBTI: "J" },
      C: { text: "Call a friend and say, 'Dare me to do it!'", score: 1, MBTI: "P" },
      D: { text: "Take a picture of the button for future analysis.", score: 2, MBTI: "J" }
    }
  },
  {
    id: 5,
    question: "Are you comfortable with confrontation, or do you avoid it?",
    answers: {
      A: { text: "I avoid it unless it’s absolutely necessary.", score: 1, MBTI: "I" },
      B: { text: "I avoid it unless it’s necessary to clarify something important.", score: 1, MBTI: "I" },
      C: { text: "Extremely comfortable, I am not affected nor scared of it.", score: 2, MBTI: "E" },
      D: { text: "Comfortable, as long as it’s to my advantage.", score: 2, MBTI: "E" }
    }
  },
  {
    id: 6,
    question: "How much do you value others’ opinions of you?",
    answers: {
      A: { text: "I value them, but they rarely influence my sense of self.", score: 2, MBTI: "E" },
      B: { text: "I value them but don’t let them dictate my path.", score: 2, MBTI: "E" },
      C: { text: "Not at all. I believe I am to change them if they interfere with my decisions.", score: 1, MBTI: "I" },
      D: { text: "Not much—it’s their problem.", score: 1, MBTI: "I" }
    }
  },
  {
    id: 7,
    question: "If someone waves at you but you’re not sure it’s for you, do you:",
    answers: {
      A: { text: "Awkwardly wave back just in case.", score: 1, MBTI: "F" },
      B: { text: "Pretend you didn’t see it to avoid embarrassment.", score: 2, MBTI: "T" },
      C: { text: "Turn around to see if it’s for someone else.", score: 2, MBTI: "T" },
      D: { text: "Wave back enthusiastically like they’re your best friend.", score: 1, MBTI: "F" }
    }
  },
  {
    id: 8,
    question: "Do you enjoy reflecting on your emotions, or do you prefer to act without overthinking?",
    answers: {
      A: { text: "I reflect on them but don’t dwell unnecessarily.", score: 2, MBTI: "T" },
      B: { text: "I reflect deeply, often overanalyzing the situation.", score: 2, MBTI: "T" },
      C: { text: "Act, without overthinking—that’s the way of living.", score: 1, MBTI: "F" },
      D: { text: "I act, but I reflect when it serves a purpose.", score: 1, MBTI: "F" }
    }
  },
  {
    id: 9,
    question: "When creating something, do you focus on the process or the outcome?",
    answers: {
      A: { text: "The outcome—it must be efficient and effective.", score: 2, MBTI: "T" },
      B: { text: "The process is most important, especially when it involves risks.", score: 1, MBTI: "F" },
      C: { text: "The process, because it’s where I innovate and experiment.", score: 1, MBTI: "F" },
      D: { text: "The outcome—it’s all about what I gain.", score: 2, MBTI: "T" }
    }
  },
  {
    id: 10,
    question: "If you stare at the ceiling for too long, do you:",
    answers: {
      A: { text: "Start seeing faces and shapes in the patterns.", score: 1, MBTI: "F" },
      B: { text: "Come up with life-changing philosophical ideas.", score: 2, MBTI: "T" },
      C: { text: "Wonder if you’re the protagonist of a simulation.", score: 1, MBTI: "F" },
      D: { text: "Just think, 'I really should be studying.'", score: 2, MBTI: "T" }
    }
  },
  {
    id: 11,
    question: "When you look in the mirror, do you:",
    answers: {
      A: { text: "Practice hypothetical arguments with yourself.", score: 1, MBTI: "F" },
      B: { text: "Compliment yourself for good posture.", score: 2, MBTI: "T" },
      C: { text: "Make faces just to see what you look like.", score: 2, MBTI: "T" },
      D: { text: "Check if you look presentable and move on.", score: 1, MBTI: "F" }
    }
  },
  {
    id: 12,
    question: "Do you feel envy when seeing others have their business carried out effortlessly?",
    answers: {
      A: { text: "I don't feel this way at all. There must be their great practices and devotion.", score: 2.5, MBTI: "J" },
      B: { text: "To some extent. I know they are good models but I can't ignore the sense of loss.", score: -0.5, MBTI: "P" },
      C: { text: "Mostly I don't see reasons for that. I am happy that they have their own life smoothly.", score: 2, MBTI: "J" },
      D: { text: "Obviously. That's the main source of my distress.", score: -1.5, MBTI: "P" }
    }
  },
  {
    id: 13,
    question: "Do you regularly reflect on your past actions and decisions?",
    answers: {
      A: { text: "Constantly—it’s how I learn and grow.", score: 2, MBTI: "J" },
      B: { text: "Often, but I don’t linger too long on regrets.", score: 2, MBTI: "J" },
      C: { text: "Yes, as a means of improving future decisions.", score: 2, MBTI: "J" },
      D: { text: "Not much because you can’t change it. But I still cannot get away with it.", score: 1, MBTI: "P" }
    }
  },
  {
    id: 14,
    question: "When you forget why you walked into a room, what do you do next?",
    answers: {
      A: { text: "Retrace your steps and try to remember.", score: 2, MBTI: "J" },
      B: { text: "Assume it was an important destiny-altering moment.", score: 1, MBTI: "P" },
      C: { text: "Make up a new reason for being there.", score: 1, MBTI: "P" },
      D: { text: "Stand in confusion for 5 minutes before giving up.", score: 2, MBTI: "J" }
    }
  },
  {
    id: 15,
    question: "If you hear a strange noise at night in your bed, do you:",
    answers: {
      A: { text: "Assume it’s a ghost or intruder.", score: 2, MBTI: "J" },
      B: { text: "Check if it’s the wind or the pipes.", score: 1, MBTI: "P" },
      C: { text: "Freeze and prepare for the end.", score: 2, MBTI: "J" },
      D: { text: "Turn on every single light in the house.", score: 1, MBTI: "P" }
    }
  }
];