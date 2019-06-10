class Hangman {
    constructor(word, remainingGuesses) {
        this.originalWord = word
        this.word = word.toLowerCase().split('')
        this.guessed = [] //guessed.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.status = 'Playing'
        
    }
    get puzzle() {
        let puzzle = ''
        this.word.forEach(letter => {
            if(this.guessed.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle +=  '*'
            }
        });
        return puzzle;
    }
    makeGuess(guess)  {
        guess = guess.toLowerCase()
        const isUnique = !this.guessed.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        if(this.status !== 'Playing') {
            return
        }
    
        if(isUnique) {
            this.guessed.push(guess)
        }
        if(isUnique && isBadGuess) {
            this.remainingGuesses--;
        }
        this.getStatus()
    }
    getStatus() {
        let count = 0
        this.word.forEach(letter => {
            if(this.guessed.includes(letter) || letter === ' ') {
                count++
            } 
        });
    
        if(count === this.word.length) {
            this.status = 'Finished'
        }
        if(this.remainingGuesses === 0) {
            this.status = 'Failed'
        }
        console.log(this.status)
    }
    get statusMessage() {
        if(this.status === 'Playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if(this.status === 'Finished') {
            return `Great work! You Guessed the word`
        } else if(this.status === 'Failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        }
        
    }
}

export { Hangman as default }