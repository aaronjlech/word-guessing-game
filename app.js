
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
var correctCharacters = [];
var guessForm = document.querySelector('#guesser');
var wordDisplay = document.querySelector("#word");
var showErr = document.querySelector('#show-error');
wordDisplay.innerHTML = maskedWord.join('');

// Create a function that accepts a single character argument
var checkForCharacter = function(char) {
   // console.log(chosenWord.indexOf(char), chosenWord);
   counter -= 1;
   //if the character isn't in the word it will return -1
   //if the character is in the word it will return the index [0 - (length -1)]
   let charIndex = chosenWord.indexOf(char);
   if(charIndex !== -1){
      maskedWord[charIndex] = char;
      wordDisplay.innerHTML = maskedWord.join('');

   }


  // The function should check the `chosenWord` for that character
  // The function should return true if the character is in the given word
  // The function should return false if the character is not in the given word
  // The function should only be able to return true or false a certain number of times (the number stored in the `counter` variable)
  // The function should store and console.log every letter that has been passed to this function in the `triedCharacters` array
  // The function should store and console.log every letter in `chosenWord` that has been passed to this function in the `correctCharacters` array
  // If every letter in `chosenWord` word has been passed to this function, console.log "you guessed it"
}
guessForm.addEventListener('submit', function(evt){
   evt.preventDefault();
   showErr.innerHTML = "";
   var inputVal = evt.target.children[0].value;
   if(inputVal.length !== 1 || !isNaN(parseInt(inputVal)) ){
      showErr.innerHTML = "Invalid input!, must be a single LETTER!"
   }else {
      checkForCharacter(inputVal)
      evt.target.children[0].value = '';
   }


})
