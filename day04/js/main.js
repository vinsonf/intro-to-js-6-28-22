// document

// get elements
const button = document.querySelector('button'); // get the first button

const buttons = document.querySelectorAll('button'); // get all buttons

// update elements text or html
button.innerText = '<h1>click me</h1>';
buttons[1].innerHTML = '<h1>click me</h1>';
console.log(buttons);

// add or remove classes
button.classList.add('active');
button.classList.remove('active');

// update elements style
button.style.backgroundColor = 'green';
button.style.color = 'white';
button.style.padding = '10px';
button.style.borderRadius = '10px';

// remove elements
button.remove();
buttons[1].remove();


// create elements
const newButton = document.createElement('button');
newButton.innerHTML = '<h1>click me</h1>';
newButton.classList.add('active');
newButton.style.backgroundColor = 'green';
newButton.style.color = 'white';

// append elements / move elements
document.body.append(newButton);

// add event listeners
newButton.addEventListener('click', function() {
        // create elements
    const newButton = document.createElement('button');
    newButton.innerHTML = array[index];
    index += 1;
 

    // control flow
    if (index === array.length) {
        index = 0;
    } else {
        console.log('index: ', index);
    }




    newButton.classList.add('active');
    newButton.style.backgroundColor = 'green';
    newButton.style.color = 'white';

    // append elements / move elements
    document.body.append(newButton);
});

// data
const string = 'string';
const number = 1;
const boolean = true;

const array = [1, 2, 3];
const object = {
    username: 'joe',
};

let index = 0;

if (new Date().getHours() >= 19) {
    console.log('good morning');
    document.body.style.backgroundColor = 'black';
}

console.log(new Date().getHours());