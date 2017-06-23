//Hangman game partially by MH. Functions begin:
var splitWord = [];
var guess = "";
var pickWord = function () {
  var wordList = ["hello","vehicle","carpet","wheels","whom","clarity","galvanize",""];
  var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  return randomWord;
  console.log(randomWord);

  // Return a random word
};
var setupAnswerArray = function (word) {
  var splitWord = word.split("");
  console.log(splitWord);
  return splitWord;
  // Return the answer array return word as an array of letters
};
var showPlayerProgress = function (answerArray) {

  var i=0, j=0;
  var result = [];
  while( i < splitWord.length && j < answerArray.length )
  {
    //both arrays must be sorted first
     if(splitWord[i] < answerArray[j] ){
       i++;
     }
     else if(splitWord[i] > answerArray[j] ){
       j++;
     }
     else /* they're equal */
     {
       result.push(splitWord[i]);
       i++;
       j++;
     }
  }
console.log(result);
  return result;

  //return intersection of both arrays
  // Use alert to show the player their progress
};
var getGuess = function () {
  var guess = prompt("Guess a letter:");
  console.log("guess is: " + guess)
  return guess;
  //prompt and return response
  // Use prompt to get a guess
};
var updateGameState = function (guess, word, answerArray) {
  answerArray = answerArray.push(guess);

  var arrayWord = word.split("");
  var counter = 0;
  for(i=0; i < arrayWord.length; i++){
    if((guess)==arrayWord[i]){
      counter +=1;
    }
  }
  return counter;
  // Update answerArray and return a number showing how many
  // times the guess appears in the word so remainingLetters
  // can be updated
};
var showAnswerAndCongratulatePlayer = function (answerArray) {
  alert("Congrats! The word is: " + word + " and you guessed it!")
  // Use alert to show the answer and congratulate the player
};

//functions end

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  var guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}

 showAnswerAndCongratulatePlayer(answerArray);
