# Projects-for-JavaScript

## project related to dom

## project link
[click here] (https://github.com/ayusshdixit/Projects-for-JavaScript/tree/main/Color-Changer)

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
    