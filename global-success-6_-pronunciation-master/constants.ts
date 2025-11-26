import { QuestionMCQ, WordSorting, ListeningPair, TheorySectionData } from './types';

export const THEORY_DATA: TheorySectionData[] = [
  {
    title: 'Vowels (Nguyên âm)',
    pairs: [
      {
        pair: '/ɑː/ vs /ʌ/',
        description: '/ɑː/ (Long A): Hạ nhẹ cằm, lưỡi thấp, dài hơi. /ʌ/ (Short U): Thả lỏng, ngắn, dứt khoát.',
        examples: [
          { word: 'art', ipa: '/ɑːt/' },
          { word: 'love', ipa: '/lʌv/' }
        ]
      },
      {
        pair: '/ɪ/ vs /i:/',
        description: '/i:/ (Long E): Cười rộng miệng, kéo dài. /ɪ/ (Short I): Ngắn, thả lỏng môi.',
        examples: [
          { word: 'street', ipa: '/striːt/' },
          { word: 'busy', ipa: '/ˈbɪz.i/' }
        ]
      },
      {
        pair: '/e/ vs /æ/',
        description: '/e/: Miệng mở vừa, ngắn. /æ/: Miệng mở rộng chữ A, phát âm lai giữa a và e.',
        examples: [
          { word: 'men', ipa: '/men/' },
          { word: 'man', ipa: '/mæn/' }
        ]
      },
      {
        pair: '/əʊ/ vs /aʊ/',
        description: '/əʊ/: Ơ + U (như "go"). /aʊ/: A + U (như "now").',
        examples: [
          { word: 'show', ipa: '/ʃəʊ/' },
          { word: 'shout', ipa: '/ʃaʊt/' }
        ]
      }
    ]
  },
  {
    title: 'Consonants (Phụ âm)',
    pairs: [
      {
        pair: '/s/ vs /z/',
        description: '/s/: Vô thanh (cổ họng không rung). /z/: Hữu thanh (cổ họng rung).',
        examples: [
          { word: 'sink', ipa: '/sɪŋk/' },
          { word: 'zoo', ipa: '/zuː/' }
        ]
      },
      {
        pair: '/θ/ vs /ð/',
        description: 'Cả hai đều đặt lưỡi giữa hai hàm răng. /θ/: Thổi hơi (thin). /ð/: Rung dây thanh (this).',
        examples: [
          { word: 'think', ipa: '/θɪŋk/' },
          { word: 'this', ipa: '/ðɪs/' }
        ]
      }
    ]
  }
];

