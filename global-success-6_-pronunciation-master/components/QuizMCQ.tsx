import React, { useState } from 'react';
import { QuestionMCQ } from '../types';
import Button from './Button';

interface QuizMCQProps {
  title: string;
  questions: QuestionMCQ[];
  onComplete: (score: number, total: number) => void;
}

const QuizMCQ: React.FC<QuizMCQProps> = ({ title, questions, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleSelect = (idx: number) => {
    if (isChecked) return;
    setSelectedOption(idx);
  };

  const handleCheck = () => {
    setIsChecked(true);
    if (selectedOption === currentQuestion.correctIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onComplete(score + (selectedOption === currentQuestion.correctIndex ? 1 : 0), questions.length);
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsChecked(false);
    }
  };

  const renderWordWithHighlight = (text: string, highlight: string) => {
    if (!highlight) return <span>{text}</span>;
    
    const parts = text.split(highlight);
    // Simple handling for first occurrence to avoid complex regex for this use case
    // NOTE: If the highlight appears multiple times, this simple split might highlight all. 
    // Given the context of simple words, highlighting all occurrences of a sound is usually correct or acceptable.
    // However, to be precise, we can use a more robust replacement.
    
    const index = text.indexOf(highlight);
    if (index === -1) return <span>{text}</span>;

    const before = text.substring(0, index);
    const match = text.substring(index, index + highlight.length);
    const after = text.substring(index + highlight.length);

    return (
      <span>
        {before}
        <span className="underline decoration-2 decoration-primary font-bold text-primary">{match}</span>
        {after}
      </span>
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <span className="text-sm font-semibold text-primary bg-indigo-50 px-3 py-1 rounded-full">
            {currentIndex + 1} / {questions.length}
          </span>
        </div>

        <div className="mb-6">
          <p className="text-lg text-gray-600 mb-6 font-medium">
            Choose the word with the different pronunciation of the underlined part:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentQuestion.options.map((option, idx) => {
              let btnClass = "border-2 hover:bg-gray-50 text-lg py-3 px-4 font-medium text-gray-700 flex flex-col items-center justify-center min-h-[80px]";
              
              if (isChecked) {
                if (idx === currentQuestion.correctIndex) {
                  btnClass = "border-success bg-success/5 text-success font-bold";
                } else if (idx === selectedOption) {
                  btnClass = "border-error bg-error/5 text-error";
                } else {
                  btnClass = "border-gray-100 opacity-60";
                }
              } else if (selectedOption === idx) {
                btnClass = "border-primary bg-indigo-50 text-primary";
              } else {
                btnClass = "border-gray-200";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`rounded-2xl transition-all duration-200 ${btnClass}`}
                  disabled={isChecked}
                >
                  <span className="text-xl mb-1">{renderWordWithHighlight(option.text, option.highlight)}</span>
                  {isChecked && (
                    <span className={`text-sm font-mono animate-in fade-in slide-in-from-top-1 ${idx === currentQuestion.correctIndex ? 'text-success' : 'text-gray-400'}`}>
                      {option.ipa}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {isChecked && (
          <div className="mb-6 p-4 bg-amber-50 border border-amber-100 rounded-xl animate-in fade-in slide-in-from-bottom-2">
            <h4 className="font-bold text-amber-800 mb-1 flex items-center">
              <span className="mr-2 text-xl">💡</span> Explanation
            </h4>
            <p className="text-amber-900/80 text-sm leading-relaxed">
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        <div className="flex justify-end pt-4 border-t border-gray-100">
          {!isChecked ? (
            <Button 
              onClick={handleCheck} 
              disabled={selectedOption === null}
              className="w-full sm:w-auto"
            >
              Check Answer
            </Button>
          ) : (
            <Button 
              onClick={handleNext} 
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {isLastQuestion ? 'Finish' : 'Next Question'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizMCQ;