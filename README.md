# Projects-for-JavaScript

## project related to dom

## projects link
[click here] (https://github.com/ayusshdixit/Projects-for-JavaScript)

# project 1 

# Color-Changer

## solution code 

```JavaScript 
const Buttons= document.querySelectorAll(".button")

const body =document.querySelector('body')  
console.log(body);

Buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click',function(e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id; 
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id; 
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id; 
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id; 
        }
        if (e.target.id === 'purple' )
            body.style.backgroundColor = e.target.id;
    })
})
```
# project 2

## BMI Calculator 

### Solution Code 

``` JavaScript 

const form  = document.querySelector('form')

form.addEventListener('submit' ,function(e) {
e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');


if(height === ' ' || height < 0 || isNaN(height)) {
  results.innerHTML = `Please enter a valid Height ${height}`;
}
else if(weight === ' ' || weight < 0 || isNaN(weight)){
results.innerHTML =  `Please enter a valid weight ${weight}`;
}
else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2);

 let message = ' ';

 if ( bmi < 18.5 ){
  message= `Your BMI is ${bmi} (Underweight)`
 } else if (bmi>= 18.5 && bmi < 25){
   message = ` Your BMI is ${bmi} (Normal)`
 }else if (bmi >= 25 && bmi <= 30 ){
  message = ` Your BMI is ${bmi} (Overweight)`
 }
 else {
   message = `Your BMI is ${bmi} (of Obese)`
 }
 results.innerHTML=` <span>${message}</span>`
  }
});


```
# Project 3 

# Digital clock

## Solution Code 

```JavaScript

const Clock = document.querySelector('#clock')

setInterval(function() {
    let date = new Date();
    Clock.innerHTML= date.toLocaleTimeString()
} ,1000)

```

# Project 4

## Guess-the-number

# Solution code

``` JavaScript

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

```

# Project 5

## Unlimited-colors 

# Solution code 
```
JavaScript 

const randomColor = function () {
const hex = '0123456789ABCDEF';
let color = "#"
 for ( let i = 0 ; i < 6 ; i++){
     color += hex[Math.floor(Math.random()*16)]
 }
 return color
}
let intervalid;

const startChangingColor = function(){
if(!intervalid){
intervalid = setInterval(changebackgroundColor, 1000)
}

function changebackgroundColor() {
document.body.style.backgroundColor = randomColor()
}

}

const stopChangingColor = function(){
clearInterval(intervalid)
intervalid = null ; 
} 

document.querySelector("#start").addEventListener('click',startChangingColor)
   
document.querySelector("#stop").addEventListener('click',stopChangingColor)

```

# project 6

## KeyBoard Events

# Solution code 

``` JavaScript 
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key  === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});

```