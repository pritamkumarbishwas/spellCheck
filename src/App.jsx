import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);

    const misspelledWords = {
      teh: "the",
      wrok: "work",
      fot: "for",
      exampl: "example"
    };

    const lowerCaseText = text.toLowerCase();

    const foundMisspelledWord = Object.keys(misspelledWords).find(word =>
      lowerCaseText.includes(word)
    );

    if (foundMisspelledWord) {
      const correctWord = misspelledWords[foundMisspelledWord];
      setSuggestion(`Did you mean: ${correctWord}?`);
    } else {
      setSuggestion('');
    }
  };

  return (
    <div>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type here..."
        data-cy="text-area"
      />
      {suggestion && <p data-cy="suggestion">{suggestion}</p>}
    </div>
  );
};

export default App;
