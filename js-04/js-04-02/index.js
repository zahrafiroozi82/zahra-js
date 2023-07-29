function searchWord(sentence, word) {
  return sentence.includes(word);
}

const sentence = prompt(
  "Please write your sentence so that we can search for the desired word in it."
);
const word = prompt("Please write your desired word");
const isFound = searchWord(sentence, word);
console.log(isFound);
