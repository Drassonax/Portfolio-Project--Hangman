let statusEl = document.querySelector('#status')
let puzzleEl = document.querySelector('#puzzle')
let guessesEl = document.querySelector('#guesses')

let game1 = new Hangman('car parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.message

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    if (game1.status === 'Playing hangman') {
        game1.makeGuess(guess)
        render()
    }
})

const render = () => {

    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.message

    game1.puzzle.split('').forEach(letter => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

let startGame = async () => {
    let puzzle = await getPuzzle(Math.ceil(Math.random() * 4))
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()