let todos = [];

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todo = {
            id: Date.now(),
            text: todoText
        };

        todos.push(todo);
        displayTodo(todo);
        todoInput.value = '';
    } else {
        alert('Xanalar doldurulmalidir');
    }
});

function displayTodo(todo) {
    const li = document.createElement('li');
    li.dataset.id = todo.id;
    li.innerText = todo.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = '❌';
    deleteBtn.addEventListener('click', function() {
        const todoIndex = todos.findIndex(item => item.id === todo.id);
        todos.splice(todoIndex, 1);
        li.remove();
        alert('Yazilanlar silindi');
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

const clearAllBtn = document.getElementById('clear-all-btn');
if (clearAllBtn) {
    clearAllBtn.addEventListener('click', function() {
        const confirmClear = confirm('Her seyi silmek istiyirsen?');
        if (confirmClear) {
            todoList.innerHTML = '';
            todos = [];
            alert('Her sey silindi!');
        }
    });
} else {
    console.error('clear-all-btn ID');
}
