import { archetypes } from '../data/archetypes';
import type { CharacterArchetype, MBTIScores } from '../types/personality';

export function getCharacterArchetype(mbtiType: string): CharacterArchetype {
  // Find the archetype that includes this MBTI type in its mbtiTypes array
  const archetype = Object.values(archetypes).find(
    arch => arch.mbtiTypes.includes(mbtiType)
  );

  if (!archetype) {
    // Fallback to ENFP archetype if no match is found
    return archetypes.ENTP;
  }

  return archetype;
}

export function calculateTraitScores(scores: MBTIScores): number[] {
  // Convert MBTI scores to trait percentages
  const traits = [];
  const maxScore = 100;
  
  // Example calculation - adjust based on your scoring logic
  for (const [category, score] of Object.entries(scores)) {
    const normalizedScore = ((score + 20) / 40) * 100; // Normalize to 0-100
    traits.push(Math.min(Math.max(normalizedScore, 0), maxScore));
  }
  
  return traits;
}