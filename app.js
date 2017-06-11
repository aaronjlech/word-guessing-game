



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
var checkForCharacter = function(character) {




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
   console.log(parseInt(inputVal));
   if(inputVal.length !== 1 || !isNaN(parseInt(inputVal)) ){
      showErr.innerHTML = "Invalid input!, must be a single LETTER!"
   }else {
      
   }


})



// X Marks the Spot - Part 1

// Write a function called returnRandomLetter that will return a random letter of the alphabet lower or uppercase when it is called.

// HINT: If you aren't familiar with character codes check out http://www.asciitable.com/ and notice that the all capital letters are associated with a number between 65 and 90. All lower case letters are associated with a number between 97 and 122.
function returnRandomLetter(){

  return Math.floor(Math.random()*(90-65+1)+65);

}

// X Marks the Spot - Part 2

// Create a global variable called "searchArray" and set it equal to an empty array.

// Create a global variable called "maxX" and set it equal to 10.

// Create a global variable called "maxY" and set it equal to 10.

// Write a function called "generateArray" that will place a two dimensional (an Array of Arrays) and in each cell of the array place a random letter using your returnRandomLetter function.


// X Marks the Spot - Part 3

// Create a global variable called "havePlacedX" and set it equal to false. This variable will track whether or not a capital letter X has been placed in search Array.

// Modify your returnRandomLetter function so that when a capital X is generated havePlacedX is set to true.

// Modify your returnRandomLetter function so that if havePlacedX is true and another capital X is generated again returnRandomLetter returns a different letter insuring ultimately that searchArray


// X Marks the Spot - Part 4

// Write a function called xMarksTheSpot that takes in one parameter of our searchArray variable.
// The function "searches" searchArray for the capital letter X finds its "position" So in this simplified 3 x 3 two dimensional Array the position of X is 1, 1

// ["P", "z", "m"]
// ["l", "X", "k"]
// ["C", "O", "t"]

// xMarksTheSpot should log to the console:

// The character 'X' is located in the array cell ( xPostion , yPosition )

// or if a capital X is not found anywhere in the Array of Arrays

// The character 'X' is not in the array.

// HINT: Make sure you're familiar with the indexOf method in Array variables
