import React from 'react';

// prettier-ignore
const alphabets = [
  'A','B', 'C','D','E',
  'F','G','H','I','J',
  'K', 'L', 'M', 'N',
  'O','P','Q','R','S',
  'T', 'U', 'V', 'W', 
  'X','Y','Z',
];

function useId() {
  const randomLetters = [];

  while (randomLetters.length < 2) {
    const randomLetter = alphabets[Math.floor(Math.random() * alphabets.length)];
    randomLetters.push(randomLetter);
  }

  const randomNumbers = Array.from({ length: 4 }, () =>
    Math.floor(Math.random() * 8 + 1)
  );

  return randomLetters.join('') + randomNumbers.join('');
}

export default useId;
