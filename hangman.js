'use strict';

function Hangman(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];

}


Hangman.prototype.getPuzzle = function(guess) {
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

const game1 = new Hangman('Cat', 2);
