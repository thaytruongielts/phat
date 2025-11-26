import React, { useState, useRef, useEffect } from 'react';
import { ListeningPair } from '../types';
import Button from './Button';
import { playTextToSpeech } from '../services/geminiService';

interface QuizListeningProps {
  pairs: ListeningPair[];
  onComplete: (score: number, total: number) => void;
}

const QuizListening: React.FC<QuizListeningProps> = ({ pairs, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [targetWordIsA, setTargetWordIsA] = useState<boolean>(true); // To randomize which word is played
  const [isPlaying, setIsPlaying] = useState(false);
  const [selected, setSelected] = useState<'A' | 'B' | null>(null);
  const [result, setResult] = useState<'correct' | 'wrong' | null>(null);
  const [score, setScore] = useState(0);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const currentPair = pairs[currentIndex];
  const isLast = currentIndex === pairs.length - 1;

  // Init Audio Context on mount
  useEffect(() => {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    setAudioContext(ctx);
    return () => {
      ctx.close();
    };
  }, []);

  // Randomize which word is played for each new question
  useEffect(() => {
    setTargetWordIsA(Math.random() > 0.5);
    setSelected(null);
    setResult(null);
    setErrorMsg(null);
  }, [currentIndex]);

  const handlePlay = async () => {
    if (!audioContext) return;
    if (audioContext.state === 'suspended') {
      await audioContext.resume();
    }
    
    setIsPlaying(true);
    setErrorMsg(null);
    const wordToPlay = targetWordIsA ? currentPair.wordA : currentPair.wordB;

    try {
      await playTextToSpeech(wordToPlay, audioContext);
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Unable to play audio. Please ensure API_KEY is set in environment.");
    } finally {
      setIsPlaying(false);
    }
  };

  const handleSelect = (choice: 'A' | 'B') => {
    if (result) return; // Already answered
    
    setSelected(choice);
    const isCorrect = (choice === 'A' && targetWordIsA) || (choice === 'B' && !targetWordIsA);
    
    if (isCorrect) {
      setResult('correct');
      setScore(s => s + 1);
    } else {
      setResult('wrong');
    }
  };

  const handleNext = () => {
    if (isLast) {
      onComplete(score + (result === 'correct' ? 0 : 0), pairs.length);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Listen and Choose</h3>
        <p className="text-gray-500 mb-8">Click play, then select the word you heard.</p>

        <div className="mb-8">
           <button 
             onClick={handlePlay}
             disabled={isPlaying}
             className="w-24 h-24 rounded-full bg-primary text-white shadow-xl shadow-indigo-200 flex items-center justify-center mx-auto hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
           >
             {isPlaying ? (
               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
             ) : (
               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
             )}
           </button>
           {errorMsg && <p className="text-error text-sm mt-4 bg-red-50 p-2 rounded-lg">{errorMsg}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <button 
            onClick={() => handleSelect('A')}
            disabled={!!result}
            className={`p-6 rounded-2xl border-2 text-xl font-bold transition-all ${
              selected === 'A' 
                ? (result === 'correct' ? 'border-success bg-success/10 text-success' : 'border-error bg-error/10 text-error')
                : (result && targetWordIsA ? 'border-success text-success border-dashed' : 'border-gray-200 hover:border-indigo-300')
            }`}
          >
            {currentPair.wordA}
            <div className="text-xs font-normal text-gray-400 mt-1">{currentPair.transcriptA}</div>
          </button>

          <button 
            onClick={() => handleSelect('B')}
            disabled={!!result}
            className={`p-6 rounded-2xl border-2 text-xl font-bold transition-all ${
              selected === 'B' 
                ? (result === 'correct' ? 'border-success bg-success/10 text-success' : 'border-error bg-error/10 text-error')
                : (result && !targetWordIsA ? 'border-success text-success border-dashed' : 'border-gray-200 hover:border-indigo-300')
            }`}
          >
            {currentPair.wordB}
            <div className="text-xs font-normal text-gray-400 mt-1">{currentPair.transcriptB}</div>
          </button>
        </div>

        {result && (
          <div className="animate-in slide-in-from-bottom-2 fade-in">
            <Button onClick={handleNext}>
              {isLast ? 'Finish Exercise' : 'Next Pair'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizListening;