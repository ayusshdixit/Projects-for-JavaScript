const guessInput = document.querySelector('#guessInput')
const submitBtn = document.querySelector('#submitBtn')
const previousGuesses = document.querySelector('#previousGuesses')
const guessesLeft = document.querySelector('#guessesLeft')
const message = document.querySelector("#message")


const randomNumber = Math.floor(Math.random() * 100) + 1

const previousGuess = []

let guessCounter = 10

let playGame = true;

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const guess = Number(guessInput.value)

    //Is the Game Running

    if (!playGame) {
        return
    }

    //Validate Input

    if (Number.isNaN(guess) || guess > 100 || guess < 1) {
        message.textContent = "Enter a valid number from 1 to 100";
        return;
    }

  // Play the Game

    if (guess > randomNumber) {
        message.textContent = "The Number is too high , Tumse na Ho payega "
    }
    else if (guess < randomNumber) {
        message.textContent = "The Number is too low, Abe ja na Gandu"
    }
    else if (guess === randomNumber) {
        message.textContent = `congratulations you have won the game the Number was ${randomNumber}`
        playGame = false
    }

    //Displaying Previous And Remaining gussess

    previousGuess.push(guess)
    previousGuesses.textContent = previousGuess.join(", ");
    guessCounter--
    guessesLeft.textContent = ` Remaining Guesses : ${guessCounter}`

    // End the Game 
    if (guessCounter === 0 && guess !== randomNumber) {
        playGame = false
        message.textContent = `Gameover the correct number is ${randomNumber}`
    }



})

