export interface PersonalityTrait {
  name: string;
  description: string;
  score: number;
}

export interface CharacterArchetype {
  id: string;
  name: string;
  description: string;
  mbtiTypes: string[];
  imageUrl: string;
  traits: PersonalityTrait[];
  strengths: string[];
  weaknesses: string[];
  growthAreas: string[];
}

export interface ArchetypeMapping {
  [key: string]: CharacterArchetype;
}