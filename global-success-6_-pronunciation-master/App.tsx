import React, { useState } from 'react';
import { AppState, ExerciseType } from './types';
import { 
  VOWEL_QUESTIONS, 
  CONSONANT_QUESTIONS, 
  GENERAL_QUESTIONS, 
  S_SORTING_WORDS,
  LISTENING_PAIRS 
} from './constants';
import TheorySection from './components/TheorySection';
import QuizMCQ from './components/QuizMCQ';
import QuizSorting from './components/QuizSorting';
import QuizListening from './components/QuizListening';
import Button from './components/Button';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.THEORY);
  const [currentExercise, setCurrentExercise] = useState<ExerciseType | null>(null);
  const [quizResult, setQuizResult] = useState<{score: number, total: number} | null>(null);

  const handleStartExercise = (type: ExerciseType) => {
    setAppState(AppState.PRACTICE);
    setCurrentExercise(type);
    setQuizResult(null);
  };

  const handleQuizComplete = (score: number, total: number) => {
    setQuizResult({ score, total });
  };

  const resetToMenu = () => {
    setAppState(AppState.PRACTICE);
    setCurrentExercise(null);
    setQuizResult(null);
  };

  const renderPracticeMenu = () => (
    <div className="max-w-4xl mx-auto p-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
       <div className="md:col-span-full text-center mb-8">
         <h2 className="text-3xl font-extrabold text-gray-900">Practice Zone</h2>
         <p className="text-gray-500">Select an exercise to start practicing</p>
       </div>

       <button onClick={() => handleStartExercise(ExerciseType.VOWEL_MCQ)} className="group bg-white p-6 rounded-2xl shadow-sm border hover:border-primary hover:shadow-lg transition-all text-left">
         <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">🗣️</div>
         <h3 className="font-bold text-lg text-gray-800">Vowel Sounds</h3>
         <p className="text-sm text-gray-500 mt-2">Find the odd vowel sound out.</p>
       </button>

       <button onClick={() => handleStartExercise(ExerciseType.CONSONANT_MCQ)} className="group bg-white p-6 rounded-2xl shadow-sm border hover:border-secondary hover:shadow-lg transition-all text-left">
         <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">🤐</div>
         <h3 className="font-bold text-lg text-gray-800">Consonant Sounds</h3>
         <p className="text-sm text-gray-500 mt-2">Distinguish consonants.</p>
       </button>

       <button onClick={() => handleStartExercise(ExerciseType.GENERAL_MCQ)} className="group bg-white p-6 rounded-2xl shadow-sm border hover:border-accent hover:shadow-lg transition-all text-left">
         <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
         <h3 className="font-bold text-lg text-gray-800">Mixed Practice</h3>
         <p className="text-sm text-gray-500 mt-2">General pronunciation challenge.</p>
       </button>

       <button onClick={() => handleStartExercise(ExerciseType.S_ENDING_SORT)} className="group bg-white p-6 rounded-2xl shadow-sm border hover:border-success hover:shadow-lg transition-all text-left md:col-span-1 lg:col-span-1.5">
         <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">🐍</div>
         <h3 className="font-bold text-lg text-gray-800">'S' Ending Sort</h3>
         <p className="text-sm text-gray-500 mt-2">Is it /s/ or /z/? Sort them out!</p>
       </button>

       <button onClick={() => handleStartExercise(ExerciseType.LISTENING)} className="group bg-white p-6 rounded-2xl shadow-sm border hover:border-blue-500 hover:shadow-lg transition-all text-left md:col-span-2 lg:col-span-1.5">
         <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">🎧</div>
         <h3 className="font-bold text-lg text-gray-800">AI Listening Challenge</h3>
         <p className="text-sm text-gray-500 mt-2">Powered by Gemini. Listen and identify.</p>
       </button>
    </div>
  );

  const renderActiveExercise = () => {
    if (quizResult) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-4 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Exercise Complete!</h2>
          <p className="text-xl text-gray-600 mb-8">
            You scored <span className="font-bold text-primary text-2xl">{quizResult.score}</span> out of <span className="font-bold text-gray-800 text-2xl">{quizResult.total}</span>
          </p>
          <div className="flex gap-4">
             <Button onClick={() => setQuizResult(null)} variant="outline">Try Again</Button>
             <Button onClick={resetToMenu}>Back to Menu</Button>
          </div>
        </div>
      );
    }

    switch (currentExercise) {
      case ExerciseType.VOWEL_MCQ:
        return <QuizMCQ title="Vowel Sound Challenge" questions={VOWEL_QUESTIONS} onComplete={handleQuizComplete} />;
      case ExerciseType.CONSONANT_MCQ:
        return <QuizMCQ title="Consonant Sound Challenge" questions={CONSONANT_QUESTIONS} onComplete={handleQuizComplete} />;
      case ExerciseType.GENERAL_MCQ:
        return <QuizMCQ title="Mixed Pronunciation" questions={GENERAL_QUESTIONS} onComplete={handleQuizComplete} />;
      case ExerciseType.S_ENDING_SORT:
        return <QuizSorting words={S_SORTING_WORDS} onComplete={handleQuizComplete} />;
      case ExerciseType.LISTENING:
        return <QuizListening pairs={LISTENING_PAIRS} onComplete={handleQuizComplete} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-gradient-to-br from-primary to-indigo-400 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200">
               GS
             </div>
             <div>
               <h1 className="text-lg font-bold text-gray-900 leading-none">Grade 6 English</h1>
               <p className="text-xs text-gray-500 font-medium">Pronunciation Master</p>
             </div>
          </div>
          
          <nav className="flex bg-gray-100 p-1 rounded-lg">
            <button 
              onClick={() => { setAppState(AppState.THEORY); setCurrentExercise(null); }}
              className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${appState === AppState.THEORY ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Theory
            </button>
            <button 
              onClick={() => { setAppState(AppState.PRACTICE); setCurrentExercise(null); }}
              className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${appState === AppState.PRACTICE ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Practice
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-8">
        {appState === AppState.THEORY && <TheorySection />}
        {appState === AppState.PRACTICE && !currentExercise && renderPracticeMenu()}
        {appState === AppState.PRACTICE && currentExercise && (
          <div>
            <div className="max-w-6xl mx-auto px-4 mb-4">
              <button onClick={resetToMenu} className="text-gray-500 hover:text-primary flex items-center gap-1 text-sm font-bold">
                ← Back to Menu
              </button>
            </div>
            {renderActiveExercise()}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">© 2024 Global Success Grade 6 Helper. Powered by Gemini API.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;