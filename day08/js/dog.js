const dog = {
    name: 'Fido',
    description: 'A friendly dog',
    speak: function() {
        alert(`${this.name} says woof!`);
    },
    washDishes: function() {
        alert(`${this.name} washes dishes!`);
    }
}


const button = document.createElement('button');
document.body.appendChild(button);
button.innerText = 'Speak';
button.addEventListener('click', function() {
    dog.speak();
});

const button2 = document.createElement('button');
document.body.appendChild(button2);
button2.innerText = 'Wash dishes';
button2.addEventListener('click', function() {
    dog.washDishes();
});

