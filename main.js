// "use strict";

// // brings in the assert module for unit testing
// const assert = require("assert");
// const { connected } = require("process");
// // brings in the readline module to access the command line
// const readline = require("readline");
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const pigLatin = (word) => {
  // Your code here
  word = word.toLowerCase().trim();
  let vowels = ["a", "e", "i", "o", "u"];
  let newWord = '';
  // const translateBtn = document.getElementById('display-element')
  // let input = document.getElementById('user-input')
  // translateBtn.insertAdjacentElement('afterbegin', `<div id="display-element"></div>
  // `)
  
 if (vowels.includes(word[0])) {
    return word + "yay";
  } else {
    let arr = word.match(/[aeiou]/g) || 0;
    // console.log('New vowels found match:', arr) // --> to find if word match the vowels for complex words
    let vIndex = word.indexOf(arr[0]);
    // console.log('index of vowel match:', vIndex) // --> find the position of the first vowel in the arr of complex words
    newWord = word.slice(vIndex) + word.slice(0, vIndex) + 'ay';
    // console.log('slice:', word.slice(vIndex)) // --> slice the word from position of vIndex
    // console.log('slice @ 0:', word.slice(0, vIndex)) // --> slice starts from begin and end right @ vIndex
    return newWord
  }
}
//  pigLatin('')
// document.getElementById('display-element').onclick = pigLatin()


// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
// const getPrompt = () => {
//   rl.question("word ", (answer) => {
//     console.log(pigLatin(answer));
//     getPrompt();
//   });
// };

// // Unit Tests
// // to use them run the command: npm test main.js
// // to close them ctrl + C
// if (typeof describe === "function") {
//   describe("#pigLatin()", () => {
//     it("should translate a simple word", () => {
//       assert.equal(pigLatin("car"), "arcay");
//       assert.equal(pigLatin("dog"), "ogday");
//     });
//     it("should translate a complex word", () => {
//       assert.equal(pigLatin("create"), "eatecray");
//       assert.equal(pigLatin("valley"), "alleyvay");
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin("egg"), "eggyay");
//       assert.equal(pigLatin("emission"), "emissionyay");
//     });
//     it("should lowercase and trim word before translation", () => {
//       assert.equal(pigLatin("HeLlO "), "ellohay");
//       assert.equal(pigLatin(" RoCkEt"), "ocketray");
//     });
//   });
// } else {
//   getPrompt();
// }

// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
