import type { ArchetypeMapping } from '../types/personality';

export const archetypes: ArchetypeMapping = {
  "INTJ": {
    id: "the-mad-visionary",
    name: "The Mad Visionary",
    description: "Strategic thinkers who see the world as a complex system of patterns to be understood and optimized.",
    mbtiTypes: ["INTJ", "INFJ", "INTP"],
    imageUrl: "https://8568c688ff74a9e443f63133d8b6cf01.cdn.bubble.io/f1734023835660x541426002441555600/infj-advocate-male%20%281%29%201.png",
    traits: [
      {
        name: "Creativity",
        description: "Passion for uncovering hidden truths and unique ideas.",
        score: 92
      },
      {
        name: "Emotional Intensity",
        description: "Prone to deep and intense feelings.",
        score: 88
      },
      {
        name: "Introspection",
        description: "Tendency to reflect deeply on their inner world.",
        score: 85
      }
    ],
    strengths: [
      "Creativity",
      "Passion for uncovering truths",
      "Strategic insight"
    ],
    weaknesses: [
      "Prone to paranoia",
      "Overanalyzing",
      "Emotional instability"
    ],
    growthAreas: [
      "Balancing insight with groundedness",
      "Trusting others",
      "Staying connected to the present"
    ]
  },
  "INFP": {
    id: "the-existential-wanderer",
    name: "The Existential Wanderer",
    description: "Philosophical and reflective individuals seeking freedom and meaning.",
    mbtiTypes: ["INFP", "ISFP"],
    imageUrl: "https://8568c688ff74a9e443f63133d8b6cf01.cdn.bubble.io/f1734020994513x346032515206732740/enfp-campaigner-female%201.png",
    traits: [
      {
        name: "Philosophical Insight",
        description: "Deep thinkers who ponder the meaning of life.",
        score: 90
      },
      {
        name: "Adaptability",
        description: "Flexible and open to new experiences.",
        score: 85
      },
      {
        name: "Serenity",
        description: "Ability to remain calm in challenging situations.",
        score: 83
      }
    ],
    strengths: [
      "Wisdom",
      "Adaptability",
      "Serene approach to life"
    ],
    weaknesses: [
      "Apathy",
      "Avoidance of responsibility",
      "Indifference to outcomes"
    ],
    growthAreas: [
      "Engaging meaningfully with the world",
      "Balancing serenity with action",
      "Taking responsibility"
    ]
  },
  "ISTJ": {
    id: "the-analytical-ubermensch",
    name: "The Analytical Übermensch",
    description: "Highly logical and driven individuals focused on problem-solving and intellectual curiosity.",
    mbtiTypes: ["ISTJ", "ESTJ", "ENTJ"],
    imageUrl: "https://8568c688ff74a9e443f63133d8b6cf01.cdn.bubble.io/f1734023820504x317783398534466240/istj-logistician-male%201.png",
    traits: [
      {
        name: "Logical Precision",
        description: "Prefers systematic and analytical problem-solving.",
        score: 92
      },
      {
        name: "Attention to Detail",
        description: "Meticulously focused on accuracy and precision.",
        score: 90
      },
      {
        name: "Emotional Reserve",
        description: "Prefers to keep emotions private.",
        score: 85
      }
    ],
    strengths: [
      "Problem-solving",
      "Attention to detail",
      "Independent thinking"
    ],
    weaknesses: [
      "Aloofness",
      "Perfectionist tendencies",
      "Rigid thinking"
    ],
    growthAreas: [
      "Embracing imperfection",
      "Balancing logic with emotion",
      "Connecting emotionally with others"
    ]
  },
  "ENTP": {
    id: "the-rebel",
    name: "The Rebel",
    description: "Provocative and imaginative disruptors who thrive on challenging norms and creating new possibilities.",
    mbtiTypes: ["ENTP", "ENFP", "ESFP"],
    imageUrl: "https://8568c688ff74a9e443f63133d8b6cf01.cdn.bubble.io/f1734023871692x275813517390674180/enfj-protagonist-male%201.png",
    traits: [
      {
        name: "Boundless Creativity",
        description: "Generates ideas and thrives in ambiguity.",
        score: 95
      },
      {
        name: "Provocative Spirit",
        description: "Enjoys challenging perspectives and disrupting the status quo.",
        score: 88
      },
      {
        name: "Freedom-Seeking",
        description: "Prioritizes independence and spontaneity.",
        score: 85
      }
    ],
    strengths: [
      "Challenging perspectives",
      "Creativity",
      "Imagination"
    ],
    weaknesses: [
      "Recklessness",
      "Impulsivity",
      "Lack of direction"
    ],
    growthAreas: [
      "Balancing freedom with responsibility",
      "Channeling creativity purposefully",
      "Avoiding chaos for its own sake"
    ]
  },
  "ENFJ": {
    id: "the-melancholy-futurist",
    name: "The Melancholy Futurist",
    description: "Thoughtful and empathetic visionaries focused on the future and human potential.",
    mbtiTypes: ["ENFJ", "ESFJ", "ISFJ"],
    imageUrl: "https://8568c688ff74a9e443f63133d8b6cf01.cdn.bubble.io/f1734023826495x107813028714970780/isfj-defender-female%201.png",
    traits: [
      {
        name: "Empathy",
        description: "Deeply in tune with others' feelings and needs.",
        score: 90
      },
      {
        name: "Innovative Thinking",
        description: "Focuses on creating meaningful solutions for the future.",
        score: 85
      },
      {
        name: "Perfectionism",
        description: "Strives for excellence, sometimes to a fault.",
        score: 80
      }
    ],
    strengths: [
      "Empathy",
      "Foresight",
      "Visionary planning"
    ],
    weaknesses: [
      "Overthinking",
      "Authoritarian tendencies",
      "Inflexibility"
    ],
    growthAreas: [
      "Balancing ambition with empathy",
      "Staying open to alternative perspectives",
      "Ensuring vision serves everyone"
    ]
  },
  "ESTP": {
    id: "the-rational-strategist",
    name: "The Rational Strategist",
    description: "Clever and resourceful individuals who enjoy solving puzzles and playing with perception.",
    mbtiTypes: ["ESTP", "ISTP"],
    imageUrl: "https://8568c688ff74a9e443f63133d8b6cf01.cdn.bubble.io/f1734023830834x897617989392351200/intp-logician-female%201.png",
    traits: [
      {
        name: "Quick Thinking",
        description: "Able to make decisions rapidly and effectively.",
        score: 90
      },
      {
        name: "Strategic Cunning",
        description: "Uses cleverness and wit to navigate challenges.",
        score: 88
      },
      {
        name: "Charm",
        description: "Charismatic and engaging with others.",
        score: 85
      }
    ],
    strengths: [
      "Quick thinking",
      "Wit",
      "Resourcefulness"
    ],
    weaknesses: [
      "Manipulativeness",
      "Arrogance",
      "Exploitation"
    ],
    growthAreas: [
      "Using cunning for good",
      "Avoiding selfishness",
      "Building trust"
    ]
  }
};