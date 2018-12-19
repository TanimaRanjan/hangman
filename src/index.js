const puzzleEl = document.querySelector('#puzzle')
const quessesEl = document.querySelector('#guesses')

let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
})