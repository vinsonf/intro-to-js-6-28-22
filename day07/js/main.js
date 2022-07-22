
// fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then(function(response) {
//     return response.json();
// }).then(function(data) {
//     console.log(data);
//     return fetch(data.abilities[0].ability.url)
// }).then(function(response) {
//     console.log(response);
//     return response.json();
// }).then(function(data) {
//     console.log(data)
// });
// console.log(document);
// console.dir(document);

// document object model
// const element ={
//     name: 'element',
//     type: 'div',
//     children: [],
//     classList: ['class1', 'class2'],
//     clientHeight: 100,
//     clientWidth: 100,
//     clientTop: 100,
//     clientLeft: 100,
//     innerText: 'text',
//     innerHTML: '<h1>text</h1>',
//     style: {
//         color: 'red',
//         backgroundColor: 'blue'
//     },
//     addEventListener: function(event, callback) {
//         console.log(event);
//         console.log(callback);
//     },
//     querySelector: function(selector) {
//         console.log(selector);
//         return element;
//     },
//     querySelectorAll: function(selector) {
//         console.log(selector);
//         return [element];
//     }
// }

// const uls = document.querySelectorAll('ul')


// uls[1].querySelectorAll('li').forEach(function(li) {
  
//     li.addEventListener('click', function() {
//         alert('you clicked the correct li')
//         li.style.color = 'red';
//         li.innerText = 10 * 10
//     })
// })

// document.querySelector('h1').style.color = 'green';


// [1,2,3,4,5,6,7,8,9,10].forEach(function(number,i) {
//     // console.log(i);
//     const li = document.createElement('li');
//     li.innerText = number;
//     document.body.appendChild(li);
// });

// for(let x = 0; x <= 10; x++) {
//     // console.log(i);
//     const li = document.createElement('li');
//     li.innerText = x;
//     document.body.appendChild(li);
//     for(let j = 100; j <= 10;) {
//         const li = document.createElement('li');
//         li.innerText = x * j;
//         j = Math.random() * 12;
//         document.body.appendChild(li);
//     }
// }

// let x = 1;
// while(x < 10){


//     x = Math.random() * 12;
//     // console.log(x, 'while');
// }
// console.log('this is the end');
// do {
//     // x = Math.random() * 12;
//     // console.log(x, 'do');
// } while(x < 10);

// // arrays = [1,2,3];

// let myArray = [1,2,3];
// console.log(myArray);

// console.log('.length', myArray.length);
// console.log('myArray[0]', myArray[0]);
// console.log('.reverse', myArray.reverse());

// myArray.push(4)
// console.log('push', myArray);
// myArray.pop();
// console.log('pop', myArray);
// myArray.unshift(0);
// console.log('unshift', myArray);
// myArray.shift();
// console.log('shift', myArray);
// myArray.splice(1,1);
// console.log('splice', myArray);
// myArray.splice(1, 0, 2, 2.5);
// console.log('splice', myArray);
// myArray.splice(myArray.length, 0, 5);
// console.log('splice as push', myArray);
// myArray.splice(myArray.length -1, 1);
// console.log('splice as pop', myArray);
// myArray.splice(0, 0,-1);
// console.log('splice as unshift', myArray);
// myArray.splice(0, 1);
// console.log('splice as shift', myArray);
// console.log('slice', myArray.slice(1,3));
// console.log('slice is non destructive', myArray);
// console.log('map', myArray.map(function(number){
//     return {id: number, value: number * 2};
// }));
// console.log('after map', myArray);
// console.log('filter < 3', myArray.filter(function(number){
//     return number < 3
// }));
// console.log('filter > 2', myArray.filter(function(number){
//     return number > 2
// }));
// console.log('after filter', myArray);

let fizz = 7;
let buzz = 5;
let zero = 1 / 0;
for (let i = 1; i <= 100; i++) {
    if (i % (fizz * buzz) === 0) 
        console.log('fizzbuzz');
        else if (i % fizz === 0)
        console.log('fizz')
        else if (i % buzz=== 0)
        console.log('buzz')
        else 
        console.log(i);
}

let myArray = [1,2,3,4,5,6,7,8,9,10];
myArray[myArray.length - 1]; // last
[1,2,3,4,5,6,7,8,9,10].at(-1); // last

'abc'.at(-1); // last


app.use()