document.forms.theme.bgColor.value = '#38bc2f';
let bgColor = sessionStorage.getItem('bgColor');
let textColor = sessionStorage.getItem('textColor');

let todos = localStorage.getItem('todos');


if (todos){
    todos = JSON.parse(todos);
    todos.forEach(todo => {
        createTodo(todo.value, todo.id);
    })
} else {
    todos = [];
}

console.log(typeof todos);

if (bgColor) {
    document.body.style.backgroundColor = bgColor;
    document.forms.theme.bgColor.value = bgColor;
}
if (textColor) {
    document.body.style.color = textColor;
    document.forms.theme.textColor.value = textColor;
}


document.forms.theme.bgColor.addEventListener('change', function (e) {
    console.log(e.target.value, this.value);
    document.body.style.backgroundColor = e.target.value;
    sessionStorage.setItem('bgColor', e.target.value);
})
document.forms.theme.textColor.addEventListener('change', function (e) {
    console.log(e.target.value, this.value);
    document.body.style.color = e.target.value;
    sessionStorage.setItem('textColor', e.target.value);
});

localStorage.removeItem('textColor');

document.forms.todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = document.forms.todoForm.todoInput.value;
  
    const myTodoObject =  createTodo(value);
    todos.push(myTodoObject);
    saveTodo();
    console.log(myTodoObject, todos);
});

function createTodo(value, id) {
    const li = document.createElement('li');
    li.innerHTML = value;
    document.querySelector('ul').appendChild(li);

    if (!id) {
        id = Math.random();
    }
  

    li.addEventListener('dblclick', () => {
        li.remove();
        todos = todos.filter(todos => todos.id !== id);
        saveTodo();
    });

    return {
        value,
        id,
    }
}

function saveTodo(value) {
    
    localStorage.setItem('todos', JSON.stringify(todos));
}


[1, 2, 3, 4, 5, 6, 7, 8, 9, 10][Math.floo(Math.random() * 10)];
