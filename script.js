function mapLetters(word) {
  const letterIndexes = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (!letterIndexes[letter]) {
      letterIndexes[letter] = [];
    }

    letterIndexes[letter].push(i);
  }

  return letterIndexes;
}

// Get user input using prompt
const word = prompt("Enter word");

// Call the mapLetters function with the user input
const result = mapLetters(word);

// Display the result using alert
alert(JSON.stringify(result));
