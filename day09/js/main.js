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

forms.profile.addEventListener('input', function(event){
    event.preventDefault();
    console.log(this.username.value);
});