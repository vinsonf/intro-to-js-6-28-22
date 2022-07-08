// if 

if ('truthy') {
    console.log('the condition is truthy');
} else {
    console.log('the condition is falsy');
}


// falsy values // no value
false;
0;
'';
// one for each primitive type
null;
undefined;
NaN;

// truthy values // some value
true;
1.1;
'string';
-1;
// every thing thats not falsy

if (false){
    console.log('false will not trigger');
}
if (0){
    console.log('0 will not trigger');
}
if (''){
    console.log('empty string will not trigger');
}
if (null){
    console.log('null will not trigger');
}
if (undefined){
    console.log('undefined will not trigger');
}
if (NaN){
    console.log('NaN will not trigger');
}
if (true){
    console.log('true will trigger');
}
if (1.1){
    console.log('1.1 will trigger');
}
if ('string'){
    console.log('string will trigger');
}
if (-1){
    console.log('-1 will trigger');
}
if ({}){
    console.log('object will trigger');
}
if ([]){
    console.log('array will trigger');
}

const firstName = prompt('first name');
const lastName = prompt('last name');

// if (firstName && lastName) {
//     console.log('firstName and lastname is truthy');
// }
// if (firstName || lastName) {
//     console.log('firstName or lastname is truthy');
// }


if (!firstName || !lastName || '') {
alert('you must enter a first and last name');
}



// comparison operators