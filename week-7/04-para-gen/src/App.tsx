import { useState } from 'react';

import './App.css';

function App() {
  const [paragraph, setParagraph] = useState<string>('');
  const [wordCount, setWordCount] = useState<number>(0);

  const words = [
    'the',
    'quick',
    'brown',
    'fox',
    'jumps',
    'over',
    'lazy',
    'dog',
    'lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet',
    'consectetur',
    'adipiscing',
    'elit',
  ];

  const generateParagraph = (count: number) => {
    let result = '';
    for (let i = 0; i < count; i++) {
      result += words[Math.floor(Math.random() * words.length)] + ' ';
      if ((i + 1) % 8 === 0) result = result.trim() + '. ';
    }
    result = result.trim();
    if (!result.endsWith('.')) result += '.';
    setParagraph(result);
  };

  return (
    <div>
      <input
        type="number"
        value={wordCount}
        onChange={(e) => setWordCount(parseInt(e.target.value, 10))}
        placeholder="Enter word count"
      />
      <button onClick={() => generateParagraph(wordCount)}>Generate</button>
      <p>{paragraph}</p>
    </div>
  );
}

export default App;
