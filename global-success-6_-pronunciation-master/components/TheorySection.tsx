import React from 'react';
import { THEORY_DATA } from '../constants';

const TheorySection: React.FC = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto p-4 pb-24">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Pronunciation Theory</h2>
        <p className="text-gray-500">Key takeaways for Grade 6 Semester 1</p>
      </div>

      {THEORY_DATA.map((section, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-indigo-50 p-4 border-b border-indigo-100">
            <h3 className="text-xl font-bold text-indigo-900">{section.title}</h3>
          </div>
          <div className="p-6 grid gap-6 md:grid-cols-2">
            {section.pairs.map((pair, pIdx) => (
              <div key={pIdx} className="bg-white rounded-xl border-2 border-dashed border-gray-200 p-4 hover:border-indigo-300 transition-colors">
                <h4 className="text-lg font-bold text-primary mb-2 flex items-center justify-between">
                  {pair.pair}
                </h4>
                <p className="text-sm text-gray-600 mb-3">{pair.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {pair.examples.map((ex, eIdx) => (
                    <span key={eIdx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {ex.word} <span className="text-gray-400 ml-1">{ex.ipa}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
        <h3 className="text-lg font-bold text-amber-900 mb-3">
          <span className="mr-2">💡</span> Rule for 's' Endings
        </h3>
        <ul className="space-y-3 text-amber-900/80 text-sm">
          <li className="flex items-start">
            <span className="font-bold min-w-[30px] text-amber-600">/s/</span>
            <span>When word ends in voiceless sounds: <b>/p/, /k/, /t/, /f/, /θ/</b> (e.g., stops, books).</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold min-w-[30px] text-amber-600">/z/</span>
            <span>When word ends in voiced sounds: <b>/b/, /d/, /g/, /l/, /m/, /n/, /r/, /v/</b> or vowels (e.g., bags, plays).</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold min-w-[30px] text-amber-600">/ɪz/</span>
            <span>When word ends in sibilant sounds: <b>/s/, /z/, /ʃ/, /tʃ/, /dʒ/</b> (e.g., watches, boxes).</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TheorySection;