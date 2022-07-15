

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