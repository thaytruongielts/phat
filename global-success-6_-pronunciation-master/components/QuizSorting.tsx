import React, { useState } from 'react';
import { WordSorting } from '../types';
import Button from './Button';

interface QuizSortingProps {
  words: WordSorting[];
  onComplete: (score: number, total: number) => void;
}

const QuizSorting: React.FC<QuizSortingProps> = ({ words, onComplete }) => {
  // Simple state to track remaining words and user progress
  const [queue, setQueue] = useState(words);
  const [sList, setSList] = useState<WordSorting[]>([]);
  const [zList, setZList] = useState<WordSorting[]>([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const currentWord = queue[0];

  const handleSort = (category: 's' | 'z') => {
    if (!currentWord) return;

    const isCorrect = currentWord.category === category;
    
    if (isCorrect) {
      setScore(s => s + 1);
      setFeedback('correct');
    } else {
      setFeedback('wrong');
    }

    // Delay to show feedback before moving next
    setTimeout(() => {
      if (category === 's') {
        setSList(prev => [currentWord, ...prev]);
      } else {
        setZList(prev => [currentWord, ...prev]);
      }
      setQueue(prev => prev.slice(1));
      setFeedback(null);
    }, 600);
  };

  const isFinished = queue.length === 0;

  if (isFinished) {
    return (
      <div className="max-w-2xl mx-auto p-4 text-center">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Well Done!</h2>
          <p className="text-gray-600 mb-8">You categorized all the words.</p>
          <div className="flex justify-center gap-8 mb-8">
             <div className="text-center">
                <div className="text-4xl font-bold text-primary">{sList.length}</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">/s/ Words</div>
             </div>
             <div className="text-center">
                <div className="text-4xl font-bold text-secondary">{zList.length}</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">/z/ Words</div>
             </div>
          </div>
          <Button onClick={() => onComplete(score, words.length)}>Continue</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Classify the 'S' sound</h3>
        <p className="text-gray-500">Is the 's' pronounced as /s/ or /z/?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* S Bucket */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 min-h-[300px]">
          <h4 className="text-2xl font-bold text-center text-primary mb-4">/s/</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {sList.map(w => (
              <span key={w.id} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium animate-in fade-in zoom-in duration-300">
                {w.word}
              </span>
            ))}
          </div>
        </div>

        {/* Center Controller */}
        <div className="flex flex-col items-center justify-center min-h-[300px] bg-white rounded-3xl shadow-xl border border-gray-100 p-6 relative overflow-hidden">
          {feedback && (
             <div className={`absolute inset-0 z-10 flex items-center justify-center ${feedback === 'correct' ? 'bg-success/90' : 'bg-error/90'} transition-all duration-300`}>
                <span className="text-white text-4xl font-bold">{feedback === 'correct' ? 'Correct!' : 'Oops!'}</span>
             </div>
          )}
          
          <div className="mb-8">
             <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Current Word</span>
             <h2 className="text-4xl font-black text-gray-800 mt-2">{currentWord.word}</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full">
            <Button variant="primary" onClick={() => handleSort('s')}>/s/</Button>
            <Button variant="secondary" onClick={() => handleSort('z')}>/z/</Button>
          </div>
          <div className="mt-6 text-sm text-gray-400">
            Remaining: {queue.length}
          </div>
        </div>

        {/* Z Bucket */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 min-h-[300px]">
          <h4 className="text-2xl font-bold text-center text-secondary mb-4">/z/</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {zList.map(w => (
              <span key={w.id} className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium animate-in fade-in zoom-in duration-300">
                {w.word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSorting;