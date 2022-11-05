let input = "";
let inputTxt = document.getElementById("user-input");
let button = document.getElementById("convert");
let outputTxt = document.getElementById("displayText");
let clearInput = document.getElementById("reset");

const pigLatin = () => {
  // Your code here
  let word = inputTxt.value;
  console.log(inputTxt.value);
  console.log("Hi pigLatin");
  word = word.toLowerCase().trim();
  let vowels = ["a", "e", "i", "o", "u"];
  let newWord = "";

  if (vowels.includes(word[0])) {
    outputTxt.innerText = word + "yay";
  } else {
    let arr = word.match(/[aeiou]/g) || 0;
    let vIndex = word.indexOf(arr[0]);
    newWord = word.slice(vIndex) + word.slice(0, vIndex) + "ay";
    // return newWord;
    outputTxt.innerText = newWord;
  }
};

console.log("Hello");

clearInput.addEventListener("click", (event) => {
  inputTxt.value = "";
  outputTxt.innerHTML = "";
  input = "";
  console.log("click");
});

// button.addEventListener('click', (event) => {
//   // let inputWords = pigLatin(input); --> for single word input
//   console.log('Hello.')
//   let phrase = input.split(' ');
//   let pigPhrase = phrase.map(word => pigLatin(word).join(' '))
//   outputTxt.innerText = pigPhrase;
// })
