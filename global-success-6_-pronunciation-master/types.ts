export enum ExerciseType {
  VOWEL_MCQ = 'VOWEL_MCQ',
  CONSONANT_MCQ = 'CONSONANT_MCQ',
  GENERAL_MCQ = 'GENERAL_MCQ',
  S_ENDING_SORT = 'S_ENDING_SORT',
  LISTENING = 'LISTENING'
}

export interface QuestionOption {
  text: string;
  highlight: string;
  ipa: string;
}

export interface QuestionMCQ {
  id: number;
  options: QuestionOption[];
  correctIndex: number; // 0-3 corresponding to A-D
  explanation: string;
}

export interface WordSorting {
  id: number;
  word: string;
  category: 's' | 'z' | 'iz';
}

export interface ListeningPair {
  id: number;
  wordA: string;
  wordB: string;
  transcriptA: string; // Phonetic or label
  transcriptB: string;
}

export interface TheorySectionData {
  title: string;
  pairs: Array<{
    pair: string;
    description: string;
    examples: Array<{ word: string; ipa: string }>;
  }>;
}

export enum AppState {
  THEORY = 'THEORY',
  PRACTICE = 'PRACTICE'
}