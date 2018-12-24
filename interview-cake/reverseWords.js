function reverseCharacters(message, leftIndex, rightIndex) {
  while (leftIndex < rightIndex) {
    const temp = message[leftIndex];
    message[leftIndex] = message[rightIndex];
    message[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
}

function reverseWords(message) {
  // reverse entire message
  reverseCharacters(message, 0, message.length - 1);

  // keep track of starting index of a word
  let startingIndex = 0;

  for (let i = 0; i <= message.length; i++) {
    if (i === message.length || message[i] === "") {
      reverseCharacters(message, startingIndex, i - 1);
      startingIndex = i + 1;
    }
  }
  return message;
}

let message = ["w", "o", "r", "l", "d", "", "h", "e", "l", "l", "o"];

reverseWords(message);
