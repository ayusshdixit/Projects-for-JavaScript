const numbers = [1, 2, 3, 4, 5, 7, 6, 8, 9, 10, 11, 12]

const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});

console.log(evenNumbers);

"filter() filters an array and returns a new array containing only the elements that pass the test."