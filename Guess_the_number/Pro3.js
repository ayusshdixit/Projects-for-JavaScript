 let randomNumber = parseInt(Math.random()* 100 + 1);


const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const GuessSlot = document.querySelector('.guesses');
const Remaining = document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');
const Startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let Numguess = 1;

let PlayGame = true;

if (PlayGame){
submit.addEventListener( 'click', function(e){
e.preventDefault()
const guess =  parseInt(userInput.value) 
console.log(guess);
ValidateGuess(guess)
});

}

function ValidateGuess(guess){
    if(isNaN(guess)){
        alert(`Please enter a Valid input`)
    }else if ( guess < 1){
        alert(`please enter a number more than 1 `)
    }else if ( guess > 100){
    alert(`Please enter a number less than 100  `)
    }else {
        prevGuess.push(guess)
        if(Numguess===11){
        displayGuess(guess)
        displayMessage(`Game is Over . RandomNumber was ${randomNumber} `)
        endGame()
        } else {
            displayGuess(guess)
            CheckGuess(guess)
        }
    }
}

function CheckGuess(guess){
  if (guess === randomNumber ){
    displayMessage(`You guessed the correct number `)
    endGame();
} else if ( guess < randomNumber ) {
    displayMessage(`Number is TOO low`)
}else if(guess > randomNumber){
    displayMessage(`Number is TOO high`)
}
}
function displayGuess(guess) {
    userInput.value = '';
    GuessSlot.innerHTML +=  `${guess}, `
    Numguess++
    Remaining.innerHTML = `${11 - Numguess} `
}

function displayMessage(message) {
    loworhi.innerHTML= `<h2>${message}</h2>`
}
function endGame(guess) {
    userInput.value= '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'> Start new game </h2>`
    Startover.appendChild(p)
    PlayGame= false; 
    newGame()
}
function newGame(guess) {
    const newGameButton = document.querySelector('#newGame') 
    newGameButton.addEventListener("click", function (e) {
        randomNumber = parseInt(Math.random()* 100 + 1);
        prevGuess=[];
        Numguess = 1;
        GuessSlot.innerHTML= '' ;
        Remaining.innerHTML=`${11- Numguess} `
        userInput.removeAttribute('disabled')
        Startover.removeChild(p)

        PlayGame= true;
    })
}