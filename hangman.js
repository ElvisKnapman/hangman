'use strict';

function Hangman(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];

}

Hangman.prototype.getPuzzle = function() {
    let puzzle = '';
    // if current letter is in guessedLetters array, or is a space, reveal in output...
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter;
        // if not, place an asterisk in place of the letter to hide it in output
        } else {
            puzzle += '*';
        }
    });

    return puzzle;
}

Hangman.prototype.makeGuess = function(guess) {
    // convert guess to be case insensitive
    guess = guess.toLowerCase();
    const isUniqueGuess = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    // check if guessed letter is unique, if not, add letter to array
    if (isUniqueGuess) {
        this.guessedLetters.push(guess);
    }

        // if word does not contain the guessed letter, subtract 1 guess
    if(isUniqueGuess && isBadGuess) {
            this.remainingGuesses--;
    } 
}


const game1 = new Hangman('Cat', 2);
console.log(game1.getPuzzle());
console.log(game1.remainingGuesses);

window.addEventListener('keypress', event => {
    const guess = String.fromCharCode(event.charCode);
    game1.makeGuess(guess);
    console.log(game1.getPuzzle());
    console.log(game1.remainingGuesses);
});
