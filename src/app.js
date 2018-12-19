// let game1 = new Hangman('New Jersey', 4)
// let game2 = new Hangman('Super Califragilistict', 9)

let game1

const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
puzzleEl.textContent = game1.puzzle
guessEl.textContent = game1.statusMessage //game1.remainingGuesses

window.addEventListener('keypress', (e) => {
   game1.makeGuess(e.key)
  puzzleEl.textContent = game1.puzzle
  guessEl.textContent = game1.statusMessage 
 
})

const startGame = async() => {
  const puzzle = await getPuzzle('2')
  game1 = new Hangman(puzzle, 5)
}

// document.querySelector(#rese)


// getPuzzle("2", (error, puzzle) => {
//   if(error) {
//     console.log(`Error: ${error}`)
//   } else {
//     console.log(puzzle)
//   }
// })


// getCountry('MX', (error, country) => {
//   if(error) {
//     console.log(`Error: ${error}`)
//   } else {
//     console.log(country)
//   }
// }) 
// const puzzle = getPuzzleSync()
// console.log(puzzle)


