// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number
// parseInt(string)
// console.log( prompt('What is the first number?'));

const firstNumber = askUserForValidNumber('What is the first number?');
const secondNumber = askUserForValidNumber('What is the second number?');

alert(Math.max(firstNumber, secondNumber));


function askUserForValidNumber(text) {
    const number = parseInt(prompt(text));
    if (isNaN(number)){
        return askUserForValidNumber(text);
    } else {
        return number;
    }
} 

// const myVariable = 'HELLO';

// function myFunction(username, age) {
//     // const myVariable = 'WORLD';
//     const childVariable = 'CHILD';
//     console.log(myVariable, username, age);
//     console.log('goodbye', username, age);
//     return age / 2;
// }

// myFunction('joe', 30);
// myFunction('moe', 40);
// myFunction('jane', 50);
// myFunction('larry', 60);

// const resultOfMyFunction = myFunction('joe', 30);
// console.log(resultOfMyFunction, 'resultOfMyFunction');
















// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number