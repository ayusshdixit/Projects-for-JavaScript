const fruits = ["Mango", "Apple", "Banana"];

let result = fruits.sort();

console.log(result);
// Sort does Sorted the Array alphabetically

// [Apple , Banana  , Mango]

const numbers = [30, 5, 20, 10];

let numResult = numbers.sort()

console.log(numResult);

// [10, 20, 30, 5] This is because soarting convert everything into string by default than campare it
// a-b = positive // Than it will swap a with b
// a-b = negative // they are in correct order no swapping required 

// So in our case for same randomness we provide Math.random - 0.5