
console.log('wahadsf');


// Here are the 100 most popular words in English, as totally
// stolen from here: https://gist.github.com/gravitymonkey/2406023
var commonWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];

// Create a function that choses a random word from `commonWords` and returns it
var chooseRandomWord = function(array) {
  let word = Math.floor(Math.random() * array.length);
  return array[word];
}

var chosenWord = chooseRandomWord(commonWords).split('');
var maskedWord = chosenWord.map(l =>  '#');
var counter = 10;
var triedCharacters = [];

// *****DOM SELECTORS*****
//guessForm === <form id="guesser"></form>
var guessForm = document.querySelector('#guesser');
//wordDispalay === <span id='word'></span>
var wordDisplay = document.querySelector("#word");
// showErr = <span id="show-error"></span>
var showErr = document.querySelector('#show-error');
var showAmount = document.querySelector('#amount-left');
var showletters = document.querySelector('#guessed');
// ***** END DOM SELECTORS *******

wordDisplay.innerHTML = maskedWord.join('');
var checkForCharacter = function(char) {
   // console.log(chosenWord.indexOf(char), chosenWord);
   console.log(maskedWord.indexOf(char));
   if(triedCharacters.indexOf(char) !== -1){
      console.log('already guessed');
      return;
   }
   counter -= 1;
   //if the character isn't in the word it will return -1
   //if the character is in the word it will return the index [0 - (length -1)]
   let charIndex = chosenWord.indexOf(char);

   triedCharacters.push(char);
   showletters.innerHTML = triedCharacters.join(', ');
   showAmount.innerHTML = counter
   if(charIndex !== -1){
      maskedWord[charIndex] = char;
      wordDisplay.innerHTML = maskedWord.join('');
   }
   if(counter === 0){

   }
}
guessForm.addEventListener('submit', function(evt){
   evt.preventDefault();
   showErr.innerHTML = "";
   var inputVal = evt.target.children[0].value;
   if(inputVal.length !== 1 || !isNaN(parseInt(inputVal)) ){
      showErr.innerHTML = "Invalid input!, must be a single LETTER!";
   }else {
      checkForCharacter(inputVal)
      evt.target.children[0].value = '';
      if(chosenWord.join('') === wordDisplay.innerHTML){
         console.log('you win')
      }
   }
})
