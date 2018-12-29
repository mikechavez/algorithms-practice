class WordCloudData {
  constructor(inputString) {
    this.wordCounts = new Map();
    this.populateWordcounts(inputString);
    this.addWordToMap(word);
  }

  populateWordCounts(str) {
    // To store the words

    // To track beginning index of a word
    let wordStartIndex;
    // To track end of a word
    let wordLength;

    for (let i = 0; i < str.length; i++) {
      const char = str[i];

      // If at end of string, check if last char is a letter
      // and add last word to map
      if (i === inputString.length - 1) {
        if (this.isLetter(char)) {
          wordLength += 1;
        }

        if (wordLength > 0) {
          const word = str.slice(wordStartIndex, wordStartIndex + wordLength);
          this.addWordToMap(word);

          // if character is a space or emdash, add current word and reset current word
        } else if (char === " " || char === "\u2014") {
          if (wordLength > 0) {
            const word = str.slice(wordStartIndex, wordStartIndex + wordLength);
            this.addWordToMap(word);
            wordLength = 0;
          }
          // if character is start of ellipsis, add current word to map and reset current word
        } else if (char === ".") {
          if (i < inputString.length - 1 && inputString.charAt(i + 1) === ".") {
            if (wordLength > 0) {
              const word = str.slice(
                wordStartIndex,
                wordStartIndex + wordLength
              );
              this.addWordToMap(word);
              wordLength = 0;
            }
          }
          // If character is a letter or an apostrophe, add to current word
        } else if (this.isLetter(char) || char === "'") {
          if (currentWordLength === 0) {
            wordStartIndex = i;
          }
          wordLength += 1;
          // If character is a hyphen and surrounded by letters, add it to current word
        } else if (char === "-") {
          if (
            i > 0 &&
            this.isLetter(str.charAt(i - 1)) &&
            this.isLetter(str.charAt(i + 1))
          ) {
            if (wordLength === 0) {
              wordStartIndex = i;
            }
            wordLength += 1;
          }
        } else {
          if (currentWordLength > 0) {
            const word = str.slice(wordStartIndex, wordStartIndex + wordLength);
            this.addWordToMap(word);
            wordLength = 0;
          }
        }
      }
    }
  }

  addWordToMap(word) {
    let char = word[0];
    if (wordCounts.has(word)) {
      wordCounts.set(word, wordCounts.get(word) + 1);
    } else {
      wordCounts.set(word, 1);
    }
  }

  isLetter(char) {
    return (
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(char) !==
      -1
    );
  }
}