export const VOWEL_QUESTIONS: QuestionMCQ[] = [
  { 
    id: 1, 
    options: [
      { text: 'robot', highlight: 'o', ipa: '/ˈrəʊ.bɒt/' },
      { text: 'grow', highlight: 'ow', ipa: '/ɡrəʊ/' },
      { text: 'ground', highlight: 'ou', ipa: '/ɡraʊnd/' },
      { text: 'show', highlight: 'ow', ipa: '/ʃəʊ/' }
    ], 
    correctIndex: 2,
    explanation: "'ground' contains /aʊ/, while the others contain /əʊ/."
  },
  { 
    id: 2, 
    options: [
      { text: 'planet', highlight: 'e', ipa: '/ˈplæn.ɪt/' },
      { text: 'key', highlight: 'ey', ipa: '/kiː/' },
      { text: 'Greece', highlight: 'ee', ipa: '/ɡriːs/' },
      { text: 'feeling', highlight: 'ee', ipa: '/ˈfiː.lɪŋ/' }
    ], 
    correctIndex: 0,
    explanation: "'planet' has the /ɪ/ sound, while the others have the long /i:/ sound."
  },
  { 
    id: 3, 
    options: [
      { text: 'wrap', highlight: 'a', ipa: '/ræp/' },
      { text: 'west', highlight: 'e', ipa: '/west/' },
      { text: 'wet', highlight: 'e', ipa: '/wet/' },
      { text: 'wreck', highlight: 'e', ipa: '/rek/' }
    ], 
    correctIndex: 0,
    explanation: "'wrap' is pronounced with /æ/, while the others use /e/."
  },
  { 
    id: 4, 
    options: [
      { text: 'harsh', highlight: 'ar', ipa: '/hɑːʃ/' },
      { text: 'heart', highlight: 'ear', ipa: '/hɑːt/' },
      { text: 'rubbish', highlight: 'u', ipa: '/ˈrʌb.ɪʃ/' },
      { text: 'bark', highlight: 'ar', ipa: '/bɑːk/' }
    ], 
    correctIndex: 2,
    explanation: "'rubbish' uses the short /ʌ/ sound, while the others use the long /ɑː/."
  },
  { 
    id: 5, 
    options: [
      { text: 'broken', highlight: 'o', ipa: '/ˈbrəʊ.kən/' },
      { text: 'brown', highlight: 'ow', ipa: '/braʊn/' },
      { text: 'proud', highlight: 'ou', ipa: '/praʊd/' },
      { text: 'plough', highlight: 'ou', ipa: '/plaʊ/' }
    ], 
    correctIndex: 0,
    explanation: "'broken' uses /əʊ/, while the others use /aʊ/."
  },
  { 
    id: 6, 
    options: [
      { text: 'tip', highlight: 'i', ipa: '/tɪp/' },
      { text: 'piece', highlight: 'ie', ipa: '/piːs/' },
      { text: 'miss', highlight: 'i', ipa: '/mɪs/' },
      { text: 'tick', highlight: 'i', ipa: '/tɪk/' }
    ], 
    correctIndex: 1,
    explanation: "'piece' has the long /i:/ sound, while the others are short /ɪ/."
  },
  { 
    id: 7, 
    options: [
      { text: 'president', highlight: 'e', ipa: '/ˈprez.ɪ.dənt/' },
      { text: 'preparation', highlight: 'e', ipa: '/ˌprep.ərˈeɪ.ʃən/' },
      { text: 'practice', highlight: 'a', ipa: '/ˈpræk.tɪs/' },
      { text: 'replicate', highlight: 'e', ipa: '/ˈrep.lɪ.keɪt/' }
    ], 
    correctIndex: 2,
    explanation: "'practice' contains /æ/, while the others contain /e/."
  },
  { 
    id: 8, 
    options: [
      { text: 'after', highlight: 'a', ipa: '/ˈɑːf.tər/' },
      { text: 'drama', highlight: 'a', ipa: '/ˈdrɑː.mə/' },
      { text: 'harsh', highlight: 'a', ipa: '/hɑːʃ/' },
      { text: 'hush', highlight: 'u', ipa: '/hʌʃ/' }
    ], 
    correctIndex: 3,
    explanation: "'hush' is pronounced with /ʌ/, others with /ɑː/."
  },
  { 
    id: 9, 
    options: [
      { text: 'solar', highlight: 'o', ipa: '/ˈsəʊ.lər/' },
      { text: 'polar', highlight: 'o', ipa: '/ˈpəʊ.lər/' },
      { text: 'cold', highlight: 'o', ipa: '/kəʊld/' },
      { text: 'count', highlight: 'ou', ipa: '/kaʊnt/' }
    ], 
    correctIndex: 3,
    explanation: "'count' uses /aʊ/, while the others use /əʊ/."
  },
  { 
    id: 10, 
    options: [
      { text: 'reduce', highlight: 're', ipa: '/rɪˈdjuːs/' },
      { text: 'reuse', highlight: 're', ipa: '/ˌriːˈjuːz/' },
      { text: 'recycle', highlight: 're', ipa: '/ˌriːˈsaɪ.kəl/' },
      { text: 'replay', highlight: 're', ipa: '/ˌriːˈpleɪ/' }
    ], 
    correctIndex: 0,
    explanation: "'reduce' starts with /rɪ/, others start with /ri:/."
  }
];

