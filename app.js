const game1 = new Hangman('Cat', 2);

window.addEventListener('keypress', event => {
    const guess = String.fromCharCode(event.charCode);
    game1.makeGuess(guess);
    displayOutput(game1);
    console.log(game1.status);
});



displayOutput(game1);
