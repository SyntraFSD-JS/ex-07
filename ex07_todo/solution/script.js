const todoInput = document.querySelector('#todo-input');
const saveBtn = document.querySelector('#save-btn');
const clearAllBtn = document.querySelector('#clear-all-btn');
const todoList = document.querySelector('#todo-list');
const todoCount = document.querySelector('#todo-count');
const doneList = document.querySelector('#done-list');
const doneCount = document.querySelector('#done-count');


function createNewTodo(text) {
    const newTodo = document.createElement('div');
    newTodo.classList.add('box');
    newTodo.innerHTML = `<p>${text}</p> <a class="done-btn fas fa-check-circle fa-2x"></a>`;
    todoInput.value = '';
    return newTodo;
}

function updateTodoCount() {
    todoCount.textContent = todoList.children.length;
}

function updateDoneCount() {
    doneCount.textContent = doneList.children.length;
}

function updateBothCounts() {
    updateTodoCount();
    updateDoneCount();
}

function save() {
    const todoText = todoInput.value;
    todoList.appendChild(createNewTodo(todoText));
    updateTodoCount();
}

function clearAll() {
    todoList.innerHTML = '';
    doneList.innerHTML = '';
    updateBothCounts();
}

function doneBtnClick(todoItem) {
    todoItem.querySelector('.done-btn').remove();
    todoItem.innerHTML += '<a class="remove-btn fas fa-times-circle fa-2x"></a>';
    doneList.appendChild(todoItem);
    updateBothCounts();
}

function boxClick(todoItem) {
    if (todoItem.matches('.active')) {
        todoItem.classList.remove('active');
    } else {
        todoList.querySelectorAll('.box').forEach(function (box) {
            box.classList.remove('active');
        });
        todoItem.classList.add('active');
    }
}

function todoListClick(event) {
    const clickTarget = event.target;
    const box = event.target.closest('.box');
    if (clickTarget.matches('.done-btn')) {
        doneBtnClick(box);
    } else if (clickTarget.matches('.box') || clickTarget.matches('.box p')) {
        boxClick(box);
    }
}

function removeBtnClick(doneItem) {
    doneItem.remove();
    updateDoneCount();
}

function doneListClick(event) {
    if (event.target.matches('.remove-btn')) {
        const box = event.target.closest('.box');
        removeBtnClick(box);
    }
}

saveBtn.addEventListener('click', save);
clearAllBtn.addEventListener('click', clearAll);
todoList.addEventListener('click', todoListClick);
doneList.addEventListener('click', doneListClick);
clearAll();