export const CONSONANT_QUESTIONS: QuestionMCQ[] = [
  { 
    id: 1, 
    options: [
      { text: 'machine', highlight: 'ch', ipa: '/məˈʃiːn/' },
      { text: 'washing', highlight: 'sh', ipa: '/ˈwɒʃ.ɪŋ/' },
      { text: 'seashore', highlight: 's', ipa: '/ˈsiː.ʃɔːr/' },
      { text: 'trash', highlight: 'sh', ipa: '/træʃ/' }
    ], 
    correctIndex: 2,
    explanation: "'seashore' (initial s) is /s/, while the others are /ʃ/."
  },
  { 
    id: 2, 
    options: [
      { text: 'space', highlight: 'c', ipa: '/speɪs/' },
      { text: 'brace', highlight: 'c', ipa: '/breɪs/' },
      { text: 'special', highlight: 'c', ipa: '/ˈspeʃ.əl/' },
      { text: 'pace', highlight: 'c', ipa: '/peɪs/' }
    ], 
    correctIndex: 2,
    explanation: "'special' uses the /ʃ/ sound, while the others use /s/."
  },
  { 
    id: 3, 
    options: [
      { text: 'dislike', highlight: 'd', ipa: '/dɪˈslaɪk/' },
      { text: 'decorate', highlight: 'd', ipa: '/ˈdek.ə.reɪt/' },
      { text: 'food', highlight: 'd', ipa: '/fuːd/' },
      { text: 'town', highlight: 't', ipa: '/taʊn/' }
    ], 
    correctIndex: 3,
    explanation: "'town' uses the voiceless /t/, others use voiced /d/."
  },
  { 
    id: 4, 
    options: [
      { text: 'breath', highlight: 'th', ipa: '/breθ/' },
      { text: 'breathe', highlight: 'th', ipa: '/briːð/' },
      { text: 'thing', highlight: 'th', ipa: '/θɪŋ/' },
      { text: 'threat', highlight: 'th', ipa: '/θret/' }
    ], 
    correctIndex: 1,
    explanation: "'breathe' is voiced /ð/, while the others are voiceless /θ/."
  },
  { 
    id: 5, 
    options: [
      { text: 'ocean', highlight: 'c', ipa: '/ˈəʊ.ʃən/' },
      { text: 'station', highlight: 't', ipa: '/ˈsteɪ.ʃən/' },
      { text: 'percent', highlight: 'c', ipa: '/pəˈsent/' },
      { text: 'fashion', highlight: 'sh', ipa: '/ˈfæʃ.ən/' }
    ], 
    correctIndex: 2,
    explanation: "'percent' uses /s/, while the others use /ʃ/."
  }
];

export const GENERAL_QUESTIONS: QuestionMCQ[] = [
  { 
    id: 1, 
    options: [
      { text: 'charity', highlight: 'ch', ipa: '/ˈtʃær.ə.ti/' },
      { text: 'character', highlight: 'ch', ipa: '/ˈkær.ək.tər/' },
      { text: 'crack', highlight: 'c', ipa: '/kræk/' },
      { text: 'calm', highlight: 'c', ipa: '/kɑːm/' }
    ], 
    correctIndex: 0,
    explanation: "'charity' starts with /tʃ/, others with /k/."
  },
  { 
    id: 2, 
    options: [
      { text: 'funny', highlight: 'u', ipa: '/ˈfʌn.i/' },
      { text: 'sunny', highlight: 'u', ipa: '/ˈsʌn.i/' },
      { text: 'hardly', highlight: 'ar', ipa: '/ˈhɑːd.li/' },
      { text: 'roughly', highlight: 'ou', ipa: '/ˈrʌf.li/' }
    ], 
    correctIndex: 2,
    explanation: "'hardly' uses /ɑː/, while the others use /ʌ/."
  },
  { 
    id: 3, 
    options: [
      { text: 'postcard', highlight: 'o', ipa: '/ˈpəʊst.kɑːd/' },
      { text: 'pound', highlight: 'ou', ipa: '/paʊnd/' },
      { text: 'photo', highlight: 'o', ipa: '/ˈfəʊ.təʊ/' },
      { text: 'alone', highlight: 'o', ipa: '/əˈləʊn/' }
    ], 
    correctIndex: 1,
    explanation: "'pound' uses /aʊ/, while the others use /əʊ/."
  },
  { 
    id: 4, 
    options: [
      { text: 'gymnast', highlight: 'g', ipa: '/ˈdʒɪm.næst/' },
      { text: 'karate', highlight: 'k', ipa: '/kəˈrɑː.ti/' },
      { text: 'quay', highlight: 'qu', ipa: '/kiː/' },
      { text: 'racket', highlight: 'ck', ipa: '/ˈræk.ɪt/' }
    ], 
    correctIndex: 0,
    explanation: "'gymnast' starts with /dʒ/, others with /k/."
  },
  { 
    id: 5, 
    options: [
      { text: 'compass', highlight: 'ss', ipa: '/ˈkʌm.pəs/' },
      { text: 'flash', highlight: 'sh', ipa: '/flæʃ/' },
      { text: 'famous', highlight: 's', ipa: '/ˈfeɪ.məs/' },
      { text: 'suncream', highlight: 's', ipa: '/ˈsʌn.kriːm/' }
    ], 
    correctIndex: 1,
    explanation: "'flash' ends in /ʃ/, others contain /s/."
  }
];

