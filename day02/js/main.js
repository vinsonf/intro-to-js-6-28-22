// syntax

day = 2;

Day = 1;
/* multi-line comment
    console.log('does nto run)
    console.log(123, day, Day);
*/
console.log("works again");
document.querySelector("h1").innerHTML = "Hello Earth";
document.querySelector("h1").style.color  = "red";


// data types // all the answers to the questions

// primitive data types
// yes no = true false = boolean
// 1 = number = count
// "hello" = string = title

const no = false;
let count = 0;
const title = "Hello World";

// let bigInt = 5n;
// symbol = unique identifier



// organized data types
// array = [1, 2, 3, 4, 5] | list = [1, 2, 3, 4, 5]

const favoriteMovie = "Back to the Future";
let favoriteMovies = ["Back to the Future", "The Matrix", "The Matrix Reloaded", "The Matrix Revolutions"];

const backToTheFuture = {
    title: "Back to the Future",
    director: "Robert Zemeckis",
    year: "1985",
    cast: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
};

console.log(backToTheFuture.rating);

// operators
// arithmetic operators
// + - * / % = += -= *= /= %=

1 + 1; // 2
1 - 1; // 0
1 * 1; // 1
1 / 1; // 1
1 % 1; // 0 // remainder / modulus


let score = 5;
score + 5; // 10;
score += 5; // 10;


console.log('hello ' + "world");

console.log(5 + 'px');


console.log('5dats' - 3);
console.log("don't");
console.log('He said "hello"');
console.log('don\'t');
const unique1 = Symbol("unique");
const unique2 = Symbol("unique");
console.log(unique2 === unique1, 'unique');


console.log(`

my score is ${score}. my favorite movie is ${favoriteMovie}

my score is ${score}. my favorite movie is ${favoriteMovie}
`);