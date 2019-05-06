// 0/10
// ten points for:
// pushing regularly (every 30 minutes)
// clean code (indentation)

// 0/7
const todoInput = document.querySelector('#todo-input');
const saveBtn = document.querySelector('#save-btn');
const clearAllBtn = document.querySelector('#clear-all-btn');
const todoList = document.querySelector('#todo-list');
const todoCount = document.querySelector('#todo-count');
const doneList = document.querySelector('#done-list');
const doneCount = document.querySelector('#done-count');

// 0/8
function createNewTodo(text) {
  // return new .box for #todo-list
  // (look at html)
    const newTodo = document.createElement('div');
    newTodo.classList.add('box');
    newTodo.innerHTML = `<p>${text}</p> <a class="done-btn fas fa-check-circle fa-2x"></a>`;
    todoInput.value = '';
    return newTodo;
}

// 0/2
function updateTodoCount() {
  // update #todo-count
  // with number of todo items in #todo-list
    todoCount.textContent = todoList.children.length;
}

// 0/2
function updateDoneCount() {
  // update #done-count
  // with number of done items in #done-list
    doneCount.textContent = doneList.children.length;
}

// 0/2
function updateBothCounts() {
  // update both counts
    updateTodoCount();
    updateDoneCount();
}

// 0/2
function save() {
  // save value of #todo-input
  // and make new todo item
    //hallo test
    const todoText = todoInput.value;
    todoList.appendChild(createNewTodo(todoText));
    updateTodoCount();
}

// 0/4
function clearAll() {
  // empty #todo-list
  // empty #done-list
    todoList.innerHTML = '';
    doneList.innerHTML = '';
    updateBothCounts();
}

// 0/8
function doneBtnClick(todoItem) {
  // move todo-item to #done-list
  // (look at html)
    todoItem.querySelector('.done-btn').remove();
    todoItem.innerHTML += '<a class="remove-btn fas fa-times-circle fa-2x"></a>';
    doneList.appendChild(todoItem);
    updateBothCounts();
}

// 0/12
function boxClick(box) {
  // if box is .active remove active class
  // else add active class
  // only one todo-item can have the class active
    if (todoItem.matches('.active')) {
        todoItem.classList.remove('active');
    } else {
        todoList.querySelectorAll('.box').forEach(function (box) {
            box.classList.remove('active');
        });
        todoItem.classList.add('active');
    }
}

// 0/12
function todoListClick(event) {
  // handle click within #todo-list
    const clickTarget = event.target;
    const box = event.target.closest('.box');
    if (clickTarget.matches('.done-btn')) {
        doneBtnClick(box);
    } else if (clickTarget.matches('.box') || clickTarget.matches('.box p')) {
        boxClick(box);
    }
}

// 0/4
function removeBtnClick(doneItem) {
  // remove doneItem
    doneItem.remove();
    updateDoneCount();
}

//0/6
function doneListClick(event) {
  // handle click within #done-list
    if (event.target.matches('.remove-btn')) {
        const box = event.target.closest('.box');
        removeBtnClick(box);
    }
}

// 0/8

//add eventListeners to
// saveBtn
// clearAllBtn
// todoList
// doneList
saveBtn.addEventListener('click', save);
clearAllBtn.addEventListener('click', clearAll);
todoList.addEventListener('click', todoListClick);
doneList.addEventListener('click', doneListClick);

clearAll();
