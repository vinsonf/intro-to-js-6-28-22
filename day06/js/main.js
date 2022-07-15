

function getPokemon(name){
    fetch('https://pokeapi.co/api/v2/pokemon/' + name)
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
        const img = document.createElement('img');
        img.src = data.sprites.front_default;
        document.body.appendChild(img);
        img.width = 300;
        const h1 = document.createElement('h1');
        h1.innerHTML = data.name;
        document.body.appendChild(h1);
        const p = document.createElement('p');
        p.innerHTML = `weight: ${data.weight} <br> height: ${data.height}`;
        document.body.appendChild(p);
        img.addEventListener('click', function(){
            if (img.src === data.sprites.front_default){
            img.src = data.sprites.back_default;
            } else {
                img.src = data.sprites.front_default;
            }
        });
    });
}

getPokemon('pikachu');
getPokemon('bulbasaur');
getPokemon('charmander');
getPokemon('squirtle');

const password = prompt('Enter your password');
let isValid = true;
if (password.length < 5){
    isValid = false;
    alert('Password is invalid - it must be at least 6 characters long');
}
if (password.length > 20){
    isValid = false;
    alert('Password is invalid - it must be less than 21 characters long');
}
const validFirstCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
if (!validFirstCharacters.includes(password[0].toLowerCase())){
    isValid = false;
    alert('Password is invalid - it must start with a letter');
}

if (isValid){
    alert('Password is valid');
}