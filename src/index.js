import Hangman from './hangman'
import getPuzzle from './request'

const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
let game1 

window.addEventListener('keypress', (e) => {
  game1.makeGuess(e.key)
  render()
})

const render = () => {
  puzzleEl.innerHTML = ''
  guessEl.textContent = game1.statusMessage 
  game1.puzzle.split('').forEach((letter) => {
    const letterEl = document.createElement('span')
    letterEl.textContent = letter
    puzzleEl.appendChild(letterEl)
  })
}

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game1 = new Hangman(puzzle, 8)
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