export const S_SORTING_WORDS: WordSorting[] = [
  { id: 1, word: 'accounts', category: 's' },
  { id: 2, word: 'adventures', category: 'z' },
  { id: 3, word: 'benefits', category: 's' },
  { id: 4, word: 'builds', category: 'z' },
  { id: 5, word: 'careers', category: 'z' },
  { id: 6, word: 'develops', category: 's' },
  { id: 7, word: 'problems', category: 'z' },
  { id: 8, word: 'articles', category: 'z' },
  { id: 9, word: 'accepts', category: 's' },
  { id: 10, word: 'achieves', category: 'z' },
  { id: 11, word: 'believes', category: 'z' },
  { id: 12, word: 'considers', category: 'z' },
  { id: 13, word: 'helps', category: 's' },
  { id: 14, word: 'joins', category: 'z' },
  { id: 15, word: 'protects', category: 's' },
  { id: 16, word: 'recommends', category: 'z' },
  { id: 17, word: 'budgets', category: 's' },
  { id: 18, word: 'characters', category: 'z' },
  { id: 19, word: 'competitions', category: 'z' },
  { id: 20, word: 'experiments', category: 's' },
];

export const LISTENING_PAIRS: ListeningPair[] = [
  { id: 1, wordA: 'come', wordB: 'calm', transcriptA: '/kʌm/', transcriptB: '/kɑːm/' },
  { id: 2, wordA: 'bill', wordB: 'pill', transcriptA: '/bɪl/', transcriptB: '/pɪl/' },
  { id: 3, wordA: 'hit', wordB: 'heat', transcriptA: '/hɪt/', transcriptB: '/hiːt/' },
  { id: 4, wordA: 'seat', wordB: 'sheet', transcriptA: '/siːt/', transcriptB: '/ʃiːt/' },
  { id: 5, wordA: 'loathe', wordB: 'loath', transcriptA: '/ləʊð/', transcriptB: '/ləʊθ/' },
  { id: 6, wordA: 'know', wordB: 'now', transcriptA: '/nəʊ/', transcriptB: '/naʊ/' },
  { id: 7, wordA: 'hush', wordB: 'harsh', transcriptA: '/hʌʃ/', transcriptB: '/hɑːʃ/' },
  { id: 8, wordA: 'gas', wordB: 'guess', transcriptA: '/ɡæs/', transcriptB: '/ɡes/' },
  { id: 9, wordA: 'sort', wordB: 'short', transcriptA: '/sɔːt/', transcriptB: '/ʃɔːt/' },
  { id: 10, wordA: 'hose', wordB: 'house', transcriptA: '/həʊz/', transcriptB: '/haʊs/' },
  { id: 11, wordA: 'bore', wordB: 'pour', transcriptA: '/bɔːr/', transcriptB: '/pɔːr/' },
  { id: 12, wordA: 'clothe', wordB: 'cloth', transcriptA: '/kləʊð/', transcriptB: '/klɒθ/' },
  { id: 13, wordA: 'marry', wordB: 'merry', transcriptA: '/ˈmær.i/', transcriptB: '/ˈmer.i/' },
  { id: 14, wordA: 'sleep', wordB: 'slip', transcriptA: '/sliːp/', transcriptB: '/slɪp/' },
  { id: 15, wordA: 'dear', wordB: 'tear', transcriptA: '/dɪər/', transcriptB: '/tɪər/' }
];