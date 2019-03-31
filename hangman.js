'use strict';

function Hangman(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing';

}

Hangman.prototype.calculateStatus = function() {
    // assume user has solved puzzle
    let isFinished = true;

    // checking guessedLetters array to see if user guessed all letters in word
    for (let letter of this.word) {
        if (this.guessedLetters.includes(letter)) {
            continue;
        } else {
            // change to false if a puzzle letter has not been guessed
            isFinished = false;
            break;
        }
    }
    
    if (this.remainingGuesses === 0) {
        this.status = 'failed';
    } else if (isFinished) {
        this.status = 'finished';
    } else {
        this.status = 'playing';
    }
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
    
    this.calculateStatus();
}

function displayOutput(obj) {
    const puzzle = document.getElementById('puzzle');
    const guesses = document.getElementById('guesses');

    puzzle.textContent = obj.getPuzzle();
    guesses.textContent = `Guesses Remaining: ${obj.remainingGuesses}`;
}
