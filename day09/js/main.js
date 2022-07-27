// const form1 = document.querySelectorAll('form');

// console.log(form1);


// console.log(form1[1].querySelectorAll('input')[2]);

const forms = document.forms;

// console.log(document.forms)
console.log(forms[1][0])

// console.log(forms[1].favoriteColor);

// console.log(forms.favorites);

console.log(forms.favorites.favoriteColor);

console.log(forms.profile.team)

forms.profile.username.addEventListener('input', function(){
    console.log(this.value);
    document.querySelector('#username').innerText = this.value;
})

forms.profile.team.addEventListener('input', function(){
    document.body.style.backgroundColor = this.value;
});
forms.profile.id.addEventListener('input', function(){
    document.querySelector('#id').innerText = `the id for this user is ${this.value}`;
});

forms.profile.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(this.username.value);
    fetch('https://24a0-2601-205-380-1c10-7999-88d4-13dc-381.ngrok.io', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: this.username.value})
    })
    .then(res => res.text()).then(data => {
        console.log(data);
    });
});

forms.myForm.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(this.question.value);
    fetch('https://24a0-2601-205-380-1c10-7999-88d4-13dc-381.ngrok.io', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({question: this.question.value})
    })
    .then(res => res.text()).then(data => {
        console.log(data);
        
    });
    this.question.value = '';
});

log(new Dog('spike').speak());