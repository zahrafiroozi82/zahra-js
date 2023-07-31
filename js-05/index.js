function generateRandomObject() {
  const words = ["apple", "banana", "orange", "grape", "kiwi", "pear"];
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  const randomNumber = Math.floor(Math.random() * 100);
  const randomDate = new Date(Math.floor(Math.random() * new Date().getTime()));
  return {
    number: randomNumber,
    date: randomDate,
    word: randomWord,
  };
}

const randomObject = generateRandomObject();
console.log(randomObject);
