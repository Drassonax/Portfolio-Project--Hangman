class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.guessedLetters = []
        this.remainingGuesses = remainingGuesses
        this.status = 'Playing hangman'
    }
    checkStatus () {
        let remainingLetters = this.word.filter((letter) => (!this.guessedLetters.includes(letter) && letter !== ' '))
        if (this.remainingGuesses < 1) {
            this.status = 'Failed'
        }
        if (remainingLetters.length === 0) {
            this.status = 'Finished'
        }
    }
    get message () {
        if (this.status === 'Playing hangman') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'Failed') {
            return `Nice try! The solution was: "${this.word.join('')}"`
        } else {
            return 'Great work, you won!'
        }
    }
    get puzzle () {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            } 
        })
        return puzzle
    }
    makeGuess (char) {
        let guess = char.toLowerCase()
        if (!this.guessedLetters.includes(guess)) {
            this.guessedLetters.push(guess)
            if (!this.word.includes(guess)) {
                this.remainingGuesses--
            }
            this.checkStatus()
        }
    }
}