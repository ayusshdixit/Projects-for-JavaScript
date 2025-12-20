# Projects-for-JavaScript

## project related to dom

## projects link
[click here] (https://github.com/ayusshdixit/Projects-for-JavaScript)

# project 1 

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

## Bmi Calculator 

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